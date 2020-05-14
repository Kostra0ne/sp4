
# MONGO-DB (SGBD: Système de Gestion de Bases de données, DBMS: Database Management System)

Le but du jeu des sgbd , c'est de nous donner les outils pour coder la partie C.R.U.D de nos applications
Create
Read
Update
Delete


- DATABASES
-- COLLECTIONS 
---- DOCUMENTS (BSON : Binary JSON)
------ FIELDS (champs)

- my-shop (database)
-- users (collection)
---- documents:
[{
    _id: ObjectId("kskdsnldnlsldsld231"),
    username: "toto",
    email: "foo@bar".com"
},
{
    _id: ObjectId("jsjkasnijsiakknsoa23"),
    username: "titi",
    email: "foo@bar".io"
},
{
    _id: ObjectId("ls23?DL00SSLDHDddldl"),
    username: "tata",
    email: "foo@bar".org"
},
{
    _id: ObjectId("23KKSKS34242JSJSJ3399"),
    username: "tutu",
    email: "foo@bar".biz"
}]

-- products (collection)
---- documents:
[
    {
        _id: ObjectId("JDJDKDLDL"),
        name: "Console nintendo Switch",
        price: 329,
        stock: 10,
        ref: "NTDO-S12343920"
    },
    {...},
    {...},
    {...},
    {...},
    {...},
]

etc...
-- orders (collection)
-- bills (collection)