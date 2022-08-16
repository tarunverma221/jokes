const jokes = [
    {
        joke:"What do you call a boomerang that won’t come back?",
        ans:"A stick."
    }
    ,
    {
        joke:"What does a cloud wear under his raincoat?",   
        ans:"Thunderwear."
    },
    {
        joke:"Two pickles fell out of a jar onto the floor. What did one say to the other?",
        ans:"Deal with it."
    },
    {
        joke:"What time is it when the clock strikes 13?",
        ans:"Time to get a new clock."
    }
]

const button = document.querySelector(".btn");
const box = document.querySelector(".box");

let count = 0;
let jokeNumber = count;

const increment =()=>{
    count = count+1;
}

const decrement =()=>{
    count = count-1;
}

setInterval(()=>{
    box.innerHTML = `<p id="joke">${jokes[count].joke}</p> <p id="ans">${jokes[count].ans}</p>`

    if(count>3){
        alert("Bhai Pure Ho Gaye")
        count=0;
    }
    if(count<0){
        alert("Kya kr raha hai aage bhadh na")
        count=0;
    }
},1)


