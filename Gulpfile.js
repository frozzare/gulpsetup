
/**
 * Require modules.
 */

var requireDir = require('require-dir');

/**
 * Require all tasks in ./config/tasks.
 */

requireDir('./config/gulp/tasks', {
  recurse: true
});
