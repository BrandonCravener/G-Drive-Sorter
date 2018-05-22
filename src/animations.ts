import {
  animate,
  animateChild,
  animation,
  group,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Optional } from '@angular/core';

const fadeOutIn = [
  query(
    ':enter, :leave',
    style({
      position: 'fixed',
      width: '100%'
    }),
    {
      optional: true
    }
  ),
  query(
    ':enter',
    style({
      opacity: 0
    })
  ),
  query(
    ':leave',
    [
      style({
        opacity: 1
      }),
      animate(
        '0.5s ease-out',
        style({
          opacity: 0
        })
      )
    ],
    {
      optional: true
    }
  ),
  query(
    ':enter',
    animate(
      '0.5s 0.5s ease-in',
      style({
        opacity: 1
      })
    ),
    {
      optional: true
    }
  )
];

const slideLeft = [
  query(
    ':enter, :leave',
    style({
      position: 'fixed',
      width: '100%'
    }),
    {
      optional: false
    }
  ),
  group([
    query(
      ':enter',
      [
        style({
          transform: 'translateX(100%)'
        }),
        animate(
          '0.5s',
          style({
            transform: 'translateX(0%)'
          })
        )
      ],
      {
        optional: false
      }
    ),
    query(
      ':leave',
      [
        style({
          transform: 'translateX(0%)'
        }),
        animate(
          '0.5s',
          style({
            transform: 'translateX(-100%)'
          })
        )
      ],
      {
        optional: false
      }
    )
  ])
];

const slideRight = [
  query(
    ':enter, :leave',
    style({
      position: 'fixed',
      width: '100%'
    }),
    {
      optional: false
    }
  ),
  group([
    query(
      ':enter',
      [
        style({
          transform: 'translateX(-100%)'
        }),
        animate(
          '0.5s',
          style({
            transform: 'translateX(0%)'
          })
        )
      ],
      {
        optional: false
      }
    ),
    query(
      ':leave',
      [
        style({
          transform: 'translateX(0%)'
        }),
        animate(
          '0.5s',
          style({
            transform: 'translateX(100%)'
          })
        )
      ],
      {
        optional: false
      }
    )
  ])
];

const slideDown = [
  query(
    ':enter, :leave',
    style({
      position: 'fixed',
      width: '100%',
      height: '100%'
    }),
    {
      optional: false
    }
  ),
  group([
    query(
      ':enter',
      [
        style({
          transform: 'translateY(100%)',
          opacity: 0
        }),
        animate(
          '0.5s',
          style({
            transform: 'translateY(0%)',
            opacity: 1
          })
        )
      ],
      {
        optional: false
      }
    ),
    query(
      ':leave',
      [
        style({
          transform: 'translateY(0%)',
          opacity: 1
        }),
        animate(
          '0.5s',
          style({
            transform: 'translateY(100%)',
            opacity: 0
          })
        )
      ],
      {
        optional: false
      }
    )
  ])
];

/**
 * Animation for switching between routes
 */
export const routerAnimation = trigger('routerTransition', [
  // Landing transitions
  transition('* => landing', fadeOutIn),
  transition('landing => appHome', fadeOutIn),
  // Tabs transitions
  transition('appHome => appConfig', slideLeft),
  transition('appConfig => appHome', slideRight),
  transition('appHome => appSettings', slideLeft),
  transition('appSettings => appHome', slideRight),
  transition('appConfig => appSettings', slideLeft),
  transition('appSettings => appConfig', slideRight),
  // Small screen pages
  transition('appConfig => appConfigEdit', slideDown),
  transition('appConfigEdit => appConfig', slideDown),
  transition('appConfig => appConfigCreate', slideDown),
  transition('appConfigCreate => appConfig', slideDown),
  transition('appConfig => appConfigPresets', slideDown),
  transition('appConfigPresets => appConfig', slideDown),
  transition('appSettings => appConfigEdit', slideDown),
  transition('appConfigEdit => appSettings', slideDown),
  transition('appSettings => appConfigCreate', slideDown),
  transition('appConfigCreate => appSettings', slideDown),
  transition('appSettings => appConfigPresets', slideDown),
  transition('appConfigPresets => appSettings', slideDown),
  transition('appHome => appConfigEdit', slideDown),
  transition('appConfigEdit => appHome', slideDown),
  transition('appHome => appConfigCreate', slideDown),
  transition('appConfigCreate => appHome', slideDown),
  transition('appHome => appConfigPresets', slideDown),
  transition('appConfigPresets => appHome', slideDown)
]);

export const fabAnimation = trigger('createConfigFABState', [
  state(
    'inactive',
    style({
      transform: 'scale(0)'
    })
  ),
  state(
    'active',
    style({
      transform: 'scale(1)'
    })
  ),
  transition('inactive => active', animate('0.1s')),
  transition('active => inactive', animate('0.1s'))
]);
