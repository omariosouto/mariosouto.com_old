import 'package:flutter/material.dart';
import 'package:pokedex_app/screens/pokemon_details/pokemon_details_screen.dart';
import 'package:pokedex_app/screens/home/widgets/screen.dart';

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
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/pokemon_details': (context) => DetailsScreen(),
      },
    );
  }
}
