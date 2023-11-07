import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FooterUtilisateurPage } from './footer-utilisateur.page';

describe('FooterUtilisateurPage', () => {
  let component: FooterUtilisateurPage;
  let fixture: ComponentFixture<FooterUtilisateurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FooterUtilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
