import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Type something here..."
        onChangeText={setText}
        value={text}
        style={{ borderWidth: 1, padding: 10, width: '80%' }}
      />
      {text ? <Text style={{ marginTop: 20 }}>You typed: {text}</Text> : null}
    </View>
  );
};

export default App;
