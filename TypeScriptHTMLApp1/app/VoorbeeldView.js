var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VoorbeeldView = (function (_super) {
    __extends(VoorbeeldView, _super);
    function VoorbeeldView(model, template) {
        _super.call(this, ".voorbeeld-view");
        this.model = model;
        this.template = template;
    }
    VoorbeeldView.prototype.draw = function () {
        _super.prototype.D.call(this, this.model, this.template);
    };
    return VoorbeeldView;
}(AbstractView));
//# sourceMappingURL=VoorbeeldView.js.map