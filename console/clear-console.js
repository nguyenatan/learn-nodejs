module.exports = {
  reset: function() {
    return process.stdout.write('\033c');
  }
}

// or console.log('\x1Bc');
// or simply press Ctrl + L.
