'use strict';
/* global shoppingList, store, Item, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
  shoppingList.render();

});

api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[1];
    return api.updateItem(item.id, { 
      name: 'foobar' 
    });
  })
  .then(res => res.json())
  .then(() => console.log('updated!'));
