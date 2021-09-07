import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectToUrlComponent } from './components/redirect-to-url/redirect-to-url.component';
import { ShortenUrlComponent } from './components/shorten-url/shorten-url.component';


const routes: Routes = [
  { path: '', redirectTo: 'shorten', pathMatch: 'full' },
  { path: 'shorten', component: ShortenUrlComponent },
  { path: '**', component: RedirectToUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
