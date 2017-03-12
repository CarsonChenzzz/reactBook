var React = require('react');
var NavLink = require('./NavLink');

var Search = React.createClass({
	getInitialState:function(){
		return {
			list:[]
		}
	},
	saveReport:function(event){
		if (this.refs.searchTag.value.indexOf(" ") != -1) {
			alert("你是猪儿虫吗、？告诉你别输入空格")
			return false;
		}
		var url = './php/search.php';	
		var _this  = this
		$.ajax({
		  type: "POST",
		  url: url,
		  data: {
		  	tag: _this.refs.searchTag.value

		  },
		  success: function(res){
		  	if(res.count === 0){
		  		alert("少搜那些没有用的！！！")
		  	}
			_this.setState({
				list: res.books
			})
		  },error:function(err){
		  	alert("嘘。。有蹊跷。。先别上车");
		  	console.log(err);
		  },
		  dataType: 'json'
		});
	},
	render:function(){
		if(this.state.list.length>0){
			var data = this.state.list;
		  	var find = [];
		  	var findLen = data.length;

		  	for(var i = 0; i < findLen; i++){
				var detailUrl = "/detail/" + data[i].id;
				find.push(
					<div className="col-lg-3" key={i}>
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
		    	<hr className="featurette-divider"/>
				<div className="form-group row">
					<input type="text" ref="searchTag" name="tag" className="form-control input-lg " placeholder="输入你想要寻找的那一身湿（不要输入空格）" />
					<input type="submit" value="上车 GOGOGO"  onClick={this.saveReport}  className="btn btn-warning col-sm-3 btn-lg pull-right" />
		        </div>
		        <div className="clearfix"></div>
				<br/>
				<br/>

				{find}
				
				<div className="clearfix"></div>
				<br/>
				<br/>
			</div>
		)
	}
});

module.exports = Search;