import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideNavBar from '../SideNavBar';

interface IPageWrapperState {
	onSideNavShowHide: string;
}

class PageWrapper extends React.Component<any, IPageWrapperState> {
	constructor(props: any) {
		super(props);
		this.state = {
			onSideNavShowHide: 'sideNavShowContent'
		}
	}

	/**
	 * For change the class name for body content.
	 */
	public onSideNavToggle = () => {
		this.setState({onSideNavShowHide : this.state.onSideNavShowHide === 'sideNavShowContent' ? 'sideNavHideContent' : 'sideNavShowContent'})
	}

	public render() {
		const { onSideNavShowHide } = this.state;

		/**
		 * Mock components for testing.
		 * TODO: Make it original.
		 */
		const Asset = () => <div style={{ backgroundColor: '#fff',height: '50px',margin: '15px',textAlign: 'center', padding: '15px' }}>Asset page</div>;
		const Home = () => <div style={{ backgroundColor: '#fff',height: '50px',margin: '15px',textAlign: 'center', padding: '15px' }}>Home page</div>;
		const Dashboard = () => <div style={{ backgroundColor: '#fff',height: '50px',margin: '15px',textAlign: 'center', padding: '15px' }}>Dashboard page</div>;
		const AssetRequest = () => <div style={{ backgroundColor: '#fff',height: '50px',margin: '15px',textAlign: 'center', padding: '15px' }}>Asset request page</div>;
		
		// Ends here
		return (
			<Router>
				<div className="page-wrapper">
					<SideNavBar onSideNavToggle={this.onSideNavToggle} />
					<div className={onSideNavShowHide} >
						<Switch>
							<Route path={'/'} exact={true} component={Home} />
							<Route exact={true} path={'/dashboard'} component={Dashboard} />
							<Route exact={true} path={'/assets'} component={Asset} />
							<Route exact={true} path={'/assetrequest'} component={AssetRequest} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default PageWrapper;
