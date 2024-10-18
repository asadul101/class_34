// _____________ Dom part 
let result = document.querySelectorAll('.result');
let inputField = document.querySelectorAll('.inputField');
let numberSet = document.querySelectorAll('.numberset')

// ________________ Function part 
let addClick=(item)=>{
    result[item].innerHTML=inputField[item].value;
    result[item].dataset.number=inputField[item].value;
    numberSet[item].innerHTML= inputField[item].value;
    inputField[item].value='';
}

let countNumber =()=>{
    result.forEach((item)=>{
        let number = 0
       
        let functionNumber = ()=>{
            number++
            item.innerHTML = number
            if(number == item.dataset.number){
              clearInterval(stop)
            }
        }
        
        
        var stop = setInterval (()=>{
           functionNumber()
        },100);
        if(item.dataset.number == 0){
           clearInterval(stop)
        }
     })
}
