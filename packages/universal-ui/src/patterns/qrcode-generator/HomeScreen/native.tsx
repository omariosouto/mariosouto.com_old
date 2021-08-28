import React from 'react';

import Text from '@devsoutinho/universalui/src/components/Text/native';
import Box from '@devsoutinho/universalui/src/components/Box/native';
import Icon from '@devsoutinho/universalui/src/components/Icon/native';
import Button from '@devsoutinho/universalui/src/components/Button/native';

export default function HomeScreen() {
  return (
    <Box background="primary500" flex="1" paddingY="x20" paddingX="x2">
      <Box background="white">
        <Icon textColor="warning900" name="github" size="xl" />
        <Icon textColor="positive500" name="youtube" />
        <Icon textColor="negative500" name="check" />
      </Box>
      <Box overflow="hidden" borderRadius="sm">
        {['display_1', 'heading_1', 'heading_2', 'heading_3', 'heading_4', 'heading_5', 'heading_6', 'body_1', 'body_2', 'body_3', 'body_4']
          .map((variant) => <Text key={variant} background="primary200" variant={variant as any} textColor="primary900" bold>{variant}</Text>)}
      </Box>
      <Box flexDirection="row" alignItems="flex-start" marginTop="x4">
        {/* 4 - Add Link support */}
        {/* 5 - Add TextField support */}
        {/* 6 - Create Form Manager (Inside react commons) */}
        {/* 7 - Create the API for generate the QR Code */}
        {/* ? - Dark Mode support (backgroundColorDark="" textColorDark="") */}
        <Button action="primary" baseColor="accent" marginRight="x4">Click here!</Button>
        <Button
          action="primary"
          baseColor="accent"
          marginRight="x4"
          iconName="arrowLeft"
          iconColor="white"
          size="xl"
        >
          Icon Button
        </Button>
        <Button
          action="primary"
          baseColor="accent"
          marginRight="x4"
          iconName="arrowLeft"
          iconColor="white"
          iconPosition="left"
          size="xl"
        >
          Icon Button
        </Button>
        <Button action="primary" disabled>Click here!</Button>
      </Box>
      <Box flexDirection="column" marginTop="x4">
        <Button action="primary" baseColor="accent">Click here!</Button>
        <Button action="primary" disabled>Click here!</Button>
      </Box>
    </Box>
  )
}

/*


<Button iconName="bla">
  Bla
</Button>







*/ 
