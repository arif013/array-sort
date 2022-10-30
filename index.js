const array = [2, 4, 6, 8, 10]
let n = array.length

function sorting(array,n){
    let arr1 = new Array(n);
    
    let first = 0, last = n-1;
    let flag = true
    for(let i=0; i<n; i++){
        if(flag) arr1[i] = array[last--];
        else arr1[i] = array[first++];
        flag=!flag;
    }
    for(let i=0; i<n; i++){
        array[i] = arr1[i];
    }
}
sorting(array,n)

console.log(array)


// // console.log(array.indexOf(4))
// function sorting(array){

//     if(even(array.indexOf(4))) console.log("hi")
//     else console.log('hello')
// }
// console.log(sorting(array))