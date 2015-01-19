#
validateImageUrl = ->

  #
  link = (scope, element, attrs) ->
    scope.$watch attrs.ngModel, (newVal, oldVal) ->
      console.log newVal

  # return directive object
  {
    restrict: 'A'
    require: 'ngModel'
    link
  }



# register module and attach directive
angular
  .module 'ngviu', []
  .directive 'validateImageUrl', validateImageUrl
