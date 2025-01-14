

// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Jasan"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click' , changeText);

// fpara.removeEventListener('click' , changeText);

// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai!"
// });

// let paras = document.querySelectorAll('p');
// function alterPara(event){
//     alert("You have click on para: " + event.target.textContent);
// }

// // for(let i = 0; i < paras.length; i++){
// //     let para = paras[i];
// //     para.addEventListener('click' , alterPara);
// // }

// let mydiv = document.getElementById('wrapper');

// document.addEventListener('click', alterPara);

// const t1 = performance.now();
// for(let i = 0; i <= 100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is Para" + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("total time by code 1:" + (t2 - t1));

// let mydiv = document.createElement('div');

// for(let i = 0; i <= 100; i++){
//     let para = document.createElement('p');
//     para.textContent= "This is Para" + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// let fragment = document.createDocumentFragment();

// for(let i = 1;i<= 100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para" + i;
//     fragment.appendChild(para);
// }

// document.body.appendChild(fragment);


/***************DAY-2*******************/

//---------Promise--------

// let firstPromise = new Promise((resolve , reject) =>{
//     console.log("Jasan");
//     // resolve(1001);
//     reject(new Error("Server Error"))
// });


//*********Day-3*************

//--async-await----

// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside set Timeout block")
//     },3000);    
// }

// getData();

// async function getData(){

//     //get request - it is an async operation
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     let data = await response.json();
//     console.log(data);
// }

// getData();


//---closure---

let name = 'Manish';
function outerFunction(){
    let name = 'Mozilla'; //block -scope

    function innerFunction(){
        console.log(name);
    }

    return innerFunction;
}
let inner = outerFunction();

inner();