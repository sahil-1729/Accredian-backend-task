CREATE DATABASE User;
USE User;

CREATE TABLE Users (
    userID INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    pass VARCHAR(255) NOT NULL CHECK(LENGTH(pass) > 8)
);

INSERT INTO Users (email, pass)
VALUES
('ramesh@outlook.com', 'ramesh7890'),
('Amrit', 'Amrit12092000');