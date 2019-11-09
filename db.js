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






module.exports.getPasswordGrad = email => {
    return db.query(
        `SELECT password
        FROM graduate 
        WHERE email = $1`,
        [email]
    );
};

module.exports.getPasswordClient = email => {
    return db.query(
        `SELECT password
        FROM client 
        WHERE email = $1`,
        [email]
    );
};

module.exports.getClientId = email => {
    return db.query(
        `SELECT *
        FROM client
        WHERE email = $1`,
        [email]
    );
};

module.exports.getGraduateId = email => {
    return db.query(
        `SELECT *
        FROM graduate
        WHERE email = $1`,
        [email]
    );
};


module.exports.getClient = id => {
    return db.query(
        `SELECT *
        FROM client
        WHERE id = $1`,
        [id]
    );
};



module.exports.getGraduate = id => {
    return db.query(
        `SELECT *
        FROM client
        WHERE id = $1`,
        [id]
    );
};