import 'package:flutter/material.dart';
import 'dart:async';

import 'package:pokedex_app/models/pokemon.dart';
import 'package:pokedex_app/repositories/pokemons.dart';
import 'package:pokedex_app/screens/home/widgets/header.dart';
import 'package:pokedex_app/screens/home/widgets/pokemon_list.dart';

class HomeScreen extends StatefulWidget {
  HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late Future<List<Pokemon>> futurePokemons;

  @override
  void initState() {
    super.initState();
    futurePokemons = getAllPokemons();
  }

  @override
  Widget build(BuildContext context) {
    double statusWidth = MediaQuery.of(context).padding.top;
    return Scaffold(
      backgroundColor: Colors.white,
      body: Container(
        width: double.infinity,
        // color: Colors.orange,
        padding: EdgeInsets.only(top: statusWidth),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Header(),
            // SearchBar(),
            FutureBuilder<List<Pokemon>>(
                future: futurePokemons,
                builder: (context, snapshot) {
                  if (snapshot.hasError) return Text('${snapshot.error}');

                  return PokemonList(
                    loading:
                        snapshot.connectionState == ConnectionState.waiting,
                    pokemons: snapshot.data as List<Pokemon>,
                  );
                }),
          ],
        ),
      ),
    );
  }
}
