export interface WebProps {
    className?: string;
    pointerEvents?: 'none' | 'auto' | 'box-none';
    cursor?:
        | 'auto'
        | 'default'
        | 'none'
        | 'alias'
        | 'all-scroll'
        | 'cell'
        | 'context-menu'
        | 'help'
        | 'pointer'
        | 'progress'
        | 'wait'
        | 'crosshair'
        | 'text'
        | 'vertical-text'
        | 'copy'
        | 'move'
        | 'no-drop'
        | 'not-allowed'
        | 'col-resize'
        | 'e-resize'
        | 'ew-resize'
        | 'n-resize'
        | 'ne-resize'
        | 'ns-resize'
        | 'nw-resize'
        | 'nwse-resize'
        | 'row-resize'
        | 's-resize'
        | 'se-resize'
        | 'sw-resize'
        | 'w-resize';
    boxSizing?: 'border-box' | 'content-box';
    focusable?: boolean;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
}

export function extractWebProps({ borderStyle, cursor, pointerEvents, focusable, boxSizing = 'border-box' }: WebProps): string {
    return `
        -webkit-box-align: stretch;
        -webkit-box-direction: normal;
        -webkit-box-orient: vertical;
        ${cursor ? `cursor: ${cursor}` : ''};
        ${pointerEvents ? `pointer-events: ${pointerEvents === 'box-none' ? 'none' : pointerEvents}` : ''};
        ${boxSizing ? `box-sizing: ${boxSizing}` : ''};
        ${focusable ? `user-focus: ${focusable ? 'text' : 'none'}` : ''};
        ${borderStyle == null ? `border-style: solid` : ''};
    `;
}
