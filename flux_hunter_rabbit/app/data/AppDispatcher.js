export default class AppDispatcher {
   constructor() {
      this.observers = [];
   }
   register(callback) {
      this.observers.push(callback);
   }
   dispatch(action) {
      this.observers.map(
         (callback) => callback(action)
      );
   }
}