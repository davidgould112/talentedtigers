const express = require('express');
const router = express.Router();
const db = require ('../../models');
const { isAuthenticated, githubAuth } = require('./auth');

router.use(githubAuth.initialize());
router.use(githubAuth.session());
router.use(express.static(__dirname + '/../../client/'));

router.get('/api/auth/github', githubAuth.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/api/auth/github/callback', githubAuth.authenticate('github', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

if (process.env.URL !== 'http://127.0.0.1:3000') {
  router.use(isAuthenticated);
}

router.get('/api/tickets', db.findTickets);

router.get('/api/users/:id', (req, res) => {
  res.send(req.session.passport);
});

router.get('/api/tickets/:id', (req, res) => {

});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/api/tickets', db.createTicket);

router.post('/api/users', db.createUser);

router.put('/api/tickets/:id', db.updateTickets);

module.exports = router;
