(function(document, angular) {
	'use strict';

	const startingPageTemplate = `
<div class="sign-in">
	<div class="header" ng-class="{'name-is-set': $ctrl.isPlayernameSet}">深圳外国语学校<br />“填者荣耀”大赛</div>
	<!--<div class="subtitle">游戏1</div>-->
	<div ng-if="!$ctrl.isCompatible">
		当前浏览器不支持本网页程序所需的特性。
		<br />请换其它较新的浏览器来打开。
	</div>
	<div ng-if="$ctrl.isCompatible">
		<div ng-show="!$ctrl.isPlayernameSet">
			<form action="#"><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" id="playername" ng-model="$ctrl.playername" ng-disabled="$ctrl.isPlayernameSet" type="text" autocomplete="off">
				<label class="mdl-textfield__label" for="playername">姓名</label>
			</div></form>
		</div>
		<div ng-show="$ctrl.isPlayernameSet">
			<div style="font-size:3rem; margin:.6em 0 .4em 0; line-height:1.2em; text-align:center; font-weight:bold;">{{$ctrl.playername}}</div>
			<div style="display:flex; justify-content:space-around; margin: 1em 0; align-items:baseline;">
				<label ng-repeat="r in ::$ctrl.rounds"
					class="game-option mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-{{$index}}">
					<input type="radio" id="option-{{$index}}" class="mdl-radio__button" name="rounds" ng-value="$index" ng-model="$ctrl.selectedRound" ng-change="$ctrl.onSelectedRoundChange()">
					<span class="mdl-radio__label">{{::r}}</span>
				</label>
				<button ng-click="$ctrl.onStartClicked()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">开始游戏</button>
			</div>
		</div>
		<div class="footer">
			<button ng-show="!$ctrl.isPlayernameSet" ng-disabled="!$ctrl.playername" ng-click="$ctrl.setPlayername()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">下一步</button>
		</div>
    </div>
</div>`;

	angular.module('app').component('startingPage', {
		template: startingPageTemplate,
		controller: [
			'$element',
			'$state',
			'GameService',
			function StartingPageController($element, $state, GameService) {
				this.$onInit = () => {
					this.isPlayernameSet = false;

					if (document.documentMode || /Edge/.test(navigator.userAgent))
						this.isCompatible = false
					else
						this.isCompatible = true

					this.rounds = GameService.getAllRounds()
					this.selectedRound = GameService.getCurrentRound()
				};
				this.setPlayername = () => {
					GameService.setPlayer(this.playername);
					this.isPlayernameSet = true;
				};
				this.onStartClicked = () => {
					GameService.start();
					$state.go('stage');
				};
				this.onSelectedRoundChange = () => {
					GameService.setCurrentRound(this.selectedRound)
				}
			}
		]
	});
})(document, angular);
