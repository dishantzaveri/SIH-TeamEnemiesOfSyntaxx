import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
const GSTNumber = () => {
  const [gstNumber, setGstNumber] = useState(0);
  const {signUpToken} = useSelector(state => state.user);
  useEffect(() => {
    console.log(signUpToken);
  }, []);
  const gstVerification = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Token ${signUpToken}`);
    myHeaders.append(
      'Cookie',
      'csrftoken=XrZ21zawQLTzsfHhgMRb0aSPUt27OtRf; sessionid=tpxs6ge4xtu4f4shfqsqgnxc4niny1tz',
    );

    var formdata = new FormData();
    formdata.append('gstnumber', gstNumber);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'http://vismayvora.pythonanywhere.com/account/gstverify/',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  return (
    <View
      style={{
        padding: 20,
      }}>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter GST Number"
          value={gstNumber}
          onChangeText={e => setGstNumber(e)}
        />
      </View>
      <Button
        title="Add Startup"
        onPress={() => {
          gstVerification();
        }}
      />
    </View>
  );
};

const CINNumber = () => {
  const [name, setName] = useState('');
  const [cin, setCinNumber] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const {signUpToken} = useSelector(state => state.user);
  const sendCin = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Token ${signUpToken}`);
    myHeaders.append(
      'Cookie',
      'csrftoken=XrZ21zawQLTzsfHhgMRb0aSPUt27OtRf; sessionid=tpxs6ge4xtu4f4shfqsqgnxc4niny1tz',
    );

    var formdata = new FormData();
    formdata.append('cinnumber', cin); //'U74899DL1993PTC055015'

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://vismayvora.pythonanywhere.com/account/cinverify/',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <View
      style={{
        padding: 20,
      }}>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter CIN Number"
          value={cin}
          onChangeText={e => setCinNumber(e)}
        />
      </View>

      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Legal Name of Business"
          value={name}
          onChangeText={e => setName(e)}
        />
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Business Type"
          value={type}
          onChangeText={e => setType(e)}
        />
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Date of Registration"
          value={date}
          onChangeText={e => setDate(e)}
        />
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Location"
          value={location}
          onChangeText={e => setLocation(e)}
        />
      </View>
      <Button title="Add Startup" onPress={() => sendCin()} />
    </View>
  );
};

const PanNumber = () => {
  const [name, setName] = useState('');
  const [pan, setPanNumber] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const {signUpToken} = useSelector(state => state.user);
  const sendPan = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Token ${signUpToken}`);
    myHeaders.append(
      'Cookie',
      'csrftoken=XrZ21zawQLTzsfHhgMRb0aSPUt27OtRf; sessionid=tpxs6ge4xtu4f4shfqsqgnxc4niny1tz',
    );

    var formdata = new FormData();
    formdata.append('pannumber', pan); //'AADCS0472N'

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://vismayvora.pythonanywhere.com/account/panverify/',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <View
      style={{
        padding: 20,
      }}>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Pan Number"
          value={pan}
          onChangeText={e => setPanNumber(e)}
        />
      </View>

      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Legal Name of Business"
          value={name}
          onChangeText={e => setName(e)}
        />
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Business Type"
          value={type}
          onChangeText={e => setType(e)}
        />
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Date of Registration"
          value={date}
          onChangeText={e => setDate(e)}
        />
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Location"
          value={location}
          onChangeText={e => setLocation(e)}
        />
      </View>
      <Button
        title="Add Startup"
        onPress={() => {
          sendPan();
        }}
      />
    </View>
  );
};

const PatentNumber = () => {
  const [name, setName] = useState('');
  const [diaryNo, setDiaryNo] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [rockNo, setRockNo] = useState('');
  const {signUpToken} = useSelector(state => state.user);
  const sendPatent = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Token ${signUpToken}`);
    myHeaders.append(
      'Cookie',
      'csrftoken=XrZ21zawQLTzsfHhgMRb0aSPUt27OtRf; sessionid=tpxs6ge4xtu4f4shfqsqgnxc4niny1tz',
    );

    var formdata = new FormData();
    formdata.append('DairyNo', diaryNo);
    formdata.append('RocNo', rockNo);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://vismayvora.pythonanywhere.com/account/patentverify/',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  return (
    <View
      style={{
        padding: 20,
      }}>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Diary Number"
          value={diaryNo}
          onChangeText={e => setDiaryNo(e)}
        />
      </View>

      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Rock Number"
          value={rockNo}
          onChangeText={e => setRockNo(e)}
        />
      </View>

      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Legal Name of Business"
          value={name}
          onChangeText={e => setName(e)}
        />
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Business Type"
          value={type}
          onChangeText={e => setType(e)}
        />
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Date of Registration"
          value={date}
          onChangeText={e => setDate(e)}
        />
      </View>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: 'white',
          marginVertical: 20,
        }}>
        <TextInput
          placeholder="Enter Location"
          value={location}
          onChangeText={e => setLocation(e)}
        />
      </View>
      <Button title="Add Startup" onPress={() => sendPatent()} />
    </View>
  );
};

const AddStartups = () => {
  const [checked, setChecked] = useState('gst');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>
        <Text
          style={{
            padding: 15,
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Verify Your Company By
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <RadioButton
              value="gst"
              status={checked === 'gst' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('gst')}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'black',
              }}>
              Gst
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <RadioButton
              value="cin"
              status={checked === 'cin' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('cin')}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'black',
              }}>
              CIN
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <RadioButton
              value="pan"
              status={checked === 'pan' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('pan')}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'black',
              }}>
              Pan
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <RadioButton
              value="patent"
              status={checked === 'patent' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('patent')}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'black',
              }}>
              Patent
            </Text>
          </View>
        </View>
        {checked === 'gst' ? <GSTNumber /> : null}
        {checked === 'cin' ? <CINNumber /> : null}
        {checked === 'pan' ? <PanNumber /> : null}
        {checked === 'patent' ? <PatentNumber /> : null}
      </ScrollView>
    </View>
  );
};

export default AddStartups;

const styles = StyleSheet.create({});
