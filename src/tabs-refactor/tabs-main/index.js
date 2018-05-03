'use strict';

import { html } from 'lit-html/lib/lit-extended';
import { LitElement } from '@polymer/lit-element';
import './../tab-content/';

class TabsMain extends LitElement {

    static get is() { return 'tabs-main'; }

    static get properties() { return {
        labels: Array,
        pills: Boolean,
        vertical: Boolean,
        centered: Boolean,
        fullWidth:Boolean,
        active: Number,
    } }

    constructor() {
      super();

      this.labels = [];
      this.pills = false;
      this.vertical = false;
      this.centered = false;
      this.fullWidth = false;
      this.active = 0;
    }

    _activateThis(evt) {
      evt ? evt.preventDefault() : null;
      this.active = parseInt(evt.currentTarget.dataset.index);
      this._setActive(this.active);
    }

    _setActive(index){
      const tabs = this.querySelectorAll('tab-content');
      tabs.forEach((e,i) => {
        i === index ? e.visible = true : e.visible = false;
      });
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: {
          active: index
        }
      }));
    }

    _computeType(pills, vertical, centered, fullWidth) {
      const arr = pills ? ['pills'] : ['tabs'];
      vertical ? arr.push('vertical') : null;
      centered ? arr.push('centered') : null;
      fullWidth ? arr.push('full-width') : null;
      return arr.join(' ');
    }

    _computeActive(active, index) {
      return (active === index) ? 'tab active' : 'tab';
    }

    connectedCallback() {
      super.connectedCallback();
      this._setActive(this.active);
    }

    _render({ 
      pills, vertical, centered, fullWidth, labels, active
    }){
      const _labels = JSON.parse(labels) || [];

      return html`
        <div class$="${this._computeType(pills, vertical, centered, fullWidth)}">
          <ul>
            ${_labels ? _labels.map((e,i) => html`
              <li
                class$="${this._computeActive(active, i)}"
              ><a 
                href="#" 
                data-index$="${i}"
                on-click="${(evt) => this._activateThis(evt)}"
              >${e}</a></li>
            `) : ''}
          </ul>
          <slot></slot>
        </div>
      `;
    }
}

customElements.define(TabsMain.is, TabsMain );