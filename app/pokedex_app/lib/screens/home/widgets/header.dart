import 'package:flutter/material.dart';

class Header extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;

    return Container(
      padding: EdgeInsets.only(top: 40, left: 15, right: 15, bottom: 15),
      width: screenWidth * 0.8,
      child: Text(
        "What Pokémon are you looking for?",
        style: Theme.of(context).textTheme.headline4,
      ),
    );
  }
}
