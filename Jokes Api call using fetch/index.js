const jokes = document.querySelector('#jokes');
const jokesButton = document.querySelector('#jokes-button');
const setHeader = {
    headers:{
        Accept:"application/json"
    }
}
// console.log(jokes.value);

// const generateJokes = () =>{
//     fetch('https://icanhazdadjoke.com/',setHeader)  // method is good 
//but it time taking
//     .then((res) => {
//         res.json()
//         .then((data)=>{
//             jokes.innerHTML=data.joke;

//         })
//     }).catch((error) => {
//         console.log(error);
//     })
// }

const generateJokes = async() =>{
    try {
        const getData= await fetch('https://icanhazdadjoke.com/',setHeader);
        const toJson =await getData.json();
        jokes.innerHTML=toJson.joke;
        
    } catch (error) {
        console.log(error);
    }

}
jokesButton.addEventListener("click",generateJokes)
generateJokes();

