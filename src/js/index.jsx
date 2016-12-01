/*
var React                   = require('react');
var ReactDOM                = require('react-dom');
var MyComponent 		 	= require("./components/ColorComponent.jsx");
var Counter 		 	    = require("./components/CountComp.jsx");
var FilteredList 		 	= require("./components/FilterComp.jsx");



ReactDOM.render(<MyComponent name="Josh" />, document.getElementById('myDiv'));
//ReactDOM.render(<Counter/>, document.getElementById('mount-point'));
ReactDOM.render(<FilteredList/>, document.getElementById('mount-point'));
*/

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//var ReactTransitionGroup = require('../react-addons-css-transition-group');
var React                   = require('react');
var ReactDOM                = require('react-dom');
var Parent				= require('./components/Parent.jsx');
//var Friends					= require('./components/friends.jsx');
ReactDOM.render(<Parent />, document.getElementById('container'));




