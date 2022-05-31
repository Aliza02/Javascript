console.log("hellow");
let myvariable="Hello world";
console.log(myvariable);
myvariable="this is JS";
console.log(myvariable);
let myvariable1="this is another variable";
if(myvariable==myvariable)
{
    console.log("true");
}
else if(myvariable===myvariable1)
{
    console.log("false");
}
 function miltiply(var1,var2)
 {
     return var1*var2;
 }
 
 console.log(miltiply(2,3));

//  adding an image changer
let myimage=document.querySelector('img');
myimage.onclick=function()
{
    let mysrc=myimage.getAttribute('src');
    if(mysrc==='mercedes.jpg')
    {
        myimage.setAttribute('src','lamborghini.jpg');
        console.log("changes");
    }
    else
    {
        myimage.setAttribute('src','mercedes.jpg');
    }
}
