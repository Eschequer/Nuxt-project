export default function(context) {
  console.dir('Middleware auth function is running');

  if (!context.store.getters.isAuthenticated) {
    console.log(`Middleware auth function is redirecting`);
    context.redirect('/admin/auth');
  }
}
