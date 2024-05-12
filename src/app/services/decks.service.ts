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

  getAllPaginated(): Observable<ISet[]> {
    return this.http.get<IResponse<ISet>>(this.url)
      .pipe(
        map(response => response.data),
        catchError(
          errorHandler('Error loading decks data', []),
        ),
      );
  }
}
