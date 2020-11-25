import React from "react";
import { Route , Redirect} from "react-router-dom";

const AppRoute = ({
	component: Component,
	layout: Layout,
	isAuthProtected,
	...rest
}) => (
		<Route
			{...rest}
			render={props => {

				if (isAuthProtected) {
					if((!localStorage.getItem("username")) && (!sessionStorage.getItem("username"))) {
					return (
						<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
					);
					} 
				}

				return (
					<Layout>
						<Component {...props} />
					</Layout>
				);
			}}
		/>
	);

export default AppRoute;

