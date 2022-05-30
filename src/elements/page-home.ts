import {css, html} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';

import {ShafiElement} from '../shaf-i-debt/shaf-i-element';

import type {ListenerInterface} from '@alwatr/signal';
import type {TemplateResult, CSSResult} from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}

/**
 * Shaf-I PWA Home Page Element
 *
 * ```html
 * <page-home></page-home>
 * ```
 */
@customElement('page-home')
export class PageHome extends ShafiElement {
  // TODO: import pageStyle
  static override styles = [
    ...(ShafiElement.styles as CSSResult[]),
    css`
      :host {
        display: flex;
        flex-direction: column;
      }
    `,
  ];

  protected _listenerList: Array<unknown> = [];

  override connectedCallback(): void {
    super.connectedCallback();
    // this._listenerList.push(router.signal.addListener(() => this.requestUpdate()));
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._listenerList.forEach((listener) => (listener as ListenerInterface<keyof AlwatrSignals>).remove());
  }

  override render(): TemplateResult {
    return html`
      <ion-header translucent dir="rtl">
        <ion-toolbar color="primary">
          <ion-title>صفحه خانه</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-text color="dark">
          <h1 class="ion-text-center">هدر صفحه خانه</h1>
        </ion-text>
      </ion-content>
    `;
  }
}
