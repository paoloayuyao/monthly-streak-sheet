/**
 * Created by jayuyao on 5/29/2016.
 */
var streakApp = angular.module('streakApp', []);

streakApp.controller('StreakController', function StreakController($scope) {
    $scope.daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    $scope.activities = [];
    loadActivities();

    $scope.addActivity = function(){
        $scope.activities.push(new Activity());
    }

    $scope.removeActivity = function(activity){
        var index = $scope.activities.indexOf(activity);
        $scope.activities.splice(index, 1);
    }

    function loadActivities() {
        $scope.activities.push(new Activity());
    }

});

function Activity(name) {
    this.name = name;
    this.days = {};
    this.days[1] = false;
    this.days[2] = false;
    this.days[3] = false;
    this.days[4] = false;
    this.days[5] = false;
    this.days[6] = false;
    this.days[7] = false;
    this.days[8] = false;
    this.days[9] = false;
    this.days[10] = false;
    this.days[11] = false;
    this.days[12] = false;
    this.days[13] = false;
    this.days[14] = false;
    this.days[15] = false;
    this.days[16] = false;
    this.days[17] = false;
    this.days[18] = false;
    this.days[19] = false;
    this.days[20] = false;
    this.days[21] = false;
    this.days[22] = false;
    this.days[23] = false;
    this.days[24] = false;
    this.days[25] = false;
    this.days[26] = false;
    this.days[27] = false;
    this.days[28] = false;
    this.days[29] = false;
    this.days[30] = false;
    this.days[31] = false;
}