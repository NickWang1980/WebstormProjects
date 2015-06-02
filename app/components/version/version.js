'use strict';

angular.module('webStorm.version', [
  'webStorm.version.interpolate-filter',
  'webStorm.version.version-directive'
])

.value('version', '0.1');
