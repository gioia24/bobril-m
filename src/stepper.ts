import * as b from "bobril";
import * as m from "../index";

export enum StepperOrientation {
    vertical,
    horizontal
}

export interface IStepperComponentData {
    steps: b.IBobrilNode[];
    orientation: StepperOrientation;
    children?: b.IBobrilChildren;
    activeStep: number;
    // className: PropTypes.string,
    // connector: PropTypes.element,
    // nonLinear: PropTypes.bool,
}

interface IStepperCtx extends b.IBobrilCtx {
    data: IStepperComponentData;
}

export const Stepper = b.createComponent<IStepperComponentData>({
    render(ctx: IStepperCtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.steps.map(
                (s, index) => {
                    // s.active = ctx.data.activeStep == index;
                    return [ s,
                    (index != ctx.data.steps.length-1)? m.StepConnector() : null
                    ]
                }
    ),//TODO dipatch index
                ctx.data.orientation === StepperOrientation.horizontal
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
    flex: '0 0 auto',
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
    backgroundColor: "white",
    padding: "25px"

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

