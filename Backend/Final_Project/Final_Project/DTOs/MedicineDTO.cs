namespace Final_Project.DTOs
{
    public class MedicineDTO
    {
        public int MedicineId { get; set; }
        public string MedicineType { get; set; }
        public string MedicineName { get; set; }
        public string GenericName { get; set; }
        public string Company { get; set; }
    }

    public class CreateMedicineDTO
    {
        public string MedicineType { get; set; }
        public string MedicineName { get; set; }
        public string GenericName { get; set; }
        public string Company { get; set; }
    }

    public class UpdateMedicineDTO
    {
        public int MedicineId { get; set; }
        public string MedicineType { get; set; }
        public string MedicineName { get; set; }
        public string GenericName { get; set; }
        public string Company { get; set; }
    }
}
