import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'section-choix',
    loadChildren: () => import('./section-choix/section-choix.module').then( m => m.SectionChoixPageModule)
  },
  {
    path: 'page1-inscription',
    loadChildren: () => import('./connect/page1-inscription/page1-inscription.module').then( m => m.Page1InscriptionPageModule)
  },
  {
    path: 'page2-inscription',
    loadChildren: () => import('./connect/page2-inscription/page2-inscription.module').then( m => m.Page2InscriptionPageModule)
  },
  {
    path: 'page3-inscription',
    loadChildren: () => import('./connect/page3-inscription/page3-inscription.module').then( m => m.Page3InscriptionPageModule)
  },
  {
    path: 'page4-inscription',
    loadChildren: () => import('./connect/page4-inscription/page4-inscription.module').then( m => m.Page4InscriptionPageModule)
  },
  {
    path: 'page5-inscription',
    loadChildren: () => import('./connect/page5-inscription/page5-inscription.module').then( m => m.Page5InscriptionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./connect_utilisateur/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connect_utilisateur/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./utilisateur/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'suivi-medicament',
    loadChildren: () => import('./utilisateur/suivi-medicament/suivi-medicament.module').then( m => m.SuiviMedicamentPageModule)
  },
  {
    path: 'page-final-connexion-veterinaire',
    loadChildren: () => import('./connect/page-final-connexion-veterinaire/page-final-connexion-veterinaire.module').then( m => m.PageFinalConnexionVeterinairePageModule)
  },
  {
    path: 'ajouter-medicament',
    loadChildren: () => import('./utilisateur/ajouter-medicament/ajouter-medicament.module').then( m => m.AjouterMedicamentPageModule)
  },
  {
    path: 'ajouter-rappel',
    loadChildren: () => import('./utilisateur/ajouter-rappel/ajouter-rappel.module').then( m => m.AjouterRappelPageModule)
  },
  {
    path: 'modification-medicament',
    loadChildren: () => import('./utilisateur/modification-medicament/modification-medicament.module').then( m => m.ModificationMedicamentPageModule)
  },
  {
    path: 'profil-principal',
    loadChildren: () => import('./veterinaire/profil-principal/profil-principal.module').then( m => m.ProfilPrincipalPageModule)
  },
  {
    path: 'profil-modification',
    loadChildren: () => import('./veterinaire/profil-modification/profil-modification.module').then( m => m.ProfilModificationPageModule)
  },
  {
    path: 'profil-detaille',
    loadChildren: () => import('./veterinaire/profil-detaille/profil-detaille.module').then( m => m.ProfilDetaillePageModule)
  },
  {
    path: 'information-modifier',
    loadChildren: () => import('./veterinaire/information-modifier/information-modifier.module').then( m => m.InformationModifierPageModule)
  },
  {
    path: 'profil-user',
    loadChildren: () => import('./utilisateur/profil-user/profil-user.module').then( m => m.ProfilUserPageModule)
  },
  {
    path: 'profil-modification-user',
    loadChildren: () => import('./utilisateur/profil-modification-user/profil-modification-user.module').then( m => m.ProfilModificationUserPageModule)
  },
  {
    path: 'footer-utilisateur',
    loadChildren: () => import('./utilisateur/footer-utilisateur/footer-utilisateur.module').then( m => m.FooterUtilisateurPageModule)
  },
  {
    path: 'home-veterinaire',
    loadChildren: () => import('./veterinaire/home-veterinaire/home-veterinaire.module').then( m => m.HomeVeterinairePageModule)
  },
  {
    path: 'home-veterinaire-planning-modification',
    loadChildren: () => import('./veterinaire/home-veterinaire-planning-modification/home-veterinaire-planning-modification.module').then( m => m.HomeVeterinairePlanningModificationPageModule)
  },
  {
    path: 'information-planning-modifier',
    loadChildren: () => import('./veterinaire/information-planning-modifier/information-planning-modifier.module').then( m => m.InformationPlanningModifierPageModule)
  },
  {
    path: 'profil-veterinaire-vue-par-clients',
    loadChildren: () => import('./utilisateur/profil-veterinaire-vue-par-clients/profil-veterinaire-vue-par-clients.module').then( m => m.ProfilVeterinaireVueParClientsPageModule)
  },
  {
    path: 'home-veterinaire-vue-par-clients',
    loadChildren: () => import('./veterinaire/home-veterinaire-vue-par-clients/home-veterinaire-vue-par-clients.module').then( m => m.HomeVeterinaireVueParClientsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
