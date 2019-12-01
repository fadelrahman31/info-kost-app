export default async function({ redirect, route, store, req }) {
  if (!process['client']) {
    if (!!req.user) {
      store.state.loggedIn = true;
      store.state.name = req.user.name;
      store.state.email = req.user.email;
      store.state.isAdmin = req.user.is_admin;
    } else {
      if (route.path.startsWith('/admin')) {
        redirect("/login");
      }
    }
  }
}
