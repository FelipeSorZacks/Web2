CREATE DATABASE node_crud;
USE node_crud;

-- Tabla para el login
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Tabla para informacion lista de personas
CREATE TABLE lista(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100),
    edad INT,
    trabajo VARCHAR(100)
);


INSERT INTO lista (nombre, correo, edad, trabajo) VALUES
('Juan Pérez', 'juan@email.com', 28, 'Ingeniero'),
('María López', 'maria@email.com', 32, 'Doctora'),
('Carlos Ruiz', 'carlos@email.com', 25, 'Diseñador');