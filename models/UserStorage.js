"use strict";

class UserStorage {
  static #users = {
       id: ["whansoo", "나개발", "김팀장"],
       psword: ["1234", "1234", "123456"],
       name: ["홍길동", "나개발", "김팀장"],
   };
 
   static getUsers(...fields) {
     const users = this.#users;
     const newUsers = fields.reduce((newUsers, fields) => {
         if (users.hasOwnProperty(fields)) {
             newUsers[fields] = users[fields];
         }
       return newUsers;
   }, {});
   return newUsers;
  }
}
module.exports = UserStorage;
