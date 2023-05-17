import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorizadorService } from 'src/app/Services/autorizador.service';


@Component({
  selector: 'app-autorizador',
  templateUrl: './autorizador.component.html',
  styleUrls: ['./autorizador.component.css']
})
export class AutorizadorComponent {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _autorizadorService: AutorizadorService,
    private _router: Router
  ) {
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      contrasena: ['', Validators.required]
    })


  }

  login1() {
    
  }
}
