import AppStoreDistributed from "./haxademic.js/app-store-distributed.js";
import "./websocket-indicator.js";
import "./app-store-debug.js";

class AppStateDistributed extends HTMLElement {
  constructor() {
    super();
    // this.el = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.initSharedState();
    this.innerHTML = this.hasAttribute("debug")
      ? /*html*/ `
        <websocket-indicator></websocket-indicator>
        <app-store-debug></app-store-debug>
      `
      : /*html*/ `
        <app-store-debug></app-store-debug>
      `;
  }

  initSharedState() {
    // connect to websocket server
    this.webSocketHost = "ws://" + document.location.hostname + ":3001/ws";
    this.appStore = new AppStoreDistributed(this.webSocketHost);

    // listen for data/events
    _store.addListener(this);
    _store.addListener(this, "AppStoreDistributed_CONNECTED"); // emitted by AppStoreDistributed when connected
  }

  // AppStore listeners

  AppStoreDistributed_CONNECTED(val) {
    _store.set("CLIENT_CONNECTED", true, true); // let desktop app know that we're here
  }

  storeUpdated(key, val) {}
}

customElements.define("app-state-distributed", AppStateDistributed);

export default AppStateDistributed;
