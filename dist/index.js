
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

validateImageUrl = function() {
  var link;
  link = function(scope, element, attrs) {
    return scope.$watch(attrs.ngModel, function(newVal, oldVal) {
      return console.log(newVal);
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBLGdCQUFBOztBQUFBLGdCQUFBLEdBQW1CLFNBQUEsR0FBQTtBQUdqQixNQUFBLElBQUE7QUFBQSxFQUFBLElBQUEsR0FBTyxTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEdBQUE7V0FDTCxLQUFLLENBQUMsTUFBTixDQUFhLEtBQUssQ0FBQyxPQUFuQixFQUE0QixTQUFDLE1BQUQsRUFBUyxNQUFULEdBQUE7YUFDMUIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaLEVBRDBCO0lBQUEsQ0FBNUIsRUFESztFQUFBLENBQVAsQ0FBQTtTQUtBO0FBQUEsSUFDRSxRQUFBLEVBQVUsR0FEWjtBQUFBLElBRUUsT0FBQSxFQUFTLFNBRlg7QUFBQSxJQUdFLE1BQUEsSUFIRjtJQVJpQjtBQUFBLENBQW5CLENBQUE7O0FBQUEsT0FrQkUsQ0FBQyxNQURILENBQ1UsT0FEVixFQUNtQixFQURuQixDQUVFLENBQUMsU0FGSCxDQUVhLGtCQUZiLEVBRWlDLGdCQUZqQyxDQWpCQSxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiI1xudmFsaWRhdGVJbWFnZVVybCA9IC0+XG5cbiAgI1xuICBsaW5rID0gKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICBzY29wZS4kd2F0Y2ggYXR0cnMubmdNb2RlbCwgKG5ld1ZhbCwgb2xkVmFsKSAtPlxuICAgICAgY29uc29sZS5sb2cgbmV3VmFsXG5cbiAgIyByZXR1cm4gZGlyZWN0aXZlIG9iamVjdFxuICB7XG4gICAgcmVzdHJpY3Q6ICdBJ1xuICAgIHJlcXVpcmU6ICduZ01vZGVsJ1xuICAgIGxpbmtcbiAgfVxuXG5cblxuIyByZWdpc3RlciBtb2R1bGUgYW5kIGF0dGFjaCBkaXJlY3RpdmVcbmFuZ3VsYXJcbiAgLm1vZHVsZSAnbmd2aXUnLCBbXVxuICAuZGlyZWN0aXZlICd2YWxpZGF0ZUltYWdlVXJsJywgdmFsaWRhdGVJbWFnZVVybFxuIl19