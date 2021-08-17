import Icon, { IconNames } from '../../components/foundation/Icon';
import Box from '../../components/foundation/layout/Box';
import Container from '../../components/foundation/layout/Container';
import Text from '../../components/foundation/Text';
import Link from '../../components/commons/Link';

export const navigationLinks: Array<{
  name: string;
  href: string;
  iconName: IconNames;
}> = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/devsoutinho',
    iconName: 'instagram',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/omariosouto',
    iconName: 'twitter',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/omariosouto',
    iconName: 'github',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/DevSoutinho',
    iconName: 'youtube',
  },
];

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <Box as="footer" className="bg-gray-800">
      <Container padded={false}>
        <Box
          display={{
            md: 'flex',
          }}
          mx="auto"
          py={{ xs: 'x12' }}
          px={{ xs: 'x4', sm: 'x6', lg: 'x8' }}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Box
            display="flex"
            justifyContent="center"
            order={{
              md: '2',
            }}
          >
            {navigationLinks.map(({ href, name, iconName }, index) => (
              <Box key={name} marginLeft={index === 0 ? 'x0' : 'x6'}>
                <Link
                  href={href}
                  hasIcon={false}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Text srOnly>{name}</Text>
                  <Icon name={iconName} aria-hidden="true" />
                </Link>
              </Box>
            ))}
          </Box>
          <Box marginTop={{ xs: 'x8', md: 'x0' }} order={{ md: '1' }}>
            <Text
              className="text-gray-400"
              variant="heading_1"
              textAlign="center"
            >
              &copy; {currentYear}{' '}
              <Link href="/">Mario Souto (DevSoutinho)</Link>. Todos os direitos
              reservados.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
