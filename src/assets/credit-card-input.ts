 export const formInputData = {
    "input-field": [
        {
            "classData": "big-form",
            "matIconData": "perm_identity",
            "titleData": "Card Holder Name",
            "placeholderData": "Enter Your Name",
            "controlNameData": 'cardHolderName'
        },
        {
            "classData": "big-form",
            "matIconData": "credit_card",
            "titleData": "Card Number",
            "placeholderData": "Enter Card Number",
            "controlNameData": 'cardNumber'
        },
        {
            "classData": "small-form",
            "inputfieldsSmall":[
                {
                    "classData": "small-form",
                    "matIconData": "date_range",
                    "titleData": "Expiry Month",
                    "placeholderData": "Expiry Month",
                    "controlNameData": 'expiryMonth'
                },
                {
                    "classData": "small-form margin-left-20",
                    "matIconData": "date_range",
                    "titleData": "Expiry Year",
                    "placeholderData": "Expiry Year",
                    "controlNameData": 'expiryYear'
                },
                {
                    "classData": "small-form margin-left-20",
                    "matIconData": "lock",
                    "titleData": "CVV",
                    "placeholderData": "CVV",
                    "controlNameData": 'cvv'
                }
            ]
        }
    ]
}
export const formButtonData = {
    "button-field": [
        {
            "color": "primary",
            "titleData": "PAY",
            "typeData":"submit"
        },
        {
            "color": "warn",
            "titleData": "DECLINE",
            "typeData":"reset"
        }
    ]
}