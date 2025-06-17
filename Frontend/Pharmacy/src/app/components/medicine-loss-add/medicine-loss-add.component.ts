import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicineLossService } from '../../services/medicine-loss.service';
import { Router, RouterLink } from '@angular/router';
import { CreateMedicineLossDTO } from '../../dtos/medicine-loss-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicine-loss-add',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './medicine-loss-add.component.html',
  styleUrl: './medicine-loss-add.component.css'
})
export class MedicineLossAddComponent implements OnInit {
  addForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private medicineLossService: MedicineLossService,
    private router: Router
  ) {
    this.addForm = this.fb.group({
      medicinePurchaseId: ['', Validators.required],
      lossDate: ['', Validators.required],
      quantityLoss: ['', [Validators.required, Validators.min(1)]],
      lossAmount: ['', [Validators.required, Validators.min(0)]],
      totalLoss: ['', [Validators.required, Validators.min(0)]],
      lossReason: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.addForm.valid) {
      this.loading = true;
      const newLoss: CreateMedicineLossDTO = this.addForm.value;
      this.medicineLossService.create(newLoss).subscribe({
        next: () => {
          this.router.navigate(['/medicine-losses']); // Navigate back to the list on success
        },
        error: (error) => {
          this.error = 'Error adding medicine loss.';
          console.error('Error adding medicine loss:', error);
          this.loading = false;
        }
      });
    } else {
      this.error = 'Please fill out all required fields correctly.';
    }
  }
}
