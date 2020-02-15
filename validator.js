/* eslint-disable semi */
/* eslint-disable no-extra-semi */
/* eslint-disable indent */
'use strict';
class ObjectValues {

    constructor(str, num, arr, obj, func, bool) {
  
      this.str = str;
      this.num = num;
      this.arr = arr;
      this.obj = obj;
      this.func = func;
      this.bool = bool;
    }
    objectKeys(input) {
        if (!Object.keys(input)) { return false };
        return true;
      }
      
      // what is my type of value in the keys ?!
      
     typeValues(input){
        
         if (!Object.values(input)){return false};
         return Object.values(input).every( inp => typeof inp === 'string' || typeof inp === 'number' || typeof inp ==='object' ) 
         
      }
      
      // i want to check if iside my value there is array and if there null or not 
      
     noValueInArray(input) {
        if (!Object.values(input)) { return false };       //// Object.values an array
        return Object.values(input).every(value =>  value === 'object' && value.length === 0)
      }
      
      // i want to check if my keys have a values 
      
      notEmptyValues(input) {
         if (Object.keys(input)) {Object.keys(input).every(value => {
              return this.isObject(value);
            })
        }
        return false;
      }
      
      //   return Object.values(input).every( inp => typeof inp === 'string' || typeof inp === 'number' || typeof inp ==='object' ) 
         
      // };
      
      valueInArray(input) {
         if (!Object.values(input)) { return false };
        return Object.values(input).every(value => typeof value === 'string' || typeof value === 'number')
      }
    }
    module.exports = ObjectValues ;