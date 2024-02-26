export type Notifications = Notification[];

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
