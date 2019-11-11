DROP TABLE IF EXISTS users;

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



DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    contact VARCHAR,
    description TEXT, 
    email TEXT REFERENCES client(email),
    phone INT,
    date DATE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pm INT REFERENCES graduate(id)
);





DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    contact VARCHAR,
    description TEXT, 
    email TEXT REFERENCES client(email),
    phone INT,
    date DATE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pm INT REFERENCES graduate(id)
);

DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    clientid INT NOT NULL REFERENCES users(id),
    projectname VARCHAR,
    contact VARCHAR,
    description TEXT, 
    email TEXT,
    phone INT,
    date DATE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pm INT REFERENCES graduate(id)
);


DROP TABLE IF EXISTS graduate;

CREATE TABLE graduate (
    id SERIAL PRIMARY KEY,
    graduateid INT NOT NULL REFERENCES users(id),
    cohort TEXT,
    phone INT,
    links TEXT,
    bio TEXT,
    available BOOLEAN default false,
    languages TEXT,
    preferences TEXT,
    strengths TEXT,
    profileimageurl TEXT,
    certificateurl TEXT
)

DROP TABLE IF EXISTS client;

CREATE TABLE client (  
    id SERIAL PRIMARY KEY, 
    clientid INT NOT NULL REFERENCES users(id),
    phone INT,   
    company VARCHAR NOT NULL,  
    department VARCHAR, 
    logo TEXT, 
    profileimageurl TEXT,  
    website TEXT);
