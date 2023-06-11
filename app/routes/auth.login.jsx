import { Form } from "@remix-run/react";
import { authenticator } from "../utils/auth.server";

export const loader = async({request}) => {
	return await authenticator.isAuthenticated(request, {
		successRedirect:'/dashboard'
	})
}

export default function Login() {
	return (
		<Form action="/auth" method="POST">
			<button>Login</button>
		</Form>
	)
}