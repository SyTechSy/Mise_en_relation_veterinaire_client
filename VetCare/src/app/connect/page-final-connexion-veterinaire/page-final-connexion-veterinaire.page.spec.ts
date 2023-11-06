import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageFinalConnexionVeterinairePage } from './page-final-connexion-veterinaire.page';

describe('PageFinalConnexionVeterinairePage', () => {
  let component: PageFinalConnexionVeterinairePage;
  let fixture: ComponentFixture<PageFinalConnexionVeterinairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageFinalConnexionVeterinairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
