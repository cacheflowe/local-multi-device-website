class WebsocketIndicator extends HTMLElement {
  constructor() {
    super();
    this.el = this.attachShadow({ mode: "open" });
    this.listenForBodyClassChanges();
  }

  listenForBodyClassChanges() {
    // watch for changes on <body>'s classList, so we can respond
    var observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName == "class") {
          this.updateIndicator();
        }
      });
    });
    observer.observe(document.body, { attributes: true });
  }

  updateIndicator() {
    if (!this.div) return;
    if (document.body.classList.contains("no-socket")) {
      this.div.classList.add("no-socket");
    } else {
      this.div.classList.remove("no-socket");
    }
  }

  connectedCallback() {
    this.render();
    this.div = this.el.querySelector("div");
  }

  html() {
    return /*html*/ `
      <div></div>
    `;
  }

  css() {
    return /*css*/ `
      div {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 20px; 
        height: 20px; 
        border-radius: 10px;
        background-color: #33ff33;
      }
      div.no-socket {
        background-color: #ff3333;
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
}

customElements.define("websocket-indicator", WebsocketIndicator);

export default WebsocketIndicator;
