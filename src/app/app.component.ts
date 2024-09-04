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
      // TODO: remove wish from items

      console.log('~~~ wish: ', wish)
    })
  }

  filter: any
}
