const spicedPg = require("spiced-pg");
// const bcrypt = require("./bcrypt");
// const {dbUser, dbPass} = require('/secrets');
// const compare = require("./bcrypt");
const db = spicedPg(
    process.env.DATABASE_URL ||
    `postgres://postgres:postgres@localhost:5432/nachspice`
);


module.exports.postGraduateRegistration = (first, last, cohort, email, password) => {
    return db.query(
        `INSERT INTO graduate(first, last, cohort, email, password)
        VALUES($1, $2, $3, $4, $5) RETURNING id;
                `,
        [first, last, cohort, email, password]
    );
};

module.exports.postClientRegistration = (first, last, company, email, password) => {
    return db.query(
        `INSERT INTO client(first, last, company, email, password)
        VALUES($1, $2, $3, $4 ,$5) RETURNING id;
                `,
        [first, last, company, email, password]
    );
};