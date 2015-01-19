
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["angular"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'));
  } else {
    root.angularValidateImageUrl = factory(root.angular);
  }
}(this, function(angular) {

var ngviu;

ngviu = angular.module('validateImageUrl', []);

ngviu.directive('validateImageUrl', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
      return scope.$watch(attrs.ngModel, function(newVal, oldVal) {
        return console.log(newVal);
      });
    }
  };
});

return undefined;

}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBLEtBQUE7O0FBQUEsS0FBQSxHQUFRLE9BQU8sQ0FBQyxNQUFSLENBQWUsa0JBQWYsRUFBbUMsRUFBbkMsQ0FBUixDQUFBOztBQUFBLEtBc0JLLENBQUMsU0FBTixDQUFnQixrQkFBaEIsRUFBb0MsU0FBQSxHQUFBO1NBRWxDO0FBQUEsSUFBQSxRQUFBLEVBQVUsR0FBVjtBQUFBLElBQ0EsT0FBQSxFQUFTLFNBRFQ7QUFBQSxJQUlBLElBQUEsRUFBTSxTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEVBQXdCLGlCQUF4QixHQUFBO2FBQ0osS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFLLENBQUMsT0FBbkIsRUFBNEIsU0FBQyxNQUFELEVBQVMsTUFBVCxHQUFBO2VBQzFCLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWixFQUQwQjtNQUFBLENBQTVCLEVBREk7SUFBQSxDQUpOO0lBRmtDO0FBQUEsQ0FBcEMsQ0F0QkEsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiNcbm5ndml1ID0gYW5ndWxhci5tb2R1bGUgJ3ZhbGlkYXRlSW1hZ2VVcmwnLCBbXVxuXG4jICNcbiMgbmd2aXUuY29udHJvbGxlciAnVmFsaWRhdGVJbWFnZVVybENvbnRyb2xsZXInLCAoJHNjb3BlKSAtPlxuI1xuIyAgICNcbiMgICBuZXcgY2xhc3MgVmFsaWRhdGVJbWFnZVVybENvbnRyb2xsZXJcbiNcbiMgICAgICNcbiMgICAgIGNvbnN0cnVjdG9yOiAtPlxuXG5cbiMgI1xuIyBuZ3ZpdS5mYWN0b3J5ICdWYWxpZGF0ZUltYWdlVXJsRmFjdG9yeScsIC0+XG4jXG4jICAgI1xuIyAgIG5ldyBjbGFzcyBWYWxpZGF0ZUltYWdlVXJsRmFjdG9yeVxuI1xuIyAgICAgI1xuIyAgICAgY29uc3RydWN0b3I6IC0+XG5cbiNcbm5ndml1LmRpcmVjdGl2ZSAndmFsaWRhdGVJbWFnZVVybCcsIC0+XG5cbiAgcmVzdHJpY3Q6ICdBJ1xuICByZXF1aXJlOiAnbmdNb2RlbCdcbiAgIyBzY29wZTpcbiAgIyAgIHVybDogJz1uZ01vZGVsJyAjIFRPRE86IHVzZSBAP1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsQ29udHJvbGxlcikgLT5cbiAgICBzY29wZS4kd2F0Y2ggYXR0cnMubmdNb2RlbCwgKG5ld1ZhbCwgb2xkVmFsKSAtPlxuICAgICAgY29uc29sZS5sb2cgbmV3VmFsXG4iXX0=