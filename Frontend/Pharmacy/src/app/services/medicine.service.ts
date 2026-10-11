import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicineDTO, MedicineDTO, UpdateMedicineDTO } from '../dtos/medicine-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiUrl = 'http://localhost:5190/api/Medicines';  // Later backend deploy korle ekhane live URL dite hobe

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicineDTO[]> {
    // Temporary: Real API call bad diye faka array return korbe
    return of([]);
  }

  getById(id: number): Observable<MedicineDTO> {
    // Temporary: Faka object return korbe
    return of({} as MedicineDTO);
  }

  create(medicine: CreateMedicineDTO): Observable<MedicineDTO> {
    // Temporary: Input data-i back korbe jeno UI te error na ashe
    return of(medicine as unknown as MedicineDTO);
  }

  update(id: number, medicine: UpdateMedicineDTO): Observable<MedicineDTO> {
    // Temporary
    return of(medicine as unknown as MedicineDTO);
  }

  delete(id: number): Observable<void> {
    // Temporary
    return of(void 0);
  }
}
