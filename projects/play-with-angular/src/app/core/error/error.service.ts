import { Injectable, ErrorHandler, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

// https://pusher.com/tutorials/error-handling-angular-part-1
// @Injectable({ providedIn: "root" })
@Injectable()
export class ErrorService implements ErrorHandler {
  public readonly errors$ = new Subject();
  public readonly errorsAsObservable$ = this.errors$.asObservable();

  // https://indepth.dev/how-to-avoid-angular-injectable-instances-duplication/
  constructor(@Optional() @SkipSelf() parent?: ErrorService) {
    if (parent) {
      throw Error(
        `[ErrorService]: trying to create multiple instances,
        but this service should be a singleton.`
      );
    }
  }

  handleError(error: Error): void {
    if (!error.name) {
      return;
    }
    const lookupTable: { [key: string]: () => void } = {
      Error: caseError,
      default: caseDefault,
    };
    let errorName = error.name;

    function caseError() {
      error = JSON.parse(error.message);
      errorName = (error as any).error.name;
    }

    function caseDefault() {}

    (error.name in lookupTable
      ? lookupTable[error.name]
      : lookupTable.default)();

    this.errors$.next(error);

    console.error(errorName, error);
  }
}
