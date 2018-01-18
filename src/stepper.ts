import * as b from "bobril";
import * as m from "./transitions";

export interface IStepperStep {
    children: b.IBobrilChildren;
}

export enum StepperOrientation {
    vertical,
    horizontal
}

export interface IStepperComponentData {
    steps: IStepperStep[];
    orientation: StepperOrientation;
    children: b.IBobrilChildren;
}

interface ICtx extends b.IBobrilCtx {
    data: IStepperComponentData;
}

export const Stepper = b.createComponent<IStepperComponentData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.steps.map(s => b.styledDiv(s.children)), ctx.data.orientation === StepperOrientation.horizontal
                ? horizontalStyle
                : ctx.data.orientation === StepperOrientation.vertical
                    ? verticalStyle
                    : stepperStyle),
            b.styledDiv(ctx.data.children, ctx.data.orientation === StepperOrientation.horizontal
                ? horizontalContentStyle
                : ctx.data.orientation === StepperOrientation.vertical
                    ? verticalContentStyle
                    : contentStyle)
        ];
    }
});

const contentStyle = b.styleDef({
    flex: '0 0 auto'
});

const horizontalContentStyle = b.styleDef([
    contentStyle,
    {
        marginLeft: -6
    }
]);

const verticalContentStyle = b.styleDef([
    contentStyle,
    {
        marginTop: -14
    }
]);

const stepperStyle = b.styleDef({
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
});

const verticalStyle = b.styleDef([
    stepperStyle,
    {
        flexDirection: 'column',
        alignItems: 'stretch'
    }
]);

const horizontalStyle = b.styleDef([
    stepperStyle,
    {
        flexDirection: 'row',
        alignItems: 'center'
    }
]);

export interface IStepButtonData {
    children?: b.IBobrilChildren;
    style?: b.IBobrilStyles;
}

interface IStepButtonCtx extends b.IBobrilCtx {

    data: IStepButtonData;
}

export const createStepButton = b.createComponent<IStepButtonData>({
    render(ctx: IStepButtonCtx, me: b.IBobrilNode) {
        b.style(me, stepButtonStyle);
        me.children = ctx.data.children;
    }
})

const stepButtonStyle = b.styleDef({
    padding: 0,
    transition: m.easeOut(),
})