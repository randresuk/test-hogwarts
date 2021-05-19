import { toastedTime } from '../common/constants';

export const toast = {
  error(ctx, message, icon, duration = toastedTime.TIME_SHORT) {
    icon = icon || 'cancel';
    ctx.$toasted.show(message, {
      type: 'error',
      position: 'bottom-right',
      icon,
      duration,
    });
  },
  success(ctx, message, icon, duration = toastedTime.TIME_SHORT) {
    icon = icon || 'check_circle';
    ctx.$toasted.show(message, {
      type: 'success',
      position: 'bottom-right',
      icon,
      duration,
    });
  },
};
