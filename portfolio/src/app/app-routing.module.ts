import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { ProjectsComponent } from './projects/projects.component';
const routes: Routes = [
  {path:'home-component',component:HomeComponent},
  {path:'academics-component',component:AcademicsComponent},
  {path:'projects-component',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
