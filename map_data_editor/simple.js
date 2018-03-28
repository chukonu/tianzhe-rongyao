;(function(angular) {
    'use strict'
    angular.module('app', [])
})(angular)

;(function(angular) {
    'use strict'

    class Main {
        constructor() {
            this.maps = [
                { url: 'images/R1S1.PNG', width: '578px', height: '674px', description:'第一局第一个' },
                { url: 'images/R1S2.PNG', width: '610px', height: '710px', description:'第一局第二个' },
                { url: 'images/R1S3.PNG', width: '711px', height: '701px', description:'第一局第三个' },
                { url: 'images/R5S1.PNG', width: '768px', height: '726px', description:'第五局第一个' },
                { url: 'images/R5S2.PNG', width: '669px', height: '834px', description:'第五局第二个' },
                { url: 'images/R5S3.PNG', width: '952px', height: '639px', description:'第五局第三个' },
                { url: 'images/R6S1.PNG', width: '754px', height: '755px', description:'第六局第一个' },
                { url: 'images/R6S2.PNG', width: '868px', height: '628px', description:'第六局第二个' },
                { url: 'images/R6S3.PNG', width: '890px', height: '725px', description:'第六局第三个' }
            ]
            this.mapId = 0
        }
        map(id) {
            return this.maps[id]
        }
    }

    angular.module('app').controller('Main', Main)
})(angular)

;(function(angular) {
    'use strict'
    const template = `
    <div class="workbench">
        <div class="clippath-panel">
            <div>
                <button ng-click="$ctrl.reset()" ng-disabled="!$ctrl.clipPath()">重置</button>
                <button ng-click="$ctrl.copyToClipboard()" ng-disabled="!$ctrl.clipPath()">复制至剪贴板</button>
                <span style="font-size:12px;">点：{{$ctrl.points.length}}个</span>
            </div>
            <textarea class="clippath-contents">{{$ctrl.clipPath()}}</textarea>
        </div>
        <div class="map" ng-style="$ctrl.style()" ng-click="$ctrl.addPoint($event)">
            <div class="preview-layer" ng-style="{'clip-path': $ctrl.clipPath()}"></div>
            <div class="prompt" ng-show="!$ctrl.clipPath()">
                <div>点这里描形状，方向要固定</div>
            </div>
        </div>
    </div>`

    class MapCanvas {
        constructor($element, $document) {
            this._element = $element[0]
            this._document = $document[0]
            this.points = []
        }
        addPoint(clickEvent) {
            let container = this._element.querySelector('.map')
            let offsetX = clickEvent.pageX - container.offsetLeft
            let offsetY = clickEvent.pageY - container.offsetTop
            let pointX = (100 * offsetX / container.clientWidth).toFixed(2)
            let pointY = (100 * offsetY / container.clientHeight).toFixed(2)
            this.points.push({ x: pointX, y: pointY })
        }
        clipPath() {
            let percentagePoints = this.points.map(p => `${p.x}% ${p.y}%`)
            if (percentagePoints.length === 0)
                return ''
            return `polygon(${percentagePoints.join(',')})`
        }
        copyToClipboard() {
            let contents = this._element.querySelector('.clippath-contents')
            contents.select()
            this._document.execCommand("Copy");
        }
        reset() {
            this.points = []
        }
        style() {
            return {
                'background-image': `url('${this.map.url}')`,
                'width': this.map.width,
                'height': this.map.height,
                'position': 'relative'
            }
        }
    }

    angular.module('app').component('mapcanvas', {
        template: template,
        controller: MapCanvas,
        bindings: {
            map: '<'
        }
    })
})(angular)