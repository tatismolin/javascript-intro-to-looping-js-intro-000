function forLoop(array){
  for(i = 0; i < 25; i++)
  if(i === 1){
    return forLoop.push(i + "I am 1 strange loop.");
  } else {
    return forLoop.push(`I am ${i} strange loops.`);
  }
}
