var OUTPUT = document.getElementsByTagName("code")[0];

// challenge 01

function range(floor, ceil){
  var arr = [];
  for(; floor <= ceil; (arguments.length === 2) ? floor++ : floor += arguments[2]){
    arr.push(floor);
  }
  return arr;
}

function sum(arr){
  return arr.reduce(function(cur, val){
    return cur + val;
  });
}

// console.log(sum(range(1,10,2)));

// challenge 02

function reverseArray(arr){
  var reversed = [];
  for(var i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
  }
  return reversed;
}

function reverseArrayInPlace(arr){
  var aux;
  for(var i = arr.length - 1; i >= arr.length/2; i--){
    aux = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = aux;
  }
  return arr;
}

// console.log(reverseArrayInPlace([1,2,3,4,5,6,7]));

// challenge 03

function arrayToList(arr){
  var tree = {};
  (function makeATree(arr, list){
    if(arr.length > 0){
      list.value = arr[0];
      list.rest = {};
      return makeATree(arr.slice(1), list.rest);
    }else{
      return list;
    }
  }(arr, tree));
  return tree;
}

function listToArray(list){
  var arr = [];
  do{
    arr.push(list.value);
  }while((list = list.rest) && list.rest != null)
  return arr;
}

function prepend(list, elem){
  var tree = {};
  tree.value = elem;
  tree.rest = list;
  return tree;
}

function nth(list, elem){
  var i = 0;
  do{
    if(i === elem) return list.value;
    i++;
  }while((list = list.rest) && i <= elem)
  return undefined;
}

// console.log(nth(arrayToList([1,2,3]), 2));
// console.log(listToArray(arrayToList([1,2,3])));
