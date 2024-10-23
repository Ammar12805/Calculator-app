var input = document.getElementById('inp');
function getvalue(number){
   input.value += number;
};

function clearAll(){
    input.value = "";
};

function square(){
    input.value = input.value * input.value;
};

function half(){
    input.value = 1 / input.value;
};

function characdel(){
    input.value = input.value.slice(0,-1);
};

function cube(){
    input.value = input.value * input.value * input.value;
};

function decimal(){
    input.value = input.value + "." 
};

function equal(){
    input.value = eval(input.value)
}