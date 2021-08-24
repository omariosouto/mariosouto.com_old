import 'package:flutter/material.dart';
import 'package:pokedex_app/screens/pokemon_details/screen.dart';
import 'package:pokedex_app/screens/home/screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pokedex App',
      theme: ThemeData(
        primarySwatch: Colors.red,
        accentColor: Colors.blue,
      ),
      initialRoute: HomeScreen.routeName,
      routes: {
        HomeScreen.routeName: (context) => HomeScreen(),
        PokemonDetailsScreen.routeName: (context) => PokemonDetailsScreen(),
      },
    );
  }
}
