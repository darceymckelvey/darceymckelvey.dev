import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodestrataComponent } from './codestrata.component';

describe('CodestrataComponent', () => {
  let component: CodestrataComponent;
  let fixture: ComponentFixture<CodestrataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodestrataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodestrataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
