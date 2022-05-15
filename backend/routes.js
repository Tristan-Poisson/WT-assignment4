const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.get('/login', function (req, res, next) {
    db.query(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [req.params.email, req.params.password],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.post('/signup', (req, res, next) => {
    db.query(
      'INSERT INTO users (email, password) VALUES (?,?)',
      [req.params.email, req.params.password],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  router.get('/task', function (req, res, next) {
    db.query(
      'SELECT * FROM task WHERE user = ?',
      [req.params.user],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.post('/task', (req, res, next) => {
    db.query(
      'INSERT INTO task (title, description, priority, user) VALUES (?,?,?,?)',
      [req.params.title, req.params.description, req.params.priority, req.params.user],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.put('/task/:id', function (req, res, next) {
    db.query(
      'UPDATE events SET title=?, description=?, priority=? WHERE id=? AND user=?',
      [req.params.title, req.params.description, req.params.priority, req.params.id, req.params.user],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/task/:id', function (req, res, next) {
    db.query(
      'DELETE FROM task WHERE id=? AND user=?',
      [req.params.id, req.params.user],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;