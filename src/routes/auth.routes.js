const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const authRouter = Router();

/**
 *  @route POST /api/auth/register
 *  @desc Register a new user
 *  @access Public
 */

authRouter.post('/register', authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @desc Login user with email and password
 * @access Public
 */
authRouter.post('/login', authController.loginUserController);

/**
 * @route POST /api/auth/logout
 * @desc clear token from user cookies and add token to blacklist
 * @access Public
 */

authRouter.get('/logout', authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @desc Get current logged in user details 
 * @access Private
 */
console.log("authUser:", typeof authMiddleware.authUser);
console.log("getMeController:", typeof authController.getMeController);
authRouter.get('/get-me', authMiddleware.authUser, authController.getMeController);


module.exports = authRouter;