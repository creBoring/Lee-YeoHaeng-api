const crypto = require('crypto');
const { User } = require('../models');

const ITERATIONS = 14235;
const KEY_LEN = 64;


/* Login Function */
const login = async (id, password) => {
  const result = {};

  try {
    const user = await User.findOne({
      where: { userId: id }
    });

    if (!user) {
      result.isSuccess = false;
      result.message = "해당하는 ID가 존재하지 않습니다.";
      return result;
    }

    const hashedPw = crypto.pbkdf2Sync(password, user.salt, ITERATIONS, KEY_LEN, 'sha512').toString('base64');
    if (user.password !== hashedPw) {
        result.isSuccess = false;
        result.message = "패스워드가 일치하지 않습니다.";
        return result;
    }

    result.isSuccess = true;
    result.user = user;

  } catch(e) {
    result.isSuccess = false;
    result.message = "예기치 못한 에러가 발생했습니다.";

  }

  return result;
}


/* Register User Function */
const register = async (data) => {
  const result = {};

  try {
    const salt = crypto.randomBytes(KEY_LEN).toString('base64');
    const hashedPw = crypto.pbkdf2Sync(data.password, salt, ITERATIONS, KEY_LEN, 'sha512').toString('base64');
    data.password = hashedPw;
    data.salt = salt;

    const user = await User.create(data);

    result.isSuccess = true;
  } catch(e) {
    result.isSuccess = false;
    result.message = "예기치 못한 에러가 발생했습니다.";

  }

  return result;
}


module.exports = {
  login: login,
  register: register
}
