import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export abstract class BaseCrudService<T> {
  protected baseUrl = environment.apiUrl;

  constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${this.endpoint}`);
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${this.endpoint}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${this.endpoint}`, item);
  }

  update(id: string, item: Partial<T>): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${this.endpoint}/${id}`, item);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${this.endpoint}/${id}`);
  }
}