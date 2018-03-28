(function (angular) {
    'use strict'

    const stageTemplate = `
<div class="info">
    <div class="player">{{$ctrl.playername}}</div>
    <div class="timer">{{$ctrl.timeElapsed | date:"mm:ss"}}</div>
</div>
<div class="stage">
    <div class="name-list">
        <region-label role="button" ng-repeat="region in $ctrl.regionsFlattened" ng-if="$odd" region-id="{{region.id}}" region-name="{{region.name}}"></region-label>
    </div>

    <div class="map" ng-click="false && $ctrl.getPoint($event)" data-map-id="{{$ctrl.mapId}}">
        
        <div ng-if="$ctrl.roundId === 0">
            <region ng-repeat="region in $ctrl.regions" region-id="region.id" path="region.path" on-matched="$ctrl.onRegionMatched()"></region>
        </div>

        <div ng-if="$ctrl.roundId !== 0">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 {{$ctrl.width}} {{$ctrl.height}}">
                <text ng-repeat="l in $ctrl.labels" 
                    id="l-{{::l.id}}" 
                    ng-attr-x="{{::l.optimal[0]}}" 
                    ng-attr-y="{{::l.optimal[1]}}"
                    ng-attr-text-anchor="{{ ::(l.textAnchor || 'start') }}"
                    ng-attr-font-size="{{::(l.fontSize || '14px')}}"
                    ng-attr-font-weight="{{::(l.fontWeight || 'normal')}}"
                    ng-attr-letter-spacing="{{::(l.letterSpacing || '2px')}}"
                    ng-attr-writing-mode="{{::(l.writingMode || '')}}"
                    ng-attr-fill="{{::(l.fill || 'black')}}"
                    ng-attr-transform="{{::(l.transform || '')}}"
                    style="display:block;">
                    {{::l.name}}
                </text>
            </svg>

            <geo ng-repeat="r in $ctrl.regions" geo-id="{{r.id}}" geo-name="{{r.name}}" path="{{r.path}}" children="r.children" on-matched="$ctrl.onRegionMatched(id)"></geo>
        </div>
    </div>

    <div class="name-list">
        <region-label role="button" ng-repeat="region in $ctrl.regionsFlattened" ng-if="$even" region-id="{{region.id}}" region-name="{{region.name}}"></region-label>
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

            const flattenRegions = (regions, arr) => {
                regions.forEach(r => {
                    arr.push(r)
                    if (r.children && r.children.length > 0)
                        flattenRegions(r.children, arr)
                })
            }

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
                this.roundId = GameService.getCurrentRound()
                this.width = stage.width
                this.height = stage.height
                this.mapId = stage.mapId
                this.mapUrl = stage.mapUrl
                this.mapAnnotatedUrl = stage.mapAnnotatedUrl
                this.labels = stage.labels
                this.regions = stage.regions
                flattenRegions(this.regions, this.regionsFlattened = [])
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

            this.onRegionMatched = (id) => {
                if (id) {
                    let labelId = `l-${id}`
                    let labelTextElement = $element[0].querySelector(`#${labelId}`)
                    if (labelTextElement)
                        labelTextElement.style.display = 'block'
                }

                this.numMatched++
                if (this.numMatched == this.regionsFlattened.length) {
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
        }]
    })
})(angular)
