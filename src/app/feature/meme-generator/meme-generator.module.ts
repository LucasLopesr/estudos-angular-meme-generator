import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemeGeneratorRoutingModule } from './meme-generator-routing.module';
import { MemeGeneratorComponent } from './meme-generator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormInputTextsComponent } from './form-input-texts/form-input-texts.component';
import { ImageTextComponent } from './image-text/image-text.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MemeGeneratorRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    MemeGeneratorComponent,
    FormInputTextsComponent,
    ImageTextComponent
  ],
  exports: [
    MemeGeneratorComponent
  ]

})
export class MemeGeneratorModule { }
