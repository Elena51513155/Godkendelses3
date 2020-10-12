class User {
    constructor(name, age, city, interest, like, gender, email){
    this.name = name;
    this.age = age;
    this.city = city;
    this.interest = interest;
    this.like = like;
    this.gender = gender;
    this.email = email;

}
}

class PaymentUser extends User {
    constructor(superLike){
        this.superLike = superLike
    }
}

class creditCard extends PaymentUser {
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



// måske brug nedestående
router.post('/', function (req, res) {
    // get itemIds from data array
    let itemIds = data.map(item => item.id);
    // get orderNums from data array
    let orderNums = data.map(item => item.order);
})# Godkendelses3
