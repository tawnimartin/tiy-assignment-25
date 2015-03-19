$(function(){

	var SearchBar = React.createClass({
		
		render: function() {
			return (
				<div><input type="text" name="keyword" id="keyword" value={this.props.keyword} />
				<input type="submit" value="Submit" onClick={this.props.onChange} /></div>
				);
		}

});

var SearchBox = React.createClass({

	render: function() {
		return (
			<div className="search-class">
			<div>Search Keyword: {this.props.keyword}</div>
			<SearchBar onChange={this.props.onChange} />
			</div>
		);
	}

});

var onChange = function(e) {
	var value = document.getElementById('keyword').value
	//console.log("keyword", value);
	test.setProps({keyword: value});
}

var test = React.render(<SearchBox onChange={onChange} />, document.body);

});



















