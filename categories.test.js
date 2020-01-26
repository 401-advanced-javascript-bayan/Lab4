'use strict';

const Categories = require('../categories/categories.js');
const validator = require('../validator.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });
//////////////////// post//////////////////
  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  }); /////////////// get //////////////////

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      })
      .catch(e => console.error('ERR', e));
  }); ////////////// update ////////////////////

  it('can update() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        categories.get(record)
        categories.update(record._id,record)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            })
          })
      })
      .catch(e => console.error('ERR', e));
  });  
 //////////////////// delete////////////////
  it('can delete() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        categories.get(record)
        categories.delete(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            })
          })
      })
      .catch(e => console.error('ERR', e));
    }); 

}); 