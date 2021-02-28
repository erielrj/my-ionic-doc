import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifecycleHooksPage } from './lifecycle-hooks.page';

const routes: Routes = [
  {
    path: '',
    component: LifecycleHooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifecycleHooksPageRoutingModule {}
