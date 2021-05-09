import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tec-skills',
    loadChildren: () => import('./tec-skills/tec-skills.module').then( m => m.TecSkillsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'soft-skills',
    loadChildren: () => import('./soft-skills/soft-skills.module').then( m => m.SoftSkillsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'personal-project',
    loadChildren: () => import('./personal-project/personal-project.module').then( m => m.PersonalProjectPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'team-project',
    loadChildren: () => import('./team-project/team-project.module').then( m => m.TeamProjectPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'extra-curriculum',
    loadChildren: () => import('./extra-curriculum/extra-curriculum.module').then( m => m.ExtraCurriculumPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-information',
    loadChildren: () => import('./contact-information/contact-information.module').then( m => m.ContactInformationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'personal-profile',
    loadChildren: () => import('./personal-profile/personal-profile.module').then( m => m.PersonalProfilePageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
