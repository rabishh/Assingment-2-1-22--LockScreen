let inp=document.getElementById("inp")
let td1=document.querySelector(".td1");
let arr=[];
let pin=["1","2","3","4"];
td1.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=1;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let td2=document.querySelector(".td2");
td2.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=2;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let td3=document.querySelector(".td3");
td3.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=3;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let td4=document.querySelector(".td4");
td4.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=4;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let td5=document.querySelector(".td5");
td5.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=5;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let td6=document.querySelector(".td6");
td6.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=6;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let td7=document.querySelector(".td7");
td7.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=7;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let td8=document.querySelector(".td8");
td8.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=8;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let td9=document.querySelector(".td9");
td9.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=9;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let td0=document.querySelector(".td0");
td0.addEventListener("click" , function(){
    let span=document.createElement("span");
    inp.appendChild(span);
    span.textContent=0;
    let val=span.innerHTML;
    arr.push(val);
    console.log(arr);
})
let tdb=document.querySelector(".tdb");
tdb.addEventListener("click" , function(){
    arr.pop();
    inp.innerText=(arr);
})
let tdok=document.querySelector(".tdok");
tdok.addEventListener("click" , function(){
    if(JSON.stringify(arr)==JSON.stringify(pin)){
    let cont= document.querySelector(".container");
    let cont2= document.querySelector(".body");
    cont.classList.add("container1")
    cont2.classList.add("body1")
    console.log("clicked");
    }else{
        inp.innerHTML="**wrong-password";
        inp.style.color="red";
    }
})
