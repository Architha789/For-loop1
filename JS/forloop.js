function my_function1(){
    a=parseInt(document.getElementById('num1').value);
    let oddsum=0;
    for(i=1;i<=a;i=i+2){
        oddsum += i; //sum of odd numbers 
    } 
    document.getElementById("p1").innerHTML=oddsum;

}

function my_function2(){
    a=parseInt(document.getElementById('num1').value);
    let evensum=0;
    for(j=1;j<=a;j++){
        if(j%2 == 0){
            evensum += j; //sum of even numbers
        }
    }
    document.getElementById("p1").innerHTML=evensum;

}

function my_function3(){
    n=parseInt(document.getElementById('num2').value);
    let table=n + "<br>";
    for(t=1;t<=10;t++){
        // since table is given any value therefore n should be added
        table=table+ n + " * " + t + " = " + n * t + "<br>";
    }

document.getElementById("p2").innerHTML=table;
}

function my_function4(){
    p=parseInt(document.getElementById('num3').value);
    if(isprime(p)){
        result="It is a prime number";

    }
    else{
        result="Not a prime number";
    }
    document.getElementById("p3").innerHTML=result;
}
function isprime(p){
    if(p<1){
        return false;
    }
        for(w=2;w<p;w++){
            if(p%w == 0){
                return false;
            }
         } 
         return true;
        
    }
    

    
function my_function5(){
    b=parseInt(document.getElementById('num4').value);
   let evensum=0
   let oddsum=0;
    for(e=1;e<=b;e++){
        if(e%2 == 0){
            evensum += e; 
        }
        else {
            oddsum += e;
        }
    }
    document.getElementById("p4").innerHTML="The even sum of the given number is " +evensum + "<br>" + "The odd sum of the given number is " +oddsum;
}
 