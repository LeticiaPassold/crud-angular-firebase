import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { produtoService } from '../produto.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';



@Component({

  selector: 'app-edit-produto',

  templateUrl: './edit-produto.component.html',

  styleUrls: ['./edit-produto.component.css']

})

export class EditprodutoComponent implements OnInit{

  produtoForm: FormGroup;



  constructor(

    private produtoService: produtoService,

    private fb: FormBuilder,

    private location: Location,

    private activeRoute: ActivatedRoute,

    private router: Router,

    private toastr: ToastrService

  ){

    this.produtoForm = this.createForm();

  }



  createForm(){

    return this.fb.group({

      nome: new FormControl('', Validators.required),

      idade: new FormControl('', Validators.required),

      telefone: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

    });

  }



  ngOnInit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id != null) {

      this.produtoService.getprodutoById(id).valueChanges().subscribe(data => {

        this.produtoForm.setValue(data as any);

      });

    }

  }



  submitForm(){

    this.produtoService.updateproduto(this.produtoForm.value);

    this.toastr.success(

      this.produtoForm.controls['nome'].value + " atualizado."

    );

    this.router.navigate(['list-produto']);

  }

  goBack(){

    this.location.back();

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

 