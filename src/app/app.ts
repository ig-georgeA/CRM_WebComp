import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcIconComponent, IgcNavbarComponent, IgcIconButtonComponent, IgcRippleComponent, IgcNavDrawerComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      background-color: hsla(var(--ig-gray-900));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: hidden;
      position: relative;
      min-height: 56px;
    }
    .group_1 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      width: 56px;
      height: 56px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-height: 50px;
      flex-grow: 1;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-surface-500));
    }
    .image {
      object-fit: none;
      width: 413px;
      height: 14px;
      min-width: 413px;
    }
    .avatar {
      --background: none;
    }
    .avatar::part(base) {
      background-color: hsla(var(--ig-surface-500));
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .navbar {
      background-color: hsla(var(--ig-primary-500));
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      flex-shrink: 0;
    }
    .view-container {
      position: relative;
      flex-grow: 1;
    }
    .nav-drawer::part(main) {
      width: 200px;
    }
    .list {
      height: max-content;
    }
  `;

  @query('#nav-drawer')
  public navDrawer?: IgcNavDrawerComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <div @click=${() => this.navDrawer?.toggle()} class="row-layout group_1">
          <span class="material-icons icon">
            menu
          </span>
        </div>
        <igc-navbar class="navbar">
          <div>
            <img src="/src/assets/CRM Logo.svg" class="image" />
          </div>
          <div slot="end">
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                search
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                settings
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                notifications_none
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
        </igc-navbar>
      </div>
      <div class="row-layout group_2">
        <igc-nav-drawer ?open="${true}" position="relative" id="nav-drawer" class="nav-drawer">
          <igc-list class="list">
            <igc-list-item @click="${() => Router.go('/home')}">
              <div slot="start">
                <igc-avatar src="/src/assets/Home-Avatar-Icon.svg" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <div slot="title">Home</div>
            </igc-list-item>
            <igc-list-item @click="${() => Router.go('/accounts')}">
              <div slot="start">
                <igc-avatar src="/src/assets/Accounts-Avatar-Icon.svg" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <div slot="title">Accounts</div>
            </igc-list-item>
            <igc-list-item @click="${() => Router.go('/contacts')}">
              <div slot="start">
                <igc-avatar src="/src/assets/Contacts-Avatar-Icon.svg" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <div slot="title">Contacts</div>
            </igc-list-item>
            <igc-list-item @click="${() => Router.go('/contracts')}">
              <div slot="start">
                <igc-avatar src="/src/assets/Contracts-Avatar-Icon.svg" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <div slot="title">Contracts</div>
            </igc-list-item>
            <igc-list-item @click="${() => Router.go('/reports')}">
              <div slot="start">
                <igc-avatar src="/src/assets/Reports-Avatar-Icon.svg" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <div slot="title">Reports</div>
            </igc-list-item>
            <igc-list-item @click="${() => Router.go('/calendar')}">
              <div slot="start">
                <igc-avatar src="/src/assets/Calendar-Avatar-Icon.svg" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <div slot="title">Calendar</div>
            </igc-list-item>
            <igc-list-item @click="${() => Router.go('/tasks')}">
              <div slot="start">
                <igc-avatar src="/src/assets/Tasks-Avatar-Icon.svg" size="small" shape="circle" class="avatar"></igc-avatar>
              </div>
              <div slot="title">Tasks</div>
            </igc-list-item>
          </igc-list>
        </igc-nav-drawer>
        <router-outlet class="view-container"></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
