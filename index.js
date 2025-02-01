// Credit Card Validator
class CreditCardValidator {
    constructor() {
        // Regular expressions for different card types
        this.cardPatterns = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
            verve: /^5[0-9]{16}(?:[0-9]{3})?$/,
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
    '1234567890123456',   // Invalid card
    '5061050260540295603'                 , // valid verve card
];

testCards.forEach(card => {
    const result = validator.validate(card);
    console.log(`Card: ${card}`);
    console.log('Result:', result);
    console.log('---');
});