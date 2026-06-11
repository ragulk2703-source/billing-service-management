const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');
const { authMiddleware, authorize } = require('../middleware/auth.middleware');
const CONSTANTS = require('../config/constants');

// Apply auth middleware to all routes
router.use(authMiddleware);

// Apply authorization to all routes
router.use(authorize(CONSTANTS.ROLES.ADMIN, CONSTANTS.ROLES.MANAGER));

// Get reports
router.get('/daily', reportController.getDailyReport);
router.get('/weekly', reportController.getWeeklyReport);
router.get('/monthly', reportController.getMonthlyReport);
router.get('/yearly', reportController.getYearlyReport);
router.get('/stats/dashboard', reportController.getDashboardStats);

module.exports = router;
