import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';
import { ListContatoComponent } from './contato/list-contato/list-contato.component';
import { AddContatoComponent } from './contato/add-contato/add-contato.component';
import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/crud-angular-firebase/src/app/contato/list-contato', pathMatch: 'full' },
  { path: 'add-contato', component: AddContatoComponent },
  { path: 'list-contato', component: ListContatoComponent },
  { path: 'edit-contato/:id', component: EditContatoComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule],

  declarations: []


})
class MyNgModule {}

export class AppRoutingModule { }

