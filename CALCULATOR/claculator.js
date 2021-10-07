let screen =document.getElementaryById('screen');
buttons=document.querySelectorAll('button');
for(item of buttons)
{
    item.addEventListener('click',(e)){
        buttonText=e.target.innerText;
    }
}
