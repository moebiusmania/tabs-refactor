'use strict';

import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import template from './template.html';
import '@polymer/polymer/lib/elements/dom-if';

class TabContent extends PolymerElement {

    static get is() { return 'tab-content'; }

    static get template() { return template ; }

    static get properties() {
        return {
            visible: {
                type: Boolean,
                value: false
            }
        };
    }

    
}

customElements.define(TabContent.is, TabContent);