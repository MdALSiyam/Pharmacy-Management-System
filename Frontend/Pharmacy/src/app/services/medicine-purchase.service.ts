import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicinePurchaseDTO, MedicinePurchaseDTO, UpdateMedicinePurchaseDTO } from '../dtos/medicine-purchase-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicinePurchaseService {
  private apiUrl = 'http://localhost:5190/api/MedicinePurchases';  //  Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicinePurchaseDTO[]> {
    return this.http.get<MedicinePurchaseDTO[]>(this.apiUrl);
  }

  getById(id: number): Observable<MedicinePurchaseDTO> {
    return this.http.get<MedicinePurchaseDTO>(`${this.apiUrl}/${id}`);
  }

  create(medicinePurchase: CreateMedicinePurchaseDTO): Observable<MedicinePurchaseDTO> {
    return this.http.post<MedicinePurchaseDTO>(this.apiUrl, medicinePurchase);
  }

  update(id: number, medicinePurchase: UpdateMedicinePurchaseDTO): Observable<MedicinePurchaseDTO> {
    return this.http.put<MedicinePurchaseDTO>(`${this.apiUrl}/${id}`, medicinePurchase);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }
}
