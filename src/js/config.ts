export class ConfigHandler {
  static generateListItems(data: Object) {
    const listItemActions = '<i class="material-icons">mode_edit</i>'
    let listItemsHTML = ''
    for (let config in data) {
      listItemsHTML += `<li class="collection-item"><div>${data[config]['name']}<a href="#!" class="secondary-content">${listItemActions}</a></div></li>`
    }
    return listItemsHTML
  }
}
