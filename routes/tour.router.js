import { Router } from 'express';
import { addTourmiddleware } from '../middlewares/tour.middlewares.js';
import {
  getTours,
  addTours,
  getTourById,
  editTour,
  deleteTour,
  aliasTopTours,
  getToursStats,
  getMonthlyPlan,
} from '../controllers/tour.controller.js';

const router = new Router();

router.get('/top-5-cheap', aliasTopTours, getTours);

router.get('/tour-stats', getToursStats);

router.get('/monthly-plan/:year', getMonthlyPlan);

router.route('/tours').get(getTours).post(addTourmiddleware, addTours);

router.route('/tours/:id').get(getTourById).put(editTour).delete(deleteTour);

export default router;
