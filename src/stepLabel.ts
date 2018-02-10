import * as b from "bobril";
import * as stepIcon from "./stepIcon";
import * as icons from 'bobril-m-icons';

interface IStepLabelData {
    icon?: b.IBobrilNode;
    children?: b.IBobrilChildren;
    stepNumber?: number;
    active: boolean;
    completed: boolean;
}

interface IStepLabelCtx extends b.IBobrilCtx {
    data: IStepLabelData;
}

export const StepLabel = b.createVirtualComponent<IStepLabelData>({
    render(ctx: IStepLabelCtx, me: b.IBobrilNode) {
        me.children = [
            ctx.data.icon
                ? ctx.data.icon
                : stepIcon.StepIcon(
                    {
                        active: ctx.data.active,
                        completed: ctx.data.completed
                    },
                    ctx.data.completed ? icons.actionCheckCircle() : ctx.data.stepNumber),
            b.styledDiv(ctx.data.children, stepLabelStyle)
        ];
    }
});

const stepLabelStyle = b.styleDef({
    padding: 5,
    verticalAlign: "middle",
});