import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'I.A (Interview Assistant)';

  @property({ type: Boolean }) enableBack: boolean = false;

  @property({ type: String }) backPath: string = '';

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
        padding-right: 16px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 62px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;
        box-sizing: border-box;

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

      sl-icon-button + h1 {
        white-space: nowrap;
        margin-left: 1rem;

        width: 100%;
        text-align: center;
        margin: 0;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        position: relative;
      }

      .back-btn {
        position: absolute;

        color: black;
        font-size: 1.25rem;
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
            ? html`
                <sl-icon-button
                  class="back-btn"
                  href="${resolveRouterPath(this.backPath || 'home')}"
                  name="chevron-left"
                  label="Back"
                ></sl-icon-button>
              `
            : null}

          <h1>${this.title}</h1>

          <slot name="right"> </slot>
        </div>
      </header>
    `;
  }
}

