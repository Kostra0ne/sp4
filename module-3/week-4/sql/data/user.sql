CREATE TABLE user (
    id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(128),
    id_departement INT(11),
    PRIMARY KEY (id),
    FOREIGN KEY fk_departement(id_departement)
        REFERENCES departement(departement_id)
        ON UPDATE CASCADE 
        ON DELETE SET NULL 
)


alter table utilisateur add foreign key (id_departement) references departement(departement_id);
