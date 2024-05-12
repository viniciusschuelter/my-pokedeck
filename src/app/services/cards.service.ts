import { environment } from '../../environments/environment';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { ICard } from '../interfaces/cards.interface';
import { errorHandler } from '../utils/error.util';
import { IResponse } from '../interfaces/response.interface';


@Injectable({ providedIn: 'root' })
export class CardsService {
  private readonly url = `${environment.baseUrl}/cards?pageSize=30`;
  private readonly http = inject(HttpClient);

  getAllPaginated(page: number, searchTerm: string): Observable<ICard[]> {
    return this.http.get<IResponse<ICard>>(`${this.url}&page=${page}`)
      .pipe(
        map(response => response.data),
        catchError(
          errorHandler('Error loading cards data', []),
        ),
      );
  }
}
