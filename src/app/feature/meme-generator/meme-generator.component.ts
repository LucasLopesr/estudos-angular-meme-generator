import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchFormComponent } from 'src/app/shared/component/search-form/search-form.component';
import { ImageService } from 'src/app/core';
import { take, finalize } from 'rxjs/operators';
import { Image } from 'src/app/core/models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-meme-generator',
  templateUrl: './meme-generator.component.html',
  styleUrls: ['./meme-generator.component.scss']
})
export class MemeGeneratorComponent implements OnInit {

  @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
  constructor(private imageService: ImageService) { }

  images: Image[];
  $searchEnd = new Subject();
  ngOnInit() {
  }

  searchImage(keyword: string) {
    this.imageService.getImages(keyword)
    .pipe(
      finalize(() => this.$searchEnd.next()),
      take(1)
    )
    .subscribe(
      (images) => this.images = images
    );
  }
}
