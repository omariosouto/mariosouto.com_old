import 'package:flutter/material.dart';
import 'package:pokedex_app/models/pokemon.dart';
import 'package:pokedex_app/screens/pokemon_details/pokemon_details_screen.dart';

class PokemonListItem extends StatelessWidget {
  final Pokemon pokemon;

  const PokemonListItem({Key? key, required this.pokemon}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        primary: Colors.grey.shade400,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10), // <-- Radius
        ),
      ),
      onPressed: () {
        // Navigate back to first screen when tapped.
        Navigator.pushNamed(context, PokemonDetailsScreen.routeName,
            arguments: PokemonDetailsScreenArguments(
              pokemon_id: pokemon.id,
            ));
      },
      child: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[
            Stack(
              alignment: AlignmentDirectional.bottomCenter,
              clipBehavior: Clip.none,
              children: [
                Container(
                  padding: EdgeInsets.only(top: 25, left: 90, bottom: 5),
                  child: Image.network(
                    pokemon.image.toString(),
                    width: 80,
                  ),
                ),
                Positioned(
                  width: 200,
                  child: Container(
                    padding: EdgeInsets.only(left: 15, top: 15),
                    height: 130,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text("#" + pokemon.id.toString(),
                            style: TextStyle(
                                fontWeight: FontWeight.bold, fontSize: 14)),
                        Text(pokemon.name.toString(),
                            style: TextStyle(
                                fontWeight: FontWeight.bold, fontSize: 17)),
                        Container(
                          margin: EdgeInsets.only(top: 5),
                          child:
                              Text('Type 01', style: TextStyle(fontSize: 12)),
                          padding: EdgeInsets.only(
                              top: 4, bottom: 4, left: 8, right: 8),
                          decoration: BoxDecoration(
                            color: Colors.grey.shade300,
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
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
        padding: EdgeInsets.only(left: 15, right: 15),
        child: (!loading)
            ? GridView.builder(
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  crossAxisSpacing: 5.0,
                  mainAxisSpacing: 5.0,
                  childAspectRatio: 1.4,
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
