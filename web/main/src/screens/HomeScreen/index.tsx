import { useBrowserTheme } from '@devsoutinho/ui/src/theme/provider/UIThemeProvider';
import HomeHeroPattern from '@devsoutinho/ui/src/patterns/dynamic/HomeHeroPattern';
import Box from '@devsoutinho/ui/src/components/foundation/layout/Box';
import Button from '@devsoutinho/ui/src/components/commons/Button';
import Text from '@devsoutinho/ui/src/components/foundation/Text';

export default function HomeScreen(): JSX.Element {
  const browserTheme = useBrowserTheme();

  return (
    <Box>
      <HomeHeroPattern />
      <Text variant="heading_2" as="p" color="accent500">
        Get Started
      </Text>

      <Button color="neutral" onClick={() => browserTheme.toggleTheme()}>
        Dark mode toggler!
      </Button>
      <Button href="https://google.com/" action="secondary" color="neutral">
        Go to google
      </Button>
    </Box>
  );
}
