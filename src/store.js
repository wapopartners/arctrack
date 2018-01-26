import getTarget from './util/getTarget';


export default class Store {
  set(opts) {
    const val = opts.location 
      ? getTarget(opts.location.split('.'))
      : opts.value
      ? opts.value
      : null;
    
    if (val) {
      this[name] = val;
    } else {
      console.error(
        'Must include \'location\' [Str] or \'value\' [Obj] to use Store#set'
      );
    }
  }
}