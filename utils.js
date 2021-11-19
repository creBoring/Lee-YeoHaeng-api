const AWS = require('aws-sdk');
const ssm = new AWS.SSM({region: 'ap-northeast-2'});

const getP = async (p) => {
  let request = await ssm.getParameter(p).promise();
  return request.Parameter.Value;
}

const getParameter = async (params) => {
  let response = await getP(params);
  console.log(response);
  return response;
}

module.exports = {
  getParameter
}
