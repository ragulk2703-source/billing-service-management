# Computer Service Center - Billing & Service Management Software

A complete Desktop-First web application for managing billing, inventory, and service operations in a computer service center.

## 🚀 Features

✅ **Dashboard** - Real-time analytics and KPIs
✅ **Customer Management** - Complete customer profiles with billing history
✅ **Billing System** - GST/Non-GST support with thermal printer integration
✅ **Inventory Management** - Stock tracking and low stock alerts
✅ **Service Management** - Complete service lifecycle tracking
✅ **Reports & Analytics** - Daily, Weekly, Monthly, Yearly reports
✅ **Expense Tracking** - Comprehensive expense management
✅ **Role-Based Access** - Admin, Manager, Technician, Billing Staff
✅ **Dark/Light Mode** - Modern UI with theme support
✅ **Responsive Design** - Works on all devices
✅ **SQLite Database** - No MySQL required, zero external dependencies

## 📋 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js + Express.js
- **Database**: SQLite3 (Automatic Setup)
- **Authentication**: JWT (JSON Web Tokens)
- **UI Framework**: Bootstrap 5 + Custom CSS
- **Additional**: Multer, PDFKit, QRCode, Sharp

## ⚡ Quick Start

### Prerequisites

- Node.js v14 or higher
- npm v6 or higher
- No MySQL or database server needed!

### Installation

```bash
# 1. Navigate to project directory
cd billing-service-management

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env

# 4. Start the application
npm start
```

The application will:
- ✅ Create SQLite database automatically
- ✅ Create all tables if they don't exist
- ✅ Seed default admin account
- ✅ Start on http://localhost:3000

### Default Credentials

```
Email: admin@servicecentre.com
Password: Admin@123456
Role: Admin
```

⚠️ **Important**: Change the password after first login!

## 📁 Project Structure

```
billing-service-management/
├── server/
│   ├── config/
│   │   ├── database.js           # SQLite configuration
│   │   └── constants.js          # Constants
│   ├── models/
│   │   ├── db-schema.js          # Database schema
│   │   └── seeders.js            # Default data
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── customer.controller.js
│   │   ├── billing.controller.js
│   │   ├── service.controller.js
│   │   ├── inventory.controller.js
│   │   ���── report.controller.js
│   │   └── user.controller.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── customer.routes.js
│   │   ├── billing.routes.js
│   │   ├── service.routes.js
│   │   ├── inventory.routes.js
│   │   ├── report.routes.js
│   │   └── user.routes.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── validation.middleware.js
│   │   ├── error.middleware.js
│   │   └── logger.middleware.js
│   ├── utils/
│   │   ├── response.js
│   │   ├── validators.js
│   │   ├── jwt.js
│   │   ├── printer.js
│   │   ├── invoice.js
│   │   └── backup.js
│   └── app.js
├── public/
│   ├── css/
│   │   ├── style.css             # Main styles
│   │   ├── dark-mode.css         # Dark mode
│   │   └── responsive.css        # Responsive design
│   ├── js/
│   │   ├── app.js                # Main app script
│   │   ├── auth.js               # Authentication
│   │   ├── api.js                # API calls
│   │   ├── utils.js              # Utility functions
│   │   ├── printer.js            # Printer integration
│   │   └── charts.js             # Chart.js integration
│   ├── images/
│   └── icons/
├── views/
│   ├── index.html                # Entry page
│   ├── login.html                # Login page
│   ├── dashboard.html            # Dashboard
│   ├── customers.html            # Customer management
│   ├── billing.html              # Billing
│   ├── services.html             # Service management
│   ├── inventory.html            # Inventory
│   ├── reports.html              # Reports
│   ├── users.html                # User management
│   ├── settings.html             # Settings
│   └── components/
│       ├── navbar.html
│       ├── sidebar.html
│       ├── footer.html
│       └── modals.html
├── data/
│   └── database.sqlite           # Created automatically
├── uploads/
├── logs/
├── backups/
├── scripts/
│   ├── migrate.js                # Database migration
│   └── seed.js                   # Seed data
├── package.json
├── server.js                     # Entry point
└── .env.example
```

## 🗄️ Database

SQLite database is automatically created at `data/database.sqlite`

### Tables
- Users
- Customers
- Products
- Categories
- Inventory
- Suppliers
- Bills
- BillItems
- Services
- ServiceTimeline
- Technicians
- Expenses
- Settings
- AuditLogs

## 🔌 API Endpoints

All endpoints are prefixed with `/api/v1/`

### Authentication
```
POST   /auth/login              - User login
POST   /auth/logout             - User logout
POST   /auth/refresh            - Refresh token
POST   /auth/change-password    - Change password
```

### Customers
```
GET    /customers               - List all customers
POST   /customers               - Create customer
GET    /customers/:id           - Get customer details
PUT    /customers/:id           - Update customer
DELETE /customers/:id           - Delete customer
GET    /customers/:id/bills     - Customer billing history
GET    /customers/:id/services  - Customer service history
```

### Billing
```
GET    /bills                   - List bills
POST   /bills                   - Create bill
GET    /bills/:id               - Get bill details
PUT    /bills/:id               - Update bill
DELETE /bills/:id               - Delete bill
POST   /bills/:id/print         - Print bill
POST   /bills/:id/pdf           - Export PDF
POST   /bills/:id/whatsapp      - Share via WhatsApp
```

### Services
```
GET    /services                - List services
POST   /services                - Create service
GET    /services/:id            - Get service details
PUT    /services/:id            - Update service
DELETE /services/:id            - Delete service
GET    /services/:id/timeline   - Service timeline
POST   /services/:id/upload     - Upload photos
```

### Inventory
```
GET    /products                - List products
POST   /products                - Create product
GET    /products/:id            - Get product details
PUT    /products/:id            - Update product
DELETE /products/:id            - Delete product
GET    /inventory               - Inventory status
POST   /inventory/stock-in      - Add stock
POST   /inventory/stock-out     - Remove stock
```

### Reports
```
GET    /reports/daily           - Daily report
GET    /reports/weekly          - Weekly report
GET    /reports/monthly         - Monthly report
GET    /reports/yearly          - Yearly report
```

### Users
```
GET    /users                   - List users
POST   /users                   - Create user
GET    /users/:id               - Get user details
PUT    /users/:id               - Update user
DELETE /users/:id               - Delete user
```

## 🔐 Authentication

- JWT-based authentication
- Token expires in 24 hours
- Refresh token expires in 7 days
- Role-based access control (RBAC)

## 🎨 UI/UX Features

- Modern Material Design
- Dark/Light Mode Toggle
- Responsive Mobile Layout
- Professional Dashboard
- Real-time Updates
- Chart.js Integration
- Timeline View for Services
- Print-ready Invoice Design

## 📊 Dashboard Features

- Today's Income
- Today's Bills
- Pending Services
- Completed Services
- Monthly Revenue Graph
- Top Selling Products
- Recent Bills
- Recent Service Activity
- KPI Cards

## 💳 Billing Features

- ✅ GST/Non-GST Billing
- ✅ Auto Invoice Number
- ✅ Product Search
- ✅ Barcode Support
- ✅ Discount Support
- ✅ Tax Calculation
- ✅ Thermal Printer (58mm & 80mm)
- ✅ PDF Export
- ✅ Print Invoice
- ✅ WhatsApp Sharing
- ✅ QR Code on Invoice

## 🛠️ Service Management

- Service Ticket Creation
- Auto Service ID Generation
- Device Registration
- Multiple Device Types
- Problem Description
- Engineer Assignment
- Photo Upload
- Customer Signature
- Status Tracking
- Service Timeline

## 📦 Inventory Features

- Product Categories
- Stock In/Out
- Low Stock Alerts
- Supplier Management
- Purchase History
- Inventory Reports
- Barcode Support

## 📈 Reports

- Daily Reports (Revenue, Expenses, Profit)
- Weekly Reports
- Monthly Reports (with charts)
- Yearly Reports
- Service Analytics
- Product Analytics
- Technician Performance
- Customer Analytics

## 💰 Expense Management

- Rent
- Electricity
- Salary
- Internet
- Miscellaneous Expenses
- Expense Reports
- Budget Tracking

## 👥 User Management

Roles:
- **Admin** - Full access
- **Manager** - Dashboard, Reports, User management
- **Billing Staff** - Billing, Customer management
- **Technician** - Service management only

## 🔒 Security Features

- JWT Authentication
- Password Hashing (bcryptjs)
- CORS Protection
- Helmet.js Security Headers
- Input Validation (Joi)
- SQL Injection Prevention
- XSS Protection
- CSRF Protection
- Rate Limiting

## 📱 Development

### Development Server

```bash
npm run dev
```

Starts with nodemon for auto-reload.

### Testing

```bash
npm test
```

## 🚀 Production Deployment

### Environment Setup

1. Update `.env` file:
```bash
NODE_ENV=production
JWT_SECRET=your-production-secret-key
DB_PATH=/var/lib/app/database.sqlite
```

2. Build and start:
```bash
npm start
```

### Using PM2

```bash
npm install -g pm2
pm2 start server.js --name "billing-app"
pm2 startup
pm2 save
```

## 📝 Modules Included

1. ✅ Dashboard
2. ✅ Customer Management
3. ✅ Billing System
4. ✅ Inventory Management
5. ✅ Computer Service Center
6. ✅ Service History
7. ✅ Reports Module
8. ✅ Expense Management
9. ✅ User Management
10. ✅ Backup & Restore
11. ✅ Printer Integration
12. ✅ UI/UX Design
13. ✅ Additional Features

## 🔄 Backup & Restore

### Manual Backup
```
GET /api/v1/settings/backup
```

### Automatic Backups
Daily backups at 2:00 AM (configurable)

### Restore
```
POST /api/v1/settings/restore
```

## 📧 Support

For issues and feature requests, please create an issue on GitHub.

## 📄 License

MIT License - See LICENSE file

## 👨‍💻 Author

Service Center Management Team

---

**⚡ Zero Setup - Works Out of the Box!**

No MySQL, no external database, no complex configuration.
Just run `npm install && npm start`
