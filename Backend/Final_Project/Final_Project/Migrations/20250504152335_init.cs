using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Final_Project.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Medicines",
                columns: table => new
                {
                    MedicineId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MedicineType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MedicineName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GenericName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medicines", x => x.MedicineId);
                });

            migrationBuilder.CreateTable(
                name: "MedicinePurchases",
                columns: table => new
                {
                    MedicinePurchaseId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MedicineId = table.Column<int>(type: "int", nullable: false),
                    PurchaseDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PurchasePrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    QuantityPurchased = table.Column<int>(type: "int", nullable: false),
                    VAT = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TotalPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Supplier = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicinePurchases", x => x.MedicinePurchaseId);
                    table.ForeignKey(
                        name: "FK_MedicinePurchases_Medicines_MedicineId",
                        column: x => x.MedicineId,
                        principalTable: "Medicines",
                        principalColumn: "MedicineId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicineSales",
                columns: table => new
                {
                    MedicineSaleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MedicineId = table.Column<int>(type: "int", nullable: false),
                    SaleDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SalePrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    QuantitySold = table.Column<int>(type: "int", nullable: false),
                    Discount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TotalPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CustomerName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicineSales", x => x.MedicineSaleId);
                    table.ForeignKey(
                        name: "FK_MedicineSales_Medicines_MedicineId",
                        column: x => x.MedicineId,
                        principalTable: "Medicines",
                        principalColumn: "MedicineId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicineLosses",
                columns: table => new
                {
                    MedicineLossId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MedicinePurchaseId = table.Column<int>(type: "int", nullable: false),
                    LossDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    QuantityLoss = table.Column<int>(type: "int", nullable: false),
                    LossAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TotalLoss = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    LossReason = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicineLosses", x => x.MedicineLossId);
                    table.ForeignKey(
                        name: "FK_MedicineLosses_MedicinePurchases_MedicinePurchaseId",
                        column: x => x.MedicinePurchaseId,
                        principalTable: "MedicinePurchases",
                        principalColumn: "MedicinePurchaseId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicineProfits",
                columns: table => new
                {
                    MedicineProfitId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MedicineSaleId = table.Column<int>(type: "int", nullable: false),
                    ProfitDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ProfitAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    QuantityProfit = table.Column<int>(type: "int", nullable: false),
                    TotalProfit = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicineProfits", x => x.MedicineProfitId);
                    table.ForeignKey(
                        name: "FK_MedicineProfits_MedicineSales_MedicineSaleId",
                        column: x => x.MedicineSaleId,
                        principalTable: "MedicineSales",
                        principalColumn: "MedicineSaleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MedicineLosses_MedicinePurchaseId",
                table: "MedicineLosses",
                column: "MedicinePurchaseId");

            migrationBuilder.CreateIndex(
                name: "IX_MedicineProfits_MedicineSaleId",
                table: "MedicineProfits",
                column: "MedicineSaleId");

            migrationBuilder.CreateIndex(
                name: "IX_MedicinePurchases_MedicineId",
                table: "MedicinePurchases",
                column: "MedicineId");

            migrationBuilder.CreateIndex(
                name: "IX_MedicineSales_MedicineId",
                table: "MedicineSales",
                column: "MedicineId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MedicineLosses");

            migrationBuilder.DropTable(
                name: "MedicineProfits");

            migrationBuilder.DropTable(
                name: "MedicinePurchases");

            migrationBuilder.DropTable(
                name: "MedicineSales");

            migrationBuilder.DropTable(
                name: "Medicines");
        }
    }
}
