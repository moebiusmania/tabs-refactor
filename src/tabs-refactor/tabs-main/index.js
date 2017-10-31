'use strict';

import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import template from './template.html';
import props from './props';
import './../tab-content/';
import '@polymer/polymer/lib/elements/dom-repeat';

class TabsMain extends PolymerElement {

    static get is() { return 'tabs-main'; }

    static get template() { return template; }

    static get properties() { return props; }

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
}

customElements.define(TabsMain.is, TabsMain );