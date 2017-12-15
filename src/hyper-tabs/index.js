'use strict';

import HyperHTMLElement from 'hyperhtml-element/esm';
import './tab-content';

export class HyperTabs extends HyperHTMLElement {

  static get observedAttributes() { 
    return ['labels', 'pills', 'vertical', 'centered', 'fullWidth', 'active']; 
  }

  get defaultState() {
    return {
      labels: [],
      pills: false,
      vertical: false,
      centered: false,
      fullWidth: false,
      active: 0
    };
  }

  created() {
    this.active = this.getAttribute('active') || 0;
    this.labels = this.getAttribute('labels') || [];
  }

  attributeChangedCallback(name, prev, curr) {
    // if(name === 'labels') {
    //   this.labels = curr.length ? curr.split(',') : [];
    // } else {
    //   this[name] === curr;
    // }
    this[name] === curr;
    this.getAttribute(name) === this[name];
    const newState = Object.assign({}, this.state, { [name]: this[name] });
    console.log(newState);
    this.setState(newState);
    this.render();
  }

  render() {
    return this.html`
      <div class="${this._computeType(this.state)}">
        <ul>${this.state.labels.forEach((e,i) => {
          `<li>${e}</li>`
        })}</ul>
      </div>
    `;
  }

  _computeType(){
    return 'test';
  }

}

HyperTabs.define('hyper-tabs');