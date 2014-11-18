var app = angular.module('MADNews', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.posts = [];

    $scope.addPost = function() {
        if (!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';

        console.log("addpost");
    };

    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };
}]);
