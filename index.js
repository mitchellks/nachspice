/* eslint-disable indent */
const express = require('express');
const app = express();
const compression = require('compression');
const csurf = require("csurf");
// import { Box, Grommet } from "grommet";

const server = require('http').Server(app);
const io = require('socket.io')(server, { origins: 'localhost:8080' });

// const helmet = require('helmet')
// const cookieSession = require("cookie-session");
const multer = require("multer");
const uidSafe = require("uid-safe");
const path = require("path");
// const s3 = require("./s3");
// const {
//     s3Url
// } = require("./config");

const {
    postRegistration,

    postClientRegistration,
    postGraduateRegistration,
    getPassword,
    getId,
    
    getClient,
    editClient,
    getGraduate,
    addGrad,
    addClient,
    addProject,
    getProject,
    getProjects,
    editGrad,
    addCohort,
    addPortfolio,
    getPortfolios,
    getPortfolio

} = require("./db");

// const postMessage = require("./actions");

const {
    hash,
    compare
} = require("./bcrypt");

const diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function(req, file, callback) {
        uidSafe(24).then(function(uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    }
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 6291456
    }
});


//middleware
app.use(
    express.urlencoded({
        extended: false
    })
);

const cookieSession = require('cookie-session');
const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 90
});

app.use(cookieSessionMiddleware);
io.use(function(socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});
// CSURF SHOULD BE AFTER URLENCODED AND BEFORE OTHER MIDDLEWARE ^^^
app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

app.use((req, res, next) => {
    res.set("x-frame-options", "deny");
    res.locals.csrfToken = req.csrfToken();
    next();
});

// axios.post('/login', { email, password }, {
//     xsrfCookieName: 'mytoken',
//     xsrfHeaderName: 'csrf-token' // the csurf middleware automatically checks this header for the token
// });

app.use(express.json());

app.use(compression());

app.use((req, res, next) => {
    console.log("middleware check");
    console.log("req.url: ", req.url);
    next();
});



// app.use(helmet());

app.use(function(req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// app.use(express.static("./"));
app.use(express.static("./public"));


if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("/welcome", function(req,res) {
    if (req.session.userId) {
        res.redirect("/"); 
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});


app.post("/clientregister", (req, res) => {
    let {
        first,
        last,
        email,
        password,
        // regtype
    } = req.body;
    let regtype = "client";

    console.log(req.body);
    hash(password)
        .then(result => {
            password = result;
            return password;
        })
        .then(password => {
            postRegistration(first, last, email, password, regtype)
                .then(result => {
                    req.session.userId = result.rows[0].id;
                    console.log("result.rows[0]", result.rows[0]);
                    console.log("should match the below")
                    console.log("req.session.userId", req.session.userId);
                    res.json({
                        success: true
                    });
                })
                .catch(error => {
                    res.sendStatus(500);
                    console.log("client registation catch", error);
                    return res.render("registration error", {
                        error: true
                    });
                });
        });
});

app.post("/gradregister", (req, res) => {
    let {
        first,
        last,
        email,
        password,
        
    } = req.body;
    let regtype = "graduate";
    
    // if (input.value == input.graduate) {
    //     regtype.value = "graduate";
    // var regtpe = document.getElementById('hdNomValue').Value;
    // if (nom) {
    //     // logic here 
    // }
    hash(password)
        .then(result => {
            password = result;
            return password;
        })
        .then(password => {
            postRegistration(first, last, email, password, regtype)
                .then(result => {
                    req.session.userId = result.rows[0].id;
                    console.log("result.rows[0].id", result.rows[0].id);
                    console.log("should match the below")
                    console.log("req.session.userId", req.session.userId);
                    res.json({
                        success: true
                    });
                })
                .catch(error => {
                    res.sendStatus(500);
                    console.log("client registation catch", error);
                    return res.render("registration error", {
                        error: true
                    });
                });
        });
});


        app.post("/login", (req, res) => {
            let {
                email,
                password
            } = req.body;
            let hashedPass;
            console.log("email:", email, password);

        getPassword(email)
        .then(({
            rows
        }) => {
            console.log(rows);
            hashedPass = rows[0].password;
            return hashedPass;
        })
        .then(hashedPass => {
            return compare(password, hashedPass);
        })
        .then(matches => {
            if (matches) {
                getId(email).then(id => {
                    req.session.userId = id.rows[0].id;
                    res.json({
                        success: true
                    });
                });
                
            } else {
                return res.sendStatus(500);
            }
        })
        .catch(error => {
            console.log(error);
            return res.sendStatus(500)
            ;
        });
});



app.post("/api/addclient", (req, res) => {
    const id = req.session.userId;
    let clientid = id;
    console.log("editclient", req.body);
   let {
    phone, company, department, logo, profileimageurl, website
   } = req.body;
   addClient( clientid, phone, company, department, logo, profileimageurl, website)
        .then(result => {
            console.log("addClient result.rows[0]", result.rows[0]);
                    console.log("should match the below", id);
                    console.log("req.session.userId", req.session.userId);
                    res.json({
                        success: true
                    });
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

app.post("/api/addgrad", (req, res) => {
    let id = req.session.userId;
    let graduateid = id;
    let {
       cohort, 
       phone,
    links,
     bio,
      available,
       languages,
       frameworks,
        preferences,
         strengths,
          profileimageurl,
           certificateurl
    } = req.body;

    addGrad(graduateid, cohort, phone, links, bio, available, languages, frameworks, preferences, strengths, profileimageurl, certificateurl)
        .then(result => {
            // console.log("addGrad result.rows", result.rows);
                    console.log("should match the below", id);
                    console.log("req.session.userId", req.session.userId);
                    res.json({
                        success: true
                    });
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

app.post("/api/editgrad", (req, res) => {
    let id = req.session.userId;
    let graduateid = id;
    let {
       cohort, 
       phone,
    links,
     bio,
      available,
       languages,
       frameworks,
        preferences,
         strengths,
          profileimageurl,
           certificateurl
    } = req.body;

    editGrad(graduateid, cohort, phone, links, bio, available, languages, frameworks, preferences, strengths, profileimageurl, certificateurl)
        .then(result => {
            console.log("addGrad result.rows[0]", result.rows[0]);
                    console.log("should match the below", id);
                    console.log("req.session.userId", req.session.userId);
                    res.json({
                        success: true
                    });
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});



app.get("/api/getClient", (req, res) => {
    const id = req.session.userId;
    console.log("id in /getClient req", id );
    getClient(id)
    
        .then(result => {
            res.json(result.rows[0]);
            console.log(result.rows[0]);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });	        
});

app.get("/api/getGraduate", (req, res) => {
    const id = req.session.userId;
    
    console.log("id in /getGraduate req", id );
    getGraduate(id)
    
        .then(result => {
            res.json(result.rows[0]);
            console.log(result.rows[0]);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });	        
});



app.post("/api/addproject", (req, res) => {
   let clientid = req.session.userId;
   let graduateid = req.session.userId;

    let {  
        
        projectname,
            contact,
            description,
            email,
            phone,
            date } = req.body;
    
    // console.log("bio", req.body);
    // var bio = req.body.bio;
    addProject(clientid, graduateid, projectname,
        contact,
        description,
        email,
        phone,
        date)
        .then( result  => {
            console.log ("result", result);
            res.json({
                success: true
            });
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

app.get("/api/getProject", (req, res) => {
    const id = req.session.userId;
    getProject(id)
        .then(result => {
            res.json(result.rows[0]);
            // res.json(result.rows[1]);
            console.log(result.rows[0]);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });	        
});

// app.get("/api/getProject", (req, res) => {
    
//     const id = req.session.userId;
//     // console.log("id in /getProject req", id );
//     getProject(id)
    
//         .then(result => {
//             res.json(result.rows[0]);
//             console.log(result.rows[0]);
//         })
//         .catch(err => {
//             console.log(err);
//             res.sendStatus(500);
//         });	        
// });

app.get("/api/getProjects", (req, res) => {
    
    getProjects()
    
        .then(result => {
            res.json(result.rows);
            console.log(result.rows);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });	        
});


app.post("/api/addportfolio", (req, res) => {
   
    let graduateid = req.session.userId;
 
     let { 
        projectname,
             description,
             link,
             livesite,
             date,
             languages,
            frameworks,
        comments } = req.body;
        addPortfolio(graduateid, projectname,
        description,
        link,
        livesite,
        date,
        languages,
       frameworks,
   comments )
         .then( result  => {
             console.log ("result", result);
             res.json({
                 success: true
             });
         })
         .catch(err => {
             console.log(err);
             res.sendStatus(500);
         });
 });

 app.get("/api/getPortfolios", (req, res) => {
    
    getPortfolios()
    
        .then(result => {
            res.json(result.rows);
            console.log(result.rows);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });	        
});

app.get("/api/getPortfolio", (req, res) => {
    const id = req.session.userId;
    getPortfolio(id)
    
        .then(result => {
            res.json(result.rows[0]);
            console.log(result.rows[0]);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });	        
});

app.get('*', function(req, res) {
    if (!req.session.userId){
        res.redirect("/welcome");
    } else {      
        res.sendFile(__dirname + '/index.html');
    }
});

app.get("/logout", (req, res) => {
    // cookieSessionMiddleware = null;
   req.session = null;
    res.redirect("/");
});


server.listen(8080, function() {
    console.log("FINAL PROJECT SERVER IS WORKING");
});


