export interface CreditCard {
    cardNumber : Number,
    cardHolderName : string,
    expiryDate : Date,
    cvv? : string,
    amount : Number
}