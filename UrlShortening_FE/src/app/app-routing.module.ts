import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortenUrlComponent } from './components/shorten-url/shorten-url.component';


const routes: Routes = [
  { path: '', redirectTo: 'shorten', pathMatch: 'full' },
  { path: 'shorten', component: ShortenUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
