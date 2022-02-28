import express from 'express';
import passport from 'passport';
import bookController from './book.controller';

export const bookRouter = express.Router();
bookRouter
  .route('/')
  .post(passport.authenticate('jwt', { session: false }), bookController.create)
  .get(passport.authenticate('jwt', { session: false }), bookController.findAll);

bookRouter
  .route('/:id')
  .get(passport.authenticate('jwt', { session: false }), bookController.findOne)
  .delete(passport.authenticate('jwt', { session: false }), bookController.delete)
  .put(passport.authenticate('jwt', { session: false }), bookController.update);



