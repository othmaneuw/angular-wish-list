import { Component, EventEmitter, Input, Output } from '@angular/core';
import {EventService} from '../../shared/services/EventService';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

    constructor(private events : EventService){

    }
  

  @Input() wish! : WishItem;


  get cssClasses(){
    return this.wish.isComplete ? ['strikeout' ,'text-muted'] : [];
  }

  removeWish(){
     this.events.emit('removeWish',this.wish);
  }

  toggleFullfilled(){
     this.wish.isComplete = !this.wish.isComplete;
  }
}
