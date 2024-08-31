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

  filter: any = () => {}

  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter)
  }
}
