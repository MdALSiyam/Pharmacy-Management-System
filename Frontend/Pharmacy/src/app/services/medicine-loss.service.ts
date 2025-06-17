import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMedicineLossDTO, MedicineLossDTO, UpdateMedicineLossDTO } from '../dtos/medicine-loss-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineLossService {
  private apiUrl = 'http://localhost:5190/api/MedicineLosses';  //  Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicineLossDTO[]> {
    return this.http.get<MedicineLossDTO[]>(this.apiUrl);
  }

  getById(id: number): Observable<MedicineLossDTO> {
    return this.http.get<MedicineLossDTO>(`${this.apiUrl}/${id}`);
  }

  create(medicineLoss: CreateMedicineLossDTO): Observable<MedicineLossDTO> {
    return this.http.post<MedicineLossDTO>(this.apiUrl, medicineLoss);
  }

  update(id: number, medicineLoss: UpdateMedicineLossDTO): Observable<MedicineLossDTO> {
    return this.http.put<MedicineLossDTO>(`${this.apiUrl}/${id}`, medicineLoss);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }
}