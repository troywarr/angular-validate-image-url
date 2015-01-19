
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["angular"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'));
  } else {
    root.angularValidateImageUrl = factory(root.angular);
  }
}(this, function(angular) {

var validateImageUrl;

validateImageUrl = function($q) {
  var isValidImage, link;
  isValidImage = function(url) {
    var deferred, image;
    deferred = $q.defer();
    image = new Image();
    image.onerror = function() {
      console.log('error');
      return deferred.reject('invalid');
    };
    image.onload = function() {
      console.log('load');
      return deferred.resolve();
    };
    image.src = url;
    return deferred.promise;
  };
  link = function(scope, element, attrs, ngModelController) {
    scope.$watch(attrs.ngModel, function(newVal, oldVal) {
      return console.log(newVal);
    });
    return ngModelController.$asyncValidators.imageUrl = function(modelValue, viewValue) {
      return isValidImage(modelValue || viewValue);
    };
  };
  return {
    restrict: 'A',
    require: 'ngModel',
    link: link
  };
};

angular.module('ngviu', []).directive('validateImageUrl', validateImageUrl);

return undefined;

}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBLGdCQUFBOztBQUFBLGdCQUFBLEdBQW1CLFNBQUMsRUFBRCxHQUFBO0FBR2pCLE1BQUEsa0JBQUE7QUFBQSxFQUFBLFlBQUEsR0FBZSxTQUFDLEdBQUQsR0FBQTtBQUNiLFFBQUEsZUFBQTtBQUFBLElBQUEsUUFBQSxHQUFXLEVBQUUsQ0FBQyxLQUFILENBQUEsQ0FBWCxDQUFBO0FBQUEsSUFDQSxLQUFBLEdBQVksSUFBQSxLQUFBLENBQUEsQ0FEWixDQUFBO0FBQUEsSUFFQSxLQUFLLENBQUMsT0FBTixHQUFnQixTQUFBLEdBQUE7QUFDZCxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWixDQUFBLENBQUE7YUFDQSxRQUFRLENBQUMsTUFBVCxDQUFnQixTQUFoQixFQUZjO0lBQUEsQ0FGaEIsQ0FBQTtBQUFBLElBS0EsS0FBSyxDQUFDLE1BQU4sR0FBZSxTQUFBLEdBQUE7QUFDYixNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWixDQUFBLENBQUE7YUFDQSxRQUFRLENBQUMsT0FBVCxDQUFBLEVBRmE7SUFBQSxDQUxmLENBQUE7QUFBQSxJQVFBLEtBQUssQ0FBQyxHQUFOLEdBQVksR0FSWixDQUFBO1dBU0EsUUFBUSxDQUFDLFFBVkk7RUFBQSxDQUFmLENBQUE7QUFBQSxFQWFBLElBQUEsR0FBTyxTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEVBQXdCLGlCQUF4QixHQUFBO0FBRUwsSUFBQSxLQUFLLENBQUMsTUFBTixDQUFhLEtBQUssQ0FBQyxPQUFuQixFQUE0QixTQUFDLE1BQUQsRUFBUyxNQUFULEdBQUE7YUFDMUIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaLEVBRDBCO0lBQUEsQ0FBNUIsQ0FBQSxDQUFBO1dBR0EsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsUUFBbkMsR0FBOEMsU0FBQyxVQUFELEVBQWEsU0FBYixHQUFBO2FBQzVDLFlBQUEsQ0FBYSxVQUFBLElBQWMsU0FBM0IsRUFENEM7SUFBQSxFQUx6QztFQUFBLENBYlAsQ0FBQTtTQXNCQTtBQUFBLElBQ0UsUUFBQSxFQUFVLEdBRFo7QUFBQSxJQUVFLE9BQUEsRUFBUyxTQUZYO0FBQUEsSUFHRSxNQUFBLElBSEY7SUF6QmlCO0FBQUEsQ0FBbkIsQ0FBQTs7QUFBQSxPQW1DRSxDQUFDLE1BREgsQ0FDVSxPQURWLEVBQ21CLEVBRG5CLENBRUUsQ0FBQyxTQUZILENBRWEsa0JBRmIsRUFFaUMsZ0JBRmpDLENBbENBLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjXG52YWxpZGF0ZUltYWdlVXJsID0gKCRxKSAtPlxuXG4gICMgc2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjQyMzIxMC8xNjc5MTFcbiAgaXNWYWxpZEltYWdlID0gKHVybCkgLT5cbiAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKClcbiAgICBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25lcnJvciA9IC0+XG4gICAgICBjb25zb2xlLmxvZyAnZXJyb3InXG4gICAgICBkZWZlcnJlZC5yZWplY3QoJ2ludmFsaWQnKVxuICAgIGltYWdlLm9ubG9hZCA9IC0+XG4gICAgICBjb25zb2xlLmxvZyAnbG9hZCdcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKSAjIFRPRE86IHBhc3MgaW1hZ2UgaW5mbyAoZS5nLiwgZGltZW5zaW9ucykgaGVyZVxuICAgIGltYWdlLnNyYyA9IHVybFxuICAgIGRlZmVycmVkLnByb21pc2VcblxuICAjXG4gIGxpbmsgPSAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsQ29udHJvbGxlcikgLT5cbiAgICAjXG4gICAgc2NvcGUuJHdhdGNoIGF0dHJzLm5nTW9kZWwsIChuZXdWYWwsIG9sZFZhbCkgLT5cbiAgICAgIGNvbnNvbGUubG9nIG5ld1ZhbFxuICAgICMgc2VlOiBodHRwczovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmcvdHlwZS9uZ01vZGVsLk5nTW9kZWxDb250cm9sbGVyIyRhc3luY1ZhbGlkYXRvcnNcbiAgICBuZ01vZGVsQ29udHJvbGxlci4kYXN5bmNWYWxpZGF0b3JzLmltYWdlVXJsID0gKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkgLT5cbiAgICAgIGlzVmFsaWRJbWFnZShtb2RlbFZhbHVlIG9yIHZpZXdWYWx1ZSlcblxuICAjIHJldHVybiBkaXJlY3RpdmUgb2JqZWN0XG4gIHtcbiAgICByZXN0cmljdDogJ0EnXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnXG4gICAgbGlua1xuICB9XG5cblxuXG4jIHJlZ2lzdGVyIG1vZHVsZSBhbmQgYXR0YWNoIGRpcmVjdGl2ZVxuYW5ndWxhclxuICAubW9kdWxlICduZ3ZpdScsIFtdXG4gIC5kaXJlY3RpdmUgJ3ZhbGlkYXRlSW1hZ2VVcmwnLCB2YWxpZGF0ZUltYWdlVXJsXG4iXX0=