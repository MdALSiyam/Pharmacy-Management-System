import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicinePurchaseDTO, MedicinePurchaseDTO, UpdateMedicinePurchaseDTO } from '../dtos/medicine-purchase-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicinePurchaseService {
  private apiUrl = 'http://localhost:5190/api/MedicinePurchases';  // Later backend deploy korle ekhane live URL dite hobe

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicinePurchaseDTO[]> {
    return of([]);
  }

  getById(id: number): Observable<MedicinePurchaseDTO> {
    return of({} as MedicinePurchaseDTO);
  }

  create(medicinePurchase: CreateMedicinePurchaseDTO): Observable<MedicinePurchaseDTO> {
    return of(medicinePurchase as unknown as MedicinePurchaseDTO);
  }

  update(id: number, medicinePurchase: UpdatePurchaseMedicineDTO): Observable<MedicinePurchaseDTO> {
    return of(medicinePurchase as unknown as MedicinePurchaseDTO);
  }

  delete(id: number): Observable<void> {
    return of(void 0);
  }
}
