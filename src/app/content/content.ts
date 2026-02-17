import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
})
export class Content implements OnInit {
  readonly counter = signal(0);
  ngOnInit(): void {
    window['TrelloPowerUp'].iframe().render(() => {
      this.counter.update((v) => ++v);
    });
  }
}
