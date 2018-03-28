(function(angular) {
    'use strict'
    angular.module('app').component('resultPage', {
        template: `<div class="score">
    <span style="letter-spacing: 3px;">{{::$ctrl.playername}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{::$ctrl.timeElapsed | date:"mm:ss"}}
</div>
<!--<button ng-click="$ctrl.onPlayAgainClicked()">重新开始</button>-->`,
        controller: ['$state', 'GameService', function ResultPageController($state, GameService) {
            const goToStartingPage = () => {
                $state.go('start')
            }
            this.$onInit = () => {
                this.playername = GameService.getPlayer()
                if (!this.playername) {
                    goToStartingPage()
                    return
                }
                this.timeElapsed = GameService.getTimeEnded() - GameService.getTimeStarted()
            }
            this.onPlayAgainClicked = () => {
                GameService.reset()
                goToStartingPage()
            }
        }]
    })
})(angular)