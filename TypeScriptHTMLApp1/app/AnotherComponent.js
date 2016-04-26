var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnotherComponent = (function (_super) {
    __extends(AnotherComponent, _super);
    function AnotherComponent() {
        var scope = new Scope({});
        scope.$.listItem = { id: 1, title: 'Some List Item' };
        _super.call(this, ".another-component", AnotherComponent.html, scope);
    }
    AnotherComponent.html = "<ul>\n        <li><span>$listItem.id$</span>&nbsp;<span>$listItem.title$</span></li>\n    </ul>";
    return AnotherComponent;
}(Component));
//# sourceMappingURL=AnotherComponent.js.map