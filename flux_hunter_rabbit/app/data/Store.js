export default class Store {
      constructor(dispatcher, hunters) {
            this.dispatcher = dispatcher;
            this.hunters = hunters;
            this.coordinate = {
                  x: 10,
                  y: 12
            }
            this.views = [];
            this.updateViews = this.updateViews.bind(this);
            this.dispatcher.register(
                  (payload) => {
                        switch (payload.type) {
                              case "changeCoord":
                                    this.coordinate.x = Math.round(Math.random() * (50 - 1) + 1);
                                    this.coordinate.y = Math.round(Math.random() * (50 - 1) + 1);
                                    this.updateViews();
                                    break;
                              case "addHunter":
                                    this.hunters.push(new payload.hunter(payload.name));
                                    this.updateViews();
                                    console.log(this.hunters);
                        }
                  }
            );
      }

      subscribeView(callbackView) {
            this.views.push(callbackView);
      }
      unsubcribeView(callbackFromHunter) {
            this.views = this.views.filter((itemCallback) => callbackFromHunter !== itemCallback);
      }
      updateViews() {
            this.views.map(
                  (callback) => callback()
            );
      }
}