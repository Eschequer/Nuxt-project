export default function(context) {
  console.log(`Middleware: log function is running!`);
  console.dir(context.store.state);
}
