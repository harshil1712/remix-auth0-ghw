import { Authenticator } from 'remix-auth';
import { Auth0Strategy } from 'remix-auth-auth0';
import { sessionStorage } from '../services/session.server';

export const authenticator = new Authenticator(sessionStorage);

const auth0Strategy = new Auth0Strategy(
	{
		callbackURL: 'http://localhost:3000/auth/callback',
		clientID: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		domain: process.env.DOMAIN,
	},
	async ({ accessToken, refresToken, extraParams, profile }) => {
		return profile;
	}
);

authenticator.use(auth0Strategy);
