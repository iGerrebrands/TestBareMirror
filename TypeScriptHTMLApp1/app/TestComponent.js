var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestComponent = (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        var scope = new Scope({});
        scope.$.user = { name: 'Ian' };
        scope.$.user.age = 23;
        _super.call(this, ".content", TestComponent.html, scope);
    }
    TestComponent.html = "<h3>Name: $user.name$ $user.age$</h3>";
    return TestComponent;
}(Component));
//# sourceMappingURL=TestComponent.js.map