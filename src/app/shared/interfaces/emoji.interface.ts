// emoji.types.ts
export interface Emoji {
  id: string;
  name: string;
  label: string;
  file: string;
  has_skin_tone: boolean;
}

export interface EmojiCategory {
  category: string;
  ux_title: string;
  emojis: Emoji[];
}
