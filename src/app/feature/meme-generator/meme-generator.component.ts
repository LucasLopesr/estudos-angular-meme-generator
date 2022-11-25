import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchFormComponent } from 'src/app/shared/component/search-form/search-form.component';
import { ImageService } from 'src/app/core';
import { take, finalize, tap } from 'rxjs/operators';
import { Image } from 'src/app/core/models';
import { Subject, Observable } from 'rxjs';
import { FormInputTextsComponent } from './form-input-texts/form-input-texts.component';
import { ImageGalleryComponent } from 'src/app/shared/component/image-gallery/image-gallery.component';

@Component({
  selector: 'app-meme-generator',
  templateUrl: './meme-generator.component.html',
  styleUrls: ['./meme-generator.component.scss']
})
export class MemeGeneratorComponent implements OnInit {
  @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
  @ViewChild(FormInputTextsComponent) formInputTexts: FormInputTextsComponent;
  @ViewChild(ImageGalleryComponent) imageGallery: ImageGalleryComponent;
  images: Observable<Image[]>;
  $searchEnd = new Subject();
  topText: string;
  bottomText: string;
  imageSelected: Image;

  constructor(private readonly imageService: ImageService) { }

  ngOnInit() {
  }

  searchImage(keyword: string) {
    this.images = this.imageService.getImages(keyword)
      .pipe(
        tap(this.imageSelected = null),
        finalize(() => this.$searchEnd.next(null)),
        take(1)
      );
  }

  saveText() {
    this.topText = this.formInputTexts.form.get('topText').value;
    this.bottomText = this.formInputTexts.form.get('bottomText').value;
  }

  loadImage(image: Image) {
    this.imageSelected = image;
  }

}
