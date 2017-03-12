var React = require('react');
var NavLink = require('./NavLink');

var List = React.createClass({
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
			var lst = [];
			var pages = [];
			var data = this.state.list;
			var listLen = data.length;
			var page = listLen/15;
			var pageLast = Math.ceil(page);
			var nowPage = this.props.params.page - 1 || 0;
			var start = nowPage*16;
			var finish = nowPage*16 + 16;
			if (finish > listLen) {
				finish = listLen
			}
			var finishUrl = "/list/" + pageLast;
			var prePage = this.props.params.page - 1;
			var nextPage = this.props.params.page + 1;
			if (prePage <= 0) {
				prePage = 1;
			}
			if (nextPage >= pageLast) {
				nextPage = pageLast;
			}
			var prePageUrl = "/list/" + prePage;
			var nextPageUrl = "/list/" + nextPage;

			for(var i = start; i < finish; i++){
				var detailUrl = "/detail/" + data[i].id;
				lst.push(
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

			for(var i = 1; i < pageLast + 1; i++){
				var listUrl = "/list/" + i;
				pages.push(
					<NavLink to={listUrl} className="btn btn-default" role="button" key={i}>
			         	{i}</NavLink>
				)
			}
		}

		return (
			<div>
				<div>
					{lst}
				</div>
		        <div className="clearfix"></div>
		        <br/>
				<div className="text-center">
					<NavLink to="/list/1" className="btn btn-default" role="button">
			         	首页</NavLink>
			        <NavLink to={prePageUrl} className="btn btn-default" role="button">
			         	上一页</NavLink>
						{pages}
					<NavLink to={nextPageUrl} className="btn btn-default" role="button">
			         	下一页</NavLink>
					<NavLink to={finishUrl} className="btn btn-default" role="button">
			         	尾页</NavLink>
				</div>
			</div>

		)
	}
});

module.exports = List;