import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
})
export class Modal {
  call() {
    window['TrelloPowerUp'].iframe().set('card', 'shared', 'updatedAt', new Date());
  }
}
