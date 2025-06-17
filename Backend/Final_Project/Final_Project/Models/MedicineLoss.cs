namespace Final_Project.Models
{


    public class MedicineLoss
    {
        public int MedicineLossId { get; set; }
        public int MedicinePurchaseId { get; set; }
        public DateTime LossDate { get; set; }
        public int QuantityLoss { get; set; }
        public decimal LossAmount { get; set; }
        public decimal TotalLoss { get; set; }
        public string LossReason { get; set; }

        public virtual MedicinePurchase? MedicinePurchase { get; set; }
    }
}
