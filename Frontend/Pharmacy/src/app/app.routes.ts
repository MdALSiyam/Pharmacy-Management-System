import { Routes } from '@angular/router';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';
import { MedicineDetailComponent } from './components/medicine-detail/medicine-detail.component';
import { MedicineAddComponent } from './components/medicine-add/medicine-add.component';
import { MedicineEditComponent } from './components/medicine-edit/medicine-edit.component';
import { MedicinePurchaseListComponent } from './components/medicine-purchase-list/medicine-purchase-list.component';
import { MedicinePurchaseDetailComponent } from './components/medicine-purchase-detail/medicine-purchase-detail.component';
import { MedicinePurchaseAddComponent } from './components/medicine-purchase-add/medicine-purchase-add.component';
import { MedicinePurchaseEditComponent } from './components/medicine-purchase-edit/medicine-purchase-edit.component';
import { MedicineSaleListComponent } from './components/medicine-sale-list/medicine-sale-list.component';
import { MedicineSaleDetailComponent } from './components/medicine-sale-detail/medicine-sale-detail.component';
import { MedicineSaleAddComponent } from './components/medicine-sale-add/medicine-sale-add.component';
import { MedicineSaleEditComponent } from './components/medicine-sale-edit/medicine-sale-edit.component';
import { MedicineProfitListComponent } from './components/medicine-profit-list/medicine-profit-list.component';
import { MedicineProfitDetailComponent } from './components/medicine-profit-detail/medicine-profit-detail.component';
import { MedicineProfitAddComponent } from './components/medicine-profit-add/medicine-profit-add.component';
import { MedicineProfitEditComponent } from './components/medicine-profit-edit/medicine-profit-edit.component';
import { MedicineLossListComponent } from './components/medicine-loss-list/medicine-loss-list.component';
import { MedicineLossDetailComponent } from './components/medicine-loss-detail/medicine-loss-detail.component';
import { MedicineLossAddComponent } from './components/medicine-loss-add/medicine-loss-add.component';
import { MedicineLossEditComponent } from './components/medicine-loss-edit/medicine-loss-edit.component';
import { HomeComponent } from './components/home/home.component'; // Import HomeComponent

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // New route for the Home page

  { path: 'medicines', component: MedicineListComponent },
  { path: 'medicines/detail/:id', component: MedicineDetailComponent },
  { path: 'medicines/add', component: MedicineAddComponent },
  { path: 'medicines/edit/:id', component: MedicineEditComponent },

  { path: 'medicine-purchases', component: MedicinePurchaseListComponent },
  { path: 'medicine-purchases/detail/:id', component: MedicinePurchaseDetailComponent },
  { path: 'medicine-purchases/add', component: MedicinePurchaseAddComponent },
  { path: 'medicine-purchases/edit/:id', component: MedicinePurchaseEditComponent },

  { path: 'medicine-sales', component: MedicineSaleListComponent },
  { path: 'medicine-sales/detail/:id', component: MedicineSaleDetailComponent },
  { path: 'medicine-sales/add', component: MedicineSaleAddComponent },
  { path: 'medicine-sales/edit/:id', component: MedicineSaleEditComponent },

  { path: 'medicine-profits', component: MedicineProfitListComponent },
  { path: 'medicine-profits/detail/:id', component: MedicineProfitDetailComponent },
  { path: 'medicine-profits/add', component: MedicineProfitAddComponent },
  { path: 'medicine-profits/edit/:id', component: MedicineProfitEditComponent },

  { path: 'medicine-losses', component: MedicineLossListComponent },
  { path: 'medicine-losses/detail/:id', component: MedicineLossDetailComponent },
  { path: 'medicine-losses/add', component: MedicineLossAddComponent },
  { path: 'medicine-losses/edit/:id', component: MedicineLossEditComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to /home
  { path: '**', redirectTo: '/home' }, // Wildcard route for unknown paths to /home
];