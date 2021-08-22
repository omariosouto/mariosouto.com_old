import 'package:flutter/material.dart';
import 'package:pokedex_app/models/pokemon.dart';

class PokemonListItem extends StatelessWidget {
  final Pokemon pokemon;

  const PokemonListItem({Key? key, required this.pokemon}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Column(
            children: [
              Image.network(
                pokemon.image.toString(),
                width: 50,
              ),
              Text(pokemon.name.toString()),
            ],
          ),
        ],
      ),
    );
  }
}

class PokemonList extends StatelessWidget {
  final List<Pokemon>? pokemons;
  final bool loading;

  PokemonList({Key? key, this.pokemons, required this.loading})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        // color: Colors.green,
        padding: EdgeInsets.only(left: 15, right: 15),
        child: (loading)
            ? GridView.builder(
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  crossAxisSpacing: 5.0,
                  mainAxisSpacing: 5.0,
                ),
                itemCount: pokemons?.length,
                itemBuilder: (context, index) {
                  return PokemonListItem(pokemon: pokemons![index]);
                },
              )
            : Center(
                child: CircularProgressIndicator(),
              ),
      ),
    );
  }
}
