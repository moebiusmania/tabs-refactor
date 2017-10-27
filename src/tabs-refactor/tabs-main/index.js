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
        this.active = parseInt(evt.currentTarget.parentNode.getAttribute('data-index'));
        this._setActive();
    }

    _setActive(){
        console.log(this.querySelectorAll('tab-content'));
        const tabs = this.querySelectorAll('tab-content');
        tabs.forEach((e,i) => {
            i === this.active ? e.visible = true : e.visible = false;
            console.log(e,i,e.visible);
        });
        this.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            composed: true,
            detail: {
                active: this.active
            }
        }));
    }

    _computeType(pills, vertical, centered, fullWidth) {
        let arr = [];
        pills ? arr.push('pills') : arr.push('tabs');
        if (vertical) arr.push('vertical');
        if (centered) arr.push('centered');
        if (fullWidth) arr.push('full-width');
        return arr.join(' ');
    }

    _computeActive(active, index) {
        let arr = ['tab'];
        if (active === index) {
            arr.push('active');
            this.set('current', this.labels[active]);
        };
        return arr.join(' ');
    }

    connectedCallback() {
        super.connectedCallback();
        this._setActive();
    }
}

customElements.define(TabsMain.is, TabsMain );