import { Component } from '@angular/core'
import { WishItem } from 'shared/models/wishItem'
import events from './../shared/services/EventService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // TEST:
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ]

  constructor() {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish)
      this.items.splice(index, 1)
    })
  }

  filter: any
}
