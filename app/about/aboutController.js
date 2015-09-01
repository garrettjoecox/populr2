
angular.module('populr2')
  .controller('aboutController', aboutController);

function aboutController() {
  var self = this;

  self.team = [
    {
      name: 'Danny Delott',
      role: 'Back-End and Data Engineer',
      bg: 'http://i.imgur.com/syudJMa.png',
      github: 'https://github.com/dannydelott',
      linkedin: 'https://www.linkedin.com/in/dannydelott',
      angel: 'https://angel.co/danny-delott',
    },
    {
      name: 'Garrett Cox',
      role: 'Lead Back-End Engineer',
      bg: 'http://i.imgur.com/hH0upNX.jpg',
      github: 'https://github.com/garrettjoecox',
      linkedin: 'https://www.linkedin.com/in/garrettjoecox',
      angel: 'https://angel.co/garrettjoecox',
    },
    {
      name: 'Mark Marcantano',
      role: 'Front-End Dev. and Architect',
      bg: 'http://i.imgur.com/IuijDCu.png',
      github: 'https://github.com/mmarcant',
      linkedin: 'https://www.linkedin.com/in/markthomasm',
      angel: 'https://angel.co/mark-thomas-marcantano',
    },
    {
      name: 'William Wung',
      role: 'Front-End Dev. and Designer',
      bg: 'http://i.imgur.com/jGIGWOA.jpg',
      github: 'https://github.com/wcwung',
      linkedin: 'https://www.linkedin.com/in/williamwung',
      angel: 'https://angel.co/williamcwung',
    }
  ];
}
