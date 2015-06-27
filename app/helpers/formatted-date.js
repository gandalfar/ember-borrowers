import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export function formattedDate(params, hash) {
  return formatDate(hash.date, hash.format);
}

export default Ember.HTMLBars.makeBoundHelper(formattedDate);
