'use-strict';

//Buttons selectors
const catBtn = document.getElementById("cat-btn");
const dogBtn = document.getElementById("dog-btn");

//image-div selectors
const catImageDiv = document.getElementById("cat-image");
const dogImageDiv = document.getElementById("dog-image");


fetchCatImage();
fetchDogImage();
//api fetching

function fetchCatImage(){
    fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json())
    .then(data =>{
        catImageDiv.innerHTML = `<img src=${data[0].url} alt="cat image"/>`; 
        console.log(catImageDiv);
        
        
    });
}



function fetchDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
    .then(data =>{
        dogImageDiv.innerHTML = `<img src=${data.message} alt="cat image"/>`; 
        console.log(dogImageDiv);
        
    });
}


//calling the fetch api using click event listener
catBtn.addEventListener("click",fetchCatImage);
dogBtn.addEventListener("click",fetchDogImage);

