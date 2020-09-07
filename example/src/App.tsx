import './i18n';
import * as React from 'react';
import { StyleSheet, View, Linking, Button } from 'react-native';
import AttributedText from '@ahiho/react-native-attributed-text';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <AttributedText
        style={[styles.text, styles.welcome]}
        annotationProps={{
          link: {
            style: styles.link,
            onPress: () => {
              Linking.openURL('https://ahiho.com');
            },
          },
        }}
      >
        {t('welcome')}
      </AttributedText>
      <AttributedText
        style={styles.text}
        annotationProps={{
          bold: {
            style: styles.bold,
            onPress: () => {
              Linking.openURL(
                'https://github.com/ahiho/react-native-attributed-text'
              );
            },
          },
        }}
      >
        {t('love')}
      </AttributedText>
      <View style={styles.languageButtons}>
        <Button
          title="English"
          onPress={() => {
            i18n.changeLanguage('en-US');
          }}
        />
        <Button
          title="Tiếng Việt"
          onPress={() => {
            i18n.changeLanguage('vi-VN');
          }}
        />
        <Button
          title="中文"
          onPress={() => {
            i18n.changeLanguage('zh-CN');
          }}
        />
        <Button
          title="한국어"
          onPress={() => {
            i18n.changeLanguage('kr-KR');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  languageButtons: {
    marginVertical: 30,
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 4,
  },
  welcome: {
    lineHeight: 60,
  },
  link: {
    fontWeight: 'bold',
    color: 'orange',
  },
  bold: {
    fontWeight: 'bold',
    color: 'red',
    textDecorationLine: 'underline',
  },
  text: {
    textAlign: 'center',
  },
});
