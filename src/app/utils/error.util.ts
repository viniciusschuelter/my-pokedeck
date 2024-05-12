import { Observable, of } from 'rxjs';

export function errorHandler<T>(message: string, result: T) {
  return (error: any): Observable<any> => {
    console.error(`${message}: ${error.message}`);
    return of(result as T);
  };
}
