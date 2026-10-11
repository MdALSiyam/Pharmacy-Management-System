import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicineProfitDTO, MedicineProfitDTO, UpdateMedicineProfitDTO } from '../dtos/medicine-profit-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineProfitService {
  private apiUrl = 'http://localhost:5190/api/MedicineProfits';  // Later backend deploy korle ekhane live URL dite hobe

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicineProfitDTO[]> {
    return of([]);
  }

  getById(id: number): Observable<MedicineProfitDTO> {
    return of({} as MedicineProfitDTO);
  }

  create(medicineProfit: CreateMedicineProfitDTO): Observable<MedicineProfitDTO> {
    return of(medicineProfit as unknown as MedicineProfitDTO);
  }

  update(id: number, medicineProfit: UpdateMedicineProfitDTO): Observable<MedicineProfitDTO> {
    return of(medicineProfit as unknown as MedicineProfitDTO);
  }

  delete(id: number): Observable<void> {
    return of(void 0);
  }
}
