function grabDoll(dolls){
  var bag=[];
  //coding here
  for (i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll" ) {
      bag.push(dolls[i])
      if (bag.length === 3) {
        break;
      }
    } else { continue; }
  }
  return bag;
}