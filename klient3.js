class User {
    constructor(name, age, city, interest, gender, email, password, uniqueUserID){
    this.name = name;
    this.age = age;
    this.city = city;
    this.interest = interest;
    this.gender = gender;
    this.email = email;
    this.password = password;
    this.uniqueUserID = uniqueUserID;
}
var generateUserID = (function () {
    var counter = 0;
    return function  ()  {counter += 1; return counter}
})()
}
// den generator et user ID, sådan at alt efter hvordan de opretter sig, kommer til at være nummereret i den rækkefølge de registretrer sig

class PaymentUser extends User {
    constructor(superLike){
        this.superLike = superLike
    }
}

class creditCard {
    constructor(cardName, cardNumber, cardExpireDate, cardCVC){
        this. cardName = cardName;
        this.cardNumber = cardNumber;
        this. cardExpireDate = cardExpireDate;
        this.cardCVC = cardCVC;
    }
}
class freeUser extends User {
    constructor(name, age, city, interest, like, gender, email)
}

var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://localhost:3000", true);

// Brug post request ovenfor 

xhttp.send(); 

var storage = multer.diskStorage({
  destination

})

// måske brug nedestående, ved ikke hvad den bruges til
router.post('/', function (req, res) {
    // get itemIds from data array
    let itemIds = data.map(item => item.id);
    // get orderNums from data array
    let orderNums = data.map(item => item.order);
})# Godkendelses3
