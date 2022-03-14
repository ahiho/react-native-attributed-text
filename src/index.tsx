import React from 'react';
import {
  TextProps,
  StyleProp,
  ViewStyle,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    root: {
      flexDirection: 'row',
    },
  });
};

interface TokenProps {
  content: string;
  annotation?: string;
}

interface AttributedTextProps extends TextProps {
  annotationProps?: {
    [key: string]: TextProps;
  };
  children: string;

  wrapperStyle?: StyleProp<ViewStyle>;
}

const AttributedText = ({
  children,
  annotationProps,
  wrapperStyle,
  style,
  ...props
}: AttributedTextProps) => {
  const styles = useStyles();
  const tokenizedText = () => {
    const parts = children.split(/(\[\[|\]\])/g);
    const tokens: Array<TokenProps> = [];
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part === '[[' || part === ']]') {
        continue;
      }
      if (part.includes(']:[')) {
        const splitedPart = part.split(']:[');
        const annotation = splitedPart[0];
        tokens.push({
          content: splitedPart[1],
          annotation,
        });
      } else {
        tokens.push({
          content: part,
        });
      }
    }
    return tokens;
  };

  const renderToken = (token: TokenProps, index: number) => {
    if (!token.annotation) {
      return !wrapperStyle ? (
        token.content
      ) : (
        <Text key={index} style={style}>
          {token.content}
        </Text>
      );
    }
    const tokenProps = annotationProps && annotationProps[token.annotation];
    return (
      <Text {...tokenProps} onPress={() => tokenProps.onPress(token.content)} key={index}>
        {token.content}
      </Text>
    );
  };

  if (wrapperStyle) {
    return (
      <View {...props} style={[styles.root, wrapperStyle]}>
        {tokenizedText().map(renderToken)}
      </View>
    );
  }

  return (
    <Text {...props} style={style}>
      {tokenizedText().map(renderToken)}
    </Text>
  );
};

export default AttributedText;
