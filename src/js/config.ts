export class ConfigHandler {
  static generateListItems(data: Object) {
    const listItemActions = '<i class="material-icons">mode_edit</i>'
    let listItemsHTML = ''
    for (let config in data) {
      if (document.getElementById(config) === null) {
        listItemsHTML += `<li class="collection-item" id="${config}"><div>${data[config]['name']}<a href="#!" class="secondary-content">${listItemActions}</a></div></li>`
      }
    }
    return listItemsHTML
  }

  static generatePageNumbers(numberOfPages: number) {
    let pageNumbersHTML = ''
    let classes
    for (let i = 1; i < (numberOfPages + 1); i++) {
      if (i === 1) {
        classes = 'active waves-effect'
      } else {
        classes = 'waves-effect'
      }
      pageNumbersHTML += `<li class="${classes}"><a class="config-page" href="#!">${i}</a></li>`
    }
    return pageNumbersHTML
  }
}