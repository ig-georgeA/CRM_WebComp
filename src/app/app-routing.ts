import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';
import './accounts/accounts';
import './account-sample/account-sample';

export const routes: Route[] = [
  { path: 'home', component: 'app-home', name: 'Home' },
  { path: 'accounts', component: 'app-accounts', name: 'Accounts' },
  { path: 'account-sample', component: 'app-account-sample', name: 'Account Sample' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
