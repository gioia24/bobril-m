import * as b from "bobril";
import * as m from "../index";b
import * as t from "./transitions";


export interface IStepButtonData {
    children?: b.IBobrilChildren;
    style?: b.IBobrilStyles;
    action: Function;//todo ?
    active?: boolean;
    alternativeLabel?: boolean,
    className?: String,
    completed?: boolean,
    disabled?: boolean,
    icon?: b.IBobrilChildren,//node
    last?: boolean,
    optional?: b.IBobrilChildren,//node
    orientation?: m.StepperOrientation,
    index?: number
}

interface IStepButtonCtx extends b.IBobrilCtx {
    data: IStepButtonData;
}

export const StepButton = b.createComponent<IStepButtonData>({
    render(ctx: IStepButtonCtx, me: b.IBobrilNode) {
        b.style(me, stepButtonStyle);
        me.children = [
            m.Button({
                action: () => ctx.data.action(),
                disabled: ctx.data.disabled,
                children: [
                    m.StepLabel(ctx.data),
                    ctx.data.children]
            }),
        ];
    }
});

const stepButtonStyle = b.styleDef({
    float: "left",
    padding: 0,
    transition: t.easeOut(),
});