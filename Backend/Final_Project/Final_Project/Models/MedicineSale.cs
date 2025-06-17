namespace Final_Project.Models
{

    public class MedicineSale
    {
        public int MedicineSaleId { get; set; }
        public int MedicineId { get; set; }
        public DateTime SaleDate { get; set; }
        public decimal SalePrice { get; set; }
        public int QuantitySold { get; set; }
        public decimal Discount { get; set; }
        public decimal TotalPrice { get; set; }
        public string CustomerName { get; set; }

        public virtual Medicine? Medicine { get; set; }
        public virtual ICollection<MedicineProfit>? MedicineProfits { get; set; } = new List<MedicineProfit>();
    }
}
