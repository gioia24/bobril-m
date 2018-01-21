import * as b from "bobril";
import * as t from "./transitions";
import * as m from "../index";

export enum StepperOrientation {
    vertical,
    horizontal
}

export interface IStepperComponentData {
    steps: IStepData[];
    orientation: StepperOrientation;
    children?: b.IBobrilChildren;
}

interface ICtx extends b.IBobrilCtx {
    data: IStepperComponentData;
}

export const Stepper = b.createComponent<IStepperComponentData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.steps.map(
                (s, index) => {
                    return [b.styledDiv(s.children),
                    (index != ctx.data.steps.length-1)? StepConnector() : null
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

// StepButton

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
    orientation?: StepperOrientation,
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
                    StepLabel({completed:ctx.data.completed, active: ctx.data.active, index:ctx.data.index}),
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

// Step
export interface IStepData {
    children?: b.IBobrilChildren;
    key?: String;

    active?: boolean
    alternativeLabel?: boolean,
    classes?: object;
    className?: String;
    completed?: boolean;
    connector?: b.IBobrilChildren;
    disabled?: boolean;
    index?: Number;
    last?: boolean;
    orientation?: StepperOrientation,
}

export const Step = b.createComponent<IStepData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.children, stepStyle)
        ];
    }
});

const stepStyle = b.styleDef({
    padding: 0,
    float: "left"
    // transition: t.easeOut(),
    // backgroundColor: "red",
});

// StepIcon
export interface IStepIconData {
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
            b.styledDiv(ctx.data.children, stepIconStyle,
                {backgroundColor: (ctx.data.active || ctx.data.completed) ? "grey" : "#2196f3"} )//TODO color
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


// StepConnector
export interface IStepConnectorData {
    className: String,
    alternativeLabel: boolean,
    orientation?: StepperOrientation,
}

export const StepConnector = b.createComponent<IStepConnectorData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.children, horizontalStepConnectorStyle)
        ];
    }
});

const stepConnectorStyle = b.styleDef({
    // padding: 0,
    // display: 'block',
    flex: '1 1 auto',
    borderColor: "#bdbdbd",
});

// const verticalStepConnectorStyle = b.styleDef([
//     stepConnectorStyle,
//     {
//          marginLeft: 12, // half icon
//             // padding: `0 0 ${theme.spacing.unit}px`,
//          borderLeftStyle: 'solid',
//          borderLeftWidth: 1,
//          minHeight: 24,
//     }]
// );

const horizontalStepConnectorStyle = b.styleDef([
    stepConnectorStyle,
    {
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        width: "50px",//TODO

    }]
);

// StepLabel

export interface IStepLabelData {
    children?: b.IBobrilChildren;
    index?: number;
    completed?: boolean;
    active?: boolean;
}

interface IStepLabelCtx extends b.IBobrilCtx {
    data: IStepLabelData;
}

export const StepLabel = b.createComponent<IStepLabelData>({
    render(ctx: IStepLabelCtx, me: b.IBobrilNode) {
        me.children = [
            m.StepIcon({completed:ctx.data.completed, active: ctx.data.active,children:[ ctx.data.index]}),
            b.styledDiv(ctx.data.children, stepLabelStyle)
        ];
        b.styledDiv(me.children,stepLabelStyle)
    }
});

const stepLabelStyle = b.styleDef({
    padding: 0,
});