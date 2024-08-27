import { Component } from '@angular/core'
import { WishItem } from 'shared/models/wishItem'

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

  listFilter: String = '0'

  newWishText = ''

  title = 'wishlist'

  get visibleItems(): WishItem[] {
    let value = this.listFilter
    if (value === '0') {
      return this.items
    } else if (value === '1') {
      return this.items.filter((item) => !item.isComplete)
    } else {
      return this.items.filter((item) => item.isComplete)
    }
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
