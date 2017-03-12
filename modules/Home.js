var React = require('react');
var NavLink = require('./NavLink');

var Home = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://www.chen7.online/php/book.php'
		}
	},
	getInitialState:function(){
		return {
			list:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({url:this.props.url,dataType:'json'}).then(function(res){
			_this.setState({
				list: res.books
			})
		})
	},
	render:function(){

		if(this.state.list.length>0){
			var lstOne = [];
			var lstTwo = [];
			var data = this.state.list;
			var listLen = data.length;

			var showOneImg = data[25].images.large;
			var showOneTitle = data[25].title;
			var showOneAuthor = data[25].author;
			var showOneSummary = data[25].summary;
			var showOnePublisher = data[25].publisher;

			var showTwoImg = data[42].images.large;
			var showTwoTitle = data[42].title;
			var showTwoAuthor = data[42].author;
			var showTwoSummary = data[42].summary;
			var showTwoPublisher = data[42].publisher;


			for(var i =0;i<9;i++){
				var detailUrl = "/detail/" + data[i].id;
				lstOne.push(
					<div className="col-lg-4" key={i}>
			          <img className="img-rounded" 
			          src={data[i].images.large} 
			          alt="Generic placeholder image" width="140" height="190"/>
			          <h3>{data[i].title}</h3>
			          <p>作者：{data[i].author}</p>
			          <p>价格：{data[i].publisher}</p>
			          <p>价格：{data[i].price}</p>
			          <p>
			          	<NavLink to={detailUrl} className="btn btn-danger" role="button">
			         	老铁！点击就送 &raquo;</NavLink>
			         </p>
			        </div>
				)
			}

			for(var i =9;i<18;i++){
				var detailUrl = "/detail/" + data[i].id;
				lstTwo.push(
					<div className="col-lg-4" key={i}>
			          <img className="img-rounded" 
			          src={data[i].images.large} 
			          alt="Generic placeholder image" width="140" height="190"/>
			          <h3>{data[i].title}</h3>
			          <p>作者：{data[i].author}</p>
			          <p>价格：{data[i].publisher}</p>
			          <p>价格：{data[i].price}</p>
			          <p>
			          	<NavLink to={detailUrl} className="btn btn-danger" role="button">
			         	老铁！点击就送 &raquo;</NavLink>
			         </p>
			        </div>
				)
			}

		}

		return (
			<div>
			<div className="row featurette">
		        <div className="col-md-8">
		          <h2 className="featurette-heading indexTitle">《{showOneTitle}》<br/><span className="text-muted pull-right">{showOneAuthor}</span></h2>
		          <div className="clearfix"></div>
		          <br/>
		          <p className="lead">{showOneSummary}</p>
		        </div>
		        <div className="col-md-4">
		          <img className="featurette-image img-responsive center-block" src={showOneImg} alt="500x500" data-holder-rendered="true"/>
		        </div>
		    </div>
		    <hr className="featurette-divider"/>
		    <div className="row">
		 	   {lstTwo}
		    </div>
		    <hr className="featurette-divider"/>
		    <div className="row featurette">
		        <div className="col-md-8 col-md-push-4">
		          <h2 className="featurette-heading indexTitle">《{showTwoTitle}》<br/><span className="text-muted pull-right">{showTwoAuthor}</span></h2>
		          <div className="clearfix"></div>
		          <br/>
		          <p className="lead">{showTwoSummary}</p>
		        </div>
		        <div className="col-md-4 col-md-pull-8">
		          <img className="featurette-image img-responsive center-block" src={showTwoImg} alt="500x500" data-holder-rendered="true"/>
		        </div>
		    </div>
		    <hr className="featurette-divider"/>

		    <div className="row">
		 	   {lstOne}
		    </div>
		    </div>
		)
	}
});

module.exports = Home;