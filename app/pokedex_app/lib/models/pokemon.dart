import 'package:pokedex_app/infra/string/capitalize.dart';

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
      name: capitalize(json['name']),
      image: json['image'],
    );
  }
}
