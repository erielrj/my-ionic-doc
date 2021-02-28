import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifecycleHooksPageRoutingModule } from './lifecycle-hooks-routing.module';

import { LifecycleHooksPage } from './lifecycle-hooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifecycleHooksPageRoutingModule
  ],
  declarations: [LifecycleHooksPage]
})
export class LifecycleHooksPageModule {}
