import { Component } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { EventService } from '../../../shared/services/EventService';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      console.log(wish);
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  items: WishItem[] = [];

  filter: any;
}
