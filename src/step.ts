import * as b from "bobril";

export interface IStepData {
    children?: b.IBobrilChildren;
}

interface IStepCtx extends b.IBobrilCtx {
    data: IStepData;
}

export const Step = b.createVirtualComponent<IStepData>({
    render(ctx: IStepCtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.children, stepStyle)
        ];
    }
});

const stepStyle = b.styleDef({
    padding: 0,
    display: "flex",
});
