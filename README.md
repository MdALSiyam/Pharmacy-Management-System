# Pharmacy Management System

A scalable Pharmacy Management System designed to streamline pharmacy operations, covering **inventory management, purchases, sales, profits & losses tracking**, and **automated financial reporting**.

## Key Features:

* **Comprehensive Inventory Management:** Efficiently track and manage drug stock.
* **Streamlined Purchase and Sales:** Intuitive modules for handling transactions.
* **Automated Financials:** Generate profit and loss statements.
* **Robust Data Validation:** Ensures data integrity.
* **Code-First Approach:** Clean, maintainable, and scalable database structure.
* **Master-Detail Relationships:** Organized and efficient data handling.

## Future Enhancements:

* **JWT Authentication:** Planned for secure user access.

---

## Getting Started

This section outlines the steps to set up and run the Pharmacy Management System on your local machine.

### Prerequisites

* [.NET SDK 8.0](https://dotnet.microsoft.com/download/dotnet/8.0)
* [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) (for Backend API)
* [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
* [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
* [Visual Studio Code](https://code.visualstudio.com/) (for Frontend)

### Cloning the Repository

1.  Open your terminal or Git Bash.
2.  Navigate to the directory where you want to clone the project.
3.  Run the following command:

    ```bash
    git clone https://github.com/MdALSiyam/Pharmacy-Management-System.git

    ```

### Backend API Setup (.NET 8.0)

1.  **Open in Visual Studio 2022:**
    * Navigate to the `Backend\Final_Project` folder.
    * Open the `.sln` file in Visual Studio 2022.

2.  **Configure Database Connection:**
    * Open `appsettings.json` (and `appsettings.Development.json`) within your API project (e.g., `PharmacyAPI` or the main API project).
    * Update the `DefaultConnection` string under `ConnectionStrings` to point to your database.

        ```json
        {
          "ConnectionStrings": {
            "DefaultConnection": "Server=YourServerName;Database=PharmacyDB;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True"
          },
        }
        ```
        *Replace `YourServerName` and `PharmacyDB` with your actual database server and name. For local SQL Server, `(localdb)\\MSSQLLocalDB` or your instance name is common.*

3.  **Apply Migrations:**
    * In Visual Studio, open Package Manager Console (Tools -> NuGet Package Manager -> Package Manager Console).
    * Ensure the Default Project is set to your API project.
    * Run: `Update-Database`

4.  **Run the Backend API:**
    * Press `F5` in Visual Studio to run the API. This will typically launch the Swagger UI in your browser, indicating the backend is running.

### Frontend Setup (Angular)

1.  **Navigate to Frontend:**
    * Open a new terminal or command prompt.
    * Navigate to the Angular project directory:

        ```bash
        cd Pharmacy-Management-System\Frontend\Pharmacy
        ```
    * Open in VS Code (Optional but Recommended):
        ```bash
        code .
        ```

2.  **Run the Frontend:**
    * Ensure all necessary Node.js packages are installed (they should be part of the repository if committed, otherwise run `npm install` if you encounter errors).
    * Run the Angular development server:

        ```bash
        ng serve
        ```
    * This command will compile the Angular application and open it in your default web browser (usually at `http://localhost:4200/`).

You should now have both the Backend API and the Angular Frontend running locally and connected.

---

# 📸 Project Outputs

Here are some screenshots showcasing the functionality of the Pharmacy Management System:

![Pharmacy Management](Outputs/pharmacy.png)

## 🧾 Medicine Inventory
![Pharmacy Management 1](Outputs/pharmacy1.png)
![Pharmacy Management 2](Outputs/pharmacy2.png)
![Pharmacy Management 3](Outputs/pharmacy3.png)
![Pharmacy Management 4](Outputs/pharmacy4.png)

## 🧾 Medicine Purchases
![Pharmacy Management 5](Outputs/pharmacy5.png)
![Pharmacy Management 6](Outputs/pharmacy6.png)
![Pharmacy Management 7](Outputs/pharmacy7.png)
![Pharmacy Management 8](Outputs/pharmacy8.png)

## 🧾 Medicine Sales
![Pharmacy Management 9](Outputs/pharmacy9.png)
![Pharmacy Management 10](Outputs/pharmacy10.png)
![Pharmacy Management 11](Outputs/pharmacy11.png)
![Pharmacy Management 12](Outputs/pharmacy12.png)

## 🧾 Medicine Profits
![Pharmacy Management 13](Outputs/pharmacy13.png)
![Pharmacy Management 14](Outputs/pharmacy14.png)
![Pharmacy Management 15](Outputs/pharmacy15.png)
![Pharmacy Management 16](Outputs/pharmacy16.png)

## 🧾 Medicine Losses
![Pharmacy Management 17](Outputs/pharmacy17.png)
![Pharmacy Management 18](Outputs/pharmacy18.png)
![Pharmacy Management 19](Outputs/pharmacy19.png)
![Pharmacy Management 20](Outputs/pharmacy20.png)
