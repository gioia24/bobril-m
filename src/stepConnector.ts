import * as b from "bobril";
import * as styles from "./styles";

export interface IStepConnectorData {
    children?: b.IBobrilChildren;
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
    borderColor: styles.borderColor,
});

const horizontalStepConnectorStyle = b.styleDef([
    stepConnectorStyle,
    {
        borderTopStyle: 'solid',
        borderTopWidth: 1
    }]
);