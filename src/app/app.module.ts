import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CriarProdutoComponent,
    DetalhesProdutoComponent,
    ListarProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
