import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import {EventService} from '../shared/services/EventService';
import { WishService } from './tests/wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }

   

}
