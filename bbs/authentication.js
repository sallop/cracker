'use strict';

class Authentication {
  constructor(db) {
    this.db_ = db;
  }
  validate(loginId, password) {
    const sql = `select * from users where name = '${loginId}' and password = '${password}'`;
    console.log(sql);
    return this.db_.each(sql)
      .then(rows => {
        console.log(rows);
        if (rows.length <= 0) {
          throw new Error('Login ID または Password が異なります');
        }
      });
  }
}

module.exports = Authentication;
