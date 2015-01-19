#
validateImageUrl = ($q) ->

  # see: http://stackoverflow.com/a/22423210/167911
  isValidImage = (url) ->
    deferred = $q.defer()
    image = new Image()
    image.onerror = ->
      console.log 'error'
      deferred.reject('invalid')
    image.onload = ->
      console.log 'load'
      deferred.resolve() # TODO: pass image info (e.g., dimensions) here
    image.src = url
    deferred.promise

  #
  link = (scope, element, attrs, ngModelController) ->
    #
    scope.$watch attrs.ngModel, (newVal, oldVal) ->
      console.log newVal
    # see: https://docs.angularjs.org/api/ng/type/ngModel.NgModelController#$asyncValidators
    ngModelController.$asyncValidators.imageUrl = (modelValue, viewValue) ->
      isValidImage(modelValue or viewValue)

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
