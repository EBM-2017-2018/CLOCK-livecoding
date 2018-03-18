const { Router } = require('express');

const router = new Router();

const sessionController = require('./sessionController');

const codeController = require('./codeController.js');

// get requests
router.get('/', sessionController.findAll);
router.get('/:hash', sessionController.findOne);

router.get('/users/:hash', codeController.findAllUsersOfSession);
router.get('/code/:hash/:userid', codeController.findUserSessionInfo);

// post requests
router.post('/', sessionController.create);

// put requests
router.put('/:hash/user', sessionController.insertNewUser);

router.put('/code/:hash/:userid/:code', codeController.putNewCodeForUserWithinSession);

// delete requests
router.delete('/:hash', sessionController.delete);
router.delete('/:hash/user', sessionController.removeUser);

module.exports = router;
