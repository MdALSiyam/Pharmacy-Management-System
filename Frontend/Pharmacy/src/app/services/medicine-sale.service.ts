import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicineSaleDTO, MedicineSaleDTO, UpdateMedicineSaleDTO } from '../dtos/medicine-sale-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineSaleService {
  private apiUrl = 'http://localhost:5190/api/MedicineSales';  // Later backend deploy korle ekhane live URL dite hobe

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicineSaleDTO[]> {
    return of([]);
  }

  getById(id: number): Observable<MedicineSaleDTO> {
    return of({} as MedicineSaleDTO);
  }

  create(medicineSale: CreateMedicineSaleDTO): Observable<MedicineSaleDTO> {
    return of(medicineSale as unknown as MedicineSaleDTO);
  }

  update(id: number, medicineSale: UpdateMedicineSaleDTO): Observable<MedicineSaleDTO> {
    return of(medicineSale as unknown as MedicineSaleDTO);
  }

  delete(id: number): Observable<void> {
    return of(void 0);
  }
}
