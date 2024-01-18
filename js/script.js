'use strict'
// scroll sections
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
	section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            //Active section for animation on scroll
            sec.classList.add('show-animate'); 
       
        }
        // if want use animation that repeats on scroll use this
        else{
        	sec.classList.remove('show-animate'); 
        }


    });
	

	let header = document.querySelector('header')
	header.classList.toggle('sticky', window.scrollY > 100)

    //Animation footer on scroll
        let footer = document.querySelector('footer')

        footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

//button more-couses
const btnCouses=document.querySelector('#btn')

const courses=document.querySelector('.more-courses')
btnCouses.addEventListener('click', ()=>{
    courses.classList.toggle('active')
    btnCouses.classList.remove('more-courses')
})

let btn= document.querySelector('.bars')
let i=document.querySelector('.icon')
let header=document.querySelector('.nagation')
btn.addEventListener('click', ()=>{
    i.classList.toggle('fa-bars')
    i.classList.toggle('fa-close')
    header.classList.toggle('active')

})

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