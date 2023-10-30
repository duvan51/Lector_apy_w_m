CREATE DATABASE conector;

use conector;  //esto es para acceder a la base de datos

CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    email VARCHAR(255),
    tiendaWocomerce_id int,
    tiendaMercadolibre_id int,
    foreign key (tiendaWocomerce_id) REFERENCES tiendaWocomerce(id),
    foreign key (tiendaMercadolibre_id) REFERENCES tiendaMercadolibre(id) 
);

CREATE TABLE tiendaWocomerce(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    url_tienda VARCHAR(100),
    consumer_key VARCHAR(100),
    consumer_secret VARCHAR(100),
    version_tienda VARCHAR(100) 
);


CREATE TABLE tiendaMercadolibre(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    client_id VARCHAR(100),
    client_secret VARCHAR(100),
    code VARCHAR(100),
    redirect_uri VARCHAR(100)
);


INSERT INTO user (id , nombre , email) VALUES ('duvan','duvan@gmail.com');
INSERT INTO user (nombre, email) VALUES ('kevin','kevin@gmail.com');
INSERT INTO user (nombre, email) VALUES ('dumar','dumar@gmail.com');
INSERT INTO user (nombre, email) VALUES ('aval','aval@gmail.com');
INSERT INTO user (nombre, email) VALUES ('electromusical','electromusical@gmail.com');
INSERT INTO user (nombre, email) VALUES ('electricosaval','electricosaval@gmail.com');

INSERT INTO tiendaWocomerce