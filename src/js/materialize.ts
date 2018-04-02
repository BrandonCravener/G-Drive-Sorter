const Materialize = require('materialize-css')
const { elements } = require('./variables.ts')


export function init(onShow: Function) {
  Materialize.Sidenav.init(elements.sidenav)
  Materialize.Parallax.init(elements.parallax)
  Materialize.Collapsible.init(elements.collapsible)
  Materialize.Dropdown.init(elements.dropdown, {
    coverTrigger: false,
    alignment: 'right'
  })
  Materialize.Datepicker.init(elements.datepicker0, {
    container: 'body'
  })
  Materialize.Timepicker.init(elements.timepicker0, {
    container: 'body'
  })
  Materialize.Datepicker.init(elements.datepicker1, {
    container: 'body'
  })
  Materialize.Timepicker.init(elements.timepicker1, {
    container: 'body'
  })
  Materialize.Modal.init(elements.newConfigModal, {
    onOpenStart: () => {
      elements.configStepper.reset()
    }
  })
  Materialize.Tabs.init(document.getElementById('tabs'), {
    onShow: onShow
  })
}
