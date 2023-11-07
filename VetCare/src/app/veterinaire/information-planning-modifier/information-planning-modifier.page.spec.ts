import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InformationPlanningModifierPage } from './information-planning-modifier.page';

describe('InformationPlanningModifierPage', () => {
  let component: InformationPlanningModifierPage;
  let fixture: ComponentFixture<InformationPlanningModifierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformationPlanningModifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
