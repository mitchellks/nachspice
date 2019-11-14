const spicedPg = require("spiced-pg");
// const bcrypt = require("./bcrypt");
// const {dbUser, dbPass} = require('/secrets');
// const compare = require("./bcrypt");
const db = spicedPg(
    process.env.DATABASE_URL ||
    `postgres://postgres:postgres@localhost:5432/nachspice`
);


module.exports.postRegistration = (first, last, cohort, email, password, regtype) => {
    return db.query(
        `INSERT INTO users(first, last, cohort, email, password, regtype)
        VALUES($1, $2, $3, $4, $5, $6) RETURNING id;
                `,
        [first, last, cohort, email, password, regtype]
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

module.exports.getProfile = id => {
    return db.query(
        `SELECT *
        FROM users
        WHERE id = $1`,
        [id]
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

module.exports.addGrad = (graduateid, phone, links, bio, available ) => {
    return db.query(

`INSERT INTO graduate(graduateid, phone, links, bio, available)
VALUES($1, $2, $3, $4, $5) returning graduateid;
                `,
        [graduateid, phone, links, bio, available]
    );
};

module.exports.addSkills = (graduateid, languages, frameworks, preferences, strengths ) => {
    return db.query(

`INSERT INTO graduateskills(graduateid, languages, frameworks, preferences, strengths)
VALUES($1, $2, $3, $4, $5);
                `,
        [graduateid, languages, frameworks, preferences, strengths]
    );
};




module.exports.editGrad = (graduateid, cohort, phone, links, bio, available, languages, frameworks, preferences, strengths, profileimageurl, certificateurl ) => {
    return db.query(
        `INSERT INTO graduate(graduateid, cohort, phone, links, bio, available,languages, frameworks, preferences, strengths, profileimageurl, certificateurl)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
                `,
        [graduateid, cohort, phone, links, bio, available, languages, frameworks, preferences, strengths, profileimageurl, certificateurl]
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



module.exports.getGraduate = graduateid => {
    return db.query(
        `SELECT *
        FROM graduate
        JOIN users
        ON (graduate.graduateid = users.id)
        WHERE graduate.graduateid = $1
        ORDER BY graduate.id DESC`,
        [graduateid]
    );
};


module.exports.getGraduateSkills = graduateid => {
    return db.query(
        `SELECT *
        FROM graduateskills
        WHERE graduateid = $1
        ORDER BY id DESC`,
        [graduateid]
    );
};

// module.exports.getProject = id => {
//     return db.query(
//         `SELECT *
//         FROM projects
//         WHERE id = $1`,
//         [id]
//     );
// };




module.exports.getProject = id => {
    return db.query(
        `SELECT * 
        FROM projects
        WHERE projects.id = $1`,
        [id]
    );
};

module.exports.getProject = (id) => {
    return db.query(
        `SELECT * 
        FROM projects
        WHERE clientid = $1 
       ORDER BY id DESC
        `,
        [id]
    );
};

// module.exports.getProject = id => {
//     return db.query(
//         `SELECT * 
//         FROM projects 
//         // JOIN users
//         // ON (projects.clientid = client.clientid) 
//         // JOIN graduate
//         // ON (projects.graduateid = graduate.graduateid)
        
//         WHERE projects.id = $1`,
//         [id]
//     );
// };


module.exports.getProjects = () => {
    return db.query(
        `SELECT * 
        FROM projects 
        JOIN client
        on (projects.clientid = client.clientid)
       ORDER BY date ASC
        `,
        []
    );
};

module.exports.getClientProjects = (id) => {
    return db.query(
        `SELECT * 
        FROM projects 
        JOIN client
        on (projects.clientid = client.clientid)
       WHERE client.clientid = $1
       ORDER BY date ASC
        `,
        [id]
    );
};


module.exports.addProject = (clientid, graduateid,  projectname,
    contact,
    description,
    email,
    phone,
    date) => {
    return db.query(
        `INSERT INTO projects (clientid, graduateid, projectname,
            contact,
            description,
            email,
            phone,
            date)
        VALUES($1, $2, $3, $4 ,$5, $6, $7, $8) RETURNING id;
                `,
        [clientid, graduateid, projectname,
            contact,
            description,
            email,
            phone,
            date]
    );
};

module.exports.addPortfolio = (graduateid,
    projectname,
         description,
         link,
         livesite,
         date,
         languages,
        frameworks,
    comments) => {
    return db.query(
        `INSERT INTO portfolios (graduateid,
            projectname,
                 description,
                 link,
                 livesite,
                 date,
                 languages,
                frameworks,
            comments)
        VALUES($1, $2, $3, $4 ,$5, $6, $7, $8, $9) RETURNING id;
                `,
        [graduateid,
            projectname,
                 description,
                 link,
                 livesite,
                 date,
                 languages,
                frameworks,
            comments]
    );
};


module.exports.getPortfolios = () => {
    return db.query(
        `SELECT * 
        FROM portfolios 
        JOIN graduate
        ON (portfolios.graduateid = graduate.graduateid)
       ORDER BY portfolios.id DESC
        `,
        []
    );
};

module.exports.getGraduatePortfolios = (id) => {
    return db.query(
        `SELECT * 
        FROM portfolios 
        JOIN graduate
        ON (portfolios.graduateid = graduate.graduateid)
        WHERE portfolios.graduateid = $1
       ORDER BY portfolios.id DESC
        `,
        [id]
    );
};

module.exports.getPortfolio = (id) => {
    return db.query(
        `SELECT * 
        FROM portfolios
        WHERE graduateid = $1 
       ORDER BY id DESC
        `,
        [id]
    );
};



module.exports.addImage = (userid, imageurl) => {
    return db.query(
      `  insert into images (userid, imageurl) VALUES ($1, $2) returning id `
        ,
        [userid, imageurl]
    );
};


// `UPDATE images 
//         SET imageurl =$2, logo = $3
//         WHERE userid = $1
//                 `

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

module.exports.getAvatar = (userid) => {
    return db.query(
        `SELECT * 
        FROM images
        WHERE userid = $1 
        ORDER BY id DESC
       
        `,
        [userid]
    );
};