import { CallHandler, ExecutionContext, Injectable, NestInterceptor, } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class OutputInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('[Request-Interceptor] Request unmodified');
    
        return next.handle().pipe(
          map((data) => {
            console.log('[Response-Interceptor] Modified ResponseObject');
            return { statusCode: context.switchToHttp().getResponse().statusCode, response: data};
          })
        );
      }
    
}