burger.addEventListener('click', () => {
    menu.classList.add('active')
})

document.addEventListener('click', e => {
    if(e.target !== burger){
        menu.classList.remove('active')
    }
   

})

