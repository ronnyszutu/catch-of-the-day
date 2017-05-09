import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(event) {
		console.log("You changed the url");
		event.preventDefault();
		// first grab the text from the box
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		// second we're going to transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		// return <p>Hello</p>
		// return React.createElement('p', {classname: 'Testing'}, 'I love you');
		return (
			<form className="store-selector" onSubmit={ this.goToStore }>
				{ /* Alternative way to do the binding for goToStore to 'this' is: */ }
				{ /* onSubmit = { this.goToStore.bind(this) } */ }
				{ /* or */ }
				{ /* onSubmit = { (e) => this.goToStore(e) } */ }
				{ /* Doing it this way will create an individual function for every component rendered */ }
				{ /* Whereas using the constructor way refers to the goToStore function. No duplication.*/ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={ (input) => { this.storeInput = input; } }/>
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
};

export default StorePicker;