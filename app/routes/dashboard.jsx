import { Form } from "@remix-run/react";
import { authenticator } from "../utils/auth.server";

export const loader = async({request}) => {
	return await authenticator.isAuthenticated(request,{
		failureRedirect: '/auth/login'
	})
}

export default function Dashboard() {
	return (
		<div>
			<h1>Hello</h1>
			<h2>Successfuly logged in!</h2>
			<Form action="/auth/logout" method="POST">
				<button>Logout</button>
			</Form>
		</div>
	)
}