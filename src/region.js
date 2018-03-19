(function (angular) {
    'use strict'
    angular.module('app').component('region', {
        template: `<div class="region" data-id="{{::$ctrl.id}}" ng-style="$ctrl.style()"></div>`,
        bindings: {
            id: '<regionId',
            mapAnnotatedUrl: '<',
            mapUrl: '<',
            onMatched: '&',
            path: '<'
        },
        controller: ['$document', '$element', '$scope', function RegionController($document, $element, $scope) {
            this.$onInit = () => {
                this.isMatched = false
            }
            this.$postLink = () => {
                let div = $element.find('div')

                div.on('dragover', e => {
                    e.preventDefault()
                    // e.stopPropagation()
                    e.dataTransfer.dropEffect = 'move'
                })

                div.on('drop', e => {
                    // e.stopPropagation()
                    let data = e.dataTransfer.getData('text/plain')
                    if (data == this.id) {
                        $scope.$applyAsync(() => this.isMatched = true)
                        let originalEl = $document[0].getElementById(data)
                        originalEl.setAttribute('draggable', 'false')
                        originalEl.classList.add('matched')
                        this.onMatched()
                    }
                })

                div.on('dragenter', e => {
                    e.preventDefault()
                })
            }
            this.style = () => {
                let style = {
                    'background-image': `url("${this.isMatched ? this.mapAnnotatedUrl : this.mapUrl }")`,
                    '-webkit-clip-path': `polygon(${this.path})`,
                    'clip-path': `polygon(${this.path})`
                }
                return style
            }
        }]
    })
})(angular)