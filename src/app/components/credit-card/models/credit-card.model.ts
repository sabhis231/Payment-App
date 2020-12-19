export interface CreditCard {
    cardNumber : Number,
    cardHolderName : String,
    expiryDate : Date,
    cvv? : String,
    amount : Number
}