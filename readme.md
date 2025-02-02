# Credit Card Validator

A robust JavaScript module for validating credit card numbers and identifying card types using regular expressions.

## Features

- Validates credit card numbers for major card providers:
  - Visa
  - Mastercard

- Provides detailed validation results including card type and error messages
- Handles formatted input (spaces, dashes)

## Regular Expression Patterns Explained

### Visa
```javascript
/^4[0-9]{12}(?:[0-9]{3})?$/
```
- Starts with '4'
- Followed by 12 digits
- Optional additional 3 digits (for 16-digit cards)

### Mastercard
```javascript
/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
```
- Traditional pattern: Starts with '51-55' followed by 14 digits
- New 2-series pattern: Covers ranges 2221-2720 followed by 12 digits

### Vervecard
```javascript
/^5[0-9]{15}(?:[0-9]{3})?$/
```
- Starts with '5' and is followed by exactly 16 digits.
- Optionally includes 3 extra digits, allowing for 19-digit Verve cards.
- Only allows numeric values and ensures the total length is either 17 or 19 digits.


## Usage

```javascript
const validator = new CreditCardValidator();

const result = validator.validate('4532015112830366');
console.log(result);
// Output: { isValid: true, cardType: 'visa', error: null }
```

## Return Value

The `validate` method returns an object with:
- `isValid`: Boolean indicating if the card number is valid
- `cardType`: String indicating the card type ('visa', 'mastercard', etc.)
- `error`: String containing error message if validation fails, null otherwise

## Error Handling

The validator checks for:
1. Non-numeric characters
2. Valid card number patterns

## Performance Considerations

- Regular expressions are pre-compiled in the constructor
- Input cleaning removes spaces and dashes before validation
- Early returns on basic validation failures

## License

MIT