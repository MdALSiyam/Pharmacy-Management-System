import { MedicinePurchaseDTO } from "./medicine-purchase-dto";

export interface MedicineLossDTO {
  medicineLossId: number; // Updated
  medicinePurchaseId: number; // Updated
  lossDate: Date;
  quantityLoss: number;
  lossAmount: number;
  totalLoss: number;
  lossReason: string;
  medicinePurchase?: MedicinePurchaseDTO;
}

export interface CreateMedicineLossDTO {
  medicinePurchaseId: number; // Updated
  lossDate: Date;
  quantityLoss: number;
  lossAmount: number;
  totalLoss: number;
  lossReason: string;
}

export interface UpdateMedicineLossDTO {
  medicineLossId: number; // Updated
  medicinePurchaseId: number; // Updated
  lossDate: Date;
  quantityLoss: number;
  lossAmount: number;
  totalLoss: number;
  lossReason: string;
}