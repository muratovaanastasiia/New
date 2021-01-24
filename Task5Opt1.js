function getRandom(min, max)
{
  return Math.floor(Math.random() * (max - min) + min);
}
 
var N = 15;
var arr = [];
for(var i = 0; i < N; i++)
    arr.push(getRandom(-10, 10));

console.log ( arr )

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