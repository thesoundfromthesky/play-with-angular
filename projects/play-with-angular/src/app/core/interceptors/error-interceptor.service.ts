import { Injectable, ErrorHandler } from "@angular/core";
import {
  HTTP_INTERCEPTORS,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError, Subject } from "rxjs";
import { catchError } from "rxjs/operators";

// https://pusher.com/tutorials/error-handling-angular-part-2
@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor() {
    this.handleError = this.handleError.bind(this);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // if (error.error instanceof ErrorEvent) {
    //   console.error(`An error occurred: error.error.message`);
    // } else {
    //   console.error(
    //     `Backend returned code ${error.status}, ` +
    //       `body was: ${error.error}, ` +
    //       `message was: ${error.message}`
    //   );
    // }
    
    return throwError(error);
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptorService,
  multi: true,
};
