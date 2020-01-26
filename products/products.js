'use strict';

const DataModel = require('../memory-data-model.js');

class Product extends DataModel {

    constructor()
    {
        super();
        this.schema = {
            category_id : { type : 'string', required : true},
            price : { type : 'number', required : true},
            weight : Number,
            quantity_in_stock : { type : 'number',required : true}
        }
    }  
} 

module.exports = Product ;