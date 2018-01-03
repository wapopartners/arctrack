/* replacement for $(document).on('click', fn) */
function delegateEvent(eventType, fn, matcher, el = document) {
  el.addEventListener(eventType, (e) => {
    if (!matcher ||
      e.target.matches(matcher) || /* firefox */
      e.currentTarget.activeElement.matches(matcher) || /* chrome */
      (e.target.parentElement && e.target.parentElement.matches(matcher))) { /* safari, check for parentElement fixes bug where document is element clicked on */
      e.stopPropagation()
      fn(e)
    }
  });
};

module.exports = delegateEvent;