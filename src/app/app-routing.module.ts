import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full' },
  { path: 'dishes', loadChildren: './pages/dishes/dishes.module#DishesPageModule' },
  { path: 'dishes/:id', loadChildren: './pages/dishes-detail/dishes-detail.module#DishesDetailPageModule' },
  { path: 'dishes-edit', loadChildren: './pages/dishes-edit/dishes-edit.module#DishesEditPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
