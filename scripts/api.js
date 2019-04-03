'use strict';

/*global */

const api = (function (){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/levi-kristof';

  function getItems(){
    return fetch(BASE_URL + '/items');
  }

  function createItem (name){

    const newItem = JSON.stringify({name});

    const options = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    };

    return fetch(BASE_URL + '/items', options);
  }

  function updateItem (id, updateData){

    const options = {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    };

    return fetch(BASE_URL + `/items/${id}`, options);
  }

  return {
    getItems,
    createItem,
    updateItem,
  };

}() );