var React = require('react');

var CommentBox = require("./Comment.js")
// console.log(Comment);defaultProps = {
// 	id : this.state.book.id
// }
var Detail = React.createClass({
	getInitialState:function(){
		return {
			book:[]
		}
	},
	componentWillMount:function(){
		var url = './php/detail.php';
		var id;	
		var _this  = this
		$.ajax({
		  type: "POST",
		  url: url,
		  data: {
		  	id: _this.props.params.id
		  },
		  dataType: 'json'
		}).then(function(res){
			id = res.id;
			_this.setState({
				book: res
			});
		})
	},
	render:function(){
		if (this.state.book){
			var thisBook = this.state.book;
			var book = [];
				book.push(
					<div key="0" >
						<div className="row featurette" >
					        <div className="col-md-9">
					          <h2 className="featurette-heading">《{thisBook.title}》<br/><span className="text-muted pull-right">作者：{thisBook.author}</span></h2>
					          <div className="clearfix"></div>
					          <br/>
					          <p className="lead">{thisBook.author_intro}</p>
					        </div>
					        <div className="col-md-3">
					          <img className="featurette-image img-rounded center-block" src={thisBook.image} alt="500x500" data-holder-rendered="true" width="220" height="300" />
					        </div>
					    </div>
				        <div className="clearfix"></div>
						<h3>文章摘要</h3>
				    	<div className="well">{thisBook.summary}</div>
				        <h3>章节介绍</h3>
				    	<div className="well">{thisBook.catalog}</div>
			    	</div>

				)}
		return (
			<div>
				{book}
				<CommentBox id={this.props.params.id}/>
			</div>
		)
	}
});


module.exports = Detail;