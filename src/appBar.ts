import * as b from "bobril";
import * as btn from "./button";
import * as p from "./paper";
import * as styles from "./styles";

export enum AppBarPosition {
    absolute,
    static,
    fixed,
}

export interface IAppBarData {
    position: AppBarPosition;
    children?: b.IBobrilChildren;
    feature?: btn.Feature;
}

interface ICtx extends b.IBobrilCtx {
    data: IAppBarData;
}

export const AppBar = b.createComponent<IAppBarData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, [
            positionStyles[ctx.data.position || 0],
            colorizedStyles[ctx.data.feature || 0]
        ]);
        me.children = p.Paper({
            children: ctx.data.children,
            style: { backgroundColor: "transparent" }
        });
    }
});

let root = b.styleDef({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    flexShrink: 0
});

let positionStyles = [
    b.styleDef([root, {
        position: 'absolute',
        top: 0,
        left: 'auto',
        right: 0
    }]),
    b.styleDef([root, {
        position: 'static',
        flexShrink: 0
    }]),
    b.styleDef([root, {
        position: 'fixed',
        top: 0,
        left: 'auto',
        right: 0
    }])
]

let colorizedStyles = [
    b.styleDef({
        backgroundColor: styles.alternateTextColor,
        color: styles.textColor
    }),
    b.styleDef({
        backgroundColor: styles.accent1Color,
        color: styles.alternateTextColor
    }),
    b.styleDef({
        backgroundColor: styles.primary1Color,
        color: styles.alternateTextColor
    })
];