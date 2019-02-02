import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeGeneratorComponent } from './meme-generator.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageService } from 'src/app/core/service/image.service';
import { ImageServiceMock } from 'src/app/core/testing-mocks/image-service.mock';

describe('MemeGeneratorComponent', () => {
  let component: MemeGeneratorComponent;
  let fixture: ComponentFixture<MemeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeGeneratorComponent ],
      imports: [SharedModule],
      providers: [
        { provide: ImageService, useClass: ImageServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
