const Quizdata = [
{question:"Which of the following is the correct way to declare a multidimensional array in Java?",options:['int[] arr','int arr[[]]','int[][]arr','int[[]] arr'],
answer:3},
{question:"A graph with all vertices having equal degree is known as a",
options:['Multi Graph','Regular Graph','Simple Graph','Complete Graph'],
answer:2},
{question:"What is an AVL tree?", 
options:['a tree which is balanced and is a height balanced tree','a tree which is unbalanced and is a height balanced tree','a tree with three children','a tree with atmost 3 children'],
answer:1},
{question:"Which of these is not an application of a linked list?",
options:['To implement file systems','For separate chaining in hash-tables','To implement non-binary trees','Random Access of elements'],
answer:4},
{question:"The data structure required for Breadth First Traversal on a graph is?",
options:['Stack','Array','Queue','Tree']
,answer:3}]

const readLineSync = require('readline-sync');
let total_score = 0;

const check_answer = (answer,response,data) =>
{
  if(answer.toString() === response)
  {
    total_score++;
    return 'Correct Answer !\n'
  }
  else
  {
    const reply = `Wrong Answer !, The correct answer is option (${answer}) ${data.options[answer]} \n`;
    return reply; 
    
  }
  
}


const quiz = readLineSync.question('Are you ready to play the quiz ?,if so type "yes".\n');

if(quiz === 'yes')
{
  Quiz();
}

function Quiz(){
let questioncount=1;
for(const data of Quizdata)
{
  console.log(`${questioncount}.${data.question}`);
  let count = 1;
  for(const option of data.options)
  {
  console.log(`${count}.${option}`);;
  count++;
  }
  let response = readLineSync.question('Type in your choice: \n');
  console.log(check_answer(data.answer,response,data));
  questioncount++;

}
console.log(`\nThe number of correct responses is ${total_score} out of ${questioncount-1} `);
}




