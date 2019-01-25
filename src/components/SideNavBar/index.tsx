import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './SideNavBar.css';

interface ISideBarProps {
	onSideNavToggle: ()=> void;
}
interface ISideBarState {
	customClassName: string;
	customSubNavClassName: string;
}

class SideNavBar extends React.Component<ISideBarProps, ISideBarState> {
	constructor(props: ISideBarProps) {
		super(props);
		this.state = {
			customClassName: 'customNavShow',
			customSubNavClassName: 'customSubNavHide'
		}
	}

	/**
	 * For change the class name for sidebar
	 */
	public onToggle = () => {
		this.setState({
			customClassName: this.state.customClassName === 'customNavShow' ?
				'customNavHide' : 'customNavShow'
		})
		this.props.onSideNavToggle();   
	}

	/**
	 * For change the class name for parent of submenus
	 * TODO: Add class for only one menu, need to change as dynamic for all menus
	 */
	public showSubMenu = () => {
		this.setState({
			customSubNavClassName: this.state.customSubNavClassName === 'customSubNavHide' ?
				'customSubNavShow' : 'customSubNavHide'
		})
	}

	public render() {
		const { customSubNavClassName } = this.state;
		const menuItems = [
			{
				exact: true,
				label: 'Dashboard',
				url: '/dashboard',
			},
			{
				exact: true,
				label: 'INVENTRY',
				subMenus: [
					{
						exact: true,
						label: 'All assets',
						url: '/assets',
					},
					{
						exact: true,
						label: 'My assets',
						url: '/myassets',
					},
					{
						exact: true,
						label: 'Software',
						url: '/software',
					}
				],
				url: ''
			},
			{
				exact: true,
				label: 'Asset request',
				url: '/assetrequest',
			}
		];
		return (
				<div className={this.state.customClassName}>
					<div  className="customSideNavWrapper">
						<ul className="customSideNav">
							{menuItems.map((item) => (
								<NavLink
									to={item.url}
									key={item.label}
									exact={true}
									className="customSideNavItem"
									onClick={item.subMenus && this.showSubMenu  }
								>
									{item.label}
									{item.subMenus ?
										<Nav className={customSubNavClassName}>
											{	item.subMenus.map((subMenu)=> (
												<NavLink
													to={subMenu.url}
													key={subMenu.label}
													exact={true}
													className="customSideNavItem"
												>
													{subMenu.label}
												</NavLink>))} 
										</Nav>: ''}
								</NavLink>
							))}
						</ul>
					</div>
					<div>
						<div
							className="custon-nav-toggle"
							onClick={this.onToggle}
						>
							<i className="ion-md-list" />
						</div>
					</div>
				</div>
		)
	}
}
export default SideNavBar;
