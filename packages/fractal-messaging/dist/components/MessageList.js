var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import { LayoutProvider, DataProvider, AutoSizeRecyclerView, useTheme, Layer } from '@bma98/fractal-ui';
import { useSizeValue } from '@bma98/size-class';
import { ChatMessage } from './ChatMessage';
import { useGetTextHeight } from '../hooks/useGetTextHeight';
import { useChatMessageSize } from '../hooks/useChatMessageSize';
import { MESSAGE_AUDIO_HEIGHT } from '../constants';
const dataProvider = new DataProvider((rowOne, rowTwo) => {
    return rowOne !== rowTwo;
});
export function MessageList(_a) {
    var { messages, onFavoritePress, onSharePress, messageActions, getBubbleColor } = _a, layerProps = __rest(_a, ["messages", "onFavoritePress", "onSharePress", "messageActions", "getBubbleColor"]);
    const listView = useRef();
    const { spacings } = useTheme();
    const [dataProviderState, setDataProviderState] = useState(dataProvider.cloneWithRows(messages));
    const width = useSizeValue('width');
    const { height: chatMessageHeight } = useChatMessageSize();
    const getTextHeight = useGetTextHeight((width - spacings.m * 2) * 0.75 - (spacings.m * 2 + 6));
    const heights = messages.map(() => undefined);
    const messageHeightCalculator = useCallback((message) => {
        let contentHeight = 0;
        if (message.image || message.video) {
            contentHeight = chatMessageHeight;
        }
        else if (message.audio) {
            contentHeight = MESSAGE_AUDIO_HEIGHT;
        }
        else {
            contentHeight = getTextHeight(message.text);
        }
        return contentHeight + spacings.m * 3;
    }, [chatMessageHeight, getTextHeight, spacings.m]);
    const layoutProvider = useMemo(() => {
        return new LayoutProvider(() => {
            return 0;
        }, (_, dim, index) => {
            let height = heights[index];
            if (height != null) {
                dim.height = height;
            }
            else {
                height = messageHeightCalculator(messages[index]);
                heights[index] = height;
                dim.height = height;
                //console.log('HEIGHT: ', height);
            }
            dim.width = width;
            return;
        });
    }, [heights, messageHeightCalculator, messages, width]);
    useEffect(() => {
        setDataProviderState(dataProvider.cloneWithRows(messages));
    }, [messages, width]);
    const scrollToEnd = useCallback(() => {
        setTimeout(() => {
            if (listView.current) {
                listView.current.scrollToEnd();
            }
        });
    }, []);
    useEffect(() => {
        scrollToEnd();
    }, [dataProviderState, scrollToEnd]);
    const renderBubbleMessage = useCallback((_, data) => {
        return (React.createElement(ChatMessage, { message: data, key: data.id, onFavoritePress: onFavoritePress, onSharePress: onSharePress, messageActions: messageActions, getBubbleColor: getBubbleColor }));
    }, [getBubbleColor, messageActions, onFavoritePress, onSharePress]);
    return (React.createElement(Layer, Object.assign({ flex: 1 }, layerProps),
        React.createElement(AutoSizeRecyclerView, { ref: listView, key: width, layoutProvider: layoutProvider, dataProvider: dataProviderState, rowRenderer: renderBubbleMessage, initialRenderIndex: messages.length - 1 })));
}
//# sourceMappingURL=MessageList.js.map