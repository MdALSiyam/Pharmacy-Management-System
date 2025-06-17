using System.ComponentModel.DataAnnotations;

namespace Final_Project.DTOs
{
    public class MedicineSaleDTO
    {
        public int MedicineSaleId { get; set; }
        public int MedicineId { get; set; }
        public DateTime SaleDate { get; set; }
        public decimal SalePrice { get; set; }
        public int QuantitySold { get; set; }
        public decimal Discount { get; set; }
        public decimal TotalPrice { get; set; }
        public string CustomerName { get; set; }
        public MedicineDTO? Medicine { get; set; }  // Updated to nullable
    }

    public class CreateMedicineSaleDTO
    {
        public int MedicineId { get; set; }
        public DateTime SaleDate { get; set; }
        public decimal SalePrice { get; set; }
        public int QuantitySold { get; set; }
        public decimal Discount { get; set; }
        public decimal TotalPrice { get; set; }
        public string CustomerName { get; set; }
    }

    public class UpdateMedicineSaleDTO
    {
        public int MedicineSaleId { get; set; }
        public int MedicineId { get; set; }
        public DateTime SaleDate { get; set; }
        public decimal SalePrice { get; set; }
        public int QuantitySold { get; set; }
        public decimal Discount { get; set; }
        public decimal TotalPrice { get; set; }
        public string CustomerName { get; set; }
    }
}
