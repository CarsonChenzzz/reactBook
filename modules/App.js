var React = require('react');
var NavLink = require('./NavLink');
var IndexLink = require('react-router').IndexLink;

var App = React.createClass({
	render:function(){
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-static-top container">
		          <div className="container">
		            <div className="navbar-header">
		              <a className="navbar-brand" href="#">亚麻得书书</a>
		            </div>
		            <div id="navbar" className="navbar-collapse collapse">
		              <ul className="nav navbar-nav">
		                <li><IndexLink to="/">主页</IndexLink></li>
		                <li><NavLink to="/list/1">21世纪不可不读的小黄书</NavLink></li>
		                <li><NavLink to="/search">寻找未完成的湿</NavLink></li>
		                <li><NavLink to="/about">关于我们</NavLink></li>
		                <li><NavLink to="/contact">联系我们</NavLink></li>
		                <li><a href="http://www.chen7.online/ver/map.html">想不想上车？</a></li>
		              </ul>
		            </div>
		          </div>
		        </nav>
		        <div className="container marketing">

			        {this.props.children}
		    		<hr className="featurette-divider"/>
					
			        <footer>
				    	<p className="pull-right"><a href="#">Back to top</a></p>
				        <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
					 </footer>
				</div>
			</div>
		)
	}
});

module.exports = App;