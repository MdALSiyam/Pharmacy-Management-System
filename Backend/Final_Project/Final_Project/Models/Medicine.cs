namespace Final_Project.Models
{
    public class Medicine
    {
        public int MedicineId { get; set; }
        public string MedicineType { get; set; }
        public string MedicineName { get; set; }
        public string GenericName { get; set; }
        public string Company { get; set; }

        public virtual ICollection<MedicinePurchase>? MedicinePurchases { get; set; } = new List<MedicinePurchase>();
        public virtual ICollection<MedicineSale>? MedicineSales { get; set; } = new List<MedicineSale>();
    }
}
