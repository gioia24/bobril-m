import * as b from 'bobril';
// import * as styles from "./styles";


interface ITableData {
    children: b.IBobrilChildren;
    style?: b.IBobrilStyle;
}

interface ITableCtx extends b.BobrilCtx<ITableData> {
    data: ITableData;
}

export const TableRow = b.createVirtualComponent({
    init(ctx: ITableCtx){
        console.log("init:"+ctx);
    },
    render(ctx: ITableCtx, me: b.IBobrilNode){
        console.log(ctx);
        me.children = { tag:"tr", children:ctx.data.children };
        b.style(me.children, tableStyle, ctx.data.style);
    }
})
const tableStyle = b.styleDef({
    // border: '1px solid',
    // borderColor: styles.borderColor,
    color: 'inherit',
    display: 'table-row',
    height: 48,
})

