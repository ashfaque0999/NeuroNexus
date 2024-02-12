const quesions =  [
   {
    'que' : ' Who is the father of C language?',
    'a' : 'Steve Jobs',
    'b' : 'James Gosling',
    'c' : 'Dennis Ritchie',
    'd' : 'Rasmus Lerdorf',  
    'correct' : 'c'

   },
   {
    'que' : 'Which of the following is not a valid C variable name?',
    'a' : ' int number; ',
    'b' : 'float rate;',
    'c' : ' int variable_count;',
    'd' : 'int $main',  
    'correct' : 'd'
   },
   {
    'que' : 'All keywords in C are in__',
    'a' : 'LowerCase letters',
    'b' : 'UpperCase letters',
    'c' : 'CamelCase letters',
    'd' : 'None of the above',  
    'correct' : 'a'
   },{
    'que' : 'Which of the following cannot be a variable name in C?',
    'a' : 'volatile',
    'b' : 'true',
    'c' : 'friend',
    'd' : 'export',  
    'correct' : 'a'
   }

]
let index=0;
let total=quesions.length;
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInput=document.querySelectorAll('.options')
const loadQeustion=()=>{                    // putting questions
    if(index==total){
        return endQuiz()
    }
    reset();
    const data=quesions[index]
    quesBox.innerText=`${index+1}) ${data.que}`;            // 1)question...
    optionInput[0].nextElementSibling.innerText =data.a;    // putting options
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}
const submitQuiz = () => {
    const data=quesions[index]
    const ans=getAnswer()
    if(ans == data.correct){
       right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQeustion();
  return;
}
const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
        if(input.checked){
            answer=input.value;
        }
      }
    )   
    return answer;
}
const reset =()=> {
    optionInput.forEach(
        (input) => {
        input.checked = false;
      }
    )   
}
const endQuiz =()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>thank you for playing the quiz!</h3>
    <h2>${right}/${total} are correct</h2>
    </div>
    `
}
loadQeustion();