import {  trigger, state, style, animate, transition, query} from '@angular/animations';

/**
 * Animation for switching between routes
 */
export const routerAnimation = trigger('routerAnimation', [
  transition('* <=> *', [
    query(':enter',
      style({
        position: 'fixed',
        opacity: 1
      }),
      {optional: true}),

    query(':leave',
      animate('500ms ease',
        style({
          opacity: 0
        })
      ),
    {optional: true}),

    query(':enter',
      animate('500ms ease',
        style({
          position: 'fixed',
          opacity: 1
        })
      ),
    {optional: true}),
  ])
]);
