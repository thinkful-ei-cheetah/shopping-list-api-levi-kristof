'use strict';
/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    try {
      store.items.push(item);
    } catch(e) {
      console.log(e.message);
    }
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };


  const findAndDelete = function(id) {
    const itemIndex = this.items.findIndex(item => item.id === id);
    this.items.splice(itemIndex, 1);
  };

  const findAndUpdate = function(id, newData) {
      Object.assign(store.items.find(item => item.id === id), newData);
  };

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

  const setError = function() {
    
  };

  let error = null;

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    error,

    addItem,
    findById,
    findAndUpdate,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    setError,
  };
  
}());
