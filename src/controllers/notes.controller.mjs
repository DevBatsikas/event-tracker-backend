import pool from '#src/database.mjs';

// GET
export const getAllNotes = async (req, res) => {
  try {
    const queryResult = await pool.query(
      `SELECT id, body FROM notes WHERE uid = $1 ORDER BY id DESC`,
      [req.params.uid]
    );

    if (queryResult.rowCount) res.status(200).json(queryResult.rows);
    else res.status(404).end();
  } catch (error) {
    console.error(error.message);
    res.status(500).end();
  }
};

// POST
export const addNote = async (req, res) => {
  try {
    await pool.query(`INSERT INTO notes (body, uid) VALUES ($1, $2)`, [
      req.body.body,
      req.body.uid,
    ]);

    res.status(201).end();
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

// PUT
export const editNoteBody = async (req, res) => {
  try {
    const queryResult = await pool.query(
      `UPDATE notes SET body = $1 WHERE id = $2 RETURNING id`,
      [req.body.body, req.body.id]
    );

    if (queryResult.rowCount) res.status(200).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error.message);
    res.status(500).end();
  }
};

// DELETE
export const deleteNote = async (req, res) => {
  try {
    const queryResult = await pool.query(
      `DELETE FROM notes WHERE id = $1 RETURNING id`,
      [req.body.id]
    );

    if (queryResult.rowCount) res.status(200).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error.message);
    res.status(500).end();
  }
};
