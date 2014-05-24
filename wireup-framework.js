function WoofTextField() {
  var self = this;
  self.onKeyUp = function () { };
  self.value = function () { };
}

function WireUp(controller) {
  var self = this;
  self.addTextField = function (element, controllerElement) {

    if (controllerElement === undefined || controllerElement.constructor.name !== 'WoofTextField')
      throw 'Configuration error: the supplied controller property must be a WoofTextField instance.';

    element.onkeyup = controllerElement.onKeyUp;
    controllerElement.value = function (value) {
      if (value === undefined)
        return element.value;
      element.value = value;
    }
  }
}