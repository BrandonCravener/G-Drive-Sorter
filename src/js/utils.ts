/**
 * Gets elements by the selector and passes them to the calling function.
 * 
 * @export
 * @param {string} selector 
 * @param {Function} callingFunction 
 */
export function applyToElements (selector: string, callingFunction: Function) {
  let items = document.querySelectorAll(selector)
  for (var i = 0; i < items.length; i++) {
    callingFunction(items[i])
  }
}

/**
 * Sets an element or elements display to none
 * 
 * @export
 * @param {string} selector
 */
export function hide (selector: string) {
  applyToElements(selector, (element: HTMLElement) => {
    element.style.display = 'none'
  })
}
/**
 * Sets an element or elements display to block
 * 
 * @export
 * @param {string} selector
 */
export function show (selector: string) {
  applyToElements(selector, (element: HTMLElement) => {
    element.style.display = 'block'
  })
}

/**
 * Adds a click event listener to the passed element
 * 
 * @export
 * @param {HTMLElement} element 
 * @param {EventListenerOrEventListenerObject} callback 
 */
export function click (element: HTMLElement, callback: EventListenerOrEventListenerObject) {
  element.addEventListener('click', callback)
}

/**
 * Loads all elements with the class lazyLoad the calls the callback
 * 
 * @export
 * @param {Function} callback 
 */
export function lazyLoadCSS(callback: Function) {
  let lazyLoadElementsLoaded = 0
  let lazyLoadElements = document.getElementsByClassName('lazyLoad')
  // Iterate through the preload stylesheets and start to load them
  for (var i = 0; i < lazyLoadElements.length; i++) {
    var elem = lazyLoadElements[i]
    if (elem.getAttribute('rel') === 'preload') {
      elem.setAttribute('rel', 'stylesheet')
      elem.addEventListener('load', function () {
        lazyLoadElementsLoaded += 1
        // Check if all of the stylesheets are loaded
        if (lazyLoadElementsLoaded === lazyLoadElements.length) {
          callback()
        }
      })
    }
  }
}