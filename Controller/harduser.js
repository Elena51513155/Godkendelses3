const User = require('./Classes/user')

let userArray = []
let User1 = new freeUser('ElenaFrees', [1997, 06, 11], 'Copenhagen', 'Relationship', 'Female', 'elenafrees@hotmail.com', 'detteerminkode');
let User2 = new PaymentUser('FreyFrees', [1999, 11, 02], 'Copenhagen', 'Relationship', 'Male', 'freyfrees@gmai.com', 'freykode123', 'Frey Frees', '1234567812345678', '09/21', '454');

userArray = [User1, User2]

module.exports = userArray

// SPØRG HVOR DENNE SKAL HEN
var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://localhost:4000", true);

// Brug post request ovenfor 

xhttp.send(); 

var storage = multer.diskStorage({
  destination
})

