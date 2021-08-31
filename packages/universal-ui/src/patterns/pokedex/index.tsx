import React from 'react';
import { SkynexComponents } from '../../libs/SkynexBridge/types';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function MainScreenWrapper({ Box, Text, Image }: SkynexComponents) {
  return function MainScreen(): JSX.Element {
    const [pokemons, setPokemons] = React.useState([]);
    React.useEffect(() => {
      fetch('https://metarepo.vercel.app/api/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: /* GraphQL */`
            query {
              pokemons {
                id
                name
                image
              }
            }
          `,
        }),
      })
        .then((res) => res.json())
        .then((gqlResponse) => {
          setPokemons(gqlResponse.data.pokemons);
        })
    });
    return (
      <Box as={{ web: 'main', mobile: 'ScrollView' }} flex="1" background="neutral050" paddingTop="x20" paddingX="x4">
        <Text variant="heading_1" textColor="negative500" bold>Welcome to my Pokedex!</Text>
        <Box flexWrap="wrap" flexDirection="row">
          {pokemons.map((pokemon) => (
            <Box key={pokemon.id} flex="1 1 200px" maxWidth="x96" flexDirection="column" background="white" margin="x4" padding="x4">
              <Text variant="body_1" textColor="neutral300" bold>#{pokemon.id} {capitalize(pokemon.name)}</Text>
              <Image src={pokemon.image} width="x20" height="x20" />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}
