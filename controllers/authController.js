const authService = require('../services/authService.js');

const postLogin = async (req, res) => {
  const {user, password} = req.body;

  // Check id and pw are valid...
  // 소스코드 작성 필요

  try {
    await authService.login(user, password);
    res.sendStatus(200)  // with session token...

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500)

  }
}

module.exports = {
  postLogin: postLogin
}
