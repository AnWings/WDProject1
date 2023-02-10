"use strict";

function changeColor()
{
    let color = document.body.style.color;
    if(color === 'orange') 
    {
        document.body.style.color = 'gray';
    }
    else
    {
        document.body.style.color = 'orange';
    }
}