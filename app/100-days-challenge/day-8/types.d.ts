export interface Data {
  events: MusicEvents;
}

export interface MusicEvent {
  id: number;
  title: string;
  description: string;
  date: string;
}

export type MusicEvents = MusicEvent[];
