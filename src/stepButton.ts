import * as b from "bobril";
import * as m from "../index";b
import * as t from "./transitions";


export interface IStepButtonData {
    children?: b.IBobrilChildren;
    action: Function;//todo ?
    active?: boolean;
    alternativeLabel?: boolean,
    completed?: boolean,
    disabled?: boolean,
    last?: boolean,
    optional?: b.IBobrilChildren,//node
    orientation?: m.StepperOrientation,
    index?: number
}

interface IStepButtonCtx extends b.IBobrilCtx {
    data: IStepButtonData;
}

export const StepButton = b.createVirtualComponent<IStepButtonData>({
    render(ctx: IStepButtonCtx, me: b.IBobrilNode) {
        b.style(me, stepButtonStyle);
        me.children = [
            m.Button({
                action: () => ctx.data.action(),
                disabled: ctx.data.disabled,
                children: ctx.data.children,
            }),
        ];
    }
});

const stepButtonStyle = b.styleDef({
    padding: 0,
    transition: t.easeOut(),
});