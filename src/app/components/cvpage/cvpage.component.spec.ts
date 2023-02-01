import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVpageComponent } from './cvpage.component';

describe('CVpageComponent', () => {
  let component: CVpageComponent;
  let fixture: ComponentFixture<CVpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CVpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
