import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemeGeneratorRoutingModule } from './meme-generator-routing.module';
import { MemeGeneratorComponent } from './meme-generator.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    MemeGeneratorRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    MemeGeneratorComponent
  ],
  exports: [
    MemeGeneratorComponent
  ]

})
export class MemeGeneratorModule { }
