import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importez vos composants Angular nécessaires
import { LoginComponent } from './login/login.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BlogComponent } from './blog/blog.component';
import { ListeMessageComponent } from './liste-message/liste-message.component';

export const routes: Routes = [
  { path: 'users/:userId', component: LoginComponent },
  { path: 'users/:userId/blogs', component: SideMenuComponent },
  { path: 'users/:userId/blogs/:blogId', component: BlogComponent },
  { path: 'users/:userId/blogs/:blogId/messages', component: ListeMessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
