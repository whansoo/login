"use strict";

const { userInfo } = require("os");

const fs = require("fs").promises;

class UserStorage {
   static getUsers(...fields) {
    // const users = this.#users;
     const newUsers = fields.reduce((newUsers, fields) => {
         if (users.hasOwnProperty(fields)) {
             newUsers[fields] = users[fields];
         }
       return newUsers;
   }, {});
   return newUsers;
  }
  static getUsersInfo(id) {
     
    return fs.readFile("./databases/users.json")
       .then((data) => {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userskeys = Object.keys(users); // =>[id, psword, name]
        const userInfo = userskeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
           return newUser;
           }, {});
      
       return userInfo;
    })
    .catch(console.error);
    
      
  }

static save(userInfo) {
  //const users = this.#users;
  users.id.push(userInfo.id);
  users.name.push(userInfo.name);

}



}
module.exports = UserStorage;
