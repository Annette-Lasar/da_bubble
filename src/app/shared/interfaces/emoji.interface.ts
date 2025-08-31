export interface EmojiCategory {
  category: string;
  ux_title: MultiLang;
  emojis: Emoji[];
}

export interface MultiLang {
  de: string;
  en: string;
}

export interface Emoji {
  id: string;
  name: MultiLang;
  label: MultiLang;
  files: EmojiFiles;
  has_skin_tone: boolean;
}

export interface EmojiFiles {
  default: string;
  light?: string;
  medium_light?: string;
  medium?: string;
  medium_dark?: string;
  dark?: string;
}
