import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicineProfitDTO, MedicineProfitDTO, UpdateMedicineProfitDTO } from '../dtos/medicine-profit-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineProfitService {
  private apiUrl = 'http://localhost:5190/api/MedicineProfits';  //  Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicineProfitDTO[]> {
    return this.http.get<MedicineProfitDTO[]>(this.apiUrl);
  }

  getById(id: number): Observable<MedicineProfitDTO> {
    return this.http.get<MedicineProfitDTO>(`${this.apiUrl}/${id}`);
  }

  create(medicineProfit: CreateMedicineProfitDTO): Observable<MedicineProfitDTO> {
    return this.http.post<MedicineProfitDTO>(this.apiUrl, medicineProfit);
  }

  update(id: number, medicineProfit: UpdateMedicineProfitDTO): Observable<MedicineProfitDTO> {
    return this.http.put<MedicineProfitDTO>(`${this.apiUrl}/${id}`, medicineProfit);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }
}
