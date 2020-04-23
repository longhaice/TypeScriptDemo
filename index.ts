console.log('hello ts');

let txt:any = document.querySelector('#txt');
let btn:any = document.querySelector('#btn');
btn.onclick=function(){
    let values = txt.value;

    console.log(txt.value);
    
}


