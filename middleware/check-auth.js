export default function(context) {
  console.log(`Middleware: check-auth function is running`);

  if (process.client) {
    context.store.dispatch('initAuh');
    console.dir(localStorage);
  }
}
