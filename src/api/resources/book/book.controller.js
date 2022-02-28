import Joi from 'joi';
import Book from './book.model';

export default {
  async create(req, res) {
    try {
      const schema = Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        author: Joi.string().required(),
        rating: Joi.number()
          .integer()
          .min(0)
          .max(5)
          .optional(),
      });
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const book = await Book.create(value);
      return res.json(book);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async findAll(req, res) {
    try {
      const { page, perPage } = req.query;
      const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10,
      };
      const books = await Book.paginate({}, options);
      return res.json(books);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async findOne(req, res) {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ err: 'could not find book' });
      }
      return res.json(book);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const book = await Book.findOneAndRemove({ _id: id });
      if (!book) {
        return res.status(404).json({ err: 'could not find book' });
      }
      return res.json(book);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const schema = Joi.object().keys({
        title: Joi.string().optional(),
        description: Joi.string().optional(),
        author: Joi.string().optional(),
        rating: Joi.number()
          .integer()
          .min(0)
          .max(5)
          .optional(),
      });
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const book = await Book.findOneAndUpdate({ _id: id }, value, { new: true });
      if (!book) {
        return res.status(404).json({ err: 'could not find book' });
      }
      return res.json(book);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },



};