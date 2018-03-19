(function(angular) {
	'use strict';

	const startingPageTemplate = `
<div class="sign-in">
    <div class="header">深圳外国语学校<br />填者荣耀</div>
    <div>
        <label for="playername">姓名</label>
        <input id="playername" ng-model="$ctrl.playername" ng-disabled="$ctrl.isPlayernameSet" type="text">
    </div>
    <div class="footer">
        <button ng-if="!$ctrl.isPlayernameSet" ng-click="$ctrl.setPlayername()">提交</button>
        <button ng-if="$ctrl.isPlayernameSet" ng-click="$ctrl.onStartClicked()">开始</button>
    </div>
</div>`;

	angular.module('app').component('startingPage', {
		template: startingPageTemplate,
		controller: [
			'$state',
			'GameService',
			function StartingPageController($state, GameService) {
				this.$onInit = () => {
					this.isPlayernameSet = false;
				};
				this.setPlayername = () => {
					GameService.setPlayer(this.playername);
					this.isPlayernameSet = true;
				};
				this.onStartClicked = () => {
					GameService.start();
					$state.go('stage');
				};
			}
		]
	});
})(angular);
