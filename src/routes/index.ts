import { Router } from 'express';
import TimesRouter from './times';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/times', TimesRouter);

// Export the base-router
export default router;
