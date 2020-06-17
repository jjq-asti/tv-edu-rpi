//    The function evaluates the answer and displays result

var counter = 1;
var selectionCounter = [0,0,0];
var q_completed = 0;
const choices = ['option-11','option-12','option-13','option-14']

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

 function displayAnswer1() {
  if (document.getElementById('option-11').checked) {
    // document.getElementById('block-11').style.border = '3px solid limegreen'
    // document.getElementById('result-11').style.color = 'limegreen'
    // document.getElementById('result-11').innerHTML = 'Correct!'
    if (counter == 1){
        q1_current = 'option-11'

    }else if (counter == 2){
        q2_current = 'option-11'
    }else if (counter == 3) {
        q3_current = 'option-11'
    }
  }
  if (document.getElementById('option-12').checked) {
    // document.getElementById('block-12').style.border = '3px solid red'
    // document.getElementById('result-12').style.color = 'red'
    // document.getElementById('result-12').innerHTML = 'Incorrect!'

    // showCorrectAnswer1()
    if (counter == 1){
        q1_current = 'option-12'

    }else if (counter == 2){
        q2_current = 'option-12'
    }else if (counter == 3) {
        q3_current = 'option-12'
    }
  }
  if (document.getElementById('option-13').checked) {
    // document.getElementById('block-13').style.border = '3px solid red'
    // document.getElementById('result-13').style.color = 'red'
    // document.getElementById('result-13').innerHTML = 'Incorrect!'
    // showCorrectAnswer1()
    if (counter == 1){
        q1_current = 'option-13'
    }else if (counter == 2){
        q2_current = 'option-13'
    }else if (counter == 3) {
        q3_current = 'option-13'
    }
  }
  if (document.getElementById('option-14').checked) {
    // document.getElementById('block-14').style.border = '3px solid red'
    // document.getElementById('result-14').style.color = 'red'
    // document.getElementById('result-14').innerHTML = 'Incorrect!'
    // showCorrectAnswer1()
    if (counter == 1){
        q1_current = 'option-14'

    }else if (counter == 2){
        q2_current = 'option-14'
    }else if (counter == 3) {
        q3_current = 'option-14'
    }
  }
  sub_btn = document.getElementById("completed");
  if (q_completed !== 3){
      q_completed = counter;
      sub_btn.innerHTML = q_completed;
  }
  
  if (q1_current !== 0 && q2_current !== 0 && q3_current !== 0){
    sub_btn = document.getElementById("submit");
    sub_btn.disabled = false;
}
}

// the functon displays the link to the correct answer
function showCorrectAnswer1() {
  let showAnswer1 = document.createElement('p')
  showAnswer1.innerHTML = 'Show Corrent Answer'
  showAnswer1.style.position = 'relative'
  showAnswer1.style.top = '-180px'
  showAnswer1.style.fontSize = '1.75rem'
  document.getElementById('showanswer1').appendChild(showAnswer1)
  showAnswer1.addEventListener('click', () => {
    document.getElementById('block-11').style.border = '3px solid limegreen'
    document.getElementById('result-11').style.color = 'limegreen'
    document.getElementById('result-11').innerHTML = 'Correct!'
    document.getElementById('showanswer1').removeChild(showAnswer1)
  })
}


var question1 = "Which is the closest planet to the sun?"
var q1_choices = ["Earth", "Mercury", "Mars", "Pluto"]
var q1_correct = "Mercury"
var q1_current = 0
var q1_prev = 0;

var question2 = "Which is the largest planet?"
var q2_choices = ["Uranus", "Saturn", "Jupiter", "Venus"]
var q2_correct = "Jupiter"
var q2_current = 0
var q2_prev = 0;

var question3 = "Which is the hottest planet in the solar system?"
var q3_choices = ["Mercury", "Venus", "Earth", "Mars"]
var q3_correct = "Venus"
var q3_current = 0
var q3_prev = 0;

function fetchQuestion1(){
    sub_btn = document.getElementById("submit");
    sub_btn.disabled = true;
    q_element = document.getElementById("question")
    q_11 = document.getElementById("option-label-11")
    q_12 = document.getElementById("option-label-12")
    q_13 = document.getElementById("option-label-13")
    q_14 = document.getElementById("option-label-14")
    q_element.innerHTML = question1;
    q_11.innerHTML = q1_choices[0]
    q_12.innerHTML = q1_choices[1]
    q_13.innerHTML = q1_choices[2]
    q_14.innerHTML = q1_choices[3]
    if (q1_current !== 0){

        document.getElementById(q1_current).checked = true;
    }else{
        if (q2_current !== 0){
            document.getElementById(q2_current).checked = false;
        }
        if (q3_current !== 0){
            document.getElementById(q3_current).checked = false;
        }
    }
    
}

function fetchQuestion2(){
    q_element = document.getElementById("question")
    q_11 = document.getElementById("option-label-11")
    q_12 = document.getElementById("option-label-12")
    q_13 = document.getElementById("option-label-13")
    q_14 = document.getElementById("option-label-14")
    q_element.innerHTML = question2;
    q_11.innerHTML = q2_choices[0]
    q_12.innerHTML = q2_choices[1]
    q_13.innerHTML = q2_choices[2]
    q_14.innerHTML = q2_choices[3]
    if (q2_current !== 0){
        document.getElementById(q2_current).checked = true;
    }else{
        if (q1_current !== 0){
            document.getElementById(q1_current).checked = false;
        }
        if (q3_current !== 0){
            document.getElementById(q3_current).checked = false;
        }
    }
}

function fetchQuestion3(){
    q_element = document.getElementById("question")
    q_11 = document.getElementById("option-label-11")
    q_12 = document.getElementById("option-label-12")
    q_13 = document.getElementById("option-label-13")
    q_14 = document.getElementById("option-label-14")
    q_element.innerHTML = question3;
    q_11.innerHTML = q3_choices[0]
    q_12.innerHTML = q3_choices[1]
    q_13.innerHTML = q3_choices[2]
    q_14.innerHTML = q3_choices[3]
    if (q3_current !== 0){
        document.getElementById(q3_current).checked = true;
    }else{
        if (q1_current !== 0){
            document.getElementById(q1_current).checked = false;
        }
        if (q2_current !== 0){
            document.getElementById(q2_current).checked = false;
        }
    }
}

function fetchNextQuestion(){
    if (counter < 3){
        ++counter;
    }
    
    if(counter == 1){
        fetchQuestion1();
    }else if(counter == 2){
        fetchQuestion2();
    }else if(counter == 3){
        fetchQuestion3()
    }

}

function fetchPrevQuestion(){
    if (counter > 1){
        --counter;
    }
    if(counter == 1){
        fetchQuestion1();
    }else if(counter == 2){
        fetchQuestion2();
    }else if(counter == 3){
        fetchQuestion3();
    }

}


function submit(){
    var a1 = document.getElementById(q1_current).value
    var a2 = document.getElementById(q2_current).value
    var a3 = document.getElementById(q3_current).value
    var details = document.getElementsByClassName("student-details")
    var stn = document.getElementById("student_number_value")
    var modal_message = document.getElementById("modal_message")
    if (isNaN(parseInt(stn))){
        modal_message.innerHTML = "Student Number Missing!"
       
    }else{
        modal_message.innerHTML = "Please verify your answer before proceding."
    }
    modal.style.display = "block";
    
    console.log(a1,a2,a3,details[0].innerHTML,stn.innerHTML)
}

function incrementSelectionCounter(counter){
    if (selectionCounter[counter] > 1){
        --selectionCounter[counter];
	console.log(selectionCounter[counter])
        document.getElementById(choices[selectionCounter[counter]-1]).checked = true;
    }

}

function decrementSelectionCounter(counter){
    if (selectionCounter[counter] < 4){
        ++selectionCounter[counter];
	console.log(selectionCounter[counter])
        document.getElementById(choices[selectionCounter[counter]-1]).checked = true;

    }

}
var mode = null;

eel.expose(getKeyPressed)
function getKeyPressed(key){
    console.log(key);
    if ( key === "key_asterisk" ){
        if ( mode !== "INPUT_ID"){
            mode = "INPUT_ID";
            document.getElementById("studentID").style.display = "inline"
            document.getElementById("studentID").focus();
            document.getElementById("student_number_value").style.display = "none"
        }else{
            mode = "QUESTIONS"
            var sid = document.getElementById("studentID")
	    var val = sid.value;
            sid.style.display = "none"
            var sn =document.getElementById("student_number_value")
	    if (val.length === 0) {
		   val = "Press * on your remote." 
	    }
            sn.innerHTML = val;
            sn.style.display = "inline"
        }
    }


    if ( key === "key_up" ){
        incrementSelectionCounter(counter-1);
	displayAnswer1();
    }else if ( key === "key_down" ) {
        decrementSelectionCounter(counter-1);
	displayAnswer1();
    }else if ( key === "key_right" ) {
	fetchNextQuestion();
    }else if ( key === "key_left" ) {
	fetchPrevQuestion();
    }else if (key === "ok") {
    submit();
    }else if ( mode === "INPUT_ID" ){
        if ( !(isNaN(parseInt(key.slice(-1)))) ){
            el = document.getElementById("studentID");
	    if (el.value.length < 12){
            el.value = el.value + key.slice(-1);
	    }
        }
    }
}



// Get the modal


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function hide_modal() {
  console.log("closing")
  modal.style.display = "none";
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
