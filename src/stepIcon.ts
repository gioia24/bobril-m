import * as b from "bobril";
import * as m from "../index";

interface IStepIconData {
    active?: boolean;
    completed?: boolean;
    children?: b.IBobrilChildren;
}

interface IStepIconCtx extends b.IBobrilCtx {
    data: IStepIconData;
}

export const StepIcon = b.createVirtualComponent<IStepIconData>({
    render(ctx: IStepIconCtx, me: b.IBobrilNode) {
        me.children = b.styledDiv(
                ctx.data.children,
                ctx.data.active
                    ? activeStyle
                    : (ctx.data.completed
                        ? completedStyle
                        : stepIconStyle)
                    )
        ;
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
    verticalAlign: "middle",
    backgroundColor: m.disabledColor
});

const activeStyle = b.styleDef([
    stepIconStyle,
    {
        backgroundColor: m.primary1Color
    }
]);

const completedStyle = b.styleDef([
    stepIconStyle,
    {
        backgroundColor: m.primary2Color
    }
]);

