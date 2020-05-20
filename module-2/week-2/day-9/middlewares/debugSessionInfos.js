module.exports = function debugSessionInfos(req, res, next) {
  console.log("------ WHAT'S IN SESSION ??? -------");
  console.log(req.session);
  console.log("------ LOGGED IN USER ??? -------");
  console.log(req.session.currentUser);
  next();
};
