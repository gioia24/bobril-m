import * as b from "bobril";

interface IStepLabelData {
    children?: b.IBobrilChildren;
}

interface IStepLabelCtx extends b.IBobrilCtx {
    data: IStepLabelData;
}

export const StepLabel = b.createVirtualComponent<IStepLabelData>({
    render(ctx: IStepLabelCtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.children, stepLabelStyle)
        ];
    }
});

const stepLabelStyle = b.styleDef({
    padding: 5,
    verticalAlign: "middle",
});