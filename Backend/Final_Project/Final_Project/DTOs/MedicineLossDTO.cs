namespace Final_Project.DTOs
{
    public class MedicineLossDTO
    {
        public int MedicineLossId { get; set; }
        public int MedicinePurchaseId { get; set; }
        public DateTime LossDate { get; set; }
        public int QuantityLoss { get; set; }
        public decimal LossAmount { get; set; }
        public decimal TotalLoss { get; set; }
        public string LossReason { get; set; }
        public MedicinePurchaseDTO? MedicinePurchase { get; set; }
    }

    public class CreateMedicineLossDTO
    {
        public int MedicinePurchaseId { get; set; }
        public DateTime LossDate { get; set; }
        public int QuantityLoss { get; set; }
        public decimal LossAmount { get; set; }
        public decimal TotalLoss { get; set; }
        public string LossReason { get; set; }
    }

    public class UpdateMedicineLossDTO
    {
        public int MedicineLossId { get; set; }
        public int MedicinePurchaseId { get; set; }
        public DateTime LossDate { get; set; }
        public int QuantityLoss { get; set; }
        public decimal LossAmount { get; set; }
        public decimal TotalLoss { get; set; }
        public string LossReason { get; set; }
    }
}
