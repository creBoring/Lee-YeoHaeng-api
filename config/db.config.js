const mysql = require('mysql');
const AWS = require("aws-sdk");
AWS.config.update({region: 'ap-northeast-2'});

/*
 * SSM Parameter Store를 통해 암호화된 DB Credential 가져오기
 */
const ssm = AWS.SSM();
const params = {
  host: {
    Name: '/lyh/db/writer-host',
    WithDecryption: true
  },
  user: {
    Name: '/lyh/db/user',
    WithDecryption: true
  },
  password: {
    Name: '/lyh/db/password',
    WithDecryption: true
  },
  database: {
    Name: '/lyh/db/database',
    WithDecryption: true
  }
}

const host = await ssm.getParameter(params.host);
const user = await ssm.getParameter(params.user);
const password = await ssm.getParameter(params.password);
const database = await ssm.getParameter(params.database);

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  port: 3306,
  database: database
});

db.connect();

module.exports = db;
