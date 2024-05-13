import { environment } from '../../environments/environment';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { errorHandler } from '../utils/error.util';
import { ISet } from '../interfaces/decks.interface';
import { IResponse } from '../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class DecksService {
  private readonly url = `${environment.baseUrl}/sets?pageSize=30`;
  private readonly http = inject(HttpClient);

  getAllPaginated(page: number, searchTerm: string): Observable<ISet[]> {
    let queryParams = ''
    page && (queryParams += `&page=${page}`)
    searchTerm && (queryParams += `&q=name:${searchTerm}*`)
    return this.http.get<IResponse<ISet>>(`${this.url}${queryParams}`)
      .pipe(
        map(response => response.data),
        catchError(
          errorHandler('Error loading decks data', []),
        ),
      );
  }
}
