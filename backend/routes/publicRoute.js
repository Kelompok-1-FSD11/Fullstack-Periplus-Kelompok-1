import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

// Dummy data buku untuk demo
const books = [
    { id: 1, title: 'Book 1', description: 'Description of Book 1' },
    { id: 2, title: 'Book 2', description: 'Description of Book 2' }
];

// Endpoint untuk mendapatkan detail buku berdasarkan ID
router.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

router.post('/register', register);
router.post('/login', login);

export default router;
