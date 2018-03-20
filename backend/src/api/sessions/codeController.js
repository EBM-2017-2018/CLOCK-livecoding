const Session = require('./sessionModel');

module.exports = {};

module.exports.findAllUsersOfSession = (req, res) => {
  Session.find({ hash: req.params.hash }, (err, session) => {
    if (err) {
      return res.send(err);
    }
    if (!session) {
      return res.status(401)
        .send({
          success: false,
          message: 'Session does not exist',
        });
    }
    const users = session.users.map(obj => obj.user);
    return res.send({
      success: true,
      users,
    });
  });
}; // findAllUsersOfSession

module.exports.findUserSessionInfo = (req, res) => {
  console.log(`Getting all info relative to user ${req.user.username} in session ${req.params.hash}`);
  const result = {};
  Session.find({ hash: req.params.hash }, (err, session) => {
    if (err) {
      return res.send(err);
    }
    if (!session) {
      return res.status(401)
        .send({
          success: false,
          message: 'Session does not exist',
        });
    }

    result.hash = session.hash;
    result.creator = session.creator;
    result.created = session.created;
    result.name = session.name;

    result.users = [];
    session.users.forEach((usr) => {
      if (usr.user.username === req.user.username) {
        result.code = {
          hmtl: usr.html,
          css: usr.css,
          js: usr.js,
        };
      }
      return result.users.push(usr.user);
    });
    return res.send({
      success: true,
      result,
    });
  });
}; // findUserSessionInfo

module.exports.findUserCode = (req, res) => {
  console.log(`Getting code from ${req.params.username} for user ${req.user.username} in session ${req.params.hash}`);
  const result = {};
  Session.find({ hash: req.params.hash }, (err, session) => {
    if (err) {
      return res.send(err);
    }
    if (!session) {
      return res.status(401)
        .send({
          success: false,
          message: 'Session does not exist',
        });
    }
    result.success = true;

    session.users.forEach((usr) => {
      if (usr.user.username === req.params.username) {
        result.user = usr;
      }
    });
    return res.send({
      success: true,
      result,
    });
  });
}; // findUserSessionInfo

module.exports.updateCodeInSession = (req, res) => {
  console.log(`Updating the code for user ${req.user.username} in session ${req.params.hash}`);
  const { html, css, js } = req.body;
  let updatedUsers = {};
  Session.find({ hash: req.params.hash }, (err, session) => {
    if (err) {
      return res.send(err);
    }
    if (!session) {
      return res.status(401)
        .send({
          success: false,
          message: 'Session does not exist',
        });
    }
    updatedUsers = session.users.map((userWithCode) => {
      if (userWithCode.user.username === req.user.username) {
        const newUserWithCode = Object.assign({}, userWithCode);
        newUserWithCode.html = html;
        newUserWithCode.css = css;
        newUserWithCode.js = js;
        return newUserWithCode;
      }
      return userWithCode;
    });

    Session.findOneAndUpdate(
      { hash: req.params.hash },
      { $set: { users: updatedUsers } },
      { new: true },
      (err, session) => {
        if (err) {
          return res.send(err);
        }
        if (!session) {
          return res.status(401)
            .send({
              success: false,
              message: 'Session does not exist',
            });
        }
        return res.send({
          success: true,
        });
      },
    );

  });
}; // updateCodeInSession
