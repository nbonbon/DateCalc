var app = angular.module('app',[]);

app.controller('DateController', function($scope) {
	$scope.calculateDuration = function() {
		ONE_MINUTE = 1000 * 60;
		ONE_HOUR = ONE_MINUTE * 60;
		ONE_DAY = ONE_HOUR * 24;
		
		startDate = new Date($scope.startDate);
		endDate = new Date($scope.endDate);
		duration = endDate - startDate;
		
		if(duration < 0) {
			$scope.warning = "Start Date is after End Date ... just letting you know.";
			duration = Math.abs(duration);
		} else {
			$scope.warning = "";
		}
		
		if($scope.includeEndDate) {
			duration = duration + ONE_DAY;
		}
		
		if(duration) {
			$scope.showCalculation = true;
			$scope.duration.days = Math.floor(duration/ONE_DAY);
			remainder = duration%ONE_DAY;
			$scope.duration.hours = Math.floor(remainder/ONE_HOUR);
			remainder = remainder%ONE_HOUR;
			$scope.duration.minutes = Math.round(remainder/ONE_MINUTE);
			/**
			* TODO: Years, Months ... needs to do something with leap years for this
			* LOOKUP: Moment.js or other js time frameworks
			**/
		} else {
			$scope.showCalculation = false;
			$scope.duration.days = "";
			$scope.duration.hours = "";
			$scope.duration.minutes = "";
			$scope.warning = "Enter both dates.";
		}
	};
	
	$scope.init = function() {
		$scope.duration = {
			days: 0,
			hours: 0,
			minutes: 0
		};
		
		date = new Date().toJSON().slice(0,16);
		
		$scope.startDate = date;
		$scope.endDate = date;
	};
	
	$scope.init();
});