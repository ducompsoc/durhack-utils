import { createServer, type IncomingMessage } from "node:http"
import { assert, describe, expect, it } from "vitest"
import { App, type Request as TinyHttpRequest, type Response as TinyHttpResponse } from "@tinyhttp/app";

import { Request } from "../packages/tinyhttp-request/src"
import { Response } from "../packages/tinyhttp-response/src";

describe("tinyhttp-request", () => {
  it("should be accepted by node:http as a constructor for incoming messages", async () => {
    const app = new App<Request, TinyHttpResponse>()

    app.use((req, res) => {
      expect(req).toBeInstanceOf(Request)
      res.status(204).end()
    })

    const server = createServer({
      IncomingMessage: Request,
    })
    server.on('request', app.attach)

    server.listen()
    const address = server.address()
    if (!address) throw new Error("Address cannot be null")
    if (typeof address === "string") throw new Error("Listening on a unix socket is unsupported")

    const response = await fetch(`http://localhost:${address.port}`)
    assert(response.ok)
  })
})
describe("tinyhttp-response", () => {
  it("should be accepted by node:http as a constructor for outgoing responses", async () => {
    const app = new App<TinyHttpRequest, Response>()

    app.use((req, res) => {
      expect(res).toBeInstanceOf(Response)
      res.status(204).end()
    })

    const server = createServer<IncomingMessage, Response>({
      ServerResponse: Response,
    })
    server.on('request', app.attach)

    server.listen()
    const address = server.address()
    if (!address) throw new Error("Address cannot be null")
    if (typeof address === "string") throw new Error("Listening on a unix socket is unsupported")

    const response = await fetch(`http://localhost:${address.port}`)
    assert(response.ok)
  })
})
