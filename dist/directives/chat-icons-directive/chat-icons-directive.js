(function(){
  'use strict';
  angular.module("angularApp").directive("chatIcons",chatIcons);

  function chatIcons() {
    return {
      restrict: 'A',
      link: function(scope,element,attrs) {
        console.log("directive");

        var originalElement = element[0];

        var emoticons = [
          {value: ":)", name:"smile"}
        ]

        // handle click on element
        function onClick(e){
          e.preventDefault();
          attrs.$set('contenteditable', 'true');
          return originalElement.focus();
        }

        function onBlur(e) {
          attrs.$set('contenteditable', 'false');
        }

        function onKeyUp(e) {
          console.log("keyup");
          var html = element.html().replace(/&nbsp;/g, ' ');
          angular.forEach(emoticons, function(emoticon, key) {
            html = html.split(emoticon.value).join("<i class='" + emoticon.name + "'>" + emoticon.value + "</i>");
            element.html(html);
          });
          scope[attrs.ngBind].value = String(html).replace(/<[^>]+>/gm, '');
        }


        attrs.$set('contenteditable', 'true');

        element.bind("click", onClick);
        element.bind("blur", onBlur);
        element.bind("keyup", onKeyUp);

        scope.$on('$destroy', function () {
          element.unbind(onClick);
          element.unbind(onBlur);
          element.unbind(onKeyUp);
        })
      }
    };
  }
})();