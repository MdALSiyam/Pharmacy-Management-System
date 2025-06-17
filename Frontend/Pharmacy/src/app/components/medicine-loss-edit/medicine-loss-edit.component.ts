import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicineLossService } from '../../services/medicine-loss.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UpdateMedicineLossDTO } from '../../dtos/medicine-loss-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicine-loss-edit',
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './medicine-loss-edit.component.html',
  styleUrl: './medicine-loss-edit.component.css'
})
export class MedicineLossEditComponent implements OnInit {
  editForm: FormGroup;
  loading = true;
  error = '';
  medicineLossId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private medicineLossService: MedicineLossService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      medicinePurchaseId: ['', Validators.required],
      lossDate: ['', Validators.required],
      quantityLoss: ['', [Validators.required, Validators.min(1)]],
      lossAmount: ['', [Validators.required, Validators.min(0)]],
      totalLoss: ['', [Validators.required, Validators.min(0)]],
      lossReason: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.medicineLossId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.medicineLossId) {
      this.loadMedicineLoss(this.medicineLossId);
    } else {
      this.error = 'Invalid medicine loss ID.';
      this.loading = false;
    }
  }

  loadMedicineLoss(id: number): void {
    this.loading = true;
    this.medicineLossService.getById(id).subscribe({
      next: (data) => {
        this.editForm.patchValue({
          medicinePurchaseId: data.medicinePurchaseId,
          lossDate: new Date(data.lossDate).toISOString().split('T')[0], // Format date for input
          quantityLoss: data.quantityLoss,
          lossAmount: data.lossAmount,
          totalLoss: data.totalLoss,
          lossReason: data.lossReason
        });
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error loading medicine loss for editing.';
        console.error('Error loading medicine loss:', error);
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.editForm.valid && this.medicineLossId) {
      this.loading = true;
      const updatedLoss: UpdateMedicineLossDTO = this.editForm.value;
      this.medicineLossService.update(this.medicineLossId, updatedLoss).subscribe({
        next: () => {
          this.router.navigate(['/medicine-losses']); // Navigate back to the list on success
        },
        error: (error) => {
          this.error = 'Error updating medicine loss.';
          console.error('Error updating medicine loss:', error);
          this.loading = false;
        }
      });
    } else {
      this.error = 'Please ensure all fields are valid.';
    }
  }
}
