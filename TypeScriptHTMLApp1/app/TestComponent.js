var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestComponent = (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        var scope = new Scope({});
        scope.$.user = { name: 'Ian', age: 23, gender: 'Male' };
        _super.call(this, ".test-component", TestComponent.html, scope);
    }
    TestComponent.html = "\n    <h2>Test Component</h2>\n    <h3>Name: $user.name$, Age: $user.age$, Gender: $user.gender$</h3>";
    return TestComponent;
}(Component));
//# sourceMappingURL=TestComponent.js.map