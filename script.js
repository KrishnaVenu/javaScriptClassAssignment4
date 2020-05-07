const getEl=(selector)=>{
    return document.querySelector(selector);
}
//first question, checking first array elemnt prime
const checkPrime=getEl('#checkPrime');
checkPrime.addEventListener('click',(e)=>{
    const input=getEl('#arrayInput').value;
    const spliiInput=input.split(',');
    let firstNum=parseInt(spliiInput[0]);
    
    if(isPrime(firstNum)){
        result=`first element ${firstNum} is Prime.`;
    }
    else{
        result=`first element ${firstNum} is Not a Prime.`;
    }
    const firstAnswer=getEl('#firstAnswer');
    firstAnswer.classList.remove('hidden');
    firstAnswer.innerHTML=result;


})
const isPrime=(num)=>{
    if(num===1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

// second question

const mostFrequent=getEl('#mostFrequent');
mostFrequent.addEventListener('click',(e)=>{
    const input=getEl('#arrayInput2').value;
    const inputArray=input.split(',');
    let ans=inputArray[0];
    let count =0;
    inputArray.forEach((el)=>{
       let countEl= inputArray.filter((x)=>{return x===el;}).length;
       if(countEl>count){
           count=countEl;
           ans=el;
       }
    });
    const secondAnswer=getEl('#secondAnswer');
    secondAnswer.innerHTML=` The most Frequent Element is ${ans}  occured ${count} times.`
    secondAnswer.classList.remove('hidden');

    
});

// third question

const changeCase=getEl('#changeCase');
changeCase.addEventListener('click',(e)=>{
    let inputStr=getEl('#stringInput3').value;
    let inputArray=inputStr.split('');
    outputArray=inputArray.map((el)=>{
        const regLowerCase=/[a-z]/;
        const regUpperCase=/[A-Z]/;
        if(regLowerCase.test(el)){
            return el.toUpperCase();
        }
        else if(regUpperCase.test(el)){
            return el.toLowerCase();
        }
        else{
            return el;
        }
    })
    const output=outputArray.join('');
    const thirdAnswer=getEl('#thirdAnswer');
    thirdAnswer.innerHTML=` resultant string : ${output}`;
    thirdAnswer.classList.remove('hidden');
});

// fourth Question
const sumOfSquares=getEl('#sumOfSquares');
sumOfSquares.addEventListener('click',(e)=>{
    let input=getEl('#arrayInput4').value;
    let inputArray=input.split(',').map(el=>parseInt(el));
    output=inputArray.reduce((ans,next)=>{return ans+(next*next);},0);
    const fourthAnswer=getEl('#fourthAnswer');
    fourthAnswer.innerHTML=` Sum Of Squares of Elements : ${output}`;
    fourthAnswer.classList.remove('hidden');
});

// fifth Question.

const btn5=getEl('#btn5');
btn5.addEventListener('click',(e)=>{
    const ul=document.createElement('ul');
    const fifthAnswer=getEl('#fifthAnswer');
    fifthAnswer.appendChild(ul);
    let ulHTML=``;
    for(let i=1;i<=15;i++){
        const oddOrEven=i%2===0?'even':'odd';
        ulHTML+=`<li> ${i}  - ${oddOrEven}  </li>`;
    }
    ul.innerHTML=ulHTML;
    fifthAnswer.classList.remove('hidden');

})

// sixth question
const truncate=getEl('#truncate');
truncate.addEventListener('click',(e)=>{
    const inputStr=getEl('#stringInput6').value;
    const limit=parseInt(getEl('#lengthLimit').value);
    if(inputStr.length>limit){
        output=inputStr.slice(0,limit);
    }
    const sixthAnswer=getEl('#sixthAnswer');
    sixthAnswer.innerHTML=` Truncated string : ${output}`;
    sixthAnswer.classList.remove('hidden');


});

// seveth Question

const findLarger=()=>{
    const num1=parseInt(getEl('#num1').value);
    const num2=parseInt(getEl('#num2').value);
    const result=num1>num2?num1:num2;
    const seventhAnswer=getEl('#seventhAnswer');
    seventhAnswer.innerHTML=` Larger Number among ${num1},${num2} is : ${result}`;
    seventhAnswer.classList.remove('hidden');
}
const findLarge=getEl('#findLarge');
findLarge.addEventListener('click',findLarger);

//eightth Question.

// bubble sort function
const sortAlphabetical=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j].name>arr[j+1].name){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}
const sortBtn=getEl('#sort');
sortBtn.addEventListener('click',(e)=>{
    const inputString=getEl('#stringInput8').value;
    const inputArray=inputString.split(',');
    const inputObjectArray=inputArray.map((el)=>{return {name:el};});
    console.log(inputObjectArray);
    sortAlphabetical(inputObjectArray);
    console.log(inputObjectArray);
    const ul=document.createElement('ul');
    const eightthAnswer=getEl('#eightthAnswer');
    eightthAnswer.appendChild(ul);
    output=``;
    for(el in inputObjectArray){
        output+=`<li>${inputObjectArray[el].name} </li>`
    }
    ul.innerHTML=output;
    eightthAnswer.classList.remove('hidden');

})



// ninth Question
const btn9=getEl('#btn9');
btn9.addEventListener('click',(e)=>{
    const str='javascript'.split('');
    let output=``;
    for(let [index,value] of str.entries()){
        for(let i=0;i<=index;i++){
            output+=`${str[i]}  `;
        }
        output+=`<br/>`;
    }

    const ninthAnswer=getEl('#ninthAnswer');
    ninthAnswer.innerHTML=output;
    ninthAnswer.classList.remove('hidden');
});

// tenth Question
const btn10=getEl('#btn10');
btn10.addEventListener('click',(e)=>{
    const outSymbol='*';
    let output=``;
    let row=10;
    let spaceCount=2*row;
    for(let i=1;i<=row;i++){
        for(let j=spaceCount;j>0;j--){
            output+='&nbsp';
        }
        for(let k=1;k<=i;k++){
            output+=`${outSymbol}&nbsp&nbsp;&nbsp;`;
        }
        output+='<br/>';
        spaceCount-=2;
    }
    const tenthAnswer=getEl('#tenthAnswer');
    tenthAnswer.innerHTML=`<pre class="text-primary">${output} </pre>`;
    tenthAnswer.classList.remove('hidden');
});