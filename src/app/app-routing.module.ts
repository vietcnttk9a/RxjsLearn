import {NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import vi from '@angular/common/locales/en';
import {NZ_ICONS} from 'ng-zorro-antd/icon';
import {NZ_I18N, vi_VN} from 'ng-zorro-antd/i18n';
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  }
];


registerLocaleData(vi);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [{provide: NZ_I18N, useValue: vi_VN}, {provide: NZ_ICONS, useValue: icons}]
})
export class AppRoutingModule {
}
