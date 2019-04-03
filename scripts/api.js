'use strict';

/*global */

const api = (function (){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/levi-kristof';

  function getItems(){
    return listApiFetch(BASE_URL + '/items');
  }

  function createItem(name) {

    const newItem = JSON.stringify({name});
    
    const options = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    };

    return listApiFetch(BASE_URL + '/items', options);
  }

  function updateItem(id, updateData){

    const options = {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    };

    return listApiFetch(BASE_URL + `/items/${id}`, options);
  }

  function deleteItem(id) {
    const options = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    };
    return listApiFetch(BASE_URL + `/items/${id}`, options);
  }

  function listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message =  data.message;
          return Promise.reject(error);
        }
        return data;
      });
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
    listApiFetch,
  };

}() );