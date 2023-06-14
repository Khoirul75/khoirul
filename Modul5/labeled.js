let st = " ";
let id = 0;
loop:
 for (id; id<8; id++){
  if (id === 3){
    continue loop;
  }
  str = st+id;
  console.log(str);
 }