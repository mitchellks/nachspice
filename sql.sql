DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
first VARCHAR NOT NULL,
last VARCHAR NOT NULL,
email TEXT NOT NULL UNIQUE,
password VARCHAR NOT NULL,
regtype TEXT NOT NULL
);


CREATE TABLE friendships (
    id SERIAL PRIMARY KEY,
    sender_id INT, 
    receiver_id INT, 
    accepted BOOLEAN default false, 
    created_at TIMESTAMP
);

DROP TABLE friendships;

CREATE TABLE friendships (
    id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL REFERENCES users(id),
    receiver_id INT NOT NULL REFERENCES users(id),
    accepted BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    clientid INT,
    graduateid INT,
    projectname VARCHAR,
    contact VARCHAR,
    description TEXT, 
    email TEXT,
    phone INT,
    date DATE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pm INT,
    stage VARCHAR,
    visible BOOLEAN DEFAULT FALSE

);

ALTER TABLE projects 
    ADD COLUMN stage VARCHAR,
    ADD COLUMN visible BOOLEAN DEFAULT FALSE;



DROP TABLE IF EXISTS graduate CASCADE;

CREATE TABLE graduate (
    id SERIAL PRIMARY KEY,
    graduateid INT NOT NULL REFERENCES users(id),
    cohort TEXT,
    phone INT,
    links TEXT,
    bio TEXT,
    available BOOLEAN default false,
    languages TEXT,
    frameworks TEXT,
    preferences TEXT,
    strengths TEXT,
    profileimageurl TEXT,
    certificateurl TEXT
);

DROP TABLE IF EXISTS client CASCADE;

CREATE TABLE client (  
    id SERIAL PRIMARY KEY, 
    clientid INT NOT NULL REFERENCES users(id),
    phone INT,   
    company VARCHAR NOT NULL,  
    department VARCHAR, 
    logo TEXT, 
    profileimageurl TEXT,  
    website TEXT);

DROP TABLE IF EXISTS languages;

CREATE TABLE languages (  
    id SERIAL PRIMARY KEY, 
    language VARCHAR
    );

DROP TABLE IF EXISTS frameworks;

CREATE TABLE frameworks (  
    id SERIAL PRIMARY KEY, 
    framework VARCHAR
    );

DROP TABLE IF EXISTS cohort;
 
CREATE TABLE cohort (
    cohort VARCHAR 
);

DROP TABLE IF EXISTS portfolios;

CREATE TABLE portfolios (
    id SERIAL PRIMARY KEY,
    graduateid INT,
    projectname VARCHAR,
    description TEXT, 
    link TEXT,
    livesite TEXT,
    date DATE, 
    languages TEXT,
    frameworks TEXT,
    comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



graduateid,
            projectname,
                 contact,
                 description,
                 link,
                 date,
                 languages,
                frameworks,
            comments