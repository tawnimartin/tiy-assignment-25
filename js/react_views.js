$(function(){

var SearchBar = React.createClass({displayName: "SearchBar",

		getInitialState: function(){
			return {keywords: ""}
		},

		updateKeywords: function(e) {
			var userKeywords = e.target.value;
			this.setState({keywords: userKeywords});
		},

		onSubmitFunc: function(e) {
			e.preventDefault();
			var myUserKeywords = this.state.keywords;
			console.log(myUserKeywords);
			this.onSearchSubmit(myUserKeywords);
		},

		onSearchSubmit: function() {

		},

		render: function(){
			return (
				React.createElement("form", {onSubmit: this.onSubmitFunc}, 
					React.createElement("input", {
					type: "text", 
					name: "search", 
					onChange: this.updateKeywords, 
					value: this.state.keywords}), 
					React.createElement("button", null, "Search")
				)
			)
		}
	});

var searchResults = function(keywords) {
	console.log("a search was made:", keywords);
}

// React.render(<SearchBar onSearchSubmit={searchResults}/>, document.body);
});

React.createElement(SearchBar, {onSearchSubmit: searchResults})

//--------

var SearchBox = React.createClass({displayName: "SearchBox",

	getInitialState: function() {
		return {searchTerm: ""}
	},

	updateTerms: function(keywords) {
		this.updateState({searchTerm: keywords});
	},

	render: function(){
		return (
			React.createElement("div", null, 
			React.createElement("label", null, "Keywords: ", this.state.searchTerm), 
			React.createElement(SearchBar, {onSearchSubmit: this.updateTerms})
			)
		);
	}

});

React.createElement(SearchBox, null)




























