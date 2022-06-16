import { Router } from 'express';
import {
  getAllNotes,
  addNote,
  editNoteBody,
  deleteNote,
} from '#controllers/notes.controller.mjs';

const router = Router();

// SELECT
router.get('/all/:uid', getAllNotes);

// INSERT
router.post('/add', addNote);

// UPDATE
router.put('/edit', editNoteBody);

// DELETE
router.delete('/delete', deleteNote);

export default router;
