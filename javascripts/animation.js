document.addEventListener('DOMContentLoaded', () => {
    unloading()
    painting()
    otherwise()
    grow()

})
 
// --------------------------------------- разгрузить мысли -------------------------------
function unloading() {

     const images = document.querySelectorAll('.el')
     
     images.forEach((image) => {
        image.addEventListener('click', () => {
            image.style.opacity = '0'
        })
     })
}


// --------------------------------------- увидеть краски жизни -------------------------------
function painting() {
    const images = document.querySelectorAll('.pink')

    images.forEach((image) => {
        image.addEventListener('click', () => {
            image.style.transform = 'scaleX(-1)'
        })
    })
}



// --------------------------------------- посмотреть на мир иначе -------------------------------
function otherwise() {
    const images = document.querySelectorAll('.otherwise')

    images.forEach((image) => {
        image.addEventListener('click', () => {
            if (image.style.transform = 'rotate(0deg)') {
                    image.style.transform = 'rotate(180deg)'
            } else {
                image.style.transform = 'rotate(0deg)'
            }
            }) 
    })
}

// --------------------------------------- взрастить уверенность в себе -------------------------------
function grow() {
    const images = document.querySelectorAll('.grow')

    images.forEach((image) => {
        image.addEventListener('click', () => {
            image.style.width = '23vw'
            image.style.height = '23vw'
        })
    })
}