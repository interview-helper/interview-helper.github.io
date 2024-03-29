import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return [
      styles,
      css`
        main {
          height: calc(100vh - 80px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .title {
          display: flex;
          align-items: center;
        }

        .title > .badge {
          margin-right: 0.5rem;
        }

        @media (min-width: 750px) {
          sl-card {
            width: 70vw;
          }
        }

        @media (horizontal-viewport-segments: 2) {
          #welcomeBar {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
        }
      `,
    ];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main class="page page-home">
        <h1 class="title">
          <span>Interview Assistant</span>
        </h1>
        <sl-button href="${resolveRouterPath('about')}" variant="primary"
          >시작하기</sl-button
        >
      </main>
    `;
  }
}

