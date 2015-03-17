//the only thing the outside world cares about is 
//when form is submitted and value at that time
var VolumeBar = React.createClass({

	//on volume set
	getInitialState: function() {

		return {volumeValue: 10};
	},

	onSubmit: function(e) {
		e.preventDefault();
		//console.log("volume", this.state.volumeValue);
		this.props.onVolumeSet(this.state.volumeValue);
	},

	updateVolumeState: function(e) {
		this.setState({volumeValue: e.target.value});
	},

	render: function() {
		return (
			<form onSubmit={this.onSubmit}>
			<input type="range" onChange={this.updateVolumeState} value={this.state.volumeValue} />
			<input type="submit" value="Set Volume" />
			</form>
		);
	}

});

var VolumeBox = React.createClass({
	
	logVolume: function(volumeValue) {
		console.log("volume:", volumeValue);
	},

	render: function() {
	
	return <VolumeBar onVolumeSet={this.logVolume}/>;
	}
	
});

$(function(){
	React.render(<VolumeBox/>, document.body);
});
