wireup.js
=========

A framework to isolate the DOM and write pure Javascript.

Just messing around. I don't know if I'll use this, but it's interesting. The idea is that you can write pure javascript without worrying about the DOM/view by wiring controller objects to the DOM.

<script>
    function MyController()
    {
      var self = this;
      self.searchField = new WoofTextField();
      self.searchField.onKeyUp = function()
      {
        console.log(self.searchField.value());
      }
    }

    var controller = new MyController();
    var wireup = new WireUp(controller);
    wireup.addTextField(document.getElementById('searchField'), controller.searchField);
  </script>
