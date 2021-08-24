import 'package:flutter/material.dart';

class SearchBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(10),
      color: Colors.blue,
      child: Text("[search_bar] Search by pokémon Number"),
    );
  }
}
