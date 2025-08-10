import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { inject } from '@angular/core';
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

  allFlags$ = this.emojiService.getEmojisByCategory('flags'); // Observable<Emoji[]>
  flagsCount$ = this.allFlags$.pipe(map((flags) => flags.length));

  allFlags: Observable<Emoji[]> =
    this.emojiService.getEmojisByCategory('flags');
}
