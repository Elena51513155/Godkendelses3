class User {
    constructor(name, birthday, city, interest, gender, email, password){
    this.name = name;
    this.age = birthday;
    this.city = city;
    this.interest = interest;
    this.gender = gender;
    this.email = email;
    this.password = password;
    }

calculateAge() { 
    var date1 = new Date(this.birthday)
    var diff_ms = Date.now() - date1.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
}

//generateUserID = (function () {
    //var counter = 0;
    //return function  ()  {counter += 1; return counter}


// den generator et user ID, sådan at alt efter hvordan de opretter sig, kommer til at være nummereret i den rækkefølge de registretrer sig

class PaymentUser extends User {
    constructor(name, birthday, city, interest, gender, email, passwors, uniqueUserID, cardName, cardNumber, cardExpireDate, cardCVC){
        this. cardName = cardName;
        this.cardNumber = cardNumber;
        this. cardExpireDate = cardExpireDate;
        this.cardCVC = cardCVC;
    }
}   

class freeUser extends User {
    constructor(name, birthday, city, interest, gender, email, passwors)
}

// lavet som array, så vi senere kan opdatere, slette mm. CRUD endpoints
var user1 = new freeUser('ElenaFrees', [1997, 06, 11], 'Copenhagen', 'Relationship', 'Female', 'elenafrees@hotmail.com', 'detteerminkode');
var user2 = new PaymentUser('FreyFrees', [1999, 11, 02], 'Copenhagen', 'Relationship', 'Male', 'freyfrees@gmai.com', 'freykode123', 'Frey Frees', '1234567812345678', '09/21', '454');

// hvis interest er det samme, skal der ske et match
if(user1.interest == user2.interest){
    console.log('its a match')
}

var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://localhost:4000", true);

// Brug post request ovenfor 

xhttp.send(); 

var storage = multer.diskStorage({
  destination
})

// måske brug nedestående, ved ikke hvad den bruges til
router.post('/', function (req, res) {
    // get itemIds from data array
    let itemIds = data.map(user1 => user1.id);
    // get orderNums from data array
    let orderNums = data.map(user1 => user1.id);
})
