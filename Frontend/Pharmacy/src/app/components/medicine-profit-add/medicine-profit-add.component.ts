import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicineProfitService } from '../../services/medicine-profit.service';
import { Router, RouterLink } from '@angular/router';
import { CreateMedicineProfitDTO } from '../../dtos/medicine-profit-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicine-profit-add',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './medicine-profit-add.component.html',
  styleUrl: './medicine-profit-add.component.css'
})
export class MedicineProfitAddComponent implements OnInit {
  addForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private medicineProfitService: MedicineProfitService,
    private router: Router
  ) {
    this.addForm = this.fb.group({
      medicineSaleId: ['', Validators.required],
      profitDate: ['', Validators.required],
      profitAmount: ['', [Validators.required, Validators.min(0)]],
      quantityProfit: ['', [Validators.required, Validators.min(1)]],
      totalProfit: [{ value: '', disabled: true }, [Validators.required, Validators.min(0)]] // Disabled and still validated
    });

    // Subscribe to changes in profitAmount and quantityProfit to update totalProfit
    this.addForm.get('profitAmount')?.valueChanges.subscribe(() => this.calculateTotalProfit());
    this.addForm.get('quantityProfit')?.valueChanges.subscribe(() => this.calculateTotalProfit());
  }

  ngOnInit(): void {
  }

  calculateTotalProfit(): void {
    const profitAmount = this.addForm.get('profitAmount')?.value;
    const quantityProfit = this.addForm.get('quantityProfit')?.value;
    if (profitAmount !== null && quantityProfit !== null) {
      this.addForm.patchValue({ totalProfit: profitAmount * quantityProfit });
    } else {
      this.addForm.patchValue({ totalProfit: '' }); // Clear total profit if either field is empty
    }
  }

  onSubmit(): void {
    if (this.addForm.valid) {
      this.loading = true;
      const newProfit: CreateMedicineProfitDTO = this.addForm.getRawValue(); // Get even disabled values
      this.medicineProfitService.create(newProfit).subscribe({
        next: () => {
          this.router.navigate(['/medicine-profits']); // Navigate back to the list on success
        },
        error: (error) => {
          this.error = 'Error adding medicine profit.';
          console.error('Error adding medicine profit:', error);
          this.loading = false;
        }
      });
    } else {
      this.error = 'Please fill out all required fields correctly.';
    }
  }
 }
