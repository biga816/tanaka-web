import { animate, group, query, stagger, state, style , transition,  trigger } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    // Initial state of new route
    query(':enter',
      style({
        position: 'fixed',
        opacity: 0
      }),
      { optional: true }),
    // move page off screen right on leave
    query(':leave',
      animate('400ms ease-in-out',
        style({
          position: 'fixed',
          opacity: 0,
        })
      ),
      { optional: true }),
    // move page in screen from left to right
    query(':enter',
      animate('400ms ease-in-out',
        style({
          opacity: 1
        })
      ),
      { optional: true })
  ])
]);
