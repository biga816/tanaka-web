import { animate, group, query, stagger, state, style , transition,  trigger, animateChild } from '@angular/animations';

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
      animate('200ms ease-in-out',
        style({
          position: 'fixed',
          opacity: 0,
        })
      ),
      { optional: true }),
    // move page in screen from left to right
    query(':enter',
      animate('200ms ease-in-out',
        style({
          opacity: 1
        })
      ),
      { optional: true })
  ])
]);

export const listAnimation = 
  trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      // Initial state of new route
      query(':enter',
        style({ opacity: 0 }), { optional: true }),
      query(':leave', [
        stagger(100, [
          animate('0.3s ease-out', style({ opacity: 0, transform: 'translateY(30px)'}))
        ])
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        stagger(100, [
          animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
        ])
      ], { optional: true })
    ])
  ])
;
