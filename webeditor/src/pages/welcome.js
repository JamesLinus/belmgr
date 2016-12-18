import {LogManager} from 'aurelia-framework';
let logger = LogManager.getLogger('welcomepage');
logger.debug('In welcome.js');

export class Welcome{
  builders = [
    {'name': 'Anthony Bargnesi', 'email': 'abargnesi@selventa.com'},
    {'name': 'Nick Bargnesi', 'email': 'nbargnesi@selventa.com'},
    {'name': 'William Hayes', 'email': 'whayes@selventa.com'},
    {'name': 'Kelly McCann', 'email': 'kmccann@selventa.com'}
  ];

  consultants = [
    {'name': 'Anselmo Di Fabio', 'email': 'adifabio@ads-llc.com', 'org': 'ADS Consulting'},
    {'name': 'Grant Shih', 'email': 'gshih@ads-llc.com',  'org': 'ADS Consulting'},
    {'name': 'Patrick Walters', 'email': 'patrickwaltersc21@gmail.com',  'org': 'Durandal Inc'}
  ];


}
