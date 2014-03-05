'use strict';

var MAX_SELECTORS_DEFAULT = 4095;

/**
 * Module export
 */

module.exports = function selectorLimit(ast) {
  var count = 0;

  walk(ast, function (rule, node) {
    if (rule.selectors) {
      count = count + rule.selectors.length;
    }
  });

  if (count > MAX_SELECTORS_DEFAULT) {
    throw new Error('Maximum number of selectors exceeded. The maximum is ' +
                    MAX_SELECTORS_DEFAULT + ' selectors. The CSS contains ' +
                    count + ' selectors');
  }
};

/**
 * Call a given function on every rule in the tree
 *
 * @param {Object} node
 * @param {Function} fn
 */

function walk(node, fn) {
  node.rules.forEach(function (rule) {
    if (rule.rules) {
      walk(rule, fn);
      return;
    }

    if (rule.type === 'rule') {
      fn(rule, node);
    }
  });
}
