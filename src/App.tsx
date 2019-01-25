import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PageWrapper from './components/PageWrapper';

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<div className="top-nav">
					<NavBar />
				</div>
				<PageWrapper />
			</div>
		);
	}
}

export default App;
