import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import PasswordInput from '../components/PassInput';
import Textinp from '../components/Textinp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import signInLogo from '../assets/signin.png';
import DropDownPicker from 'react-native-dropdown-picker';
function SignUpMentor({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Entrepreneur', value: 'entrepreneur'},
    {label: 'Mentor', value: 'mentor'},
  ]);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={signInLogo}
        style={{
          width: Dimensions.get('screen').width,
          height: 300,
        }}
        resizeMode="center"
      />
      <Textinp
        marginTop={20}
        iconShape="person"
        placeholder="Name"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        placeholderTextColor="grey"
      />

      <Textinp
        marginTop={20}
        iconShape="mail"
        placeholder="Email"
        autoComplete="email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholderTextColor="grey"
      />
      <PasswordInput
        placeholder="Password"
        autoComplete="password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholderTextColor="grey"
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select a Role"
        textStyle={{
          fontSize: 16,
        }}
        containerStyle={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          //saveData();
          navigation.navigate('Onboarding', {
            screen: 'Onboarding1',
            params: {
              email: email,
              password: password,
              name: name,
              role: value,
            },
          });
          // console.log("Signed Up");
        }}>
        <Text style={styles.textStyle}>Sign Up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textStyle: {
    color: 'white',
    // marginTop: 25,
    alignSelf: 'center',
    fontSize: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginLeft: wp('10%'),
  },
  animation: {
    width: 200,
    height: 200,
    margin: 25,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#0065ff',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    width: wp('85%'),
  },
});

export default SignUpMentor;
