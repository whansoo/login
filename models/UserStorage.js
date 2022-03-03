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
  static getUsersInfo(id) {
      const users = this.#users;
      const idx = users.id.indexOf(id);
      const userskeys = Object.keys(users); // =>[id, psword, name]
      const userInfo = userskeys.reduce((newUser, info) => {
          newUser[info] = users[info][idx];
          return newUser;
      }, {});
      return userInfo;
  }
}
module.exports = UserStorage;
