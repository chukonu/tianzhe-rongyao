(function (angular) {
    'use strict'
    angular.module('app').service('GameService', function GameService() {
        const s1 = {
            name: 'South America',
            mapUrl: 'maps/1.png',
            mapAnnotatedUrl: 'maps/1_0.png',
            regions: [
                {
                    id: 'xxr1',
                    name: '巴西高原',
                    path: '52% 7%, 44% 21%, 49% 40%, 84% 45%, 94% 27%, 88% 9%'
                },
                {
                    id: 'xxr2',
                    name: '太平洋',
                    path: '7% 15%, 28% 22%, 37% 41%, 60% 60%, 73% 78%, 47% 93%, 23% 94%, 7% 76%, 1% 52%'
                }
            ]
        }
        const stages = [s1]

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
    })
})(angular)
