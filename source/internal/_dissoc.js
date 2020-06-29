import _isInteger from './_isInteger';
import _isArray from './_isArray';
import remove from '../remove';

/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @private
 * @param {String|Number} prop The name of the property to dissociate
 * @param {Object|Array} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 */
export default function _dissoc(prop, obj) {
  if (obj == null) {
    return obj;
  }

  if (_isInteger(prop) && _isArray(obj)) {
    return remove(prop, 1, obj);
  }

  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
}