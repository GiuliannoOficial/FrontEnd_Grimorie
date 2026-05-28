import { Routes } from '@angular/router';

import { Login } from './login/login';
import { CampaignList } from './campaign-list/campaign-list';
import { CampaignDetails } from './campaign-details/campaign-details';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'campaigns',
    component: CampaignList
  },
  {
    path: 'campaign/:id',
    component: CampaignDetails
  }
];
