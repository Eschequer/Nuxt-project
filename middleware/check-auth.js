export default function(context) {
  console.log(`Middleware: check-auth function is running`);

  context.store.dispatch('initAuh', context.req);
}
