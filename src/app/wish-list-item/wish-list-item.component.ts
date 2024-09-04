import { Component, Input, Output, EventEmitter } from '@angular/core'
import events from './../../shared/services/EventService'

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wishText!: string
  @Input() fullfilled!: boolean
  @Output() fullfilledChange = new EventEmitter<boolean>()

  get cssClasses() {
    return {
      'strikeout text-muted': this.fullfilled,
    }
  }

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled
    this.fullfilledChange.emit(this.fullfilled)
  }

  removeWish() {
    events.emit('removeWish', this.wishText)
  }
}
