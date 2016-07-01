var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Expose 'constraints'
 *
 * @api public
 */

module.exports = function() {

  /**
   * Constraints.
   */

  var that = {}


  /**
   * WebRTC constraints
   */

  var options = {}

  /**
   * Extend options with
   * arguments.
   */

  for (var i = arguments.length; i--;) {
      var source = arguments[i]
      for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
              options[key] = source[key]
          }
      }
  }

  /**
   * Return audio constraint.
   *
   * @return {Boolean}
   * @api public
   */

  that.audio = function() {
    return options.audio != null && options.audio === true
  }

  that.video = function() {

  }

  that.servers = function() {

  }

  that.channel =  function() {

  }

  /**
   * Return channel constraint.
   *
   * @return {Boolean}
   * @api public
   */

  that.channel = function() {
    return options.channel != null && options.channel === true
  }

  that.peer = function() {

  }

  that.session = function() {

  }

  // will return new constraints object
  that.select = function() {

  }

  return that
}
