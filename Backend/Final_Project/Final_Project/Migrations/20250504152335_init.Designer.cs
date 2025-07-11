﻿// <auto-generated />
using System;
using Final_Project.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Final_Project.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250504152335_init")]
    partial class init
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Final_Project.Models.Medicine", b =>
                {
                    b.Property<int>("MedicineId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MedicineId"));

                    b.Property<string>("Company")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GenericName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MedicineName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MedicineType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MedicineId");

                    b.ToTable("Medicines");
                });

            modelBuilder.Entity("Final_Project.Models.MedicineLoss", b =>
                {
                    b.Property<int>("MedicineLossId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MedicineLossId"));

                    b.Property<decimal>("LossAmount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("LossDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("LossReason")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MedicinePurchaseId")
                        .HasColumnType("int");

                    b.Property<int>("QuantityLoss")
                        .HasColumnType("int");

                    b.Property<decimal>("TotalLoss")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("MedicineLossId");

                    b.HasIndex("MedicinePurchaseId");

                    b.ToTable("MedicineLosses");
                });

            modelBuilder.Entity("Final_Project.Models.MedicineProfit", b =>
                {
                    b.Property<int>("MedicineProfitId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MedicineProfitId"));

                    b.Property<int>("MedicineSaleId")
                        .HasColumnType("int");

                    b.Property<decimal>("ProfitAmount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("ProfitDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("QuantityProfit")
                        .HasColumnType("int");

                    b.Property<decimal>("TotalProfit")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("MedicineProfitId");

                    b.HasIndex("MedicineSaleId");

                    b.ToTable("MedicineProfits");
                });

            modelBuilder.Entity("Final_Project.Models.MedicinePurchase", b =>
                {
                    b.Property<int>("MedicinePurchaseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MedicinePurchaseId"));

                    b.Property<int>("MedicineId")
                        .HasColumnType("int");

                    b.Property<DateTime>("PurchaseDate")
                        .HasColumnType("datetime2");

                    b.Property<decimal>("PurchasePrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("QuantityPurchased")
                        .HasColumnType("int");

                    b.Property<string>("Supplier")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("VAT")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("MedicinePurchaseId");

                    b.HasIndex("MedicineId");

                    b.ToTable("MedicinePurchases");
                });

            modelBuilder.Entity("Final_Project.Models.MedicineSale", b =>
                {
                    b.Property<int>("MedicineSaleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MedicineSaleId"));

                    b.Property<string>("CustomerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Discount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("MedicineId")
                        .HasColumnType("int");

                    b.Property<int>("QuantitySold")
                        .HasColumnType("int");

                    b.Property<DateTime>("SaleDate")
                        .HasColumnType("datetime2");

                    b.Property<decimal>("SalePrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("MedicineSaleId");

                    b.HasIndex("MedicineId");

                    b.ToTable("MedicineSales");
                });

            modelBuilder.Entity("Final_Project.Models.MedicineLoss", b =>
                {
                    b.HasOne("Final_Project.Models.MedicinePurchase", "MedicinePurchase")
                        .WithMany("MedicineLosses")
                        .HasForeignKey("MedicinePurchaseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("MedicinePurchase");
                });

            modelBuilder.Entity("Final_Project.Models.MedicineProfit", b =>
                {
                    b.HasOne("Final_Project.Models.MedicineSale", "MedicineSale")
                        .WithMany("MedicineProfits")
                        .HasForeignKey("MedicineSaleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("MedicineSale");
                });

            modelBuilder.Entity("Final_Project.Models.MedicinePurchase", b =>
                {
                    b.HasOne("Final_Project.Models.Medicine", "Medicine")
                        .WithMany("MedicinePurchases")
                        .HasForeignKey("MedicineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Medicine");
                });

            modelBuilder.Entity("Final_Project.Models.MedicineSale", b =>
                {
                    b.HasOne("Final_Project.Models.Medicine", "Medicine")
                        .WithMany("MedicineSales")
                        .HasForeignKey("MedicineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Medicine");
                });

            modelBuilder.Entity("Final_Project.Models.Medicine", b =>
                {
                    b.Navigation("MedicinePurchases");

                    b.Navigation("MedicineSales");
                });

            modelBuilder.Entity("Final_Project.Models.MedicinePurchase", b =>
                {
                    b.Navigation("MedicineLosses");
                });

            modelBuilder.Entity("Final_Project.Models.MedicineSale", b =>
                {
                    b.Navigation("MedicineProfits");
                });
#pragma warning restore 612, 618
        }
    }
}
