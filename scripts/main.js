let myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello world!'

function multiply(n1,n2){
    let result = n1*n2;
    return result
}

document.querySelector('html').onclick = function(){
    alert('戳p啊，cxk')
}

let myImage = document.querySelector('img')

myImage.onclick =function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dove.png'){
        myImage.setAttribute('src','images/favorite-2.jpg');

    }else{
        myImage.setAttribute('src','images/dove.png');
    }
}

let myButton = document.querySelector('button')

function setUserName(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    myHeading.textContent = '甘妮娘' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }