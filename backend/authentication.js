var crypto = require('crypto');
var fs = require('fs');
const basicAuth = require("express-basic-auth");
const jwt = require('jsonwebtoken');

// users holds user information that is backed up on file
let users = {};

// initialize users store from file
(() => {
    users = JSON.parse(fs.readFileSync('users.json', 'utf8')).users;
})()

var cookieToken = '';

const generateToken = (user) => {
    const token = jwt.sign({ id: users[user] }, 'flockparty', { expiresIn: '1h' });
    cookieToken = token;
    return token;
  };
  
  // Function to verify a JWT token
const verifyToken = (token) => {
    try {
      const decoded = jwt.verify(token, 'flockparty');
      return decoded;
    } catch (err) {
      return null;
    }
  };

// performs a SHA256 hash of a string
const sha256 = x => crypto.createHash('sha256').update(x, 'utf8').digest('hex');

// looks for the username/password combo in the users store
const authenticator = (user, password) => {
    console.log('running');
    if(!users[user] || !user || !password){
    console.log(false); 
    return false;
    }
    const token = generateToken(user);
    console.log(token);
    return token;
}

// write the users store to file
const writeUsers = (_users) => {
    const data = {
        users: _users 
    }
    var json = JSON.stringify(data);
    fs.writeFile("users.json", json, function (err, result) {
        if (err) {
            console.log("error", err);
        } else {
            console.log("Successfully wrote users");
        }
    });
}

// update or insert a user object to the store
// returns true/false to indicate success of the operation
const upsertUser = (username, password, userDetail) => {
    if(users[username]) {
        if(basicAuth.safeCompare(sha256(password), users[username].passwordHash)) {
            users[username] = { ...users[username], ...userDetail };
        } else {
            console.log("incorrect password in upsertUser");
            return false;
        }
    } else {
        users[username] = {
            ...userDetail,
            passwordHash: sha256(password),
            Cart_items: []
        }
    }
    writeUsers(users);
    return true;
}


// express middleware for validating `user` cookie against users store
const cookieAuth = (req, res, next) => {
    console.log('auth cookie');
    console.log(cookieToken);
    const token = cookieToken;
    if(!token || !verifyToken(token)) {
        res.sendStatus(401);
    } else {
        console.log('it worked bitch');
        next();
    }
}

module.exports = { authenticator, upsertUser, cookieAuth }