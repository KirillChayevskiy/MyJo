import {ApiCard} from '../src/types/apis';

const addCard = (
  card: Omit<ApiCard, 'card_id' | 'photo_required' | 'schedule'>,
) => {
  // some logic
};

export default addCard;
