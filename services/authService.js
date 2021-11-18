const { User } = require('../models');

const login = async (id, password) => {
  const result = {};
  const user = await User.findOne({
    where: { userId: id }
  });

  if (!user) {
    result.loginSuccess = false;
    result.message = "해당하는 ID가 존재하지 않습니다.";
    return result;
  }

  if (user.password !== password) {
      result.loginSuccess = false;
      result.message = "패스워드가 일치하지 않습니다.";
      return result;
  }

  result.loginSuccess = true;
  result.user = user;
  return result;
}

module.exports = {
  login
}
