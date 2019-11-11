const spicedPg = require("spiced-pg");
// const bcrypt = require("./bcrypt");
// const {dbUser, dbPass} = require('/secrets');
// const compare = require("./bcrypt");
const db = spicedPg(
    process.env.DATABASE_URL ||
    `postgres://postgres:postgres@localhost:5432/nachspice`
);


module.exports.postRegistration = (first, last, email, password, regtype) => {
    return db.query(
        `INSERT INTO users(first, last, email, password, regtype)
        VALUES($1, $2, $3, $4, $5) RETURNING id;
                `,
        [first, last, email, password, regtype]
    );
};



module.exports.getPassword = email => {
    return db.query(
        `SELECT password
        FROM users 
        WHERE email = $1`,
        [email]
    );
};


module.exports.getId = email => {
    return db.query(
        `SELECT *
        FROM users
        WHERE email = $1`,
        [email]
    );
};

// module.exports.getGraduateId = email => {
//     return db.query(
//         `SELECT *
//         FROM graduate
//         WHERE email = $1`,
//         [email]
//     );
// };

module.exports.addGrad = (graduateid, cohort, phone, links, bio, available, languages, preferences, strengths, profileimageurl, certificateurl ) => {
    return db.query(
        `INSERT INTO graduate(graduateid, cohort, phone, links, bio, available,languages, preferences, strengths, profileimageurl, certificateurl)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id;
                `,
        [graduateid, cohort, phone, links, bio, available, languages, preferences, strengths, profileimageurl, certificateurl]
    );
};



module.exports.addClient = (clientid, phone, company, department, logo, profileimageurl, website    ) => {
    return db.query(
        `INSERT INTO client(clientid, phone, company, department, logo, profileimageurl, website)
        VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id;
                `,
        [clientid, phone, company, department, logo, profileimageurl, website]
    );
};


module.exports.getClient = clientid => {
    return db.query(
        `SELECT *
        FROM client 
        JOIN users
        ON (clientid = users.id)
        WHERE clientid = $1`,
        [clientid]
    );
};



module.exports.getGraduate = id => {
    return db.query(
        `SELECT *
        FROM graduate
        WHERE id = $1`,
        [id]
    );
};


module.exports.getProject = id => {
    return db.query(
        `SELECT *
        FROM project
        WHERE id = $1`,
        [id]
    );
};

module.exports.postProject = (contact, description, company, email, password) => {
    return db.query(
        `INSERT INTO client(first, last, company, email, password)
        VALUES($1, $2, $3, $4 ,$5) RETURNING id;
                `,
        [first, last, company, email, password]
    );
};

// CREATE TABLE projects (
//     id SERIAL PRIMARY KEY,
//     contact VARCHAR,
//     description TEXT, 
//     email TEXT REFERENCES client(email),
//     phone INT,
//     date DATE, 
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     pm INT REFERENCES graduate(id)
// );