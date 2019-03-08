export const starterData = {
	React: {
		title: 'React',
		questions: [
			{
		    	question: 'What is React?',
		     	answer: 'A library for managing user interfaces'
	      	},
	    	{
		    	question: 'Where do you make Ajax requests in React?',
		    	answer: 'The componentDidMount lifecycle event'
		    },
		    {
		    	question: 'What is the Virtual DOM?',
		    	answer: 'It reflects a tree in which each node is an HTML element. React is able to traverse and carry out operations on this Virtual DOM, saving the app from having "costly" activity on the actual DOM.'
		    },
		    {
		    	question: 'What does the diffing algorithm do?',
		    	answer: 'It determines how to make efficient changes to the DOM. With diffing, old DOM nodes are taken out and replaced only when necessary. This way, the app doesn\'t perform any unnecessary operations to figure out when to render content.'
		    },
		    {
		    	question: 'What are some disadvantages of React?',
		    	answer: 'It is not HTML template based, does not scale down well'
		    },
		    {
		    	question: 'What is this.props?',
		    	answer: 'An object with the properties (props) passed into the component'
		    },
		    {
		    	question: 'What do props represent?',
		    	answer: 'Read-only data that are immutable'
		    },
		    {
			    question: 'What does state represent?',
			    answer: 'Mutable data that ultimately affects what is rendered on the page'
		    }
		]
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
        		question: 'What is a closure?',
        		answer: 'A function with access to its own private variables'
      		},
      		{
      			question: 'What is a use for a closure?',
      			answer: 'Assigning functions in for loops'
      		}
		    {
		    	question: 'What is a callback?',
		    	answer: 'A function to be passed and to executed after another function has finished executing; the default JS technique for asynchronous work'
		    },
		    {
		    	question: 'What is a set',
		    	answer: 'A collection of unique items'
		    },
		    {
		    	question: 'What is the DOM',
		    	answer: 'The Document Object Model; the object that represents the HTML document with which your JS interacts'
		    },
		    {
		    	question: 'What is a property?',
		    	answer: 'An object specific variable that stores information'
		    },
		    {
		    	question: 'What is a method?',
		    	answer: 'An object specific function that lets your object do something or lets something be done to it'
		    },
		    {
		    	question: 'What is encapsulation?',
		    	answer: 'It describes consolidating an object\'s properties and methods into a package and attaching it to a variable'
		    },
		    {
		    	question: 'What is a major difference between arrays and strings?',
		    	answer: 'Strings cannot be manipulated (i.e. they are immutable)'
		    },
		    {
		    	question: 'What is a singly linked list?',
		    	answer: 'A data structure comprised of objects that point to each other'
		    },
		    {
		    	question: 'What is recursion?',
		    	answer: 'The ability of a function to call itself'
		    },
		    {
		    	question: 'Do the .map() and .filter() methods return a new array or modify the original array?',
		    	answer: 'New array'
		    },
		    {
		    	question: 'What are 2 important JS programming paradigms?',
		    	answer: 'prototypal object-oriented and functional'
		    },
		    {
		    	question: 'What does two-way data binding mean?',
		    	answer: 'UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa'
		    },
		    {
		    	question: 'What does one-way data flow mean?',
		    	answer: 'The model is the single source of truth'
		    },
		    {
		    	question: 'What does synchronous programming mean?',
		    	answer: 'Barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests'
		    },
		    {
		    	question: 'What does asynchronous programming mean?',
		    	answer: 'The engine runs in an event loop. UIs are asynchronous by nature. The code happens at an unknown or unpredictable time'
		    },
		    {
		    	question: 'What is a Promise?',
		    	answer: 'An object used for deferred and asynchronous computations. A try/catch wrapper around asynchronous code'
		    },
		    {
		    	question: 'Are let and const scoped to the block or function?',
		    	answer: 'The block'
		    },
		    {
		    	question: 'When should you use let?',
		    	answer: 'When you plan to reassign new values to a variable'
		    },
		    {
		    	question: 'When should you use const?',
		    	answer: 'When you don\'t plan on reassigning new values to a variable'
		    }
		]
	}
}
