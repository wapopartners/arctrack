const store = {
  set(opts) {
    this[opts.name] = opts.value;
  },
};

export default store;
