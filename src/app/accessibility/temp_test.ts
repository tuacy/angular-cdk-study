import {ListKeyManagerOption} from '@angular/cdk/a11y';
import {Subject} from 'rxjs';
import {QueryList} from '@angular/core';

export declare class ListKeyManager<T extends ListKeyManagerOption>  {


    /**
     * 构造函数需要传入QueryList
     * @param _items
     */
    constructor(_items: QueryList<T> | T[]);
    /**
     * 注意是一个Subject对象
     * 在按下TAB键的任何时候发出的流，因此当焦点从列表中移出时，组件可以做出反应。
     */
    tabOut: Subject<void>;
    /**
     * 每当列表管理器的活动的item发生更改时回调的事件。
     */
    change: Subject<number>;

    /**
     * 参数是函数，设置那些item需要跳过去，在active状态切换的时候
     */
    skipPredicate(predicate: (item: T) => boolean): this;
    /**
     * （循环）当Active状态的item是最后一个的时候，继续下一个的时候会跳到第一个
     */
    withWrap(shouldWrap?: boolean): this;
    /**
     * list里面active切换的时候，移动按照垂直方向
     */
    withVerticalOrientation(enabled?: boolean): this;
    /**
     * list里面active切换的时候，移动按照水平方向
     */
    withHorizontalOrientation(direction: 'ltr' | 'rtl' | null): this;
    /**
     * 打开预先输入模式，允许用户通过键入来设置活动项目。
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    withTypeAhead(debounceInterval?: number): this;
    /**
     * 更新Active状态对应item(其实就是把那个item设置为Active)
     */
    setActiveItem(index: number): void;
    /**
     * 更新Active状态对应item(其实就是把那个item设置为Active)
     */
    setActiveItem(item: T): void;
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    onKeydown(event: KeyboardEvent): void;

    /**
     * 设置第一个item为Active状态
     */
    setFirstItemActive(): void;
    /**
     * 设置最好一个item为Active状态
     */
    setLastItemActive(): void;
    /**
     * 设置下一个item为Active状态
     */
    setNextItemActive(): void;
    /**
     * 设置前一个item为Active状态
     */
    setPreviousItemActive(): void;
    /**
     * 更新Active状态对应item的index(其实就是把那个index的item设置为Active)
     */
    updateActiveItem(index: number): void;
    /**
     * 更新Active状态对应item(其实就是把那个item设置为Active)
     */
    updateActiveItem(item: T): void;

}