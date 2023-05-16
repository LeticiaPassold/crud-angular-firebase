import { AngularFireDatabase, } from '@angular/fire/compat/database';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'crud-angular-firebase';

  constructor (public db: AngularFireDatabase){

  }

  ngOnInit (){
      this.db.list("teste").push("test")
      .then (result =>
        console.log(result.key)
        );

  }

}
