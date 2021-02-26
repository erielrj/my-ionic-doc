import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'back',
    loadChildren: () => import('./pages/back/back.module').then( m => m.BackPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/uicomponents/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/uicomponents/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/uicomponents/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/uicomponents/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/uicomponents/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./pages/uicomponents/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./pages/uicomponents/chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/uicomponents/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/uicomponents/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/uicomponents/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/uicomponents/grid/grid.module').then( m => m.GridPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
