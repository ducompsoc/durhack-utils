import { IncomingMessage } from "node:http"
import type { Request as TinyHttpRequest, Connection, URLParams, Middleware, Protocol, App } from "@tinyhttp/app"
import { ParsedUrlQuery } from "node:querystring";
import { TLSSocket} from "node:tls";
import { Socket } from "node:net";

type AcceptsReturns = string | boolean | string[];

export class Request extends IncomingMessage implements TinyHttpRequest {
  // members attached by tinyhttp
  declare originalUrl: string;
  declare path: string;
  declare url: string;
  declare query: ParsedUrlQuery;
  declare params: URLParams;
  declare connection: Connection;
  declare socket: TLSSocket | Socket;
  declare route?: Middleware;
  declare protocol: Protocol;
  declare secure: boolean;
  declare xhr: boolean;
  declare hostname?: string;
  declare port?: number;
  declare ip?: string;
  declare ips?: string[];
  declare subdomains?: string[];
  declare get: (header: string) => string | string[] | undefined;
  declare range: (size: number, options?: Parameters<TinyHttpRequest["range"]>[1]) => ReturnType<TinyHttpRequest["range"]>;
  declare accepts: (...types: string[]) => AcceptsReturns;
  declare acceptsEncodings: (...encodings: string[]) => AcceptsReturns;
  declare acceptsCharsets: (...charsets: string[]) => AcceptsReturns;
  declare acceptsLanguages: (...languages: string[]) => AcceptsReturns;
  declare is: (...types: string[]) => boolean;
  declare cookies?: any;
  declare signedCookies?: any;
  declare secret?: string | string[];
  declare fresh?: boolean;
  declare stale?: boolean;
  declare body?: any;
  declare app?: App;
  
  // own members 
}