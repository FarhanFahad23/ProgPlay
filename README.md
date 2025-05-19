## 🛠 Installation / Deployment Guide (Local using XAMPP)

This section outlines how to install and run the **ProgPlay** application locally using XAMPP.

### 📥 Step 1: Download and Install XAMPP
- Download the XAMPP installer for Windows from the website.
- Install it by following the on-screen instructions.
- By default, it installs to `C:\xampp`.

### ⚙️ Step 2: Start Apache and MySQL
- Open the XAMPP Control Panel.
- Click **Start** next to:
  - **Apache** (for web server)
  - **MySQL** (for database)
- When both turn green, services are running successfully.


### 📁 Step 3: Add Project to `htdocs`
- Go to `C:\xampp\htdocs`.
- Paste your project folder (e.g., `progplay`) here.

### 🌐 Step 4: Access Website in Browser
- Open any browser and go to: http://localhost/foldername
You should see the login page or homepage of ProgPlay.

### 🗃️ Step 5: Access phpMyAdmin
- Go to: http://localhost/dashboard/

- Click on **phpMyAdmin** to manage the database via GUI.

### 🧱 Step 6: Create a New Database
- In phpMyAdmin, click **New** in the left pane.
- Name the database (e.g., `fyp_database`) and click **Create**.
- Now import `.sql` file or create tables manually.

### Step 7: edit connect.php and paste the database name which you create in PhpAdmin

