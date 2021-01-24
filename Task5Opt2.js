var arr = []
while (arr.length < 15) {
  var randomNumber = Math.ceil(Math.random() * 20 -10);
  var found = false;
  for (var i = 0; i < arr.length; i++) {
  if (arr[i] === randomNumber){
   found = true;
   break;
  }
  }
  if (!found) { arr[arr.length]=randomNumber; }
}
console.log( arr )

for(i=0; i<arr.length; i++) {
            if(arr[i]<0) arr[i]=0;
}
console.log ( arr )

arr2 = []
for (var i=0, len=arr.length; i<len; i++) {
        if ( i%2 == 0 && arr[i] === 0) {
              arr2.push (0); 
              arr2.push (-1); 
          } 
        else arr2.push (arr[i]);
}
console.log( arr2 );