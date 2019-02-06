import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchFormComponent } from './component/search-form/search-form.component';
import { ButtonComponent } from './component/button/button.component';
import { ImageGalleryComponent } from './component/image-gallery/image-gallery.component';
import { ImageGalleryItemComponent } from './component/image-gallery/image-gallery-item/image-gallery-item.component';

@NgModule({
  declarations: [SearchFormComponent, ButtonComponent, ImageGalleryComponent, ImageGalleryItemComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [SearchFormComponent, ButtonComponent, ImageGalleryComponent]
})
export class SharedModule { }
