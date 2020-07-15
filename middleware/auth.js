export default function(context) {
  if (!context.store.getters.isAuthenticated) {
    console.log(`Middleware auth function is redirecting`);
    context.redirect('/admin/auth');
  }
}
