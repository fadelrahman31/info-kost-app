import * as Cookies from 'js-cookie';
import cookie from 'cookie';
import axios from 'axios';

export default async function({ redirect, route, store, req }) {
  const baseUrl = process.env.NUXT_ENV_BASE_URL || "http://localhost:3000";
  // console.log('Yey', route.path);
  if (!route.path.startsWith('/user')) {
    const key = "token";
    const tokenCookie = process['client'] ? Cookies.get(key) : cookie.parse(req.headers.cookie || '')[key];
    if (!tokenCookie) {
      const redirectTo = `${baseUrl}/user/auth`
      redirect(`${process.env.NUXT_ENV_LOGIN_BASEURL}/login?redirect_uri=${encodeURIComponent(redirectTo)}`);
    } else {
      if (process['client']) {
        const response = await axios.get(`${baseUrl}/api/account/user`, {
          headers: {
            "Authorization": tokenCookie
          }
        });

        store.state.loggedIn = true;
        store.state.name = response.data.name;
        store.state.email = response.data.email;
        store.state.bearerToken = tokenCookie;
      } else {
        store.state.loggedIn = true;
        store.state.name = req.user.name;
        store.state.email = req.user.email;
        store.state.bearerToken = tokenCookie;
      }
    }
  }
}
