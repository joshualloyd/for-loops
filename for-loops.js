// Increment by 10
for (var i = 5; i <= 120; i = i + 10) {
   console.log(i);
}

// Decrement by Division
for (var i = 4096; i >= 1; i = i / 2) {
	console.log(i);
}

// Array Iteration

// array of presidents
var presidents = [
  "George Washington",
  "John Adams",
 	"Thomas Jefferson",
	"James Madison",
  "James Monroe",
  "John Quincy Adams",
  "Andrew Jackson",
  "Martin Van Buren",
  "William Henry Harrison",
  "John Tyler",
	"James K. Polk",
	"Zachary Taylor",
	"Millard Fillmore",
	"Franklin Pierce",
	"James Buchanan",
	"Abraham Lincoln",
	"Andrew Johnson",
	"Ulysses Grant",
	"Rutherford B. Hayes",
	"James Garfield",
	"Chester A. Arthur",
	"Grover Cleveland",
	"Benjamin Harrison",
	"Grover Cleveland",
	"William McKinley",
	"Theodore Roosevelt",
	"William Taft",
	"Woodrow Wilson",
	"Warren Harding",
	"Calvin Coolidge",
	"Herbert Hoover",
	"Franklin  Roosevelt",
	"Harry  Truman",
	"Dwight Eisenhower",
	"John F. Kennedy",
	"Lyndon Johnson",
	"Richard Nixon",
	"Gerald Ford",
	"Jimmy Carter",
	"Ronald Reagan",
	"George H. W. Bush",
	"Bill Clinton",
	"George W. Bush",
	"Barack Obama"
]
// logging presidents to the console
for (var i = 0; i < presidents.length; i++) {
	console.log(`President #${parseInt([i]) + 1} was ${presidents[i]}`);
}

// Object Iteration
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
	console.log(`${prop}`);
}