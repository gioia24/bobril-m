import * as b from "bobril";
import * as m from "../index";

interface IStepIconData {
    active?: boolean;
    completed?: boolean;
    index?: number;
}

interface IStepIconCtx extends b.IBobrilCtx {
    data: IStepIconData;
}

export const StepIcon = b.createVirtualComponent<IStepIconData>({
    render(ctx: IStepIconCtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.index, stepIconStyle,
                {backgroundColor: (ctx.data.active || ctx.data.completed) ? m.primary1Color() : m.disabledColor()} )
        ];
    }
});

const stepIconStyle = b.styleDef({
    borderRadius: "50%",
    color: "white",
    width: "24px",
    height: "24px",
    fontSize: "0.75rem",
    lineHeight: "24px",
    textAlign: "center",
    verticalAlign: "middle"

});