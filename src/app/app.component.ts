import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import {EventService} from '../shared/services/EventService';
import { WishService } from './tests/wish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

   constructor(private router : Router){}

  ngOnInit(): void {
  }

  goToContact(){
     this.router.navigate(['contact']);
  }
   

}
