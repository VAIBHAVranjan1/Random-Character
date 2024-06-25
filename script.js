let powerlist = []

let appearlist = []

const all_powerstats = document.querySelectorAll(".powerstats")
const all_appearance = document.querySelectorAll(".appearance")

for (let index = 0; index < all_appearance.length; index++) {
    let element = all_appearance[index].id;
    appearlist.push(element)
}


for (let index = 0; index < all_powerstats.length; index++) {
    let element = all_powerstats[index].id;
    powerlist.push(element)
}

let photo = document.getElementById("superhero")
let nameu = document.getElementById("name")

const random_character = () =>{
    let a = Math.floor(Math.random() * 730) + 1;
    fetch(`https://superheroapi.com/api.php/10223569763528853/${a}`)
    .then(response => response.json())
    .then(json =>{
        nameu.innerText = `Name: ${json.name}\nId: ${json.id}`
        photo.innerHTML = `<img src="${json.image.url}">`

        powerlist.forEach(element => {
            let another = document.getElementById(element)
            another.innerText = `${element}: ${json.powerstats[element]}`
        });
        
        appearlist.forEach(element => {
            let another = document.getElementById(element)
            another.innerText = `${element}: ${json.appearance[element]}`
        });

    })
}

let next_button = document.getElementById("next")

next_button.onclick = () => random_character()
