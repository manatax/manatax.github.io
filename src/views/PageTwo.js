import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../redux/store.js';

class ViewTwo extends connect(store)(LitElement) {
    static get properties() {
        return {
            value: { type: String }
        }
    }

    stateChanged(state) {
        this.value = state;
    }

    render() {
        return html`
            <style>
            </style>
            <p>${this.value.pageTwo || "The value is empty"}</p>
        `;
    }
}

customElements.define('view-two', ViewTwo);