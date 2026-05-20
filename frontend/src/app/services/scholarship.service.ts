import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {
  private apiUrl = '/api/scholarships';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token');
    const headers: any = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return { headers };
  }

  getRecommendedScholarships(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recommend`, this.getHeaders());
  }

  getAllScholarships(filters?: any): Observable<any[]> {
    let params = new HttpParams();

    if (filters) {
      if (filters.search) params = params.set('search', filters.search);
      if (filters.stream) params = params.set('stream', filters.stream);
      if (filters.caste) params = params.set('caste', filters.caste);
      if (filters.state) params = params.set('state', filters.state);
    }

    return this.http.get<any[]>(this.apiUrl, { params });
  }

  getScholarshipById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/id/${id}`, this.getHeaders());
  }
}
