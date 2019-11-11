

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
