import { authenticator } from "../utils/auth.server";

export const action = async({request}) => {
	return authenticator.logout(request, {
		redirectTo: '/'
	})
}