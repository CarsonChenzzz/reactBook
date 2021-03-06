var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;


var App = require('./modules/App');
var Home = require('./modules/Home');
var About = require('./modules/About');
var List = require('./modules/List');
var Contact = require('./modules/Contact');
var Detail = require('./modules/Detail');
var Search = require('./modules/Search');

var Index = React.createClass({
	render:function(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="/detail/:id" component={Detail} />
					<Route path="/about" component={About} />
					<Route path="/list/:page" component={List} />
					<Route path="/contact" component={Contact} />
					<Route path="/search" component={Search} />
				</Route>
			</Router>
		)
	}
})

ReactDOM.render(<Index/>,document.getElementById('app'));