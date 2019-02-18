import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../redux/store.js';
import { updatePageOne, updatePageTwo } from '../redux/actions.js';

class Home extends connect(store)(LitElement) {
    static get properties() {
        return {
            value: { type: Object }
        }
    }

    stateChanged(state) {
        this.value = state;
    }

    render() {
        return html`
        <style>
            label {
                display: inline-block;
                margin: 0 0 8px 0;
                font-size: 16px;
                line-height: 24px;
            }

            input {
                display: block;
                margin: 0 0 8px 0;
                font-size: 16px;
                line-height: 24px;
                width: 300px;
                padding: 5px;
                border-radius: .25rem;
                border: 1px solid rgb(206, 212, 218);
            }

            input:focus {
                outline: none;
                box-shadow: 0 0 0 2pt #0066ff80;
            }

            button {
                padding: 5px 10px;
                border-radius: .25rem;
            }

            button:focus {
                outline: none;
                background-color: grey;
            }
        </style>
        <div>
            <div class="form-group">
                <label for="pageOne">Page One</label>
                <input type="text" class="form-control" id="pageOne" aria-describedby="pageOne" placeholder="Enter a value for page One" value="${this.value.pageOne}">
                <small class="form-text text-muted">This value will be accessible from  page One</small>
                <button @click="${() => this.pageOne()}" aria-label="decrement">Update</button>
            </div>
            <div class="form-group">
                <label for="pageTwo">Page Two</label>
                <input type="text" class="form-control" id="pageTwo" aria-describedby="pageTwo" placeholder="Enter a value for page Two" value="${this.value.pageTwo}">
                <small class="form-text text-muted">This value will be accessible from page Two</small>
                <button @click="${() => this.pageTwo()}" aria-label="decrement">Update</button>
            </div>
        </div>
    `;
    }

    pageOne() {
        this.value = { ...this.value, pageOne: this.shadowRoot.getElementById('pageOne').value }
        store.dispatch(updatePageOne(this.value.pageOne));
    }

    pageTwo() {
        this.value = { ...this.value, pageTwo: this.shadowRoot.getElementById('pageTwo').value }
        store.dispatch(updatePageTwo(this.value.pageTwo));
    }
}

customElements.define('view-home', Home);