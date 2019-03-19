var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var ComponentName = require('./ComponentName.js');

var App = React.createClass({
	render: function(){
		return(
			<div>
				<ComponentName />
			</div>
		)
	}
});

module.exports = App;