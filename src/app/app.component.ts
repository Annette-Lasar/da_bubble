import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EmojiService } from './shared/services/emoji.service';
import { Observable } from 'rxjs';
import { Emoji, EmojiCategory } from './shared/interfaces/emoji.interface';

@Component({
  selector: 'bubble-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'da_bubble';

  // emoji-overlay.component.ts

  constructor(private emojiService: EmojiService) {}

  categories$: Observable<EmojiCategory[]> = this.emojiService.getCategories();

  allSmileys$ = this.emojiService.getEmojisByCategory('smileys_emotions');
  smileysCount$ = this.allSmileys$.pipe(map((smileys) => smileys.length));

  allFlags$ = this.emojiService.getEmojisByCategory('flags');
  flagsCount$ = this.allFlags$.pipe(map((flags) => flags.length));

  allSmileys: Observable<Emoji[]> =
    this.emojiService.getEmojisByCategory('smileys_emotions');

  allFlags: Observable<Emoji[]> =
    this.emojiService.getEmojisByCategory('flags');
}
