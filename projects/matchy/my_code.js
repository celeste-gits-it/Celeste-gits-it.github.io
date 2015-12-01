//Step 1 //
var animal = {};
animal.species = 'Raccoon'; //shaping object on the fly//
animal['name'] = 'Shaggy';
animal.noises = [];
//console.log(animal); // debugging aka inspecting var animal//
//Step 2//
var noises = [];
noises[0] = 'scurrying';
noises.push('screech');
noises.unshift('haha');
noises[noises.length -1] = 'farting';
//console.log(noises.length);
//console.log(noises[noises.length -1]);
//console.log(noises);
//Step 3 //
animal['noises'] = noises; //using bracket syntax key must be in ''//
animal['noises'].push('OMG');
//console.log(animal);
//Step 4//
// dot notation and bracket syntax//
// push, unshift, length -1//
//Step 5 - BREAK //
//Step 6 //
var animals = [];
animals.push(animal);
//console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
var dog = { species: 'dog', name: 'Paco', noises: ['bark', 'howl', 'growl', 'whine'] };
var fish = { species: 'fish', name: 'Obama', noises: ['bubble', 'gulp', 'zip', 'splash'] };

animals.push(duck, dog, fish);

//console.log(animals);

//Step 7 //
//array - we chose array because it is best for creating a list
var friends = [];
// pattern for getting random element from array//
function getRandomValueFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

friends.push(getRandomValueFromArray(animals));
//console.log(friends);

var firstAnimal = animals[0];
firstAnimal.friends = friends;
//console.log(firstAnimal);

//Part 2//
function search(animals, name) {
    for(var i = 0; i < animals.length; i++) { 
        if(name === animals[i].name) {
            return animals[i]; 
        }
    }
    return null;
}
        
//console.log(search(animals,'Obama'));

//step 2//
function edit(name, object) {
    for(var i = 0; i < animals.length; i++) { 
        if(name === animals[i].name) {
            animals[i] = object; 
        }
    }
}

//Step 3//

function remove(name) {
    for(var i = 0; i < animals.length; i++) { 
        if(name === animals[i].name) {
            animals.splice(i, 1); 
        }
    }
}

function create(Obj) {
    if(Obj.name.length > 0 && Obj.species.length > 0 ) {
        for(var i = 0; i < animals.length; i++) { 
             if(Obj.name === animals[i].name) { 
                return null;
                 
             }
        }       
        animals.push(Obj);
    }
}    

// for in loop 

