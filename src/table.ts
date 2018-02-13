import * as b from 'bobril'

interface ITableData {
    children: b.IBobrilChildren;
    style?: b.IBobrilStyle;
}

interface ITableCtx extends b.BobrilCtx<ITableData> {
    data: ITableData;
}

export const Table = b.createComponent({
    init(ctx: ITableCtx){
        console.log("init:"+ctx);
    },
    render(ctx: ITableCtx, me: b.IBobrilNode){
        console.log(ctx);
        me.children = [ctx.data.children];
        b.style(me, tableStyle, ctx.data.style);
    }
})
const tableStyle = b.styleDef({
})

