const menuBurger = document.querySelector('.menu__burger');
const navMain = document.querySelector('.blog__navigation');

let inputTitle = document.querySelector('.post__header-input');
let inputDescription = document.querySelector('.post__description-input')
let blogContent = document.querySelector('.result')
const createButton = document.querySelector('.post__create-button')



createButton.addEventListener('click', (Event)=>{
    Event.preventDefault();

    blogContent.innerHTML += `
        <div class="div-style" >
            <h3>${inputTitle.value}KEfkwoejf</h3>
            <p>${inputDescription.value}Kids</p>
            <p>${new Date()}</p>
        </div>
    `;


    inputTitle.value = '';
    inputDescription.value = '';
})

menuBurger.addEventListener('click', (Event) => {
    navMain.classList.toggle('visible');
});