
function myEach(collection, alert) {
    
    if(Array.isArray(collection)){
        for(let i=0; i< collection.length; i++){
            alert(collection[i])
        }
    }else { 
        const modifiedCollection = Object.values(collection)
        for(let i=0; i< modifiedCollection.length; i++){
            alert(modifiedCollection[i])
        }
    }
    return collection
}

function myMap(collection, alert) {
    if (Array.isArray(collection)) {
      const tripled = []; 
  
      for (let i = 0; i < collection.length; i++) {

        tripled.push(alert(collection[i]));
      }
  
      return tripled; 
    } else {
        const tripled =[]
        const modifiedCollection = Object.values(collection)
        
        for(let i=0; i< modifiedCollection.length; i++){
            tripled.push(alert(modifiedCollection[i]));
    }
    return tripled
  }
}

function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
      if (typeof acc === 'undefined') {
        acc = collection[0];
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i]);
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i]);
        }
      }
    } else {
      const keys = Object.keys(collection);
      if (typeof acc === 'undefined') {
        acc = collection[keys[0]];
        for (let i = 1; i < keys.length; i++) {
          const key = keys[i];
          acc = callback(acc, collection[key]);
        }
      } else {
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          acc = callback(acc, collection[key]);
        }
      }
    } 

    return acc;
  }

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]; 
        }
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (predicate(collection[key])) {
          return collection[key]; 
        }
      }

    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      const filteredArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          filteredArray.push(collection[i]);
        }
      }
      return filteredArray;
    } else  {
      const filteredArray = [];
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (predicate(collection[key])) {
          filteredArray.push(collection[key]);
        }
      }
      return filteredArray;
    } 
}

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    } 
  }
  
  function myFirst(array, n) {
    if (typeof n === 'number' && n >= 1) {
      return array.slice(0, n); 
    } else {
      return array[0]; 
    }
  }

  function myLast(array, n) {
    const length = array.length;
    if (typeof n === 'number' && n >= 1) {
      return array.slice(-n); 
    } else {
      return array[length - 1]; 
    }
  }

  function myKeys(object) {
    return Object.keys(object);
  }
  
function myValues(object){
    return Object.values(object);
}