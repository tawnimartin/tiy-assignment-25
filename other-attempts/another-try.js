var SearchBar = React.createClass({

	getInitialState: function() {
    return {value: 'Hello'};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  onSubmit: function(e) {
		e.preventDefault();
		this.setProps({keyword: this.state.value});
	},

	render: function() {

	var value = this.state.value;
	return (
		<div className="search-class">
		<div>Search Keyword: {this.props.keyword}</div>
		<form onSubmit={this.onSubmit}>
		<input type="text" name="keyword" id="keyword" onChange={this.handleChange} value={value} />
		<input type="submit" value="Submit" />
		</form></div>
		);
	}

});

var SearchBox = React.createClass({

	render: function() {
	
	return <SearchBar />;
	}
	
});

$(function(){
	React.render(<SearchBox/>, document.body);
});
