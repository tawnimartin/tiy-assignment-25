
$(function(){

var SearchBar = React.createClass({

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

		render: function(){
			return (
				<form onSubmit={this.onSubmitFunc}>
					<input 
					type="text" 
					name="search"
					onChange={this.updateKeywords} 
					value={this.state.keywords} />
					<button>Search</button>
				</form>
			)
		}
});

var searchResults = function(keywords) {
	console.log("a search was made:", keywords);
}

var test = React.render(<SearchBar onSearchSubmit={searchResults}/>, document.body);

});




// <SearchBar onSearchSubmit={searchResults}/>

// //--------

// var SearchBox = React.createClass({

// 	getInitialState: function() {
// 		return {searchTerm: ""}
// 	},

// 	updateTerms: function(keywords) {
// 		this.updateState({searchTerm: keywords});
// 	},

// 	render: function(){
// 		return (
// 			<div>
// 			<label>Keywords: {this.state.searchTerm}</label>
// 			<SearchBar onSearchSubmit={this.updateTerms} />
// 			</div>
// 		);
// 	}

// });

// <SearchBox />





























