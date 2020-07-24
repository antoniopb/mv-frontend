import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../shared/models/produto';
import { ReajusteProduto } from '../shared/models/reajusteProdutos';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: Observable<Produto[]>;
  produtosSelecionados: Set<Number>;
  checkAllCheckboxes: boolean = false;

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this._carregarProdutos();
    this.produtosSelecionados = new Set<Number>();
  }

  _carregarProdutos() {
    this.produtos = this.produtoService.getProdutosList();
  }

  // Recupera Produto selecionado e redireciona para a tela de detalhes
  _detalharProduto(id: number) {
    this.router.navigate(['detalhes', id]);
  }

  // Recupera Produto selecionado e redireciona para a tela de editar
  _editarProduto(id: number) {
      this.router.navigate(['editar', id]);
  }

  // Remove Produto e recarrega lista de Produtos apos finalizar a operacao de DELETE
  _removerProduto(id: number) {
    this.produtoService.deleteProduto(id)
      .subscribe(
        data => {
          this._carregarProdutos();
        },
        error => console.log(error));
  }

  _atualizarListaSelecionados(id: number) {
    if(this.produtosSelecionados.has(id)) {
      this.produtosSelecionados.delete(id); 
    } else {
      this.produtosSelecionados.add(id);
    }
  }

  _reajustarPrecos(reajuste: number) {
    if(reajuste.toString() == "") reajuste = 0;
    var reajusteProdutos = new ReajusteProduto;
    reajusteProdutos.ids = Array.from(this.produtosSelecionados);
    reajusteProdutos.reajuste = reajuste;
    this.produtoService.reajustarPrecos(reajusteProdutos)
      .subscribe (
        data => {
          this._carregarProdutos();
        },
        error => console.log(error));
  }

  _checkAll(event) {
    if(event.target.checked) {
      this.produtos.subscribe(
        data => {
          for (let produto of data) {
            this.produtosSelecionados.add(produto.id);
          }
        }
      );
    } else {
      this.produtosSelecionados = new Set<Number>();
    }
  }

}
