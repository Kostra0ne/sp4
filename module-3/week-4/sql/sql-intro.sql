SHOW DATABASES;
USE villes_fr;
SHOW TABLES;
SELECT * FROM departement;
SELECT departement_code, departement_nom FROM departement;
SHOW INDEXES IN departement;
SELECT departement_nom_soundex FROM departement WHERE departement_id > 50 AND departement_id < 60;