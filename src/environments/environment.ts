// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'my-portfolio-5caed',
    appId: '1:767105787616:web:5624224a7ecdd13f155285',
    storageBucket: 'my-portfolio-5caed.appspot.com',
    apiKey: 'AIzaSyCQTz_j4vmc2yx_nhUHm7286CRgf5kzcZE',
    authDomain: 'my-portfolio-5caed.firebaseapp.com',
    messagingSenderId: '767105787616',
    measurementId: 'G-LGLSE1SYC7',
  },
  production: false,

  skills: '/src/assets/json/content.skill.json'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
