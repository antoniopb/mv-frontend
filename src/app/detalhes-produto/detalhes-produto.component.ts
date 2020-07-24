import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/models/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: Produto;

  constructor(private route: ActivatedRoute,private router: Router,
    private produtoService: ProdutoService, private location: Location) { }

  ngOnInit(): void {
    this.produto = new Produto();

    this.produtoService.getProduto(this.route.snapshot.params['id'])
      .subscribe(data => {
        console.log(data);
        this.produto = data;
      }, error => console.log(error));
  }

  _voltar() {
    this.location.back();
  }

}
