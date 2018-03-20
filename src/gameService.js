(function (angular) {
    'use strict'
    angular.module('app').service('GameService', ['r1s1', 'r1s2', 'r1s3', function GameService(r1s1, r1s2, r1s3) {
        const stages = [r1s1, r1s2, r1s3]

        this.playerName = null
        this.timeStarted = null
        this.timeEnded = null
        
        this.setPlayer = playerName => this.playerName = playerName
        this.getPlayer = () => this.playerName
        this.getTimeStarted = () => this.timeStarted
        this.getTimeEnded = () => this.timeEnded
        
        this.start = () => {
            this.timeStarted = Date.now()
        }
        this.end = () => {
            this.timeEnded = Date.now()
        }
        this.reset = () => {
            this.playerName = null
            this.timeStarted = null
            this.timeEnded = null
        }
        
        this.stageMaker = function* () {
            for (let i = 0; i < stages.length; i++) {
                yield stages[i]
            }
        }
    }])
})(angular)
