import AppBase from "./app-base";

class AppTablet extends AppBase {
  connectedCallback() {
    super.connectedCallback();
  }

  css() {
    return /*css*/ `
      body {
        background: #000;
      }
      custom-app {
        display: block;
        max-width: 680px;
        margin: 0 auto;
        padding: 2rem;
      }
      button {
        padding: 1rem;
      }
    `;
  }

  setup() {
    console.log("Tablet init!");
    this.initButton();
  }

  initButton() {
    this.addEventListener("click", (e) => {
      if (e.target.nodeName == "BUTTON") {
        const button = e.target;
        const buttonValue = button.getAttribute("data-value");
        _store.set("button", buttonValue, true);
      }
    });
  }

  storeUpdated(key, val) {
    this.querySelector("#result").innerHTML = `${key}: ${val}`;
  }
}

customElements.define("custom-app", AppTablet);
