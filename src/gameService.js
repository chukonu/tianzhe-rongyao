(function (angular) {
    'use strict'
    angular.module('app').service('GameService', ['r1s1', 'r1s2', 'r1s3', 'r5s1', 'r5s2', 'r5s3', 'r6s1', 'r6s2', 'r6s3', function GameService(r1s1, r1s2, r1s3, r5s1, r5s2, r5s3, r6s1, r6s2, r6s3) {
        const round1 = [r5s1, r5s2]
        const round2 = [r1s3]
        const round3 = [r1s1, r1s2]
        const round4 = [r5s3, r6s1]
        const round5 = [r6s3]
        
        const rounds = [
            round1,
            round2,
            round3,
            round4,
            round5
        ]
        
        let currentRound = 0
        let stages = rounds[currentRound]

        this.playerName = null
        this.timeStarted = null
        this.timeEnded = null

        this.setCurrentRound = num => {
            currentRound = num
            stages = rounds[currentRound]
        }
        this.getCurrentRound = () => currentRound
        this.getAllRounds = () => [
            '游戏１', 
            '游戏２', 
            '游戏３', 
            '游戏４', 
            '游戏５'
        ]
        
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
