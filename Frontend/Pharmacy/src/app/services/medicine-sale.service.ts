import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicineSaleDTO, MedicineSaleDTO, UpdateMedicineSaleDTO } from '../dtos/medicine-sale-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineSaleService {
  private apiUrl = 'http://localhost:5190/api/MedicineSales';  //  Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicineSaleDTO[]> {
    return this.http.get<MedicineSaleDTO[]>(this.apiUrl);
  }

  getById(id: number): Observable<MedicineSaleDTO> {
    return this.http.get<MedicineSaleDTO>(`${this.apiUrl}/${id}`);
  }

  create(medicineSale: CreateMedicineSaleDTO): Observable<MedicineSaleDTO> {
    return this.http.post<MedicineSaleDTO>(this.apiUrl, medicineSale);
  }

  update(id: number, medicineSale: UpdateMedicineSaleDTO): Observable<MedicineSaleDTO> {
    return this.http.put<MedicineSaleDTO>(`${this.apiUrl}/${id}`, medicineSale);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }
}
