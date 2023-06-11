import { authenticator } from "../utils/auth.server";

export const loader = ({request}) => {
	return authenticator.authenticate('auth0', request, {
		successRedirect: '/dashboard',
		failureRedirect: '/auth/login'
	})
}