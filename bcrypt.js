const bcrypt = require("bcryptjs");

let {
    hash,
    genSalt,
    compare
} = require('bcryptjs');

const {
    promisify
} = require('util');

hash = promisify(hash);
genSalt = promisify(genSalt);
compare = promisify(compare);

genSalt().then(
    salt => {
        console.log(salt);
        return hash("test", salt);
    }
)

;
exports.hash = password => genSalt().then(salt => hash(password, salt));
exports.compare = promisify(bcrypt.compare);