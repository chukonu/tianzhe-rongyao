;(function(angular) {
    'use strict'
    angular.module('editor', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/start')
            $stateProvider
                .state({
                    name: 'main',
                    url: '/start',
                    component: 'main'
                })
                .state({
                    name: 'edit',
                    url: '/edit/{roundId}/{stageId}',
                    component: 'editor',
                    resolve: {
                        map($transition$, MapData) {
                            let params = $transition$.params()
                            return MapData.getGeoElements(params.roundId, params.stageId)
                        },
                        roundId($transition$) { return Promise.resolve($transition$.params().roundId) },
                        stageId($transition$) { return Promise.resolve($transition$.params().stageId) }
                    }
                })
        }])
})(angular)

;(function(angular) {
    'use strict'

    const geoElements = {
        5: {
            1: [],
            2: [],
            3: []
        },
        6: {
            1: [],
            2: [],
            3: []
        }
    }

    class MapData {
        constructor($q) {
            this.$q = $q

            this.geoElements = geoElements
        }
        getAllTasks() {}
        getGeoElements(roundId, stageId) {
            return this.$q((resolve) => {
                resolve(this.geoElements[roundId, stageId])
            })
        }
        setAnnotationLayers(roundId, stageId, elementId, data) {
            localStorage.setItem(`R${roundId}-S${stageId}-E${elementId}-A`, JSON.stringify(data))
        }
        getAnnotationLayers(roundId, stageId, elementId) {
            let data = localStorage.getItem(`R${roundId}-S${stageId}-E${elementId}-A`)
            return JSON.parse(data)
        }
        getDroppableLayers(roundId, stageId, elementId) {
            let data = localStorage.getItem(`R${roundId}-S${stageId}-E${elementId}-D`)
            return JSON.parse(data)
        }
        removeLayer(isDroppable, id, stageId, roundId) {
            let key = `R${roundId}-S${stageId}-E${id}-`
            if (isDroppable) {
                key += 'D'
            } else {
                key += 'A'
            }
            localStorage.removeItem(key)
        }
    }

    angular.module('editor').service('MapData', MapData)
})(angular)

;(function(angular) {
    'use strict'

    const template=`
    <div>
        <tasklist tasks="$ctrl.tasks"></tasklist>
    </div>`

    class Main {
        $onInit() {
            let task1 = {
                round: 5,
                stage: 1,
                name: '埃及'
            }
            this.tasks = [task1]
        }
    }

    angular.module('editor').component('main', {
        template: template,
        controller: Main
    })
})(angular)

;(function(angular) {
    'use strict'

    const template = `
    <div>
        <taskitem ng-repeat="t in $ctrl.tasks"></taskitem>
    </div>`

    class Tasklist {}

    angular.module('editor').component('tasklist', {
        template: template,
        controller: Tasklist
    })
})(angular)

;(function(angular) {
    'use strict'

    const template = `
    <div>
        <div>{{$ctrl.taskname}}</div>
    </div>`

    class Taskitem {}

    angular.module('editor').component('taskitem', {
        template: template,
        bindings: {
            taskname: '@',
            progress: '@'
        },
        controller: Taskitem
    })
})(angular)

;(function(angular) {
    'use strict'
    const template = `
    <div>
        <div><geoelementlist geo-elements="editor.geoElements" on-select="editor.selectGeoElement(id)"></geoelementlist></div>

        <div><layerlist layers-droppable="editor.droppableLayers" layers-annotation="editor.annotationLayers" on-select="editor.selectLayer(isDroppable, id)" on-add="editor.addLayer(isDroppable)"></layerlist></div>
        
        <div><mapcanvas points="editor.points" map-image-url="::editor.mapImageUrl" map-annotated-image-url="::editor.mapAnnotatedImageUrl" on-points-change="editor.updatePoints(newPoints)"></mapcanvas></div>
    </div>`

    class Editor {
        constructor(MapData) {
            this._mapData = MapData
            this.droppableLayers = null
            this.annotationLayers = null
            this.points = null
        }
        addLayer(isDroppable) {
            if (isDroppable) {
                this.droppableLayers.push(this.points = [])
            } else {
                this.annotationLayers.push(this.points = [])
            }
            this._mapData.updateLayers(isDroppable, isDroppable ? this.droppableLayers : this.annotationLayers)
        }
        selectGeoElement(elementId) {
            this.droppableLayers = this._mapData.getDroppableLayers(this.roundId, this.stageId, elementId)
            this.annotationLayers = this._mapData.getAnnotationLayers(this.roundId, this.stageId, elementId)
        }
        selectLayer(isDroppable, id) {
            this.points = isDroppable ? this.droppableLayers[id] : this.annotationLayers[id]
        }
    }

    angular.module('editor').component('editor', {
        template: template,
        controllerAs: 'editor',
        controller: Editor,
        bindings: {
            map: '<',
            roundId: '@',
            stageId: '@'
        }
    })
})(angular)

;(function(angular) {
    'use strict'
    const template = `
    <div>
        <div ng-style="{'background-image': 'url(' + $ctrl.mapImageUrl + ')'}"></div>
        <div ng-if="$ctrl.clipPath" ng-style="{'clip-path': $ctrl.clipPath}"></div>
        <div ng-if="$ctrl.points" ng-click="$ctrl.addPoint($event)">
            <draggablepoint ng-repeat="p in $ctrl.points" x-percentage="p.x" y-percentage="p.y" on-position-change="$ctrl.onPositionChange($index, newXPercentage, newYPercentage)"></draggablepoint>
        </div>
    </div>`

    class MapCanvas {
        $onChanges(changes) {
            if (changes._points) {
                if (!angular.isArray(changes._points.currentValue))
                    return
                if (changes._points.currentValue === this.points)
                    return
                this.points = changes._points.currentValue.map(p => this.newPoint(p.x, p.y))
            }
        }
        $onInit() {
            this.updateClipPath()
        }
        addPoint(clickEvent) {
            this.onPositionChange()
        }
        commitChange() {
            this.onPointsChange({ newPoints: this.points })
        }
        newPoint(x, y) {
            return { x: x, y: y }
        }
        onPositionChange(index, newX, newY) {
            this.points[index].x = newX
            this.points[index].y = newY
        }
        removePoint(index) {
            this.points.splice(index, 1)
            this.updateClipPath()
        }
        updateClipPath() {
            this.clipPath = `polygon(${this.points.map(p => `${p.x}% ${p.y}%`).concat(',')})`
        }
    }

    angular.module('editor').component('mapcanvas', {
        template: template,
        bindings: {
            _points: '<points',
            mapImageUrl: '<',
            mapAnnotatedImageUrl: '<',
            onPointsChange: '&',
        },
        controller: MapCanvas
    })
})(angular)

;(function(angular) {
    'use strict'
    const template = `
    <div>
        <ul>
            <li ng-repeat="el in $ctrl.geoElements" ng-click="$ctrl.selectElement()">{{el.name}}</li>
        </ul>
    </div>`

    class GeoElementList {
        selectElement(index) {
            this.onSelect({ index: index })
        }
    }

    angular.module('editor').component('geoelementlist', {
        template: template,
        bindings: {
            geoElements: '<',
            onSelect: '&'
        },
        controller: GeoElementList
    })
})(angular)

;(function(angular) {
    'use strict'
    const template = `
    <div>
        <div><button ng-click="$ctrl.addLayer(true)">NEW DROPPABLE LAYER</button></div>
        <ul><li ng-repeat="l in $ctrl.layersDroppable" ng-click="$ctrl.select(true, $index)">Droppable Layer {{$index + 1}}</li></ul>
        <div><button ng-click="$ctrl.addLayer(false)">NEW ANNOTATION LAYER</button></div>
        <ul><li ng-repeat="l in $ctrl.layersAnnotation" ng-click="$ctrl.select(false, $index)">Annotation {{$index + 1}}</li></ul>
    </div>`

    class Layerlist {
        addLayer(isDroppable) {
            this.onAdd({ isDroppable: isDroppable })
        }
        select(isDroppableLayer, index) {
            this.onSelect({ isDroppable: isDroppableLayer, id: index })
        }
    }

    angular.module('editor').component('layerlist', {
        template: template,
        bindings: {
            layersDroppable: '<',
            layersAnnotation: '<',
            onAdd: '&',
            onSelect: '&'
        },
        controller: Layerlist
    })
})(angular)

;(function(angular) {
    'use strict'
    const template = ``

    class DraggablePoint {}

    angular.module('editor').component('draggablepoint', {
        template: template,
        bindings: {
            onPositionChange: '&',
            xPercentage: '@',
            yPercentage: '@'
        },
        controller: DraggablePoint
    })
})(angular)
