let joke = document.querySelector("#joke");
let getJoke = document.querySelector("#btn");
let cancle=document.querySelector("#Cancle");
cancle.classList.add("hide");
let loder=document.querySelector(".container");
loder.classList.add("hide");

getJoke.addEventListener("click",getjoke );

function getjoke(){
    joke.innerText="";
           loder.classList.remove("hide");
           cancle.classList.remove("hide");
fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      joke.innerText = `${data.setup} \n \n ${data.punchline}`;
      getJoke.innerText="Get Another Joke";
      loder.classList.add("hide");
    })
    .catch(error => {
      joke.innerText = "Oops! Couldn't fetch a joke.";
      console.error("Error fetching joke:", error);
    });
}
cancle.addEventListener("click",()=>{
    joke.innerText="Click the button to get a joke!";
    getJoke.innerText="Get Joke";
    cancle.classList.add("hide");
})