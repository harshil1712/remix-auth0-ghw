import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "../utils/auth.server";
import { json } from "@remix-run/node";

export const loader = async({request}) => {
	const user = await authenticator.isAuthenticated(request, {
		failureRedirect: '/auth/login'
	});
	return json({user})
}

export default function Dashboard() {
	const {user} = useLoaderData();
	return (
		<div>
			<h1>Hello {user.displayName}</h1>
			<Form action="/auth/logout" method="POST">
				<button>Logout</button>
			</Form>
			<img src={user.photos[0].value} alt={`Avatar of ${user.displayName}`} />
		</div>
	)
}