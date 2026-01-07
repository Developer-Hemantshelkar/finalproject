CREATE DATABASE kheti_saathi;

USE kheti_saathi;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);
CREATE TABLE quiz_scores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_email VARCHAR(100),
  score INT,
  total INT
);
CREATE TABLE quiz_questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question TEXT,
  opt1 VARCHAR(255),
  opt2 VARCHAR(255),
  opt3 VARCHAR(255),
  opt4 VARCHAR(255),
  answer INT
);
