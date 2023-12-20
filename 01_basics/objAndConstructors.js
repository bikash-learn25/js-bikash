// It's a string representation of the current date and time. The Date() function, when invoked without new, returns a string.

const currentDate = Date();
console.log(currentDate);


// The Date constructor is used with the new keyword. This results in the creation of a Date object that represents the current date and time.

const currentDateObject = new Date();
console.log(currentDateObject);

/*
- In JavaScript, a constructor is a function used to create and initialize objects. 

- The Date function, when called with new, acts as a constructor and creates a new instance of the Date object.

Conclusion:

- So, to summarize, the first example deals with a string representation of the date and time, while the second example involves the creation of a Date object using the Date constructor.

- The constructor is responsible for creating instances of objects, and the resulting objects can have various properties and methods associated with them, depending on the constructor used.
*/

