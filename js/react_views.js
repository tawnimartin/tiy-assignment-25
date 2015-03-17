$(function(){

	var SearchBar = React.createClass({displayName: "SearchBar",
		
		render: function() {
			return (
				React.createElement("div", null, React.createElement("input", {type: "text", name: "keyword", id: "keyword", value: this.props.keyword}), 
				React.createElement("input", {type: "submit", value: "Submit", onClick: this.props.onChange}))
				);
		}

});

var SearchBox = React.createClass({displayName: "SearchBox",

	render: function() {
		return (
			React.createElement("div", {className: "search-class"}, 
			React.createElement("div", null, "Search Keyword: ", this.props.keyword), 
			React.createElement(SearchBar, {onChange: this.props.onChange})
			)
		);
	}

});

var onChange = function(e) {
	var value = document.getElementById('keyword').value
	//console.log("keyword", value);
	test.setProps({keyword: value});
}

var test = React.render(React.createElement(SearchBox, {onChange: onChange}), document.body);

});



















