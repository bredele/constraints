

/**
 * Expose 'constraints'
 *
 * @api public
 */

module.exports = function(options) {

  var that = {}

  that.audio = function() {

  }

  that.video = function() {

  }

  that.servers = function() {

  }

  that.channel =  function() {

  }

  that.media = function() {
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
