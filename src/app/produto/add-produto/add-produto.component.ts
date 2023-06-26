import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

import { produtoService } from '../produto.service';

 

import { ToastrService } from 'ngx-toastr';

 

@Component({

  selector: 'app-add-produto',

  templateUrl: './add-produto.component.html',

  styleUrls: ['./add-produto.component.css']

})

export class AddprodutoComponent implements OnInit{

  produtoForm: FormGroup;

 

  constructor(

    private produtoService: produtoService,

    private fb: FormBuilder,

    private toastr: ToastrService){

      this.produtoForm = this.createForm();

    }

 

    ngOnInit(){

      this.produtoService.getprodutoList();

    }

 

    createForm(){

      return this.fb.group({

        nome: new FormControl('', Validators.required),

        idade: new FormControl('', Validators.required),

        telefone: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

      });

    }

 

    resetForm(){

      this.produtoForm.reset();

    }

 

    submitForm(){

      this.produtoService.insertproduto(this.produtoForm.value);

      this.toastr.success(

        this.produtoForm.controls['nome'].value + " adicionado"

      );

    }

 

    get nome(){

      return this.produtoForm.get('nome');

    }

 

    get idade(){

      return this.produtoForm.get('idade');

    }

 

    get telefone(){

      return this.produtoForm.get('telefone');

    }

}