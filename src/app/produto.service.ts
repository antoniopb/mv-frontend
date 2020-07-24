import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './shared/models/produto';
import { Observable } from 'rxjs';
import { ReajusteProduto } from './shared/models/reajusteProdutos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:8080/api/v1/produtos';

  constructor(private httpClient: HttpClient) { }

  getProduto(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createProduto(produto: Produto): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, produto);
  }

  updateProduto(produto: Produto): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${produto.id}`, produto);
  }

  deleteProduto(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProdutosList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  reajustarPrecos(reajusteProdutos: ReajusteProduto): Observable<any> {
    return this.httpClient.put<ReajusteProduto>(`${this.baseUrl}/reajustar`, reajusteProdutos);
  }

}
