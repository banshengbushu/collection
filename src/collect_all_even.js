'use strict';

function collect_all_even(collection) {
  var evenArr = [];

    for(var i = 0; i < collection.length; i++){
        if(collection[i] % 2 === 0){
            evenArr.push(collection[i]);
        }
    }

    return evenArr;
}

module.exports = collect_all_even;
