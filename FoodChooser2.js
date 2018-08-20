//Array one is a cooking method
var method = ["Steamed", "Fried", "Raw", "Stir fried", "Deep fried", "Smoked"];
//Array two is a type of food
var food = ["Spaghetti", "Seafood", "Steak", "Burger", "Curry", "Hot dog", "Chicken", "Rice", "Human", "Pork", "Bread", "Potato"];
//Make the computer choose a food and way it is cooked
var randOne = Math.floor(Math.random()*method.length);
var randTwo = Math.floor(Math.random()*food.length);
window.alert(method[randOne]+" "+food[randTwo]);
