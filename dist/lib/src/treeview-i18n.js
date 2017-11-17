var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from '@angular/core';
var TreeviewI18n = (function () {
    function TreeviewI18n() {
    }
    TreeviewI18n.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TreeviewI18n.ctorParameters = function () { return []; };
    return TreeviewI18n;
}());
export { TreeviewI18n };
var TreeviewI18nDefault = (function (_super) {
    __extends(TreeviewI18nDefault, _super);
    function TreeviewI18nDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeviewI18nDefault.prototype.getText = function (checkededItems, isAll) {
        if (isAll) {
            return 'All';
        }
        switch (checkededItems.length) {
            case 0:
                return 'Select options';
            case 1:
                return checkededItems[0].text;
            default:
                return checkededItems.length + " options selected";
        }
    };
    TreeviewI18nDefault.prototype.allCheckboxText = function () {
        return 'All';
    };
    TreeviewI18nDefault.prototype.filterPlaceholder = function () {
        return 'Filter';
    };
    TreeviewI18nDefault.prototype.filterNoItemsFoundText = function () {
        return 'No items found';
    };
    TreeviewI18nDefault.prototype.tooltipCollapseExpand = function (isCollapse) {
        return isCollapse ? 'Expand' : 'Collapse';
    };
    TreeviewI18nDefault.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TreeviewI18nDefault.ctorParameters = function () { return []; };
    return TreeviewI18nDefault;
}(TreeviewI18n));
export { TreeviewI18nDefault };
//# sourceMappingURL=treeview-i18n.js.map