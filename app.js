var app = angular.module('MADNews', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
           function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                })
                .state('posts', {
                    url: '/posts/{id}',
                    templateUrl: '/posts.html',
                    controller: 'PostsCtrl'
                });

            $urlRouterProvider.otherwise('home');
}]);

app.controller('PostsCtrl', [
               '$scope', '$stateParams', 'posts',
               function($scope, $stateParams, posts) {
                    $scope.post = posts.posts[$stateParams.id];

                    $scope.incrementUpvotes = function(comment) {
                        comment.upvotes += 1;
                    };

                    $scope.addComment = function() {
                        $scope.post.comments.push({
                            author: 'No Session ID',
                            body: $scope.body,
                            upvotes: 0
                        });
                        $scope.body = '';
                    };
               }
]);

app.controller('MainCtrl', ['$scope', 'posts',
               function($scope, posts) {
    $scope.posts = posts.posts;

    $scope.addPost = function() {
        if (!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [],
            id: $scope.posts.length
        });
        $scope.title = '';
        $scope.link = '';

        console.log("addpost");
    };

    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };

}]);

app.factory('posts', [function() {
    var o = {
        posts: []
    };
    return o;
}]);
