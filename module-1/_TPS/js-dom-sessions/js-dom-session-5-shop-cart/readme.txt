-----------------------------------------------------------------------------------
JS - DOM - Session 5
-----------------------------------------------------------------------------------

# Itération 0

- Utiliser le html fourni comme base
- Le widget panier est une table HTML
- La balise tbody de la table sera remplie de tr depuis votre programme JS

-----------------------------------------------------------------------------------

# Itération 1 : Créer des lignes de produit

- Importer le tableau de produits en tout début de fichier js/shop-cart.js
- Le tableau à importer se trouve @ js/data/products.js
- Coder une fonction pour ajouter les produits au tbody de la table
- Utiliser tout ou partie du tableau de produits en argument de cette fonction

- Conseil: il sera utile d'identifier chaque ligne de produit, par exemple avec l'id présent sur chaque objet produit

-----------------------------------------------------------------------------------

# Itération 2 : Supprimer un produit

- Coder une fonction pour supprimer une ligne de produit au click sur l'icône correspondante
- Si tous les produits sont supprimés, ajouter une ligne indiquant que le panier est vide

-----------------------------------------------------------------------------------

# Itération 3 : Mettre à jour le prix unitaire

- Ecouter les events input sur chaque balise input de quantité
- Coder une fonction mettant à jour le prix de la ligne quand la quantité change

- Bonus: Vérifier que le stock est suffisant avant de mettre à jour le prix

-----------------------------------------------------------------------------------

# Itération 4 : Mettre à jour le prix total

- Coder une fonction pour mettre à jour le montant total du panier
- Cette fonction sera apellée lorsque :
-- la quantité unitaire (d'un produit) change
-- un produit est supprimé du panier

-----------------------------------------------------------------------------------

# Itération 5 : Bonus
- Intégrer votre widget shop-cart dans l'application FakeShop

-----------------------------------------------------------------------------------


