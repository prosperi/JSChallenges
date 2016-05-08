var output = document.getElementsByTagName("code")[0];


////////// Challenge 1
function min(a, b){
  if(a > b)
    return b;
  else
    return a;
}

console.log(min(10,15));

///////// Challenge 2
function isEven(a){
  a = Math.abs(a);
  if(a > 1)
    return isEven(a-2);
  else
    return a==0;
}

console.log(isEven(11));

///////// Challenge 3
function countChar(str, chr){
  var count = 0;
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) == chr) count++;
  }
  return count;
}

console.log(countChar("boom", 'o'));
