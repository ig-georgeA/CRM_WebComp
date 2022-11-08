import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IgcCategoryChartModule } from '@infragistics/igniteui-webcomponents-charts';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAvatarComponent, IgcChipComponent, IgcListComponent, IgcListItemComponent } from 'igniteui-webcomponents';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import ECommerceService from '../service/ecommerce-service';
import CRMAppService from '../service/crmapp-service';
import NorthwindService from '../service/northwind-service';

ModuleManager.register(IgcCategoryChartModule);

defineComponents(IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcChipComponent);

@customElement('app-home')
export default class Home extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      background-color: hsla(var(--ig-gray-100));
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 12px;
      overflow: auto;
      position: relative;
      padding: 12px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 12px;
      position: relative;
      min-width: 280px;
      min-height: 50px;
      flex-grow: 2;
      flex-basis: 0;
    }
    .group_2 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px 16px 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-300));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px 16px 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 12px;
      position: relative;
      min-width: 280px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_5 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-300));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      position: relative;
      padding: 16px 16px 24px;
      min-width: 50px;
      max-height: 428px;
      flex-shrink: 0;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 2px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: auto;
      flex-shrink: 0;
    }
    .group_9 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      min-height: auto;
      flex-shrink: 0;
    }
    .group_10 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-300));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px 16px 24px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_11 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 2px;
      position: relative;
      min-width: 50px;
      min-height: auto;
      flex-shrink: 0;
    }
    .group_12 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 2px;
      position: relative;
      min-width: 50px;
      min-height: auto;
      flex-shrink: 0;
    }
    .group_13 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: -2px;
      position: relative;
      min-width: 50px;
      min-height: auto;
      flex-shrink: 0;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 2px;
      position: relative;
      min-width: 50px;
      min-height: auto;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .hyperlink {
      text-align: right;
      color: hsla(var(--ig-primary-500));
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --background: none;
    }
    .hyperlink_1 {
      color: hsla(var(--ig-primary-500));
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      color: hsla(var(--ig-gray-600));
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      color: hsla(var(--ig-gray-600));
      margin: 0 4px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .hyperlink_2 {
      color: hsla(var(--ig-gray-600));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .chip {
      margin: 4px 0 0;
      width: max-content;
      height: max-content;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .category-chart {
      --brushes: #72B24D #9362A3 #F06583 #FCB13F #407DB7;
      --outlines: #72B24D #9362A3 #F06583 #FCB13F #407DB7;
      --marker-brushes: #72B24D #9362A3 #F06583 #FCB13F #407DB7;
      --marker-outlines: #72B24D #9362A3 #F06583 #FCB13F #407DB7;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .grid {
      min-width: 248px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .list {
      height: max-content;
    }
  `;

  constructor() {
    super();
    const eCommerceService: ECommerceService = new ECommerceService();
      eCommerceService.getRevenue().then(data => {
        this.eCommerceRevenue = data;
        }, err => console.log(err));
    const northwindService: NorthwindService = new NorthwindService();
    this.northwindCustomers = northwindService.getData('Customers');
    const cRMAppService: CRMAppService = new CRMAppService();
      cRMAppService.getMeetingsTasks().then(data => {
        this.cRMAppMeetingsTasks = data;
        }, err => console.log(err));
  }

  @property()
  private eCommerceRevenue?: any[];

  @property()
  private northwindCustomers?: any[];

  @property()
  private cRMAppMeetingsTasks?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/fluent.css'>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <div class="column-layout group_2">
            <p class="typography__body-1 text">
              Quarterly Performance
            </p>
            <igc-category-chart .dataSource="${this.eCommerceRevenue}" chart-type="column" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
            <a href class="typography__body-2 hyperlink">
              View All Reports
            </a>
          </div>
          <div class="column-layout group_3">
            <p class="typography__body-1 text">
              New Contracts
            </p>
            <igc-grid .data="${this.northwindCustomers}" primary-key="customerID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" class="ig-typography grid">
              <igc-column field="customerID" data-type="string" header="customerID" sortable="true" selectable="false"></igc-column>
              <igc-column field="companyName" data-type="string" header="companyName" sortable="true" selectable="false"></igc-column>
              <igc-column field="contactName" data-type="string" header="contactName" sortable="true" selectable="false"></igc-column>
              <igc-column field="contactTitle" data-type="string" header="contactTitle" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.street" data-type="string" header="street" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.city" data-type="string" header="city" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.region" data-type="string" header="region" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.postalCode" data-type="string" header="postalCode" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.country" data-type="string" header="country" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.phone" data-type="string" header="phone" sortable="true" selectable="false"></igc-column>
            </igc-grid>
            <a href class="typography__body-2 hyperlink">
              View All Reports
            </a>
          </div>
        </div>
        <div class="column-layout group_4">
          <div class="column-layout group_5">
            <p class="typography__body-1 text">
              New Accounts
            </p>
            <div class="column-layout group_6">
              <igc-list class="list">
                ${this.northwindCustomers?.map((item: any) => html`
                  <igc-list-item @click="${() => Router.go('/account-sample')}">
                    <div slot="start">
                      <igc-avatar src="/src/assets/Account-List-Avatar-Icon.svg" size="small" class="avatar"></igc-avatar>
                    </div>
                    <div>
                      <div class="column-layout group_7">
                        <a href class="typography__body-2 hyperlink_1" @click="${() => Router.go('<%=route_cb19045b_faca_4dd0_9161_824460e2a941%>')}">
                          ${item.companyName}
                        </a>
                        <p class="typography__subtitle-2 text_1">
                          ${item.contactName}
                        </p>
                        <div class="row-layout group_8">
                          <p class="typography__caption text_2">
                            ${item.address?.street}
                          </p>
                          <p class="typography__caption text_3">
                            ,
                          </p>
                          <p class="typography__caption text_2">
                            ${item.address?.city}
                          </p>
                          <p class="typography__caption text_3">
                            ,
                          </p>
                          <p class="typography__caption text_2">
                            ${item.address?.country}
                          </p>
                        </div>
                        <p class="typography__caption text_2">
                          ${item.address?.phone}
                        </p>
                      </div>
                    </div>
                  </igc-list-item>
                `)}
              </igc-list>
            </div>
            <a href class="typography__body-2 hyperlink">
              View All Accounts 
            </a>
          </div>
          <div class="column-layout group_5">
            <p class="typography__body-1 text">
              Recent Contacts
            </p>
            <div class="column-layout group_6">
              <igc-list class="list">
                ${this.northwindCustomers?.map((item: any) => html`
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar src="/src/assets/Contacts-List-Avatar-Icon.svg" size="small" class="avatar"></igc-avatar>
                    </div>
                    <div>
                      <div class="column-layout group_7">
                        <a href class="typography__body-2 hyperlink_1">
                          ${item.contactName}
                        </a>
                        <div class="row-layout group_9">
                          <p class="typography__caption text_1">
                            ${item.contactTitle}
                          </p>
                          <p class="typography__caption text_2">
                            @
                          </p>
                          <a href class="caption hyperlink_2">
                            ${item.companyName}
                          </a>
                        </div>
                      </div>
                    </div>
                  </igc-list-item>
                `)}
              </igc-list>
            </div>
            <a href class="typography__body-2 hyperlink">
              View All Contacts 
            </a>
          </div>
        </div>
        <div class="column-layout group_4">
          <div class="column-layout group_10">
            <p class="typography__body-1 text">
              My Meetings
            </p>
            <igc-list class="list">
              ${this.cRMAppMeetingsTasks?.map((item: any) => html`
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Calendar-Avatar-Icon.svg" size="small" class="avatar"></igc-avatar>
                  </div>
                  <div>
                    <div class="column-layout group_7">
                      <div class="row-layout group_11">
                        <p class="typography__subtitle-2 text_1">
                          Meeting with 
                        </p>
                        <p class="typography__subtitle-2 text_1">
                          ${item.Contact}
                        </p>
                      </div>
                      <div class="row-layout group_12">
                        <p class="typography__caption text_2">
                          ${item.MeetingDate}
                        </p>
                        <p class="typography__caption text_2">
                          -
                        </p>
                        <p class="typography__caption text_2">
                          ${item.MeetingTime}
                        </p>
                      </div>
                      <igc-chip size="large" class="chip">
                        ${item.MeetingType}
                      </igc-chip>
                    </div>
                  </div>
                </igc-list-item>
              `)}
            </igc-list>
            <a href class="typography__body-2 hyperlink">
              View Calendar
            </a>
          </div>
          <div class="column-layout group_10">
            <p class="typography__body-1 text">
              Today’s Tasks
            </p>
            <igc-list class="list">
              ${this.cRMAppMeetingsTasks?.map((item: any) => html`
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Tasks-Avatar-Icon.svg" size="small" class="avatar"></igc-avatar>
                  </div>
                  <div>
                    <div class="column-layout group_7">
                      <div class="row-layout group_13">
                        <p class="typography__subtitle-2 text_1">
                          ${item.Task}
                        </p>
                        <p class="typography__subtitle-2 text_1">
                          -
                        </p>
                        <p class="typography__subtitle-2 text_1">
                          ${item.Company}
                        </p>
                      </div>
                      <div class="row-layout group_14">
                        <p class="typography__caption text_2">
                          Due by
                        </p>
                        <p class="typography__caption text_2">
                          ${item.DueDate}
                        </p>
                      </div>
                      <igc-chip size="large" class="chip">
                        ${item.TaskStatus}
                      </igc-chip>
                    </div>
                  </div>
                </igc-list-item>
              `)}
            </igc-list>
            <a href class="typography__body-2 hyperlink">
              View Calendar
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
