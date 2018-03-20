(function (angular) {
    'use strict'

    const stageTemplate = `
<div class="info">
    <div class="player">{{$ctrl.playername}}</div>
    <div class="timer">{{$ctrl.timeElapsed | date:"mm:ss"}}</div>
</div>
<div class="stage">
    <div class="name-list">
        <region-label ng-repeat="region in $ctrl.regions" ng-if="$odd" region-id="{{region.id}}" region-name="{{region.name}}"></region-label>
    </div>
    <div class="map" ng-click="$ctrl.getPoint($event)" data-map-id="{{$ctrl.mapId}}">
        <region ng-repeat="region in $ctrl.regions" 
        region-id="region.id" 
        path="region.path"
        on-matched="$ctrl.onRegionMatched()">
        </region>
    </div>
    <div class="name-list">
        <region-label ng-repeat="region in $ctrl.regions" ng-if="$even" region-id="{{region.id}}" region-name="{{region.name}}"></region-label>
    </div>
</div>`

    angular.module('app').component('stage', {
        template: stageTemplate,
        controller: [
            '$element', 
            '$interval',
            '$state', 
            '$timeout',
            'GameService', 
            function StageController($element, $interval, $state, $timeout, GameService) {
            const stageMaker = GameService.stageMaker()

            const soundStageFinished = new Audio('styles/tada.wav')
            const soundRegionMatched = new Audio('styles/Beep8.wav')
            const soundFirstBlood = new Audio('styles/firstblood.wav')
            soundRegionMatched.load()
            soundStageFinished.load()
            soundFirstBlood.load()

            const init = () => {
                this.playername = GameService.getPlayer()

                if (!this.playername) {
                    $state.go('start')
                    return
                }

                this.numMatched = 0

                let nextStage = stageMaker.next()

                if (nextStage.done) {
                    GameService.end()
                    $interval.cancel(this.timer)
                    $timeout(() => $state.go('result'), 1000)
                    return
                }

                let stage = nextStage.value
                this.mapId = stage.mapId
                this.mapUrl = stage.mapUrl
                this.mapAnnotatedUrl = stage.mapAnnotatedUrl
                this.regions = stage.regions
                this.timeElapsed = 0
                this.timer = $interval(() => {
                    this.timeElapsed = Date.now() - GameService.getTimeStarted()
                }, 1000)
            }

            this.$onInit = () => {
                init()
            }

            this.onNextClicked = () => {
                $state.go('result')
            }

            this.onRegionMatched = () => {
                this.numMatched++
                if (this.numMatched == this.regions.length) {
                    soundStageFinished.play()
                    init()
                    return
                }
                if (this.numMatched == 1) {
                    soundFirstBlood.play()
                    return
                }
                soundRegionMatched.play()
            }
            let path = ''
            this.getPoint = ev => {
                // console.log(ev)
                let container = $element[0].querySelector('.map')
                let offsetX = ev.pageX - container.offsetLeft
                let offsetY = ev.pageY - container.offsetTop
                let pointX = (100 * offsetX / container.clientWidth).toFixed(2)
                let pointY = (100 * offsetY / container.clientHeight).toFixed(2)
                console.log(path += `${pointX}% ${pointY}%, `)
            }
        }]
    })
})(angular)
