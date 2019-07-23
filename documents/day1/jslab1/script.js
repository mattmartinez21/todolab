let name = "Matt Martinez";
let age = "41";
let birthday = "March 2nd";
let detroitGC = true;
let lifeEvents = [
  "I was born in Wyandotte, MI.",
  "I graduated from Wayne State University.",
  "I have three kids.",
  "I performed with Aretha Franklin at her final Detroit performance."
];

if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, MI. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, MI. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; ; i++) {
  console.log(lifeEvents + i);
  if (i < 4) break;
}

var randomNumber = Math.floor(Math.random() * 9 + 1);
{
  console.log(randomNumber);
}

let counter = 0;
while (true) {
  if (randomNumber !== 5) {
    console.log(randomNumber !== 5);
    var randomNumber = Math.floor(Math.random() * 9 + 1);
    counter++;
  } else {
    counter++;
    console.log(
      5 === 5`It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
