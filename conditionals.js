/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

let a;
let b;
if (a > b) {
    console.log(a);

    
}
else {
   console.log(b)
}


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let a = 3;

let b = -7;
let c=2;
if (a>0 && b>0 && c>0)
{
       alert("The sign is +");
}
else if (a<0 && b<0 && c<0)
        {
          alert("The sign is -");
        }
        else if (a>0 && b<0 && c<0)
        {
          alert("The sign is +");
        }
        else if (a<0 && b>0 && c<0)
        {
          console.log("The sign is +");
        }
        else
        {
         alert("The sign is -");
        }



 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
var a= 0;
var b=-1;
var c= 4;
if (a>b && a>c)
{
        if (b>c)
        {
           alert(a + ", " + b + ", " +c);
        }
        else
        {
            alert(a + ", " + c + ", " +b);
        }
}
else if (b>a && b >c)
{
        if (a>c)
        {
             alert(b+ ", " + a+ ", " +c);
        }
        else
        {
             alert(b + ", " + c + ", " +a);
        }
}
else if (c>a && c>b)
{
        if (a>b)
        {
            alert(c+ ", " + a + ", " +b);
        }
        else
        {
           alert(c + ", " + b + ", " +a);
        }
}        
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
a=-5;
b=-2;
c=-6;
d= 0;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    alert(a);
}
else if (b>a && b>c && b>d && b>f)
{
    alert(b);
}
else if (c>a && c>b && c>d && c>f)
{
    alert(c);
}
else if (d>a && d>c && d>b && d>f)
{
    alert(d);
}
else
{
    alert(f);
}
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  
if
(x >y) {
 alert("Hello World");
} 
else
{
 alert("Goodbye");
}
 /******* End Your Code ********* */



