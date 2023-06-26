import { Component, OnInit } from '@angular/core';

import { produtoService } from '../produto.service';

import { ToastrService } from 'ngx-toastr';

import { produto } from '../produto';

 

@Component({

  selector: 'app-list-produto',

  templateUrl: './list-produto.component.html',

  styleUrls: ['./list-produto.component.css'],

})

export class ListprodutoComponent implements OnInit {

  page = 1;

  listaprodutos: produto[] = [];

  listaVazia: Boolean = true;

  mostrarLoader: Boolean = true;

 

  constructor(

    private produtoService: produtoService,

    private toastr: ToastrService

  ) {}

 

  ngOnInit() {

    let fetchData = this.produtoService.getprodutoList();

    fetchData.snapshotChanges().subscribe((data) => {

      this.listaprodutos = [];

      if (data.length <= 0) {

        this.listaVazia = true;

      } else {

        this.listaVazia = false;

        data.forEach((item: any) => {

          let produto = item.payload.toJSON();

          produto['$key'] = item.key;

          this.listaprodutos.push(produto as produto);

        });

      }

      this.mostrarLoader = false;

    });

  }



  deleteproduto(produto: produto) {

    if (window.confirm('Tem certeza que deseja remover o produto?')) {

      if (produto.$key != null) {

        this.produtoService.deleteproduto(produto.$key);

        this.toastr.success(produto.nome + ' removido com sucesso.');

      }

    }

  }

}