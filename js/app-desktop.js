import AppBase from "./app-base";

class AppDesktop extends AppBase {
  connectedCallback() {
    super.connectedCallback();
  }

  css() {
    return /*css*/ `
      body {
        background: #333;
      }
      custom-app {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        padding: 2rem;
      }
    `;
  }

  setup() {
    console.log("Desktop init!");
    this.initHeartbeat();
  }

  initHeartbeat() {
    setInterval(() => {
      _store.set("heartbeat", Date.now(), true);
    }, 5000);
  }

  storeUpdated(key, val) {
    this.querySelector("#result").innerHTML = `${key}: ${val}`;
    if (key == "button") console.log("Button: ", val);
  }
}

customElements.define("custom-app", AppDesktop);
