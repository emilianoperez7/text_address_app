import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(AddressFormatterApp());
}

class AddressFormatterApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Formato de Dirección',
      theme: ThemeData(
        useMaterial3: true,
        colorSchemeSeed: Colors.deepPurple,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Conversor de Formato de Dirección'),
          centerTitle: true,
        ),
        body: AddressFormatter(),
      ),
    );
  }
}

class AddressFormatter extends StatefulWidget {
  @override
  _AddressFormatterState createState() => _AddressFormatterState();
}

class _AddressFormatterState extends State<AddressFormatter> {
  final TextEditingController _inputController = TextEditingController();
  final TextEditingController _outputController = TextEditingController();

  void _formatText() {
    final lines = _inputController.text.split('\n');
    String name = '';
    String phone = '';
    String street = '';
    String number = '';
    String floor = '';
    String betweenStreets = '';
    String reference = '';
    String neighborhood = '';
    String postalCode = '';
    String city = '';
    String state = '';
    String country = '';

    for (var line in lines) {
      if (line.startsWith('Dirección:')) {
        final match = RegExp(r'Dirección:\s*(.*),\s*(.*)').firstMatch(line);
        if (match != null) {
          street = match.group(1) ?? '';
          number = match.group(2) ?? '';
        }
      } else if (line.startsWith('+')) {
        phone = line.trim();
      } else if (line.startsWith('Piso:')) {
        floor = line.replaceFirst('Piso:', '').trim();
      } else if (line.startsWith('Entre calles:')) {
        betweenStreets = line.replaceFirst('Entre calles:', '').trim();
      } else if (line.startsWith('Referencia:')) {
        reference = line.replaceFirst('Referencia:', '').trim();
      } else if (line.startsWith('Colonia:')) {
        neighborhood = line.replaceFirst('Colonia:', '').trim();
      } else if (line.startsWith('Código postal:')) {
        postalCode = line.replaceFirst('Código postal:', '').trim();
      } else if (line.startsWith('Ciudad:')) {
        city = line.replaceFirst('Ciudad:', '').trim();
      } else if (line.startsWith('Provincia:')) {
        state = line.replaceFirst('Provincia:', '').trim();
      } else if (line.startsWith('País:')) {
        country = line.replaceFirst('País:', '').trim();
      } else if (line.isNotEmpty && name.isEmpty) {
        name = line.trim();
      }
    }

    // Construir la línea "Adress Bar"
    String addressBar = 'Calle $street #$number';

    if (floor.isNotEmpty) {
      addressBar += ' Dpto: $floor';
    }
    if (neighborhood.isNotEmpty) {
      addressBar += ' Col. $neighborhood';
    }
    if (betweenStreets.isNotEmpty) {
      addressBar += ' entre $betweenStreets';
    }
    if (reference.isNotEmpty) {
      addressBar += ' Ref: $reference';
    }

    final formatted = '''
Order  Size  -  Version - Name:  Number:
Adress:
Name: $name
Adress Bar: $addressBar
City: $city
State: $state
Country: ${_toFullCountryName(country)}
Postal Code: $postalCode
Phone: $phone
''';

    setState(() {
      _outputController.text = formatted;
    });
  }

  String _toFullCountryName(String short) {
    switch (short.toUpperCase()) {
      case 'MX':
        return 'MEXICO';
      case 'US':
        return 'USA';
      case 'ES':
        return 'SPAIN';
      case 'CO':
        return 'COLOMBIA';
      case 'AR':
        return 'ARGENTINA';
      case 'PE':
        return 'PERU';
      default:
        return short.toUpperCase();
    }
  }

  void _copyToClipboard() {
    if (_outputController.text.trim().isEmpty) return;
    Clipboard.setData(ClipboardData(text: _outputController.text));
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Texto copiado al portapapeles')),
    );
  }

  void _clearInput() {
    _inputController.clear();
    _outputController.clear();
  }

  @override
  Widget build(BuildContext context) {
    final isWide = MediaQuery.of(context).size.width > 800;

    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          Expanded(
            child: isWide
                ? Row(
                    children: [
                      _buildInputBox(),
                      SizedBox(width: 16),
                      _buildOutputBox()
                    ],
                  )
                : Column(
                    children: [
                      _buildInputBox(),
                      SizedBox(height: 16),
                      _buildOutputBox()
                    ],
                  ),
          ),
          Row(
            children: [
              ElevatedButton.icon(
                onPressed: _clearInput,
                icon: Icon(Icons.delete),
                label: Text('Borrar entrada'),
              ),
              SizedBox(width: 20),
              ElevatedButton.icon(
                onPressed: _formatText,
                icon: Icon(Icons.check),
                label: Text('Cambiar formato de dirección'),
              ),
              SizedBox(width: 350),
              ElevatedButton.icon(
                onPressed: _copyToClipboard,
                icon: Icon(Icons.copy),
                label: Text('Copiar dirección formateda'),
              ),
            ],
          )
        ],
      ),
    );
  }

  Widget _buildInputBox() {
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Entrada:', style: TextStyle(fontWeight: FontWeight.bold)),
          SizedBox(height: 6),
          Expanded(
            child: TextField(
              controller: _inputController,
              decoration: InputDecoration(
                hintText: 'Pegar aquí la dirección original...',
                border: OutlineInputBorder(),
              ),
              maxLines: null,
              expands: true,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildOutputBox() {
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Salida:', style: TextStyle(fontWeight: FontWeight.bold)),
          SizedBox(height: 6),
          Expanded(
            child: TextField(
              controller: _outputController,
              readOnly: true,
              style: TextStyle(fontFamily: 'Courier', fontSize: 14),
              decoration: InputDecoration(
                border: OutlineInputBorder(),
              ),
              maxLines: null,
              expands: true,
            ),
          ),
        ],
      ),
    );
  }
}
