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
		console.log(this.storeInput.value);
		// second we're going to transition from / to /store/:storeId
	}

	render() {
		// return <p>Hello</p>
		// return React.createElement('p', {classname: 'Testing'}, 'I love you');
		return (
			<form className="store-selector" onSubmit={ this.goToStore }>
				{ /* Comments within the return are never the first element */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={ (input) => { this.storeInput = input; } }/>
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;