(function (angular) {
    'use strict'

    const stageTemplate = `
<div class="info">
    <div class="player">{{$ctrl.playername}}</div>
    <div class="timer">{{$ctrl.timeElapsed | date:"mm:ss"}}</div>
</div>
<div class="stage">
    <div class="name-list">
        <region-label ng-repeat="region in $ctrl.regions" region-id="{{region.id}}" region-name="{{region.name}}"></region-label>
    </div>
    <div class="map" style="background-image:url({{$ctrl.mapUrl}});">
        <region ng-repeat="region in $ctrl.regions" 
        region-id="region.id" 
        path="region.path"
        on-matched="$ctrl.onRegionMatched()"
        map-url="$ctrl.mapUrl"
        map-annotated-url="$ctrl.mapAnnotatedUrl">
        </region>
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
            soundRegionMatched.load()
            soundStageFinished.load()

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
                soundRegionMatched.play()
            }
        }]
    })
})(angular)
