'use strict'

const controls=document.querySelectorAll('.control')
const items=document.querySelectorAll('.item')
let currentItem= 0;
const maxItem= items.length;

controls.forEach(control =>{
    control.addEventListener('click', ()=>{
        const btnLeft=control.classList.contains('btn-left')
        if(btnLeft){
            currentItem -= 1;

        }else{
         currentItem += 1;

        }
        if(currentItem >= maxItem){
            currentItem =0;
        }
        if(currentItem < 0){
             currentItem= maxItem -1;
        }
        items.forEach(item=>{
            // item.classList.remove('current-item')
            items[currentItem].scrollIntoView({
                inline:'center',
                behavior:'smooth'
            })
            // items[currentItem].classList.add('current-item')
        })
          console.log("clicked", btnLeft, currentItem, maxItem )
    })
})

//button more-couses
const btnCouses=document.querySelector('#btn')
const courses=document.querySelector('.more-courses')
btnCouses.addEventListener('click', ()=>{
    courses.classList.toggle('active')
    btnCouses.classList.remove('more-courses')
})