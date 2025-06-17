import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicineDTO, MedicineDTO, UpdateMedicineDTO } from '../dtos/medicine-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiUrl = 'http://localhost:5190/api/Medicines';  //  Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicineDTO[]> {
    return this.http.get<MedicineDTO[]>(this.apiUrl);
  }

  getById(id: number): Observable<MedicineDTO> {
    return this.http.get<MedicineDTO>(`${this.apiUrl}/${id}`);
  }

  create(medicine: CreateMedicineDTO): Observable<MedicineDTO> {
    return this.http.post<MedicineDTO>(this.apiUrl, medicine);
  }

  update(id: number, medicine: UpdateMedicineDTO): Observable<MedicineDTO> {
    return this.http.put<MedicineDTO>(`${this.apiUrl}/${id}`, medicine);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }
}
