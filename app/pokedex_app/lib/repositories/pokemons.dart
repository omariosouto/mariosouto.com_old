import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:pokedex_app/models/pokemon.dart';

Future<List<Pokemon>> getAllPokemons() async {
  final apiResponse = await http.post(
    Uri.parse('https://metarepo.vercel.app/api/graphql'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({
      'query': '''
        query {
          pokemons {
            id
            name
            image
          }
        }
      ''',
    }),
  );

  if (apiResponse.statusCode == 200) {
    final pokemonsFromServer =
        jsonDecode(apiResponse.body)['data']['pokemons'] as List<dynamic>;

    final pokemons =
        pokemonsFromServer.map((pokemon) => Pokemon.fromJson(pokemon)).toList();

    return new Future.delayed(const Duration(seconds: 3), () => pokemons);
  } else {
    throw Exception('Failed to load pokémon list');
  }

  // final pokemons = pokemonsDirty.map((json) => Pokemon.fromJson(json)).toList();
  // return new Future.delayed(const Duration(seconds: 3), () => pokemons);
}
