import 'package:flutter/material.dart';
import 'package:pokedex_app/models/pokemon.dart';

class PokemonInfo extends StatelessWidget {
  final Pokemon pokemon;

  const PokemonInfo({Key? key, required this.pokemon}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Container(
            padding: EdgeInsets.only(top: 25, left: 90, bottom: 5),
            child: Image.network(
              pokemon.image.toString(),
              width: 250,
            ),
          ),
          Expanded(
            child: Container(
              width: double.infinity,
              color: Colors.white,
              child: Container(
                  child: Column(
                children: [
                  Container(
                    padding: EdgeInsets.only(top: 40),
                    child: Text(
                      '#' + pokemon.id + ' ' + pokemon.name,
                      style: TextStyle(
                        fontSize: 40,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              )),
            ),
          )
        ],
      ),
    );
  }
}
