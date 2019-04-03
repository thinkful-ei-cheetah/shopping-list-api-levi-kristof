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

    fetch(BASE_URL + '/item', options);
  }

  return {
    getItems,
    createItem,
  };

}() );