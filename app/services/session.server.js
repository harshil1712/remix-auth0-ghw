import { createCookieSessionStorage } from '@remix-run/node';

export let sessionStorage = createCookieSessionStorage({
	cookie: {
		name: 'auth0_session',
		sameSite: 'lax',
		path: '/',
		httpOnly: true,
		secrets: ['sldkfnlkasdf'],
		secure: process.env.NODE_ENV === 'production',
	},
});

export let { getSession, commitSession, destroySession } = sessionStorage;
