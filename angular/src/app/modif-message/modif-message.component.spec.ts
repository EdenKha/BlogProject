import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMessageComponent } from './modif-message.component';

describe('ModifMessageComponent', () => {
  let component: ModifMessageComponent;
  let fixture: ComponentFixture<ModifMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
