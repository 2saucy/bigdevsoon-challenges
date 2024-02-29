export interface MusicEvent {
  id: number;
  title: string;
  description: string;
  date: string;
}

export type MusicEvents = MusicEvent[];

export interface Setting {
  name: string;
  checked: boolean;
}

export type Settings = Setting[];

export interface Notification {
  id: number;
  profile_picture: string;
  name: string;
  type: string;
  date: string;
  group?: Channel;
  comment?: string;
  channel?: Channel;
  attachments?: Attachment[];
}

export type Notifications = Notification[];

export interface Attachment {
  type: string;
  img: string;
  file_name?: string;
  size?: string;
  title?: string;
  description?: string;
  site?: string;
}

export interface Channel {
  name: string;
  url: string;
}
