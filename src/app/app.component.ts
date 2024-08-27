import { Component } from '@angular/core'
import { WishItem } from 'shared/models/wishItem'

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]

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

  listFilter: any = '0'

  newWishText = ''

  title = 'wishlist'

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter])
  }

  // methods
  addNewWish() {
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ''
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete
    // ~~~ console.log(item)
  }
}
