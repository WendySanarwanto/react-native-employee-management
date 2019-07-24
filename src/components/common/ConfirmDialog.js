import React from 'react';
import { Modal, Text, View } from 'react-native';

import { Button } from './Button';
import { CardSection } from './CardSection';

const ConfirmDialog = ( { children, visible, onAccept, onDecline } ) => {
  const { containerStyle, cardSectionStyle, textStyle } = styles;
  return (
    <Modal
      visible={ visible }
      transparent
      animationType='slide'
      onRequestClose={ () => {} }
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{ children }</Text>
        </CardSection>

        <CardSection style={cardSectionStyle}>
          <Button label="Yes" onClicked={ onAccept } />
          <Button label="No" onClicked={ onDecline } />
        </CardSection>
      </View>
    </Modal>
  );
};

const styles= {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { ConfirmDialog };
