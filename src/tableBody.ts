import * as b from 'bobril'

interface ITableData {
    children: b.IBobrilChildren;
    style?: b.IBobrilStyle;
}

interface ITableCtx extends b.BobrilCtx<ITableData> {
    data: ITableData;
}

export const TableBody = b.createVirtualComponent({
    render(ctx: ITableCtx, me: b.IBobrilNode){
        me.children = { tag: "tbody", children:ctx.data.children };
        b.style(me.children, tableStyle, ctx.data.style);
    }
})
const tableStyle = b.styleDef({
})

