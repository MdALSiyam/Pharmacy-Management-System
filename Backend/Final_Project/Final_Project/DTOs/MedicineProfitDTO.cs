namespace Final_Project.DTOs
{
    public class MedicineProfitDTO
    {
        public int MedicineProfitId { get; set; }
        public int MedicineSaleId { get; set; }
        public DateTime ProfitDate { get; set; }
        public decimal ProfitAmount { get; set; }
        public int QuantityProfit { get; set; }
        public decimal TotalProfit { get; set; }
        public MedicineSaleDTO? MedicineSale { get; set; }
    }

    public class CreateMedicineProfitDTO
    {
        public int MedicineSaleId { get; set; }
        public DateTime ProfitDate { get; set; }
        public decimal ProfitAmount { get; set; }
        public int QuantityProfit { get; set; }
        public decimal TotalProfit { get; set; }
    }

    public class UpdateMedicineProfitDTO
    {
        public int MedicineProfitId { get; set; }
        public int MedicineSaleId { get; set; }
        public DateTime ProfitDate { get; set; }
        public decimal ProfitAmount { get; set; }
        public int QuantityProfit { get; set; }
        public decimal TotalProfit { get; set; }
    }
}
