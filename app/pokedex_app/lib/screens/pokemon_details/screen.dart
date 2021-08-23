import 'package:flutter/material.dart';
import 'package:pokedex_app/models/pokemon.dart';
import 'package:pokedex_app/screens/pokemon_details/widgets/pokemon_info.dart';

class PokemonDetailsScreenArguments {
  final Pokemon pokemon;

  PokemonDetailsScreenArguments({required this.pokemon});
}

class PokemonDetailsScreen extends StatelessWidget {
  const PokemonDetailsScreen({Key? key}) : super(key: key);

  static const routeName = '/pokemon_details';

  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments
        as PokemonDetailsScreenArguments;

    return Scaffold(
      backgroundColor: Colors.green.shade400,
      appBar: AppBar(
        iconTheme: IconThemeData(
          color: Colors.white,
        ),
        backgroundColor: Colors.transparent,
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.favorite),
            onPressed: () {
              Navigator.pop(context);
            },
          ),
        ],
        elevation: 0.0,
      ),
      body: PokemonInfo(
        pokemon: args.pokemon,
      ),
    );
  }
}
