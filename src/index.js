import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class App extends Component {
	render() {
		return(
			<header>
				<h1>todos</h1>
			</header>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);