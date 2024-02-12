import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMessageComponent } from './liste-message.component';

describe('ListeMessageComponent', () => {
  let component: ListeMessageComponent;
  let fixture: ComponentFixture<ListeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
