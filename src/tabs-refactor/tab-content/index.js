'use strict';

import { LitElement, html } from '@polymer/lit-element';

class TabContent extends LitElement {

  static get is() { return 'tab-content'; }

  static get properties() { return { visible: Boolean }; }  
  
  _render({ visible }){
    return html`
      ${visible ? html`<slot></slot>` : ''}
    `;
  }
}

customElements.define(TabContent.is, TabContent);