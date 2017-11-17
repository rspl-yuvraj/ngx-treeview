import { TreeviewItem } from './treeview-item';
export declare abstract class TreeviewI18n {
    abstract getText(checkededItems: TreeviewItem[], isAll: boolean): string;
    abstract allCheckboxText(): string;
    abstract filterPlaceholder(): string;
    abstract filterNoItemsFoundText(): string;
    abstract tooltipCollapseExpand(isCollapse: boolean): string;
}
export declare class TreeviewI18nDefault extends TreeviewI18n {
    getText(checkededItems: TreeviewItem[], isAll: boolean): string;
    allCheckboxText(): string;
    filterPlaceholder(): string;
    filterNoItemsFoundText(): string;
    tooltipCollapseExpand(isCollapse: boolean): string;
}
