import HomeHeroPattern from '@devsoutinho/ui/src/patterns/HomeHeroPattern';
import Box from '@devsoutinho/ui/src/components/foundation/layout/Box';

export default function HomeScreen(): JSX.Element {
  return (
    <Box display="flex" flexDirection="column" flex="1">
      <HomeHeroPattern />
    </Box>
  );
}
