console.log('Hello, world!')
/*
var input = prompt("What's your name?");
alert(`Your name is ${input}`);
var r = prompt("R=")
var u = prompt("U=")
i=u/r
console.log("I="+i)
*/
const bound=10
mainloop()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function mainloop() {
    for (let i = 1; i <50 ; i++) {  

       await sleep(600);
       console.clear()
       build()
    }
 }

function build(){
  for (let line = 0; line < bound; line++) {
    a1=air(true,line)
    l1=tree(line) 
    a2=air(true,line)
    l2=tree(line) 
    //build tree
    x=a1+l1+"*"+l2+a2 
    console.log(x)
  }
  for (let index = 0; index < bound/3; index++) {
    a1=air(false,1);
    a2=air(false,1);
    console.log(a1+"|||"+a2)
  }
}

function air(r,i)
{
    let line="" 
    for (let j = bound; j >i; j--) {
      if (r && Math.random() * 10<3)
        line=line+"."
      else
        line=line+" "
    }
    return line;
} 

function tree(i)
{
    let line=""
    for (let j = 0; j < i; j++) {
      if (Math.random() * 10<3)
        line=line+"o"
      else
        line=line+"*"
    }
    return line;
}