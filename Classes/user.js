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
}
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

class Image {
    constructor(fileName, uploadingTime){
    this.fileName = fileName;
    this.uploadingTime = uploadingTime;
}
}


module.exports = User;