import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmojiService } from '../../../services/emoji.service';
import { EmojiCategory } from '../../../interfaces/emoji.interface';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'bubble-emoji-list',
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './emoji-list.component.html',
  styleUrl: './emoji-list.component.scss',
})
export class EmojiListComponent {
  value = 'Löschen';
  constructor(private emojiService: EmojiService) {}

  categories$: Observable<EmojiCategory[]> = this.emojiService.getCategories();

  scrollTo(categoryId: string) {
    const el = document.getElementById(categoryId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
