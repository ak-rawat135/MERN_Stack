// let arr=["HI", "There", "HOW ARE you"];
// for (let ar of arr){
//     console.log(ar)
// }
// for(let x=0;x<=arr.length;x++){
//     console.log(arr[x])
// }

//   let arr= [0, 1, 15, 25, 6, 7, 30, 40, 50];
//   let arr2=[10,12,20,30,25,40,32,31,35,50,60];

// function smartSort(arr, n) {

//     let start = 0;
//     let end = n - 1;
//     while(start<n-1 && arr[start]<=arr[start+1]) {
//         start++;
//     }
//     if(start === n-1){
//         return 0;
//     }

//     while(end>0 && arr[end]>=arr[end-1]) {
//         end--;
//     }

//     let mn=arr[start];
//     let mx=arr[start];

//     for (let i = start; i <= end; i++) {
//         mn = Math.min(mn, arr[i]);
//         mx = Math.max(mx, arr[i]);
//     }

//     while (start > 0 && arr[start - 1] > mn) {
//       console.log(arr[start -1], mn)
//         start--;
//     }

//     while (end< n - 1 && arr[end + 1] < mx){
//       console.log(arr[end+1], mx)
//         end++;
//     }

//     return end - start + 1;
// }
// smartSort(arr,arr.length)
// smartSort(arr2, arr.length)

/*
no need bin 
  public
  view or anything 




just create a app.js 
do npm init 
set app.js as main
when packege.json load 
install nodemon => npm install nodemon 

go this packege.json 

in script 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
    "start-server": "node app.js"
  }, 

  add this start and start server line in code so basicly node mon will one things when ever you 
  change anythings in the code you don't need to close server then save then restart you 
  save save it will automaticly updated in the server as well like live one 
  second line read what it's doing */
