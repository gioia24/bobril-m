import * as b from "bobril";
import * as m from "../index";
import * as icons from 'bobril-m-icons';

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
            icons.actionCheckCircle(),
            b.styledDiv(
                ctx.data.index,
                stepIconStyle,
                {
                    backgroundColor: ctx.data.active
                        ? m.primary1Color()
                        : (ctx.data.completed
                            ? m.primary2Color()
                            : m.disabledColor())
                })
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
