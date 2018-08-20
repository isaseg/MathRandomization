var adjectives = ["dumb", "smart", "tall", "short", "slow", "small", "big"];
var name = prompt("What is your name?");
var randomAdj = [Math.floor(Math.random()*adjectives.length)];
window.alert(name+" is "+adjectives[randomAdj]);