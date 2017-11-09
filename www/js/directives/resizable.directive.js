(function () {
    'use strict';

    angular
        .module('jsReportingApp')
        .directive('widgetResizable', widgetResizable);

    widgetResizable.$inject = [];

    function widgetResizable() {

        // var template = `
        //     <select id='pre-selected-options' multiple='multiple'>
        //         <option value='elem_1' selected>elem 1</option>
        //         <option value='elem_2'>elem 2</option>
        //         <option value='elem_3'>elem 3</option>
        //         <option value='elem_4' selected>elem 4</option>
        //     </select>
        // `;

        var directive = {
            link: LinkResizable,
            // template: template
        };

        return directive;

        function LinkResizable(scope, element, attrs) {
            // console.log("TESTE MULti", element);
            element.resizable();
        }
    }

})();