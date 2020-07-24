import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Location } from '@angular/common';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(private produtoService: ProdutoService, private router: Router, 
    private formBuilder: FormBuilder, private location: Location) { }

  get formProduto() { return this.addForm.controls; }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      descricao: ['', [Validators.required, Validators.maxLength(200)]],
      preco: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.produtoService.createProduto(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/produtos']);
      },
      error => console.log(error));
  }

  _voltar() {
    this.location.back();
  }

}
