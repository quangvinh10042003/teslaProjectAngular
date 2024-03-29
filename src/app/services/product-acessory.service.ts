import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductAccessory } from '../models/product-accessory';
const urlAPIAcessory = "https://json-tesla.onrender.com/productAccessory"
@Injectable({
  providedIn: 'root'
})
export class ProductAcessoryService {
  constructor(private http: HttpClient) { }
  getAll():Observable<ProductAccessory[]>{
    return this.http.get<ProductAccessory[]>(urlAPIAcessory);
  }
  getItem(id:number):Observable<ProductAccessory>{
    return this.http.get<ProductAccessory>(`${urlAPIAcessory}/${id}`);
  }
  editItem(id:number, data:ProductAccessory):Observable<any>{
    return this.http.put(`${urlAPIAcessory}/${id}`,data);
  }
  deleteItem(id:number):Observable<any>{
    return this.http.delete(`${urlAPIAcessory}/${id}`);
  }
  addItem(data:any):Observable<any>{
    return this.http.post(`${urlAPIAcessory}`,data);
  }
}
