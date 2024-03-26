CREATE DATABASE IF NOT EXISTS videotheque;
USE videotheque;
CREATE TABLE IF NOT EXISTS categorie(
    idCategorie integer AUTO_INCREMENT PRIMARY KEY,
    type varchar(50)
    );

INSERT INTO categorie (type) VALUES ("epouvante","comedie","action","aventure","thriller");  
    
CREATE TABLE IF NOT EXISTS film(
    idFilm integer AUTO_INCREMENT PRIMARY KEY,
    acteur varchar(50),
    realisateur varchar(50)
    );

INSERT INTO film (acteur, realisateur) VALUES ("Brad Pitt","spielberg"),("Leonardo Dicaprio","tarantino");
    
CREATE TABLE IF NOT EXISTS video(
    idVideo integer AUTO_INCREMENT PRIMARY KEY,
    NumVideo varchar(50),
    type_support varchar(50),
    titre varchar(50),
    film int,
    FOREIGN KEY(film) REFERENCES film(idFilm)
    );

    INSERT INTO video (NumVideo, type_support, titre) VALUES ("N°154825","DVD","Le revanche des Siths"),("N°48915","Cassette","Tortues Ninja");
    
CREATE TABLE IF NOT EXISTS adherent(
    idAdherent integer AUTO_INCREMENT PRIMARY KEY,
    nom varchar(50),
    prenom varchar(50)
    );

    INSERT INTO adherent (nom, prenom) VALUES ("Eboué","Fabrice"),("N'jijol","Thomas");
    
CREATE TABLE IF NOT EXISTS adresse(
    idAdresse integer AUTO_INCREMENT PRIMARY KEY,
    nomVoie varchar(50),
    typeVoie varchar(50),
    numBatiment varchar(50),
    codePostal varchar(10),
    Pays varchar(50)
    );

    INSERT INTO adresse (nomVoie,typeVoie,numBatiment,codePostal,Pays) VALUES ("Colonnel Moutarde","Avenue","3","59000","France"),("Louise Michel","Boulevard","5","13000","Fance");
    
CREATE TABLE IF NOT EXISTS appartient(
    idFilm int,
    idCategorie int,
    PRIMARY KEY (idFilm,idCategorie),
    FOREIGN KEY(idFilm) REFERENCES film(idFilm),
    FOREIGN KEY(idCategorie) REFERENCES categorie(idCategorie)
    );
    
CREATE TABLE IF NOT EXISTS location(
    date_location date,
    heure_location time,
    num_location varchar(50),
    idAdherent int,
    idVideo int,
    PRIMARY KEY(idAdherent, idVideo),
    FOREIGN KEY(idAdherent) REFERENCES adherent(idAdherent),
    FOREIGN KEY(idVideo) REFERENCES video(idVideo)
    );
    
    INSERT INTO location(date_location,heure_location,num_location,idAdherent,idVideo) VALUES ("1995-05-18","18:30","N°156108946","1","1"),("1980-09-30","09:58","N°4168146","2","2");

CREATE TABLE IF NOT EXISTS resider(
    idAdherent int,
    idAdresse int,
    PRIMARY KEY(idAdherent,idAdresse),
    FOREIGN KEY(idAdherent) REFERENCES adherent(idAdherent),
    FOREIGN KEY(idAdresse) REFERENCES adresse(idAdresse)
    );