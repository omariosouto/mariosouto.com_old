import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

String capitalize(String s) => s[0].toUpperCase() + s.substring(1);

class Pokemon {
  final String id;
  final String name;
  final String image;

  Pokemon({
    required this.id,
    required this.name,
    required this.image,
  });

  factory Pokemon.fromJson(Map<String, dynamic> json) {
    return Pokemon(
      id: json['id'],
      name: json['name'],
      image: json['image'],
    );
  }
}

Future<List<Pokemon>> fetchPokemon() async {
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

    // debugPrint('$pokemonsFromServer');

    return pokemonsFromServer
        .map((pokemon) => Pokemon.fromJson(pokemon))
        .toList();
  } else {
    throw Exception('Failed to load album');
  }
}

// ===========================================
// [ Components ] ============================
class PokemonCard extends StatelessWidget {
  final String id;
  final String title;
  final String image;

  const PokemonCard({
    Key? key,
    required this.title,
    required this.id,
    required this.image,
  }) : super(key: key);

  Widget build(BuildContext context) {
    return Container(
      width: 300,
      margin: const EdgeInsets.only(top: 20),
      decoration: BoxDecoration(
        color: Colors.grey[200],
        borderRadius: BorderRadius.all(Radius.circular(10)),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.5),
            spreadRadius: 5,
            blurRadius: 7,
            offset: Offset(0, 3), // changes position of shadow
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.all(20),
            child: SelectableText(
              id + ': ' + capitalize(title),
              textAlign: TextAlign.left,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(20),
            child: ElevatedButton(
              onPressed: () {
                // Navigate back to first screen when tapped.
                Navigator.pushNamed(context, '/details');
              },
              child: Text('Ver detalhes'),
            ),
          ),
          Center(
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Image.network(
                image,
                width: 200,
                height: 200,
                fit: BoxFit.contain,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// ===========================================

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
      ),
      // home: MyHomePage(title: 'Pokedex By: DevSoutinho'),
      initialRoute: '/',
      routes: {
        '/': (context) => MyHomePage(title: 'Pokedex By: DevSoutinho'),
        '/details': (context) => DetailsScreen(),
      },
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  late Future<List<Pokemon>> futureAlbum;

  @override
  void initState() {
    super.initState();
    futureAlbum = fetchPokemon();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: FutureBuilder<List<Pokemon>>(
          future: futureAlbum,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return ListView.builder(
                itemCount: snapshot.data!.length,
                itemBuilder: (context, int index) {
                  var pokemon = snapshot.data![index];
                  return PokemonCard(
                    id: pokemon.id,
                    title: pokemon.name,
                    image: pokemon.image,
                  );
                },
              );
            }

            if (snapshot.hasError) return Text('${snapshot.error}');
            return const CircularProgressIndicator();
          }),
    );
  }
}

class DetailsScreen extends StatelessWidget {
  const DetailsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Second Screen'),
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
