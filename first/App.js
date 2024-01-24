import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  Switch,
} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app
      </Text>
      <Image source={require('./1.png')} style={styles.local_image} />
      <Image
        source={{
          uri: 'https://www.ibexa.co/var/site/storage/images/_aliases/ibexa_block/2/9/8/7/107892-10-eng-GB/880dbcd9afd1-ibexa-product-schema-2023-min.png',
        }}
        style={styles.local_image}
      />
      <TextInput placeholder='이름을 적어 주세요' />
      <Button title='버튼' onPress={() => alert('버튼 클릭')} />
      <StatusBar style='auto' />
      <Switch value={true} />
      <Switch value={false} />
      <ScrollView>
        <Text style={styles.text}>스크롤 뷰를 위한 공간</Text>
        <Text style={styles.space} />
        <Text style={styles.text}>스크롤 뷰를 위한 공간</Text>
        <Text style={styles.space} />
        <Text style={styles.text}>스크롤 뷰를 위한 공간</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  local_image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  space: {
    width: 100,
    height: 400,
  },
})
