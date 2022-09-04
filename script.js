/* CARD ONE */
const image = document.querySelector(".image img");
const price = document.querySelector(".price");
const title = document.querySelector(".title");

/* CARD TWO */
const imageTwo = document.querySelector(".image-two img");
const priceTwo = document.querySelector(".price-two");
const titleTwo = document.querySelector(".title-two")

/* CARD THREE */
const imageThree = document.querySelector(".image-three img");
const priceThree = document.querySelector(".price-three");
const titleThree = document.querySelector(".title-three")



/* CARD ONE */
image.addEventListener("mouseover", () => { 
  price.classList.add('price-selected')
  title.classList.add('title-selected')
}) 

image.addEventListener('mouseout', () => {
  price.classList.remove('price-selected')
  title.classList.remove('title-selected')
})

/* CARD TWO */
imageTwo.addEventListener("mouseover", () => { 
  priceTwo.classList.add('price-selected')
  titleTwo.classList.add('title-selected')
}) 

imageTwo.addEventListener('mouseout', () => {
  priceTwo.classList.remove('price-selected')
  titleTwo.classList.remove('title-selected')
})

/* CARD THREE */
imageThree.addEventListener("mouseover", () => { 
  priceThree.classList.add('price-selected')
  titleThree.classList.add('title-selected')
}) 

imageThree.addEventListener('mouseout', () => {
  priceThree.classList.remove('price-selected')
  titleThree.classList.remove('title-selected')
})