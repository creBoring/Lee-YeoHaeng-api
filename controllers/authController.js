/* 인증 관련 컨트롤러 */
'use strict';
const authService = require('../services/authService.js');


/*
* 로그인 기능
* 입력인자: user(String), password(String)
*/
const postLogin = async (req, res, next) => {
  const {id, pw} = req.body;
  let result = {};

  // Check id and pw are valid...
  if(!id || !pw) {
    result.message = "올바른 ID, PW 정보가 입력되지 않았습니다"
    res.status(400).send(result);
    console.log(result.message);

  } else {
    // Login Process ...
    try {
      const loginResult = await authService.login(id, pw);
      console.log(loginResult);
      if(loginResult.loginSuccess) {
        req.session.sessionID = loginResult.user.userId;
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

}


/*
* 테스트용
* 입력인자: (없음)
*/
const getTest = async (req, res) => {
  res.send("Hello Lee?")
}


module.exports = {
  postLogin: postLogin,
  getTest: getTest
}
