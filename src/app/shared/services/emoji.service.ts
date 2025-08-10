import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Emoji, EmojiCategory } from '../interfaces/emoji.interface';

@Injectable({ providedIn: 'root' })
export class EmojiService {
  private http = inject(HttpClient);

  private categories$: Observable<EmojiCategory[]> = this.http
    .get<EmojiCategory[]>('assets/data/emojis.json')
    .pipe(shareReplay(1));

  getCategories(): Observable<EmojiCategory[]> {
    return this.categories$;
  }

  getAllEmojisFlattened(): Observable<Emoji[]> {
    return this.categories$.pipe(
      map(cats => cats.flatMap(c => c.emojis))
    );
  }

  getEmojisByCategory(category: string): Observable<Emoji[]> {
    return this.categories$.pipe(
      map(cats => cats.find(c => c.category === category)?.emojis ?? [])
    );
  }

  /** Optionale Hilfe für globale Hautfarbe (Variante A) */
  /* resolveFile(emoji: Emoji, skinToneSuffix?: string): string {
    if (!skinToneSuffix || !emoji.has_skin_tone) return emoji.file;
    // erwartet Dateinamen wie 1f44d.svg  ->  1f44d-1f3fe.svg
    const dot = emoji.file.lastIndexOf('.');
    if (dot === -1) return emoji.file; // falls mal kein Suffix möglich
    return `${emoji.file.slice(0, dot)}${skinToneSuffix}${emoji.file.slice(dot)}`;
  } */
}
