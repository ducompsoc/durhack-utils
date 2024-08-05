import { ServerResponse } from "http"
import type { SerializeOptions } from '@tinyhttp/cookie';
import type { DownloadOptions, FormatProps, ReadStreamOptions } from '@tinyhttp/res';
import type { TemplateEngine, TemplateEngineOptions, Response as TinyHttpResponse, App } from "@tinyhttp/app"

export class Response<B = unknown> extends ServerResponse implements TinyHttpResponse<B> {
  // members attached by tinyhttp
  declare header: (field: string | Record<string, unknown>, val?: string | any[]) => this
  declare set: (field: string | Record<string, unknown>, val?: string | any[]) => this
  declare get: (field: string) => string | number | string[];
  declare send: (body: B) => this
  declare sendFile: (path: string, options?: ReadStreamOptions, cb?: (err?: unknown) => void) => this
  declare json: (body: B) => this
  declare status: (status: number) => this
  declare sendStatus: (statusCode: number) => this
  declare cookie: (name: string, value: string | Record<string, unknown>, options?: SerializeOptions & Partial<{
      signed: boolean;
  }>) => this
  declare clearCookie: (name: string, options?: SerializeOptions) => this
  declare location: (url: string) => this
  declare links: (links: {
      [key: string]: string;
  }) => this
  declare render: <O extends TemplateEngineOptions = TemplateEngineOptions>(file: string, data?: Record<string, any>, options?: Parameters<TemplateEngine<O>>[2]) => this
  declare vary: (field: string) => this
  declare format: (obj: FormatProps) => this
  declare redirect: (url: string, status?: number) => this
  declare type: (type: string) => this
  declare download: (path: string, filename: string, options?: DownloadOptions, cb?: (err?: unknown) => void) => this
  declare attachment: (filename?: string) => this
  declare app?: App;
  declare locals: Record<string, any>;
  /**
   * Send JSON response with JSONP callback support.
   *
   * To enable this method, install the `@tinyhttp/jsonp` package and attach the method to `res.jsonp` property.
   *
   * @param obj Response object
   */
  declare jsonp: (obj: any) => this
  declare append: (field: string, value: any) => this
  
  // own members 
}
