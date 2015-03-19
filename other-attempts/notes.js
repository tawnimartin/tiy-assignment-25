var SearchBar = React.createClass({

  getInitialState: function() {
    return {
      keywords: ""//1.
    }
  },

  updateKeywordsBS: function(e) {
    var userText = e.target.value;//the user's value
    this.setState({keywords: userText});//2. set a new state to the user's value
  },

  tempOnSubmitBS: function(e) {
    e.preventDefault();
    var keywords = this.state.keywords;//3. get keywords from state, put in keywords variable
    this.onSearchBS(keywords);//call onSearchBS, passing keywords
  }

  render: function() {
    return (
      <form onSubmit={this.tempOnSubmitBS}>//3. on submit
        <input 
          type="text" 
          name="search"
          onChange={this.updateKeywordsBS}//2.for when the user updates the value
          value={this.state.keywords}>//1. the inital state
        <button>Search</button>
      </form>
    )
  }

});


var someFunction = function(keywords) {
  console.log("a search was made:", keywords);//4. this is run with keywords when submitted
}
<SearchBar onSearchBS={someFunction}/>//4. pass it the function you want to run to get keywords


//----------


var SearchBox = React.createClass({
  getInitialState: function() {
    return {
      searchTerm: ""
    }
  },

  this.updateTermsBS: function(keywords) {//2. get the keywords that are returned
    this.updateState({
      searchTerm: keywords//3. and update state
    })
  },

  render: function() {
    return (
      <div>
        <label>{this.state.searchTerm}</label>//1. set label with initial state // 3. state will update, new keywords will show
        <SearchBar onSearchBS={this.updateTermsBS} />//2. call the onSearchBS to get the keywords, pass it to it's own function 
      </div>
    );
  }
});

//the component is responsible for setting it's own state
//properties are updated by the outside world





