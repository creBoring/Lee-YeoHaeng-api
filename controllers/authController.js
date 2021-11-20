/* 인증 관련 컨트롤러 */
'use strict';
const authService = require('../services/authService.js');


/*
* 로그인 기능
* 입력인자: user(String), password(String)
*/
const postLogin = async (req, res, next) => {
  const {userId, password} = req.body;
  let result = {};

  // Check id and pw are valid...
  if(!userId || !password) {
    result.message = "올바른 ID, PW 정보가 입력되지 않았습니다"
    res.status(400).send(result);

  // Login Process ...
  } else {
    try {
      const loginResult = await authService.login(userId, password);
      if(loginResult.isSuccess) {
        req.session.is_logined = true;
        req.session.userId = loginResult.user.userId;
        req.session.save();
        res.sendStatus(200);
      } else {
        result.message = loginResult.message;
        res.status(401).send(result);
      }

    } catch(e) {
      console.log(e.message);
      result.message = "예기치 못한 에러가 발생했습니다.";
      res.status(400).send(result);
    }
  }
}

/*
* 회원가입 기능
* 입력인자: user
*/
const postRegister = async (req, res) => {
  const data = req.body;
  let result = {};

  // Register User Process ...
  try {
    const registerResult = await authService.register(data);
    console.log(registerResult);
    if(registerResult.isSuccess) {
      res.sendStatus(200);
    } else {
      result.message = "회원가입에 실패했습니다.";
      res.status(400).send(result);
    }

  } catch(e) {
    console.log(e.message);
    result.message = "예기치 못한 에러가 발생했습니다.";
    res.status(400).send(result);
  }
}


module.exports = {
  postLogin: postLogin,
  postRegister: postRegister
}
