const userAttempt = document.querySelectorAll("input")
const btn = document.querySelector("button")
const result = document.querySelector(".result")
let generNum=[]

const SIZE=4
let counter=0


const generateNum =() =>{
    while (generNum.length != SIZE){
        let num = Math.round(Math.random()*9)
        if (!generNum.includes(num)){
            generNum.push(num)
        }
    }
}
let userNumber=[]
const getUserNumber =() => {
    userAttempt.forEach(item =>{
        userNumber.push(item.value)   
    })
}

const checkInputValue=()=>{

    for (let i=0; i<SIZE;i++){
        if(  parseInt(userNumber[i])>10 ){
            result.innerHTML +=`<p>Ошибка: введена не цифра </p>`
            return false
        } 
        if  (userNumber[i]==""){
            result.innerHTML +=`<p>Ошибка: вы не ввели данные </p>`
            return false
        } 
        for(let j=i+1;j<SIZE;j++){
            if (userNumber[i]===userNumber[j]){
                result.innerHTML +=`<p>Ошибка: неправльные входные данные</p>`
                return false
            }
           
        }
    }
    return true
}

const resetInput=()=>{
    
    userAttempt.forEach(item =>{
        item.value=""
     })
}

const getNumber=()=>{
    let userInput=""
    userAttempt.forEach(item =>{
        userInput+=item.value
     })
    return userInput
}

const checkUserAttempt =()=>{
    counter++
    if (!checkInputValue()) {
        resetInput()
        userNumber=[]
        return
    } else{ 

    let cows=0
    let bulls=0
    for (let i=0; i<SIZE; i++){
        for (let j=0; j<SIZE;j++){
        if (+userNumber[i]==+generNum[j] && i==j){
            bulls++
        } else if (+userNumber[i]==+generNum[j]){
            cows++
        }
        }
    }
    
    userNumber=[]
    if (bulls===4){
        result.innerHTML +=`<h1>Поздравляю , вы выиграли!!!</h1>`  
        return
    }
    result.innerHTML +=`<p>Попытка ${counter} (${getNumber()}) : Бык 🐂- ${bulls}, Корова 🐄-${cows}</p>`
    resetInput()
}
}

   generateNum()

btn.addEventListener("click",() =>{ 
    getUserNumber()
    checkUserAttempt()
    console.log(number)
})
