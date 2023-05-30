export interface ApiResponse {
  success: boolean;
  result: ApiCard[];
}

export enum CardType {
  ALL = 'ALL',
  TASKS = 'TASKS',
  CORSES = 'CORSES',
}

export interface ApiCard {
  card_id: number;
  reviewer_id: number;
  name: string;
  reward: number;
  photo_required: boolean;
  video_required: boolean;
  schedule: boolean[] | null;
  period_start: string | null;
  period_stop: string | null;
  type: CardType;
  description?: string | null;
  every_month?: number[] | null;
}
