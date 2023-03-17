let nounArrary = ['computer', "flower", "puppy", "cruise ship", "gundam", "donut", "stable", "penguin", "hot magma", "the moon"]
let nounCounter = 0

let nounSpan = document.getElementById('nounSpan')



let adjectiveArray = ['sad', "happy", "energetic","big","rabunctious","eagar","sweet", "sunny", "gloomy", "cold","rainy","beautiful"]
let adjectiveCounter = 0 

let adjectiveSpan = document.getElementById('adjectiveSpan')



let verbArray = ['ran',"jumped","swam","knocked","bumped","flew","picked up"]
let verbCounter = 0

let verbSpan = document.getElementById('verbSpan')



nounSpan.addEventListener('click', ()=>{
    nounSpan.innerHTML = nounArrary[nounCounter]
    nounCounter ++

    if(nounCounter > nounArrary.length -1){
        nounCounter = 0
    }
})

adjectiveSpan.addEventListener('click', ()=>{
    adjectiveSpan.innerHTML = adjectiveArray[adjectiveCounter]
    adjectiveCounter ++

    if(adjectiveCounter > adjectiveArrary.length -1){
        adjectiveCounter = 0
    }
})

verbSpan.addEventListener('click', ()=>{
    verbSpan.innerHTML = verbArrary[verbCounter]
    verbCounter ++

    if(verbCounter > verbArrary.length -1){
        verbCounter = 0
    }
})