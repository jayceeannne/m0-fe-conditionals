var age = 25
var goodDrivingRecord = true
//Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:

//If the driving record is good and user is over 25 years old, they should get a discount on the car rental
if (goodDrivingRecord === true && age > 25){
    console.log('Congrats! you get a discount')
//If the user either has a good record or is over 25 years old, they should pay full price
} else if (goodDrivingRecord === true || age > 25) {
    console.log('Sorry you have to pay full price')
//If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental
} else {
    console.log('Sorry someone else needs to sign')
}