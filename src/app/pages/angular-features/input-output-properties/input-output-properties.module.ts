import { OutputPropertyComponent } from './output-property/output-property.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputOutputPropertiesPageRoutingModule } from './input-output-properties-routing.module';

import { InputOutputPropertiesPage } from './input-output-properties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputOutputPropertiesPageRoutingModule,
  ],
  declarations: [
    InputOutputPropertiesPage,
    InputPropertyComponent,
    OutputPropertyComponent,
  ],
})
export class InputOutputPropertiesPageModule {}
