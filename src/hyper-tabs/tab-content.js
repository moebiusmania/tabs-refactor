'use strict';

import HyperHTMLElement from 'hyperhtml-element/esm';

export class TabContent extends HyperHTMLElement {

  static get observedAttributes() { return ['visible']; }

  get defaultState() {
    return { visible: false };
  }

  created(){
    this.visible = false;
  }

  attributeChangedCallback(name, prev, curr) {
    this[name] === curr; // true, and curr === "value"
    this.getAttribute(name) === this[name]; // always true
    this.render();
  }

  render() {
    return this.html`${this.state.visible ? `<slot></slot>` : null}`;
  }

}

customElements.define('tab-content', TabContent);