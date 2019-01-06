import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkBaseTableComponent} from './cdk-base-table.component';

const routes: Routes = [
  {
    path: '',
    component: CdkBaseTableComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class CdkBaseTableRoutingModule { }
