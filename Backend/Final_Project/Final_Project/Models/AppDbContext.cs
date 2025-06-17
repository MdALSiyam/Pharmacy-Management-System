using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace Final_Project.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<MedicinePurchase> MedicinePurchases { get; set; }
        public DbSet<MedicineSale> MedicineSales { get; set; }
        public DbSet<MedicineProfit> MedicineProfits { get; set; }
        public DbSet<MedicineLoss> MedicineLosses { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    // You can add any additional model configuration here if needed
        //}
    }
}
