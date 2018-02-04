import * as b from "bobril";
import * as m from "../index";


export interface IStepConnectorData {
    orientation?: m.StepperOrientation,
    children?: b.IBobrilChildren
}

interface IStepConnectorCtx extends b.IBobrilCtx {
    data: IStepConnectorData;
}

export const StepConnector = b.createVirtualComponent<IStepConnectorData>({
    render(ctx: IStepConnectorCtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.children, horizontalStepConnectorStyle)
        ];
    }
});

const stepConnectorStyle = b.styleDef({
    margin: 20,
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

    }]
);