;(function(angular) {
    'use strict'
    const template = `
    <div class="geo" ng-style="$ctrl.style()">
        <geo ng-repeat="g in $ctrl.children"
            geo-id="{{g.id}}"
            geo-name="{{g.name}}"
            path="{{g.path}}"
            children="g.children"
            on-matched="$ctrl.onChildMatched(id)">
        </geo>
    </div>`

    class Geo {
        constructor($element, $scope, $document) {
            this.element = $element[0]
            this.scope = $scope
            this.document = $document[0]

            this.isMatched = false
        }

        $postLink() {
            let droppableLayer = angular.element(this.element.querySelector('div'))

            droppableLayer.on('dragenter', ev => { ev.preventDefault() })

            droppableLayer.on('dragover', ev => {
                ev.preventDefault()
                ev.dataTransfer.dropEffect = 'move'
            })
            
            droppableLayer.on('drop', ev => {
                if (this.isMatched)
                    return
                ev.preventDefault()
                let id = ev.dataTransfer.getData('text/plain')
                if (id === this.id) {
                    this.scope.$applyAsync(() => {
                        this.isMatched = true
                    })
                    let originalEl = this.document.getElementById(`${id}`)
                    originalEl.setAttribute('draggable', 'false')
                    originalEl.classList.add('matched')
                    this.onMatched({ id: id })
                }
            })
        }

        style() {
            let style = {
                'clip-path': this.clipPath,
            }
            return style
        }

        onChildMatched(id) {
            this.onMatched({ id: id })
        }
    }

    angular.module('app').component('geo', {
        template: template,
        controller: ['$element', '$scope', '$document', Geo],
        bindings: {
            id: '@geoId',
            children: '<',
            clipPath: '@path',
            name: '@geoName',
            onMatched: '&'
        }
    })
})(angular)
