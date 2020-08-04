import getNations from './suites/getNations.test';
import onApiDataGathered from './suites/onApiDataGathered.test';
import onDataGathered from './suites/onDataGathered.test';
import start from './suites/start.test';

describe('Gatherer', function() {

  return;
  getNations.bind(this)();
  onApiDataGathered.bind(this)();
  onDataGathered.bind(this)();
  start.bind(this)();
});