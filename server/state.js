var states = {
  transform: null,
};

function clear() {
  for (let i in states) {
    if(states[i]) {
      states[i].kill("SIGTERM");
    }
  }
}

module.exports = { states, clear };
