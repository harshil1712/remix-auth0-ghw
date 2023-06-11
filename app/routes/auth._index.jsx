import { redirect } from "@remix-run/node";
import { authenticator } from "../utils/auth.server";

export const loder = () => redirect("/auth/login");

export const action = ({request}) => {
	return authenticator.authenticate('auth0', request)
}