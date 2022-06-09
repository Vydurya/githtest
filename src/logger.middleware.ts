import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Incoming-middleware] Request to ${req.route.path}`);
    console.log(`[Incoming-middleware] User-Agent : `,req.headers['user-agent']);
    console.log('[Outgoing-middleware] Data inserted :', res.req.body,'\n');
    next();
  }
}
