import {ApiCard} from '../src/types/apis';
import axios from 'axios';

export const fetchCards = (): Promise<ApiCard[]> => {
  return new Promise((resolve, reject) => {
    const apiUrl = 'https://example.com/api/getCards';

    axios
      .get(apiUrl)
      .then(response => {
        const {data} = response;
        if (data.success) {
          const cards: ApiCard[] = data.result.map((card: ApiCard) => {
            const {
              card_id,
              reviewer_id,
              name,
              reward,
              photo_required,
              video_required,
              schedule = null,
              period_start = null,
              period_stop = null,
              type,
              description = null,
              every_month = null,
            } = card;
            return {
              card_id,
              reviewer_id,
              name,
              reward,
              photo_required,
              video_required,
              schedule,
              period_start,
              period_stop,
              type,
              description,
              every_month,
            };
          });

          resolve(cards);
        } else {
          reject(new Error('Error receiving cards'));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
