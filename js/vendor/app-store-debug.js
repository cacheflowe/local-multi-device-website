class AppStoreDebug extends HTMLElement {
  constructor() {
    super();
    this.el = this.attachShadow({ mode: "open" });
    _store.addListener(this);
  }

  connectedCallback() {
    this.render();
    this.div = this.el.querySelector("div");
    this.showing = false;
    this.initKeyListener();
  }

  html() {
    let htmlStr = "<table>";
    for (let storeKey in _store.state) {
      let val = _store.state[storeKey];
      if (val && typeof val == "object" && val.length && val.length > 0) {
        val = `Array(${val.length})`; // special display for arrays
      }
      if (val && typeof val == "string" && val.length && val.length > 100) {
        val = `${val.substring(0, 100)}...`; // special display for long strings
      }
      htmlStr += `<tr><td>${storeKey}</td><td>${val}</td></tr>`;
    }
    htmlStr += "</table>";
    return htmlStr;
  }

  css() {
    return /*css*/ `
      :host {
        border-top: 2px solid green;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 1rem;
        width: 100%; 
        background: rgba(0,0,0,0.8);
        color: #fff;
        overflow-y: auto;
        font-family: arial;
        font-size: 12px;
        z-index: 9999;
        display: none;
      }
      div {
        bottom: 1rem;
        left: 1rem;
        height: 20px; 
        top: 0;
        left: 0;
        padding: 12px;
        height: 100px;
        max-width: 70%;
        opacity: 0.9;
      }
    `;
  }

  render() {
    this.el.innerHTML = /*html*/ `
      ${this.html()}
      <style>
        ${this.css()}
      </style>
    `;
  }

  initKeyListener() {
    window.addEventListener("keyup", (e) => {
      if (e.key == "/") this.showing = !this.showing;
      if (this.showing == false) {
        this.hide();
      } else {
        this.show();
      }
    });
  }

  storeUpdated(key, value) {
    if (this.showing) this.render();
  }

  show() {
    this.render();
    this.style.display = "block";
    this.showing = true;
  }

  hide() {
    this.innerHTML = "";
    this.style.display = "none";
    this.showing = false;
  }
}

customElements.define("app-store-debug", AppStoreDebug);

export default AppStoreDebug;
