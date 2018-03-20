(function(document, angular) {
	'use strict';

	const startingPageTemplate = `
<div class="sign-in">
	<div class="header">深圳外国语学校<br />填者荣耀</div>
	<div ng-if="!$ctrl.isCompatible">
		当前浏览器不支持本网页程序所需的特性。
		<br />请换其它较新的浏览器来打开。
	</div>
    <div ng-if="$ctrl.isCompatible">
        <label for="playername">姓名</label>
        <input id="playername" ng-model="$ctrl.playername" ng-disabled="$ctrl.isPlayernameSet" type="text">
    </div>
    <div ng-if="$ctrl.isCompatible" class="footer">
        <button ng-if="!$ctrl.isPlayernameSet" ng-click="$ctrl.setPlayername()">提交</button>
        <button ng-if="$ctrl.isPlayernameSet" ng-click="$ctrl.onStartClicked()">开始</button>
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
})(document, angular);
