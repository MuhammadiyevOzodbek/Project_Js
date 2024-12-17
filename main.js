const loader = document.getElementById('preloder')

setTimeout(()=>{
    loader.classList.add('remove')
}, 0)
/****************************loader******************************/
// const minus = document.getElementById('min'),
//       plus = document.getElementById('max'),
//       str = document.getElementById('num');
// str.textContent = '1'
// // let localNumber = localStorage.getItem('number')

// // if(localNumber !== null){
// //     str.textContent = localNumber
// // }

// // function saveNumber(number){
// //     localStorage.setItem('number', number)
// // }

// plus.addEventListener('click', ()=>{
//     let number = Number(str.textContent);
//     number += 1
//     str.textContent = number
//     // saveNumber(number)
// })
// if(Number(str.textContent) >= 1){
//     minus.addEventListener('click', ()=>{
//         let number = Number(str.textContent)
//         number -= 1
//         str.textContent = number
//         // saveNumber(number)
//     })
// }
/*****************************minus or plus******************************/
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
}
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});
nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });


updateSlider();
// let count = 1;

//     function minusSozlama(){
//         const minusButton = document.getElementById('remove-outline');
//       minusButton.disabled = count === 0;
//     }

//     function increment() {
//         count++;
//         document.getElementById('num').textContent = count;
//         minusSozlama()
//     }

//     function decrement() {
//       if (count > 1) {
//         count--;
//         document.getElementById('num').textContent = count;
        
//       }
//     }
/************************* slider ****************************************/
const page = document.getElementById('page'),
      imgSlider = document.getElementById('img'),
      closeSlider = document.getElementById('close-slider')

imgSlider.addEventListener('click', ()=>{
    page.classList.remove('remove')
})
closeSlider.addEventListener('click', ()=>{
    page.classList.add('remove')
})
/*********************************** open/close slider *******************************/
const magazin = document.getElementById('shop-cart'),
boxShop = document.getElementById('cart-shop');

magazin.addEventListener('click', ()=>{
    boxShop.classList.toggle('remove')
    boxShop.style.top = '60px'
})
/********************* shopping *********************************/

/*********************************** imgs ***************************/
/*********************** imgs ************************************/
const imgBig = document.querySelector('#img')
const imgLite = document.querySelectorAll('#img1')
imgLite.forEach(item => {
    item.addEventListener('click', ()=>{
        imgBig.src = item.src
    })
})

let timeRemaining = 10;
const timerElement = document.getElementById('timer');
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (timeRemaining === 0) {
        clearInterval(timerInterval);
        const setOut = document.getElementById('end-time')
        setOut.classList.remove('remove')
        document.getElementById('qnarxi').textContent = "250$"
    }
    timeRemaining--;
}
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

const endBtn = document.getElementById('esm')
endBtn.addEventListener('click', ()=>{
    const mon = document.getElementById('check')
    mon.style.display ='none'
    const moon = document.getElementById('real')
    moon.classList.remove('remove')
    const save = document.getElementById('end-time')
    save.classList.add('remove')
})
// const result = 0
// const teng = 1
// const buyShopping = document.getElementById('shopping'),
//       numShop = document.getElementById('num'),
//       soncha = document.getElementById('soni'),
//       naxrcha = document.getElementById('narxi');
// buyShopping.addEventListener('click', ()=>{
    //     const qush = numShop * 125;
    //     result += qush;
    //     naxrcha.textContent = `${result}`
    // })
    let count = 1; 
    let result = 0; 
    let yes = 0
    let show = 0
    
    const counterDisplay = document.getElementById("num");
    const plusButton = document.getElementById("max");
    const minusButton = document.getElementById("min");
    const buyButton = document.getElementById("shopping");
    const resultDisplay = document.getElementById("narxi");
    const birbalo = document.getElementById('soni')
    
    plusButton.addEventListener("click", () => {
        count += 1;
        counterDisplay.textContent = count;
    });
    
    minusButton.addEventListener("click", () => {
        if(count > 1){
            count -= 1;
            counterDisplay.textContent = count;
            
        }
    });
    
    buyButton.addEventListener("click", () => {
        const fer = show + Number(counterDisplay.textContent)
        yes += fer
        birbalo.textContent = yes
        const multipliedValue = count * 125; 
        result += multipliedValue;
      resultDisplay.textContent = `${result}$`;
      
    });
    const btntb = document.getElementById('chekend')
    const papa = document.getElementById('time-page')
    btntb.addEventListener('click', ()=>{
        papa.classList.remove('remove')
        counterDisplay.textContent = 1
        birbalo.textContent = 0
        resultDisplay.textContent = `${0}$`
    })
    const bit = document.getElementById('dell')
    bit.addEventListener('click', ()=>{
        papa.classList.add('remove')
    })

const activeClass = document.querySelectorAll('#active-li')
activeClass.forEach((item)=>{
    console.log(item);
    item.addEventListener('click', ()=>{
        activeClass.forEach((itemFound)=> itemFound.style.color = 'black')
        item.style.color = '#ff7e1b'
    })

})