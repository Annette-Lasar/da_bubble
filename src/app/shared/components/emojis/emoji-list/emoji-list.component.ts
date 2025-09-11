import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EmojiService } from '../../../services/emoji.service';
import { Emoji, EmojiCategory } from '../../../interfaces/emoji.interface';

@Component({
  selector: 'bubble-emoji-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emoji-list.component.html',
  styleUrl: './emoji-list.component.scss',
})
export class EmojiListComponent {
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
