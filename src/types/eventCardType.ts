import { EventTypes, EventFormats } from './commonTypes';

export type EventCardType = {
  id: number;
  eventTitle: string;
  seriesTitle: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
  description: string;
  image: string;
  maxPlayers: number;
  currentPlayers: number;
  isFull: boolean;
  isPrivate: boolean;
  isPublished: boolean;
  isCancelled: boolean;
  type: EventTypes;
  format: EventFormats;
  createdBy: string;
}
