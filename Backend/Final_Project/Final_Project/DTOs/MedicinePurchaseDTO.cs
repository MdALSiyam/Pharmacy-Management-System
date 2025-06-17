using System.ComponentModel.DataAnnotations;

namespace Final_Project.DTOs
{
    public class MedicinePurchaseDTO
    {
        public int MedicinePurchaseId { get; set; }
        public int MedicineId { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal PurchasePrice { get; set; }
        public int QuantityPurchased { get; set; }
        public decimal VAT { get; set; }
        public decimal TotalPrice { get; set; }
        public string Supplier { get; set; }
        public MedicineDTO? Medicine { get; set; } // Updated to nullable
    }

    public class CreateMedicinePurchaseDTO
    {
        public int MedicineId { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal PurchasePrice { get; set; }
        public int QuantityPurchased { get; set; }
        public decimal VAT { get; set; }
        public decimal TotalPrice { get; set; }
        public string Supplier { get; set; }
    }

    public class UpdateMedicinePurchaseDTO
    {
        public int MedicinePurchaseId { get; set; }
        public int MedicineId { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal PurchasePrice { get; set; }
        public int QuantityPurchased { get; set; }
        public decimal VAT { get; set; }
        public decimal TotalPrice { get; set; }
        public string Supplier { get; set; }
    }
}
