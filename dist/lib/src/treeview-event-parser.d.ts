import { TreeviewParserComponent } from './treeview-parser-component';
import { TreeviewItem } from './treeview-item';
export declare abstract class TreeviewEventParser {
    abstract getSelectedChange(component: TreeviewParserComponent): any[];
}
export declare class DefaultTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component: TreeviewParserComponent): any[];
}
export interface DownlineTreeviewItem {
    item: TreeviewItem;
    parent: DownlineTreeviewItem;
}
export declare class DownlineTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component: TreeviewParserComponent): any[];
    private getLinks(item, parent);
}
export declare class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
    private currentDownlines;
    private parser;
    getSelectedChange(component: TreeviewParserComponent): any[];
}
