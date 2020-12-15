import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqHeader = req.clone({headers: req.headers.set('Authorization', 'NzMwMjE3NDEyMDozMzQ0NTU=')});
    return next.handle(reqHeader);
  }
}