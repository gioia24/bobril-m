import * as b from "bobril";
import * as m from "../index";

interface IStepIconData {
    children?: b.IBobrilChildren;
    active?: boolean;
    completed?: boolean,
}

interface IStepIconCtx extends b.IBobrilCtx {
    data: IStepIconData;
}

export const StepIcon = b.createComponent<IStepIconData>({
    render(ctx: IStepIconCtx, me: b.IBobrilNode) {
        me.children = [
            // "active:" + ctx.data.active + ", completed:" + ctx.data.completed,
            b.styledDiv(ctx.data.children, stepIconStyle,
                {backgroundColor: (ctx.data.active || ctx.data.completed) ? m.primary1Color() : m.black} )//TODO color
        ];
    }
});

const stepIconStyle = b.styleDef({
    borderRadius: "50%",
    color: "white",
    width: "24px",
    height: "24px",
    fontSize: "0.75rem",
    fontFamily: "Roboto HelveticaArial sans-serif",
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle"
});