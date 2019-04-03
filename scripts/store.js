'use strict';
/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    try {
      console.log(this);
      store.items.push(item);
    } catch(e) {
      console.log(e.message);
    }
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };


  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  // const findAndUpdate = function(id, newData){
  //   const item = 

  // }

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,
    findAndUpdate,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
  };
  
}());
