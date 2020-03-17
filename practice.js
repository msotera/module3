//JavaScript Document


//1. Create an object template that represents a vacation rental property. Your object template should include the following properties : name, price, rating, location, rooms, availability and features 
function VacationProperty(name, price, rating, location, rooms, features, availability) 
{
  
  // property and method definitions
  this.name = name;
  this.price = price;
  this.rating = rating;
  this.location = location;
  this.rooms = rooms;
  this.features = features;
  this.availability = availability;
};

//2. Create a method to display a description of the property and a method that checks availability. Both methods should be able to be inherited (hint hint - use the prototype property). 



//Create a method to display a description of the property
VacationProperty.prototype.greeting = function() 
{
    alert('Hello from ' + VacationProperty.name + ' in ' + VacationProperty.location +'.'
  		+ ' Our ' + VacationProperty.name +' currently has ' + VacationProperty.rooms + ' spacious room(s) available! This location also comes with ' + VacationProperty.features +
  		+ ' for the low, low price of: ' + VacationProperty.price + '!');
  	
};

//Create a method that checks availability and average user rating
VacationProperty.prototype.availability = function()
{
	alert('This location is: ' + this.availability + '! This location has an average user rating of: ' + this.rating + '!');
	
	if(rating = '5/5')
	{
		alert('*****SUPERHOST*****');
	};
	

};



//3. Create an object instance for 2 different vacation rental properties 
let VacationProperty1 = new VacationProperty('Beautiful Mountain Side Chalet,', 50, '4/5', 'Blue Mountain', 1,  ['Sauna', 'Hottub', 'Base of Blue Mountain'], 'AVAILABLE');

let VacationProperty2 = new VacationProperty('Blue Mountain Vacation Studio Condo', 100, '4/5', 'Blue Mountain', 2, ['On site heated pool', 'Hot tub', 'Tennis courts'], 'AVAILABLE');


//4. Create an object template for special rate properties that inherits from the property object previously created but includes a type property that is set to special rate ( - 20% of the regular price) and a method to calculate and show the reduced rate

//Create an object template for special rate properties that inherits from the property object previously created but includes a type property that is set to special rate
function SpecialRateProperty(name, price, rating, location, rooms, features, availability, specialRate)
{
	
	{
		//call on extended variables using VacationProperty.call
		VacationProperty.call(this, name, price, rating, location, rooms, features, availability);

		//method to calculate and show the reduced rate
		//variable discountAmount is equal to value of variable (price * 0.20)
		//variable specialRate is equal to the value of price - the value of variable discountAmount
		let discountAmount = (price * 0.20);
		specialRate = (price - discountAmount);

		//variable specialRate has property of the variable specialRate in current execution context
		this.specialRate = specialRate;


	}
}

SpecialRateProperty.prototype = Object.create(VacationProperty.prototype);

//5. Instantiate one instance of the special rate property
let SpecialRateProperty1 = new SpecialRateProperty('Amazing 3 Bedroom Townhouse', 150, '4/5', 'Blue Mountain', 3, ['3 Minutes from Alpine and Craigleith ski clubs', 'Garage parking for 2 cars', 'Sleeps 9'], 'NOT AVAILABLE', SpecialRateProperty.specialRate);


//Create a method to display a description of the property with its discounted rate
SpecialRateProperty.prototype.hello = function()
{
	alert('Hello from ' + SpecialRateProperty.name + ' in ' + SpecialRateProperty.location +'!'
  		+ ' Our ' + SpecialRateProperty.name +' has ' + SpecialRateProperty.rooms + ' spacious room(s) available! This location also comes with ' + SpecialRateProperty.features
  		+ '!' +' Originally priced at: '+ SpecialRateProperty.price + ',' + ' NOW PRICED AT: ' + SpecialRateProperty.specialRate + '!');
};


//6. Create an object template for super host properties that inherits from the main property object previously created but sets the type to superhost and includes a method to display the super host rating


class SuperHostProperty extends VacationProperty
{
	constructor(name, price, rating, location, rooms, features, availability, superHost)
	{
		super(name, price, rating, location, rooms, features, availability);

		this.superHost = superHost;

	}

}

SuperHostProperty.prototype = Object.create(VacationProperty.prototype);

//7. Instantiate one instance of the super host property
let SuperHostProperty1 = new SuperHostProperty('Family friendly Chalet Cottage', 200, '5/5', 'Blue Mountain', 4, ['Interior wood burning fireplace', 'Air conditioning', '3 Full bathrooms'],  'AVAILABLE');



//8. Find an interesting way to display the information regarding the four different properties in the browser.


//event listener on click for buttons --> when clicked, button of rental property will show information about that rental property
let b1 = document.getElementById("button1").addEventListener("click", function()
{
	VacationProperty.prototype.greeting(VacationProperty1);

});

let b2 = document.getElementById("button2").addEventListener("click", function() 
{
	VacationProperty.prototype.greeting(VacationProperty2);
});

let b3 = document.getElementById("button3").addEventListener("click", function() 
{
	SpecialRateProperty.prototype.hello(SpecialRateProperty1);
});

let b4 = document.getElementById("button4").addEventListener("click", function() 
{
	VacationProperty.prototype.greeting(SuperHostProperty1);
});


//event listener on click for images --> when clicked, image of rental property will show availability and rating information about that rental property
let img1 = document.getElementById("image1").addEventListener("click", function() 
{
	VacationProperty.prototype.availability(VacationProperty1);
});

let img2 = document.getElementById("image2").addEventListener("click", function() 
{
	VacationProperty.prototype.availability(VacationProperty2);
});

let img3 = document.getElementById("image3").addEventListener("click", function() 
{
	VacationProperty.prototype.availability(SpecialRateProperty1);
});

let img4 = document.getElementById("image4").addEventListener("click", function() 
{
	VacationProperty.prototype.availability(SuperHostProperty1);
});


//9. explain your code and explain one challenge you faced, one success and one way that you would like to improve your application in the future

//Challenge ---> One major challenge I faced was trying to get things to work the way I wanted them to. An example of this would be the way my buttons and images have alerts pop up. I wanted the alerts to pop up, Howevere I wanted the information in the alert to reflect the information that was supposed to be tied to that button or image. ex- Button 1 is for 'the Beautiful Mountain Side Chalet', when clicked it should have shown its information in the alert.

//Success ---> I was able to get the buttons and images to show an alert when clicked, which was a struggle for me dueing our last module assignment.

//Improvements ---> Obviously I would like to have everything working the way it is supposed to. Outside of that, one way I would like to improve this application in the future is by building individual pages for each location so when the image is clicked it would take the user to a seperate page where they could see more detailed information about the specific location and it could also have include more photos for each individual location.