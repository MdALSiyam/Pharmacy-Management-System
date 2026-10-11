import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicineLossDTO, MedicineLossDTO, UpdateMedicineLossDTO } from '../dtos/medicine-loss-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineLossService {
  private apiUrl = 'http://localhost:5190/api/MedicineLosses';  // Later backend deploy korle ekhane live URL dite hobe

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicineLossDTO[]> {
    return of([]);
  }

  getById(id: number): Observable<MedicineLossDTO> {
    return of({} as MedicineLossDTO);
  }

  create(medicineLoss: CreateMedicineLossDTO): Observable<MedicineLossDTO> {
    return of(medicineLoss as unknown as MedicineLossDTO);
  }

  update(id: number, medicineLoss: UpdateMedicineLossDTO): Observable<MedicineLossDTO> {
    return of(medicineLoss as unknown as MedicineLossDTO);
  }

  delete(id: number): Observable<void> {
    return of(void 0);
  }
}
