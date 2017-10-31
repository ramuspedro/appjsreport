(function () {
    'use strict';

    angular
            .module('app.widgets')
            .directive('widgetMultiSelect', widgetMultiSelect);

    widgetMultiSelect.$inject = [];

    function widgetMultiSelect() {

        var template = `
            <select id='pre-selected-options' multiple='multiple'>
                <option value='elem_1' selected>elem 1</option>
                <option value='elem_2'>elem 2</option>
                <option value='elem_3'>elem 3</option>
                <option value='elem_4' selected>elem 4</option>
            </select>
        `;

        var directive = {
            restrict: 'A',
            link: LinkMultiSelect,
            template: template
        };

        return directive;

        function LinkMultiSelect(scope, element, attrs) {
            $('#pre-selected-options').multiSelect();
            console.log("TESTE MULti")
        }
    }

})();