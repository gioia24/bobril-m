import * as b from "bobril";
import * as m from "../index";


export interface IStepData {
    children?: b.IBobrilChildren;
    key?: String;

    active?: boolean;
    alternativeLabel?: boolean;
    classes?: object;
    className?: String;
    completed?: boolean;
    connector?: b.IBobrilChildren;
    disabled?: boolean;
    index?: Number;
    last?: boolean;
    orientation?: m.StepperOrientation,
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
