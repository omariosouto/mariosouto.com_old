import 'package:flutter/material.dart';

class PokemonDetailsScreenArguments {
  final String pokemon_id;

  PokemonDetailsScreenArguments({required this.pokemon_id});
}

class PokemonDetailsScreen extends StatelessWidget {
  const PokemonDetailsScreen({Key? key}) : super(key: key);

  static const routeName = '/pokemon_details';

  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments
        as PokemonDetailsScreenArguments;

    return Scaffold(
      appBar: AppBar(
        title: Text('Pokémon id: ' + args.pokemon_id),
        // title: Text('Pokémon id: '),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate back to first screen when tapped.
            Navigator.pop(context);
          },
          child: const Text('Go back!'),
        ),
      ),
    );
  }
}
