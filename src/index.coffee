#
ngviu = angular.module 'validateImageUrl', []

# #
# ngviu.controller 'ValidateImageUrlController', ($scope) ->
#
#   #
#   new class ValidateImageUrlController
#
#     #
#     constructor: ->


# #
# ngviu.factory 'ValidateImageUrlFactory', ->
#
#   #
#   new class ValidateImageUrlFactory
#
#     #
#     constructor: ->

#
ngviu.directive 'validateImageUrl', ->

  restrict: 'A'
  require: 'ngModel'
  # scope:
  #   url: '=ngModel' # TODO: use @?
  link: (scope, element, attrs, ngModelController) ->
    scope.$watch attrs.ngModel, (newVal, oldVal) ->
      console.log newVal
