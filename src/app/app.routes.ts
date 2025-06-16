import { Routes } from '@angular/router';
import { MyPage } from '../components/my-page/my-page'
import { CompanyList } from '../components/company-list/company-list'

export const routes: Routes = [
  {
    path: '',
    component: MyPage,
    pathMatch: 'full'
  },
  { path: 'poc-next-ng', component: CompanyList },
];
