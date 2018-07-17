import { Config } from 'angular-onboarding';
export const aoConfig: Config = {
  steps: [
    {
      id: 0,
      text: 'This is your Home page where basic controls and information are provided.',
      path: '/app/home'
    },
    {
      id: 1,
      text: 'This is the Configuration page where you can view, edit, create, and delete configs.',
      path: '/app/config'
    },
    {
      id: 2,
      text: 'This is the Settings page where you can manage your data.',
      path: '/app/settings'
    }
  ]
};
