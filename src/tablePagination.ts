import * as b from 'bobril'
import { Button } from './button'
import * as Icon from 'bobril-m-icons'
import { TableCell } from './tableCell'

interface ITableData {
    children: b.IBobrilChildren;
    style?: b.IBobrilStyle;
    rowsPerPage: number;
    page: Function;
    colSpan: number;
    count: number;
    onChangePage: Function;
}

interface ITableCtx extends b.BobrilCtx<ITableData> {
    data: ITableData;
}


function backButtonAction(ctx: ITableCtx){
    ctx.data.page(ctx.data.page()-1);
    
    b.invalidate(ctx);
}

function nextButtonAction(ctx: ITableCtx){
    ctx.data.page(ctx.data.page() + 1);
    
    b.invalidate(ctx);
}

export const TablePagination = b.createVirtualComponent({
    render(ctx: ITableCtx, me: b.IBobrilNode){

        const lastPage: number = (ctx.data.page()+1) * ctx.data.rowsPerPage;

        me.children = TableCell(
            { colSpan: ctx.data.colSpan, style: [ tableStyle, ctx.data.style ]}, 
            [ ctx.data.page() * ctx.data.rowsPerPage + 1,' - ', lastPage > ctx.data.count ? ctx.data.count : lastPage, " of: ", ctx.data.count, 
            Button({ action: () => backButtonAction(ctx) }, Icon.hardwareKeyboardArrowLeft()),
            Button({ action: ()=> nextButtonAction(ctx) }, Icon.hardwareKeyboardArrowRight())]
        );
    }
})
const tableStyle = b.styleDef({
    textAlign: "right",
})

