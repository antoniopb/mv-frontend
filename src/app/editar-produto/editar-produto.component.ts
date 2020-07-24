import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/models/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, 
    private router: Router, private produtoService: ProdutoService, private location: Location) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: [''],
      descricao: ['', [Validators.required, Validators.maxLength(200)]],
      preco: ['', Validators.required]
    });
    console.log(this.route.snapshot.params['id']);
    this.produtoService.getProduto(this.route.snapshot.params['id'])
      .subscribe( data => {
        this.editForm.setValue(data);
    });
  }

  get formProduto() { return this.editForm.controls; }

  _atualizarProduto() {
    this.produtoService.updateProduto(this.editForm.value)
      .subscribe(data => console.log(data), 
        error => console.log(error));
    this.router.navigate(['/produtos']);
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.status == 'VALID') {
      this._atualizarProduto();    
    }
  }

  _voltar() {
    this.location.back();
  }

}
