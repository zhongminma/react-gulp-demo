var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var ComponentName = React.createClass({
	render: function(){
		return(
			<div className="component-name">
				<h1 className="text-center">search items</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" ref="title" placeholder="enter something ..." />
					</div>
					<button className="btn btn-primary btn-block">click to search</button>
				</form>
			</div>
		)
	},

	onSubmit: function(e){
		e.preventDefault();
		console.log(this.refs.title.value);
		var item = {
			title: this.refs.title.value.trim()
		}

		AppActions.searchItems(item);
	}
});

module.exports = ComponentName;