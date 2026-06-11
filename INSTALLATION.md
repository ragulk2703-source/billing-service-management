# Installation & Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ 
- npm v6+
- No MySQL or database server needed!

### Step 1: Clone Repository
```bash
git clone https://github.com/ragulk2703-source/billing-service-management.git
cd billing-service-management
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment
```bash
# Copy example env file
cp .env.example .env

# Edit .env if needed (default values work)
# Change JWT_SECRET for production
```

### Step 4: Start Application
```bash
npm start
```

The application will:
✅ Create SQLite database automatically
✅ Create all tables if they don't exist  
✅ Seed default admin account
✅ Start on http://localhost:3000

### Step 5: Login
Access http://localhost:3000/login with:
- **Email**: admin@servicecentre.com
- **Password**: Admin@123456

⚠️ **Change password after first login!**

---

## 📋 Default Data

### Admin User
```
Email: admin@servicecentre.com
Password: Admin@123456
Role: Admin
```

### Default Categories
- Hardware
- Software
- Peripherals
- Networking
- Repair Parts

---

## 🔧 Development

### Run in Development Mode
```bash
npm run dev
```
Uses nodemon for auto-reload on file changes.

### Run Tests
```bash
npm test
```

---

## 📁 Project Structure

```
billing-service-management/
├── server/
│   ├── config/
│   │   ├── database.js      # SQLite connection
│   │   ├── schema.js        # Database schema & init
│   │   └── constants.js     # App constants
│   ├── controllers/         # Business logic
│   │   ├── auth.controller.js
│   │   ├── customer.controller.js
│   │   ├── product.controller.js
│   │   ├── bill.controller.js
│   │   ├── service.controller.js
│   │   ├── expense.controller.js
│   │   ├── report.controller.js
│   │   ├── user.controller.js
│   │   └── inventory.controller.js
│   ├── routes/              # API endpoints
│   ├── middleware/          # Auth, validation, error handling
│   ├── utils/               # Helper functions
│   └── app.js               # Express configuration
├── public/
│   ├── css/style.css        # Main stylesheet
│   ├── js/
│   │   ├── auth.js          # Auth helpers
│   │   ├── api.js           # API client
│   │   └── app.js           # Main app logic
│   └── images/
├── views/
│   ├── index.html           # Landing page
│   ├── login.html           # Login page
│   └── dashboard.html       # Main dashboard
├── data/                    # SQLite database
├── uploads/                 # User uploads
├── logs/                    # Application logs
├── package.json
├── server.js                # Entry point
└── .env.example
```

---

## 📊 API Endpoints

All endpoints require JWT authentication (except login).

### Authentication
```
POST   /api/v1/auth/login              # Login
POST   /api/v1/auth/logout             # Logout
POST   /api/v1/auth/refresh            # Refresh token
GET    /api/v1/auth/me                 # Current user
POST   /api/v1/auth/change-password    # Change password
```

### Customers
```
GET    /api/v1/customers               # List
POST   /api/v1/customers               # Create
GET    /api/v1/customers/:id           # Get one
PUT    /api/v1/customers/:id           # Update
DELETE /api/v1/customers/:id           # Delete
GET    /api/v1/customers/:id/bills     # Billing history
GET    /api/v1/customers/:id/services  # Service history
```

### Products
```
GET    /api/v1/products                # List
POST   /api/v1/products                # Create
GET    /api/v1/products/:id            # Get one
PUT    /api/v1/products/:id            # Update
DELETE /api/v1/products/:id            # Delete
GET    /api/v1/products/categories/list # Get categories
```

### Billing
```
GET    /api/v1/bills                   # List
POST   /api/v1/bills                   # Create
GET    /api/v1/bills/:id               # Get one
PUT    /api/v1/bills/:id               # Update
DELETE /api/v1/bills/:id               # Delete
```

### Services
```
GET    /api/v1/services                # List
POST   /api/v1/services                # Create
GET    /api/v1/services/:id            # Get one
PUT    /api/v1/services/:id            # Update
DELETE /api/v1/services/:id            # Delete
GET    /api/v1/services/:id/timeline   # Get timeline
```

### Expenses
```
GET    /api/v1/expenses                # List
POST   /api/v1/expenses                # Create
GET    /api/v1/expenses/:id            # Get one
PUT    /api/v1/expenses/:id            # Update
DELETE /api/v1/expenses/:id            # Delete
GET    /api/v1/expenses/report/summary # Get report
```

### Reports
```
GET    /api/v1/reports/daily           # Daily report
GET    /api/v1/reports/weekly          # Weekly report
GET    /api/v1/reports/monthly         # Monthly report
GET    /api/v1/reports/yearly          # Yearly report
GET    /api/v1/reports/stats/dashboard # Dashboard stats
```

### Users
```
GET    /api/v1/users                   # List
POST   /api/v1/users                   # Create
GET    /api/v1/users/:id               # Get one
PUT    /api/v1/users/:id               # Update
DELETE /api/v1/users/:id               # Delete
POST   /api/v1/users/:id/reset-password # Reset password
```

### Inventory
```
GET    /api/v1/inventory               # List
POST   /api/v1/inventory/stock-in      # Add stock
POST   /api/v1/inventory/stock-out     # Remove stock
GET    /api/v1/inventory/low-stock/alert # Low stock
PUT    /api/v1/inventory/reorder-level/:product_id # Update
```

---

## 🔐 User Roles & Permissions

### Admin
- Full access to all features
- User management
- Settings management

### Manager
- Dashboard & reports
- Customer management
- Billing management
- Inventory management
- User management (limited)

### Technician
- Service management
- Service timeline updates
- View customer details

### Billing Staff
- Billing operations
- Customer management
- Product management
- View reports

---

## 📦 Database Tables

1. **users** - User accounts
2. **customers** - Customer profiles
3. **products** - Product catalog
4. **categories** - Product categories
5. **inventory** - Stock management
6. **suppliers** - Supplier information
7. **bills** - Invoice records
8. **bill_items** - Invoice line items
9. **services** - Service tickets
10. **service_timeline** - Service status history
11. **service_photos** - Service documentation
12. **technicians** - Technician profiles
13. **expenses** - Expense records
14. **settings** - Application settings
15. **backups** - Database backups
16. **audit_logs** - Audit trail

---

## 🚀 Deployment

### Production Environment
```bash
# Set environment
export NODE_ENV=production
export JWT_SECRET=your-production-secret-key
export DB_PATH=/var/lib/app/database.sqlite

# Start server
npm start
```

### Using PM2
```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start server.js --name "billing-app"

# Auto-start on reboot
pm2 startup
pm2 save

# View logs
pm2 logs billing-app
```

### Nginx Reverse Proxy
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm start
```

### Database Locked
```bash
# Delete database and restart (will recreate)
rm data/database.sqlite
npm start
```

### SQLite Issues
```bash
# Verify SQLite installation
sqlite3 --version

# Install SQLite (if needed)
# Ubuntu: sudo apt-get install sqlite3
# macOS: brew install sqlite3
```

---

## 📝 API Request Examples

### Login
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@servicecentre.com","password":"Admin@123456"}'
```

### Create Customer
```bash
curl -X POST http://localhost:3000/api/v1/customers \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "address": "123 Main St",
    "city": "Bangalore"
  }'
```

### Create Bill
```bash
curl -X POST http://localhost:3000/api/v1/bills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "customer_id": "CUSTOMER_ID",
    "bill_type": "gst",
    "items": [
      {
        "product_id": "PRODUCT_ID",
        "quantity": 2,
        "unit_price": 500,
        "tax_rate": 18
      }
    ]
  }'
```

---

## 📞 Support

For issues or feature requests, please create an issue on GitHub.

---

## 📄 License

MIT License - See LICENSE file

---

**Happy Billing! 🎉**
