'use strict';

function reloadOnError() {
  if (reloadOnError.override == null) {
    document.location.reload();
  } else {
    reloadOnError.override();
  }
}

module.exports = reloadOnError;
