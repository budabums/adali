// Example parameters
const param = false; // Could be any boolean condition

// Ternary operator to choose between two objects
const config = param 
    ? { environment: 'production', debug: false, version: '1.0.0' }
    : { environment: 'development', debug: true, version: '1.0.0-beta' };

console.log(config);
