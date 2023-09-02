import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'Interview Helper';

  @property({ type: Boolean }) enableBack: boolean = false;

  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-background-color, #fff);
        color: black;
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;

        box-shadow:
          0px 0px 2px rgba(0, 0, 0, 0.12),
          0px 0px 16px rgba(0, 0, 0, 0.12);
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      sl-button + h1 {
        white-space: nowrap;
        margin-left: 1rem;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <div id="back-button-block">
          ${this.enableBack
            ? html`<sl-button href="${resolveRouterPath()}"> Back </sl-button>`
            : null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `;
  }
}

