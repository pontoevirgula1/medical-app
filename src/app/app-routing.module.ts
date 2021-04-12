import { PacienteReadComponent } from './components/views/paciente/paciente-read/paciente-read.component';
import { PacienteCreateComponent } from './components/views/paciente/paciente-create/paciente-create.component';
import { ReceituarioCreateComponent } from './components/views/receituario/receituario-create/receituario-create.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'paciente',
    component: PacienteReadComponent
  },
  {
    path: 'cadastro-paciente/create',
    component: PacienteCreateComponent
  },
  {
    path: 'receituario/create',
    component: ReceituarioCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
