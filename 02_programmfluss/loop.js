for (let index = 0; index < 3; index++) {
  console.log (index);
}
console.log("---")
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log (i + "/" + j);
  }
}
console.log("---")
for (let i = 0; i < 3; i++) {
  let line=""
  for (let j = 0; j < 3; j++) {
    line += i + "/" + j + " ";
  }
  console.log(line)
}
console.log("---")
function make_line(i){
  let line=""
  for (let j = 0; j < 3; j++) {
    line += i + "/" + j + " ";
  }
  return line;
}

for (let i = 0; i < 3; i++) {
  console.log(make_line(i))
}
console.log("---")