(function(angular) {
    'use strict'
    angular.module('app').component('regionLabel', {
        template: `<div id="{{$ctrl.id}}" class="region-name">{{$ctrl.name}}</div>`,
        bindings: {
            id: '@regionId',
            name: '@regionName'
        },
        controller: ['$element', function RegionLabelController($element) {
            this.$postLink = () => {
                let div = $element.find('div')
                div.attr('draggable', 'true')
                div.on('dragstart', e => {
                    e.dataTransfer.setData('text/plain', e.target.id)
                })
            }
        }]
    })
})(angular)
