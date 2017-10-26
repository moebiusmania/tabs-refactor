'use strict';

import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import template from './template.html';
import '@polymer/polymer/lib/elements/dom-if';
import 'contactlab-ui-components/src/tabs';
import 'contactlab-ui-components/src/calendar';

class TabsExample extends PolymerElement {

    static get is() { return 'tabs-example'; }

    static get template() { return template; }

    static get properties() { return {
        active: {
            type: Number,
            value: 0
        }
    }; }

    _changeTab(evt){
        console.log('selected', evt.detail.active);
        this.active = evt.detail.active;
    }

    _show(active,check){
        return active === check;
    }
}

customElements.define(TabsExample.is, TabsExample);