import { Component, OnInit } from '@angular/core';
import { CallbackHandler } from 'trellopowerup/lib/hosthandlers';
import { CardButton, CardBackSection, PowerUp, PluginOptions } from 'trellopowerup/lib/powerup';

declare global {
  interface Window {
    TrelloPowerUp: PowerUp;
    locale: string;
  }
}

const CONFIGCAT_ICON = './cat_red.svg';

@Component({
  selector: 'app-bootstrap',
  imports: [],
  templateUrl: './bootstrap.html',
})
export class Bootstrap implements OnInit {
  ngOnInit(): void {
    window['TrelloPowerUp'].initialize({
      'card-back-section': this.getCardBackSection,
      'card-buttons': this.getCardButtons,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private readonly getCardButtons = (_t: CallbackHandler) => {
    return Promise.resolve([
      {
        text: 'Open modal',
        icon: CONFIGCAT_ICON,
        callback: (t: CallbackHandler) => {
          return t.modal({
            title: 'Modal',
            url: t.signUrl('./modal'),
            height: 380,
          });
        },
      } as CardButton,
    ]);
  };

  private readonly getCardBackSection = (t: CallbackHandler) => {
    return Promise.resolve({
      title: 'ConfigCat',
      icon: CONFIGCAT_ICON,
      content: {
        type: 'iframe',
        url: t.signUrl('./content'),
      },
    } as CardBackSection);
  };
}
