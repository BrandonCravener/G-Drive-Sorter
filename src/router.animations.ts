import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from '@angular/animations';
import { Optional } from '@angular/core';

/**
* Animation for switching between routes
*/
export const routerAnimation = trigger('routerTransition', [
  transition("* <=> *", [
    group([
      // Route leaving
      query(':leave', [
        // Inital styles
        style({
          transform: 'translateX(0%)',
          width:'100%',
          position: 'fixed'        
        }),
        // Animated style
        animate('1s ease-in-out', style({
          transform: 'translateX(100%)'
        }))
      ],
      { optional: true }),
      // Router entering
      query(':enter', [
        // Inital styles
        style({
          transform: 'translateX(-100%)',
          position: 'fixed'        
        }),
        // Animated style
        animate('1s ease-in-out', style({
          transform: 'translateX(0%)'
        }))
      ],
      { optional: true }),
      
    ])
  ]),
  transition("* => appConfig", [
    query('button', [
      // Inital styles
      style({
        opacity: 0
      }),
      animate('0.5s ease-in', style({
        opacity: 1
      }))
    ])
  ])
])

export const fabAnimation = trigger('fabAnimation', [

])