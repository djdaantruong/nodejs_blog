const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

//tính chất của router là met từ trên xuống dưới và chỉ met một cái mà thôi
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show);

module.exports = router;
