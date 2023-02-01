import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectstabComponent } from './projectstab.component';

describe('ProjectstabComponent', () => {
  let component: ProjectstabComponent;
  let fixture: ComponentFixture<ProjectstabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectstabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
