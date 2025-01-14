'use strict'

module.exports = function log (data) {
  let log

  try {
    log = typeof data === 'string' ? JSON.parse(data) : data

    if (log.time) {
      log.time = new Date(log.time)
    }
  } catch (e) {
    log = {
      msg: data
    }
  }

  return log
}
