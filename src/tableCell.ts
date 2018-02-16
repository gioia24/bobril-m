import * as b from 'bobril'
import * as styles from "./styles";

export const enum CellType{
    Number,
    String
}

interface ITableData {
    children: b.IBobrilChildren;
    style?: b.IBobrilStyle;
    type?: CellType;
    colSpan?: number;
}

interface ITableCtx extends b.BobrilCtx<ITableData> {
    data: ITableData;
}

export const TableCell = b.createVirtualComponent({
    render(ctx: ITableCtx, me: b.IBobrilNode){
        me.children = { tag:"td",attrs: { colSpan: ctx.data.colSpan }, children:ctx.data.children, };
        b.style(me.children, tableStyle, ctx.data.style, ctx.data.type === CellType.Number && numberTypeStyle);
    }
})
const tableStyle = b.styleDef({
    borderBottom: '1px solid',
    borderColor: styles.borderColor,
    textAlign: 'left',
})

const numberTypeStyle = b.styleDef({
    textAlign: 'right',
    flexDirection: 'row-reverse',
})

