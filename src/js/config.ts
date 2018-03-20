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
}
