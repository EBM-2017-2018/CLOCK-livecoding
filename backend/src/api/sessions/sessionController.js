const Session = require('./sessionModel');

module.exports = {};

module.exports.findAll = (req, res) => {
  Session.find({}, (err, sessions) => {
    if (err) {
      return res.json(err);
    }
    if (!sessions) {
      return res.status(401)
        .json({
          success: false,
          message: 'There are no sessions',
        });
    }
    return res.json(sessions);
  });
}; // findAll

module.exports.findOne = (req, res) => {
  Session.findOne(
    { hash: req.params.hash },
    (err, session) => {
      if (err) {
        return res.json(err);
      }
      if (!session) {
        return res.status(401)
          .json({
            success: false,
            message: 'Session does not exist',
          });
      }
      return res.json(session);
    },
  );
}; // findOne

module.exports.create = (req, res) => {
  console.log(`Creating session with user: ${req.body.creatorid}`);
  const creator = req.body.creatorid;
  const session = new Session({ creatorid: creator });
  session.save((err) => {
    if (err) {
      return res.json(err);
    }
    return res.json(session);
  });
}; // create

module.exports.insertNewUser = (req, res) => {
  const firstName = 'firstNameFromLinkApp';
  const lastName = 'lastNameFromLinkApp';
  const userid = req.params.id;
  Session.update(
    { hash: req.params.hash },
    {
      $push: {
        users: {
          user: {
            userid,
            firstName,
            lastName,
          },
        },
      },
    },
    { runValidators: true },
    (err) => {
      if (err) {
        return res.json(err);
      }
      return res.json({
        userid,
        firstName,
        lastName,
      });
    },
  );
}; // inseertNewUser

module.exports.removeUser = (req, res) => {
  const firstName = 'firstNameFromLinkApp';
  const lastName = 'lastNameFromLinkApp';
  const userid = req.params.id;
  Session.update(
    { hash: req.params.hash },
    {
      $pull: {
        users: {
          user: {
            userid,
            firstName,
            lastName,
          },
        },
      },
    },
    { runValidators: true },
    (err) => {
      if (err) {
        return res.json(err);
      }
      return res.json({
        userid,
        firstName,
        lastName,
      });
    },
  );
}; // removeUser

module.exports.delete = (req, res) => {
  Session.deleteOne(
    { hash: req.params.hash },
    (err) => {
      if (err) {
        return res.json(err);
      }
      return res.json({ message: 'session supprimée' });
    },
  );
}; // delete
