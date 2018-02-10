import * as b from "bobril";
// import * as m from "../index";

interface IStepLabelData {
    children?: b.IBobrilChildren;
    index?: number;
    completed?: boolean;
    active?: boolean;
}

interface IStepLabelCtx extends b.IBobrilCtx {
    data: IStepLabelData;
}

export const StepLabel = b.createVirtualComponent<IStepLabelData>({
    render(ctx: IStepLabelCtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.children, stepLabelStyle)
        ];
        b.styledDiv(me.children,stepLabelStyle)
    }
});

const stepLabelStyle = b.styleDef({
    padding: 5,
    verticalAlign: "middle",
});