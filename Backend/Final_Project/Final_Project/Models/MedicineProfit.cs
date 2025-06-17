namespace Final_Project.Models
{
    public class MedicineProfit
    {
        public int MedicineProfitId { get; set; }
        public int MedicineSaleId { get; set; }
        public DateTime ProfitDate { get; set; }
        public decimal ProfitAmount { get; set; }
        public int QuantityProfit { get; set; }
        public decimal TotalProfit { get; set; }

        public virtual MedicineSale? MedicineSale { get; set; }
    }
}
