namespace Final_Project.Models
{
    public class MedicinePurchase
    {
        public int MedicinePurchaseId { get; set; }
        public int MedicineId { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal PurchasePrice { get; set; }
        public int QuantityPurchased { get; set; }
        public decimal VAT { get; set; }
        public decimal TotalPrice { get; set; }
        public string Supplier { get; set; }

        public virtual Medicine? Medicine { get; set; }
        public virtual ICollection<MedicineLoss>? MedicineLosses { get; set; } = new List<MedicineLoss>();
    }
}
