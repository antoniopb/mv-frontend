import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ListarProdutoComponent },
  { path: 'criar', component: CriarProdutoComponent },
  { path: 'editar/:id', component: EditarProdutoComponent },
  { path: 'detalhes/:id', component: DetalhesProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
