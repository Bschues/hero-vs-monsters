"use strict";

// Why am I formatting my code this way: taking some single statements and
// breaking them out to multiple lines? Here's why: https://bit.ly/2HmI6RA

const ratSupremacist = 
  new Monster("Intelligent Rat (Racist)", "lab-experiment gone awry", 5);

const lawsuitWaitingToHappen = 
  new Monster("Sentient Boiling Hot Spilled Coffee", "construct", 5);

const gheklekTheWereRainbow = 
  new Monster("Semi-Iridescent Goblin", "fantastical creature", 30);

// What's with that slash at the end of some of the lines below?
// https://mdn.io/string#Long_literal_strings
// https://davidwalsh.name/multiline-javascript-strings

const jennifer = 
  new Monster(
    "Misunderstood Ogre (Former Cast Member of 'One Tree Hill') Acting \
    in Self-Defense and Sheer Bewilderment", 
    "fantastical creature", 
    80
  );

const monsters = 
  [ratSupremacist, lawsuitWaitingToHappen, gheklekTheWereRainbow, jennifer];

const superhero1 = new Hero("Superman", "Clark Kent", 110);

// Below, I am using the newline "escape sequence" to force console.log to
// print a literal newline on the console: http://mdn.io/string#Escape_notation

console.log(
  "A hero emerges!", 
  "\nThe noble " + superhero1.name + " has vowed to defeat the monsters and \
  save the realm.",
  "\nWill they be victorious?"
);

superhero1.fight(monsters);

if (superhero1.isAlive) {
  console.log("The hero, " + superhero1.name + ", prevailed!");
} else {
  console.log(
    superhero1.name,
    "was bested by the monsters and when unmasked was discovered to be",
    superhero1.secretIdentity + "!"
  );
}

