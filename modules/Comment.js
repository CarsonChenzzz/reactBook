var React = require('react');

var data = [];

// 创建React组件
var CommentBox = React.createClass({
    // 在组件的生命周期中仅执行一次，用于设置初始状态
    getInitialState: function() {
        return {data: []};
    },
    onCommentSubmit: function(comment) {
        data.push(comment);
        var self = this;
        self.setState({data: data});

        var url = 'http://www.chen7.online/php/commentInsert.php';	
		$.ajax({
		  type: "POST",
		  url: url,
		  data: {
		  	id: this.props.id,
		  	author:comment.author,
		  	text:comment.text
		  },
		  dataType: 'json'
		})
    },
    componentWillMount:function(){
		var url = 'http://www.chen7.online/php/comment.php';	
		var _this  = this
		$.ajax({
		  type: "GET",
		  url: url,
		  data: {
		  	id: this.props.id
		  },
		  dataType: 'json'
		}).then(function(res){
			data = res;
			_this.setState({
				data: data
			});
		})
	},
	render: function() {
		return (
            // 并非是真正的DOM元素，是React的div组件，默认具有XSS保护
			<div className="commentBox" key="0">
				<h3>老司机曰</h3>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.onCommentSubmit} />
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment,idx) {
			return (
				<Comment author={comment.author}  text={comment.text} key={idx}>
				</Comment>
			);
		});

		return (
			<div className="commentList  well">
				{commentNodes}		
			</div>
		);
	}
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h4 className="commentAuthor">评论人：{this.props.author}</h4> 
                <p className="commentText">评论内容：{this.props.text}</p> 
            </div>
        );
    }
});

var CommentForm = React.createClass({
    handleSubmit: function(e) {

        e.preventDefault();
        var author = this.refs.author.value;
        var text = this.refs.text.value;

        if(!text || !author) return;
        
        this.props.onCommentSubmit({author: author, text: text});

        // 获取原生DOM元素
        this.refs.author.value = '';
        this.refs.text.value = '';
    },
	render: function() {
		return (
            // 为元素添加submit事件处理程序
            // 用ref为子组件命名，并可以在this.refs中引用
			<form className="commentForm form-horizontal row" onSubmit={this.handleSubmit}>
				<div className="form-group form-group-lg">
				    <label className="col-sm-2 control-label text-left" >秋名山老司机车牌号</label>
				    <div className="col-sm-10">
				      <input className="form-control" type="text" ref="author" id="formGroupInputLarge" placeholder="请输入你在秋名山飙车时的法号" />
				    </div>
				</div>
				<div className="form-group form-group-lg">
				    <label className="col-sm-2 control-label">秋名山老司机的忠告</label>
				    <div className="col-sm-10">
				      <input className="form-control" type="text" ref="text" id="formGroupInputSmall" placeholder="请表述您对即将上山的新司机的忠告，尽量不要多BB" />
				    </div>
				</div>
                <input type="submit" value="老司机 -- 千年杀" className="btn btn-success btn-lg btn-block" />
            </form>
		);
	}
});

module.exports = CommentBox;