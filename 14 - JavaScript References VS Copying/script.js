// start with strings, numbers and booleans

console.log("Let's say we have an array players:");
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(players);
console.log('and we want to make a copy of it.');
console.log('You might think we can just do something like team = players:');
const team = players;
console.log('Original arrays:');
console.log(players, team);
console.log("however what happens when we update that array?");
team[3] = 'Lux';
console.log('Both team and player are updated becuse teams is only a reference to players:');
console.log(players, team);
// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

console.log("So, how do we fix this? We take a copy instead!");
const players2 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// one way
console.log("slice:");
const team2 = players2.slice();
console.log(players2, team2);
console.log("Change team2:");
team2[3] = 'Lux';
console.log(players2, team2);
console.log('Only one array is updated.');
console.log("or create a new array and concat the old one in:");
const team3 = [].concat(players2);
console.log(players2, team3);
console.log("Change team3:");
team3[3] = 'Lux';
console.log(players2, team3);
console.log("or use the new ES6 Spread");
team4 = [...players2];
console.log(players2, team4);
console.log("Change team4:");
team4[3] = 'Lux';
console.log(players2, team4);
console.log('Also Array.from():');
team5 = Array.from(players2);
console.log(players2, team5);
team5[3] = 'Lux';
console.log("Change team5:");
console.log(players2, team5);
// now when we update it, the original one isn't changed

console.log("The same thing goes for objects, let's say we have a person object");

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};
const person2 = {
  name: 'Wes Bos',
  age: 80
};

console.log("and think we make a copy (captain = person):");
const captain = person;
console.log(person, captain);
captain.number = 99;
console.log('Changing one changes both because it is a reference:');
console.log(person, captain);

console.log("how do we take a copy instead? Object.assign()");
const cap2 = Object.assign({}, person, {
  number: 99
});
console.log(person2, cap2);
// We will hopefully soon see the object ...spread


console.log("Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.");
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};
const dev = Object.assign({}, wes);
console.log(wes, dev);
console.log('Alter level 1:');
dev.name = 'dev';
console.log(wes, dev);
console.log('Alter level 2 nested social object:');
dev.social.twitter = '@coolman';
console.log(wes, dev);
console.log('Changes in both objects because social is only a reference in the copy');