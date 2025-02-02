// card parterns with explanation.

const visaCard=/^4[0-9]{12}(?:[0-9]{3})?$/
/*
The visa card pattern ensures the card number:
- Starts with '4' (Visa cards always begin with 4).
- Contains 12 more digits, making it at least 13 digits long.
- Optionally includes 3 extra digits, allowing 16-digit Visa cards.
- Only allows numeric values and ensures the total length is either 13 or 16 digits.
*/

const masterCard =/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/

/*
This pattern ensures the card number:
- Starts with '51' to '55' (older Mastercard range) and has 16 digits.
- OR starts with '2221' to '2720' (newer Mastercard range) and has 16 digits.
- Only allows numeric values and strictly enforces a 16-digit length.
*/


const verveCard = /^5[0-9]{15}(?:[0-9]{3})?$/;

/*
This pattern ensures the card number:
- Starts with '5' and is followed by exactly 16 digits.
- Optionally includes 3 extra digits, allowing for 19-digit Verve cards.
- Only allows numeric values and ensures the total length is either 17 or 19 digits.
*/

// Credit Card Validator
class CreditCardValidator {
    constructor() {
        // Regular expressions for different card types
        this.cardPatterns = {
            visa: visaCard,
            mastercard: masterCard,
            verve: verveCard,
        };
    }

    // Validate card number and identify type
    validate(cardNumber) {
        // Remove any spaces or dashes
        const cleanNumber = cardNumber.replace(/[\s-]/g, '');
        
        // Check if input contains only digits
        if (!/^\d+$/.test(cleanNumber)) {
            return {
                isValid: false,
                cardType: null,
                error: 'Card number should contain only digits'
            };
        }

        // Check card type
        for (const [type, pattern] of Object.entries(this.cardPatterns)) {
            if (pattern.test(cleanNumber)) {
                return {
                    isValid: true,
                    cardType: type,
                    error: null
                };
            }
        }

        return {
            isValid: false,
            cardType: null,
            error: 'Unknown card type'
        };
    }

}

// Example usage
const validator = new CreditCardValidator();

// Test cases you can add to this to test more cards.
const testCards = [
    '4532015112830366',   // Valid Visa
    '5200828282828210',   // Valid Mastercard
    '5078123456789012345', // valid verve card
    '1234567890123456',   // Invalid card
    '5061123456789012',   // valid second type of verve card
];

testCards.forEach(card => {
    const result = validator.validate(card);
    console.log(`Card: ${card}`);
    console.log('Result:', result);
    console.log('---');
});