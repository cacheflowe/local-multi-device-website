import "../css/style.css";

// init Web Components
import "./vendor/app-state-distributed.js";

class AppBase extends HTMLElement {
  connectedCallback() {
    this.initStyles();
    const appStateDistribtued = document.createElement("app-state-distributed");
    if (this.hasAttribute("debug")) {
      appStateDistribtued.setAttribute("debug", true);
    }
    document.body.appendChild(appStateDistribtued);
    this.setup();
    _store.addListener(this);
  }

  setup() {
    console.log("Please override AppBase.setup()");
  }

  css() {
    return /*css*/ ``;
  }

  initStyles() {
    const style = document.createElement("style");
    style.textContent = this.css();
    this.appendChild(style);
  }

  storeUpdated(key, val) {
    console.log("Please override AppBase.storeUpdated()", key, val);
  }
}

export default AppBase;
