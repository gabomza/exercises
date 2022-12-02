import { isEqual } from 'lodash';
import { generateHash } from './hash/hash';
import { Animal, genericSpeak, Lion, Tiger } from './zoo/zoo';

// Exercise #1

const sampleUrlFormat = '/:version/api/:collection/:id';
const sampleUrlInstance = '/6/api/listings/3?sort=desc&limit=10';

console.log('------ Exercise #1 - Hash generator -------');
console.log('Sample URL format', sampleUrlFormat);
console.log('Sample URL instance', sampleUrlInstance);

const sampleHash = {
  version: '6',
  collection: 'listings',
  id: '3',
  sort: 'desc',
  limit: '10',
};

console.log('Sample hash', sampleHash);

const hash = generateHash(sampleUrlFormat, sampleUrlInstance);

console.log('Generated hash', hash);

console.log('Are they equal? ', isEqual(hash, sampleHash));

// ---------------------------------------------------------- //

console.log('');
console.log(
  '---------------------------------------------------------------------'
);
console.log('');

console.log('------ Exercise #1 - Zoo ------');

const lionAsClass = new Lion();
console.log('Lion speaking:', lionAsClass.speak(`I'm a lion`));

const tiger = new Tiger();
console.log('Tiger speaking:', tiger.speak(`Lions suck`));

//

const lion: Animal = {
  sound: 'roar',
  speak: genericSpeak,
};

console.log(
  'Lion speaking in a different way:',
  lion.speak('This is test message', lion.sound)
);
