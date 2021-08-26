import React from 'react';

import Text from '@devsoutinho/universalui/src/components/Text/native';
import Box from '@devsoutinho/universalui/src/components/Box/native';
import Button from '@devsoutinho/universalui/src/components/Button/native';


// - Create the API for generate the QR Code
// - Add Dynamic CSS Properties (px, mx, py...)
// - Dark Mode support (backgroundColorDark="" textColorDark="")
export default function HomeScreen() {
  return (
    <Box background="primary500" flex="1" paddingTop="x20">
      <Box overflow="hidden" borderRadius="sm">
        {['display_1', 'heading_1', 'heading_2', 'heading_3', 'heading_4', 'heading_5', 'heading_6', 'body_1', 'body_2', 'body_3', 'body_4']
          .map((variant) => <Text key={variant} background="primary200" variant={variant as any} textColor="primary900" uppercase bold>{variant}</Text>)}
      </Box>
      <Button>Click here</Button>
    </Box>
  )
}
