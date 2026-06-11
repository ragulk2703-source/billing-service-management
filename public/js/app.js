// Main App Script
let revenueChart, productsChart;

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  // Check authentication
  if (!AUTH.isLoggedIn() && !window.location.pathname.includes('login') && window.location.pathname !== '/') {
    window.location.href = '/login';
    return;
  }

  // Load user profile if logged in
  if (AUTH.isLoggedIn()) {
    loadUserProfile();
    loadDashboard();
    setupNavigation();
  }

  // Update current date
  updateCurrentDate();
  setInterval(updateCurrentDate, 60000);
});

// Load User Profile
async function loadUserProfile() {
  try {
    const response = await API.get(ENDPOINTS.ME);
    if (response.success) {
      const user = response.data;
      document.getElementById('userName').textContent = user.name;
      
      // Update profile modal
      document.getElementById('profileContent').innerHTML = `
        <div class="mb-3">
          <label class="form-label">Name</label>
          <p class="form-control-plaintext">${user.name}</p>
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <p class="form-control-plaintext">${user.email}</p>
        </div>
        <div class="mb-3">
          <label class="form-label">Phone</label>
          <p class="form-control-plaintext">${user.phone || 'N/A'}</p>
        </div>
        <div class="mb-3">
          <label class="form-label">Role</label>
          <p class="form-control-plaintext"><span class="badge bg-primary">${user.role.toUpperCase()}</span></p>
        </div>
        <div class="mb-3">
          <label class="form-label">Member Since</label>
          <p class="form-control-plaintext">${new Date(user.created_at).toLocaleDateString()}</p>
        </div>
        <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#changePasswordModal">
          Change Password
        </button>
      `;
    }
  } catch (error) {
    console.error('Error loading profile:', error);
  }
}

// Load Dashboard
async function loadDashboard() {
  try {
    // Load KPI data
    const todayDate = new Date().toISOString().split('T')[0];
    
    // Mock data for demonstration
    document.getElementById('todayIncome').textContent = '₹0';
    document.getElementById('todayBills').textContent = '0';
    document.getElementById('pendingServices').textContent = '0';
    document.getElementById('completedServices').textContent = '0';

    // Initialize charts
    initializeCharts();
    
  } catch (error) {
    console.error('Error loading dashboard:', error);
  }
}

// Initialize Charts
function initializeCharts() {
  // Revenue Chart
  const revenueCtx = document.getElementById('revenueChart');
  if (revenueCtx && !revenueChart) {
    revenueChart = new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Revenue (₹)',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          borderColor: '#667eea',
          backgroundColor: 'rgba(102, 126, 234, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Products Chart
  const productsCtx = document.getElementById('productsChart');
  if (productsCtx && !productsChart) {
    productsChart = new Chart(productsCtx, {
      type: 'doughnut',
      data: {
        labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4'],
        datasets: [{
          data: [0, 0, 0, 0],
          backgroundColor: [
            '#667eea',
            '#764ba2',
            '#f093fb',
            '#4facfe'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }
}

// Setup Navigation
function setupNavigation() {
  // Get all nav links
  document.querySelectorAll('.sidebar .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('data-section')) {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        showSection(section);

        // Update active state
        document.querySelectorAll('.sidebar .nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
}

// Show Section
function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('[id$="Section"]').forEach(section => {
    section.style.display = 'none';
  });

  // Show selected section
  const section = document.getElementById(sectionName + 'Section');
  if (section) {
    section.style.display = 'block';
  }
}

// Update Current Date
function updateCurrentDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString('en-US', options);
  const element = document.getElementById('currentDate');
  if (element) {
    element.textContent = today;
  }
}

// Change Theme
function changeTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Format Currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
}

// Format Date
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-IN');
}

// Format Time
function formatTime(date) {
  return new Date(date).toLocaleTimeString('en-IN');
}

// Show Toast Notification
function showToast(message, type = 'info') {
  const toastHTML = `
    <div class="toast align-items-center text-white bg-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'} border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">
          ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  `;
  
  const container = document.createElement('div');
  container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
  container.innerHTML = toastHTML;
  document.body.appendChild(container);
  
  const toast = new bootstrap.Toast(container.querySelector('.toast'));
  toast.show();
  
  setTimeout(() => container.remove(), 3000);
}

// Export as CSV
function exportToCSV(data, filename) {
  const csv = [
    Object.keys(data[0]).join(','),
    ...data.map(row => Object.values(row).join(','))
  ].join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
}

// Print
function printContent(elementId) {
  const printWindow = window.open();
  const element = document.getElementById(elementId);
  printWindow.document.write('<html><head><title>Print</title>');
  printWindow.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">');
  printWindow.document.write('<link rel="stylesheet" href="/css/style.css">');
  printWindow.document.write('</head><body>');
  printWindow.document.write(element.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}
