//1//
function objectValues(obj){
    var keys = Object.keys(obj);
    var vals = [];
    for(var i = 0; i < keys.length; i++){
        var currentKey = keys[i];
        var currentVal = obj[currentKey];
        vals.push(currentVal);
    }
    return vals;
}

//2//
function keysToString(data) {
    var keys = Object.keys(data); 
    return keys.join(" ");
}
//3//
function valuesToString(data) {
    var keys = Object.keys(data);
    var vals = [];
    for(var i = 0; i < keys.length; i++) {
        if(typeof data[keys[i]] === "string"){
              vals.push(data[keys[i]]);
        }
    }
  return vals.join(' ');
}
//4//
function arrayOrObject(value){
  if(Array.isArray(value)){
    return "array";
  }else {
    return "object";
  }
}
//5//
function capitalizeWord(str){
  return str[0].toUpperCase() + str.slice(1);
}
//6//
function capitalizeAllWords(str){
   var w = str.split(" ");
   for(var i = 0; i < str.split(" ").length;i++){
     w[i] = w[i][0].toUpperCase() + w[i].slice(1);
   }
   return w.join(" ");
}
//7//
function welcomeMessage(obj){
  return "Welcome " + capitalizeWord(obj.name) + "!";
}
//8//
function profileInfo(obj){
  return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}
//9//
function maybeNoises(obj){
  if(obj.noises.length > 0 && Array.isArray(obj.noises)){
    var keys = Object.keys(obj);
    for(var i = 0; i < keys.length;i++){
      return obj[keys[i]].join(" ");
    }
  }
    return "there are no noises";
}
//10//
function hasWord(words,word){
  var x = words.split(" ");
  var output = false;
  for(var i = 0; i < x.length; i++){
    if(word === x[i]){
      output = true;
    }
  }
  return output;
}

//11//
function addFriend(name, obj){
  obj.friends.push(name);
  return obj;
}

//12//
function isFriend(name,obj){
  var output = false;
  var keys = Object.keys(obj);
  if(Object.keys(obj).length > 0){
  for(var i = 0; i < obj.friends.length;i++){
    if(name === obj.friends[i]  ){
      output = true;
    }
  }
  }
  return output;
}
//13//
function nonFriends(name,list){
  
}

//14//
