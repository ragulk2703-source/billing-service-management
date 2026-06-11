const { validate } = require('../utils/validators');
const { sendError } = require('../utils/response');
const CONSTANTS = require('../config/constants');

// Validation middleware factory
const validateRequest = (schema) => {
  return (req, res, next) => {
    const validation = validate(schema, req.body);
    
    if (!validation.valid) {
      return sendError(
        res,
        'Validation error',
        CONSTANTS.HTTP_CODES.BAD_REQUEST,
        { errors: validation.messages }
      );
    }

    req.validatedBody = validation.value;
    next();
  };
};

// Request sanitization
const sanitizeRequest = (req, res, next) => {
  // Remove sensitive fields from logging
  if (req.body && req.body.password) {
    req.body.password = '***';
  }
  next();
};

module.exports = {
  validateRequest,
  sanitizeRequest
};
