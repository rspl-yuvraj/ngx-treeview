import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';
var TreeviewItemComponent = (function () {
    function TreeviewItemComponent() {
        var _this = this;
        this.checkedChange = new EventEmitter();
        this.onCollapseExpand = function () {
            _this.item.collapsed = !_this.item.collapsed;
        };
        this.onCheckedChange = function () {
            var checked = _this.item.checked;
            if (!_.isNil(_this.item.children)) {
                _this.item.children.forEach(function (child) { return child.setCheckedRecursive(checked); });
            }
            _this.checkedChange.emit(checked);
        };
    }
    TreeviewItemComponent.prototype.onChildCheckedChange = function (child, checked) {
        if (this.item.checked !== checked) {
            var itemChecked = true;
            for (var _i = 0, _a = this.item.children; _i < _a.length; _i++) {
                var tmpChild = _a[_i];
                if (!tmpChild.checked) {
                    itemChecked = false;
                    break;
                }
            }
            this.item.checked = itemChecked;
        }
        this.checkedChange.emit(checked);
    };
    TreeviewItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-treeview-item',
                    template: "\n      <div *ngIf=\"item\" class=\"treeview-item\">\n          <ng-template [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}\">\n          </ng-template>\n          <div *ngIf=\"!item.collapsed\">\n              <ngx-treeview-item *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\" (checkedChange)=\"onChildCheckedChange(child, $event)\">\n              </ngx-treeview-item>\n          </div>\n      </div>\n    ",
                    styles: ["\n      :host {\n        display: block;\n      }\n\n      :host .treeview-item {\n        white-space: nowrap;\n      }\n\n      :host .treeview-item .treeview-item {\n        margin-left: 2rem;\n      }\n    "]
                },] },
    ];
    /** @nocollapse */
    TreeviewItemComponent.ctorParameters = function () { return []; };
    TreeviewItemComponent.propDecorators = {
        'template': [{ type: Input },],
        'item': [{ type: Input },],
        'checkedChange': [{ type: Output },],
    };
    return TreeviewItemComponent;
}());
export { TreeviewItemComponent };
//# sourceMappingURL=treeview-item.component.js.map