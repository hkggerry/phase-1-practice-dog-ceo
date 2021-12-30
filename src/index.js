console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',function(){
loadImages()
loadBreeds()
}) 

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then((resp) => resp.json())
        .then((dogImages) => dogImages.message.forEach(element => addImage(element)))
}

function addImage(dogImages){
    let container = document.querySelector('#dog-image-container');
    const img = document.createElement("img");
    img.src = dogImages;
    container.appendChild(img)

}

function loadBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then((response) => response.json())
        .then((dogList) => Object.keys(dogList.message).forEach(addList))
}

function addList(dogList){
    let chart = document.getElementById('dog-breeds');
    const list = document.createElement("li");
    list.innerHTML = dogList;
    chart.appendChild(list)
    list.addEventListener('click',function(){
        list.style.color = "green"
    })
}
ul.
empty 
fetch breed
if append
else
remove()
breed-dropdown
event.target

