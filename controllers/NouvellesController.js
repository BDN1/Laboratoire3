const Repository = require('../models/repository');
const NouvelleModel = require('../models/nouvelle');

module.exports =
    class WordsController extends require('./Controller') {
        constructor(HttpContext) {
            super(HttpContext, new Repository(new NouvelleModel()));
        }
    }