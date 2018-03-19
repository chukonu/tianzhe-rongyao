(function(angular) {
    'use strict'
    angular.module('app').component('resultPage', {
        template: `<div class="score">
    {{::$ctrl.playername}}&nbsp;{{::$ctrl.timeElapsed | date:"mm:ss"}}
</div>
<button ng-click="$ctrl.onPlayAgainClicked()">重新开始</button>`,
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