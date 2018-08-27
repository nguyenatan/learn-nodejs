console.reset = function () {
  return process.stdout.write('\033c');
}

// or console.log('\x1Bc');
// or press simply Ctrl + L.
