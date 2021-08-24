import Box from '@devsoutinho/ui/src/components/foundation/layout/Box';
import Button from '@devsoutinho/ui/src/components/commons/Button';
import Text from '@devsoutinho/ui/src/components/foundation/Text';
// import Icon from '@devsoutinho/ui/src/components/foundation/Icon';

const BackgroundDetails = (): JSX.Element => (
  <Box
    display={{ xs: 'none', sm: 'block' }}
    position={{ sm: 'absolute' }}
    top={{ sm: '0' }}
    bottom={{ sm: '0' }}
    width="100%"
    height="100%"
    className="sm:w-full"
    aria-hidden="true"
  >
    <Box position="relative" mx="auto" height="100%" maxWidth="xcontainer_xl">
      <Box
        as="svg"
        right="100%"
        position="absolute"
        transform={{
          xs: 'translateY(x1/4) translateX(x1/4)',
          lg: 'translateY(x1/4) translateX(x1/2)',
        }}
        width="404px"
        height="784px"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <Box
              as="rect"
              x={0}
              y={0}
              color="neutral200"
              width="4px"
              height="4px"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={784}
          fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
        />
      </Box>
      <Box
        as="svg"
        left="100%"
        position="absolute"
        className="transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
        transform={{
          xs: 'translateY(-x3/4) translateX(x1/4)',
          md: 'translateY(-x1/2) translateX(x1/4)',
          lg: 'translateY(-x1/2) translateX(-x1/2)',
        }}
        width="404px"
        height="784px"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <Box
              as="rect"
              x={0}
              y={0}
              color="neutral200"
              width="4px"
              height="4px"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={784}
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        />
      </Box>
    </Box>
  </Box>
);

export default function HomeHeroPattern(): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      backgroundColor="neutral050"
      overflow="hidden"
      flex="1"
      justifyContent="center"
    >
      <BackgroundDetails />
      <Box
        position="relative"
        paddingTop="x6"
        paddingBottom={{ xs: 'x16', sm: 'x24' }}
      >
        <Box
          as="main"
          marginTop={{ xs: 'x16', sm: 'x24' }}
          mx="auto"
          px="x4"
          maxWidth="xcontainer_lg"
        >
          <Box textAlign="center">
            <Text as="h1" variant="heading_1">
              <Box
                as="span"
                color="primary600"
                display={{ xs: 'block', xl: 'inline' }}
              >
                Olá pessoas!
              </Box>{' '}
            </Text>
            <Text as="h1" variant="heading_2" bold>
              <Box as="span" color="neutral700" display="block" marginTop="x2">
                Eu sou Mario Souto (DevSoutinho)
              </Box>
            </Text>
            <Text
              as="p"
              marginLeft="auto"
              marginRight="auto"
              marginTop={{ xs: 'x3', md: 'x5' }}
              color="neutral700"
              maxWidth={{ xs: 'xcontainer_sm', md: 'xcontainer_md' }}
            >
              Esse projeto aqui faz parte do meu monorepo onde estou catalogando
              projetos com diversas teorias e boas práticas que eu uso/acredito
              se quiser acompanhar meu trabalho acessa lá ou confere uma das
              opções abaixo :)
            </Text>
            <Box
              mx="auto"
              marginTop={{ xs: 'x5', md: 'x8' }}
              maxWidth="xcontainer_md"
              display={{ sm: 'flex' }}
              justifyContent={{ sm: 'center' }}
            >
              <Box>
                <Button
                  fullWidth={{ xs: true, sm: false }}
                  href="https://youtube.com/DevSoutinho"
                  size="xl"
                >
                  Canal no YouTube
                </Button>
              </Box>
              <Box marginTop={{ xs: 'x3', sm: 'x0' }} marginLeft={{ sm: 'x3' }}>
                <Button
                  fullWidth={{ xs: true, sm: false }}
                  href="https://stars.github.com/profiles/omariosouto/"
                  size="xl"
                  action="tertiary"
                >
                  Minhas contribuições
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
