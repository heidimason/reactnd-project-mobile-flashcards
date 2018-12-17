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
		    	answer: 'It is not HTML template based, uses CSS in JS, does not scale down well'
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
		    	question: 'What is a callback?',
		    	answer: 'A function to be executed after another function has finished executing'
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
		    }
		]
	}
}
