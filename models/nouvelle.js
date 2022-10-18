const Model = require('./model');
module.exports =
    class nouvelle extends Model {
        constructor(categorie, titre, texte, imageUrl, date) {
            super();
            this.Categorie = categorie !== undefined ? categorie : "";
            this.Titre = titre !== undefined ? titre : "";
            this.Texte = texte !== undefined ? texte : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
            this.Date = date !== undefined ? date : "";

            this.setKey("Titre");
            this.addValidator('Titre', 'string');
            this.addValidator('Categorie', 'string');
            this.addValidator('Texte', 'string');
            this.addValidator('ImageUrl','string');
            this.addValidator('Date','string');
        }
    }