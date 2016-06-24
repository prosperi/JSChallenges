var OUTPUT = document.getElementsByTagName("code")[0];

// challenge 01

function flattener(arr){
  return arr.reduce(function(cur, next){ return cur.concat(next); });
}

console.log(flattener([[1,2,3],[4,5,6],[7,8,9,10]]));
