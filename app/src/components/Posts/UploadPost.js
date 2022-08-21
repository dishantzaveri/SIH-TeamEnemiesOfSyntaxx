import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
const UploadPost = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [ytLink, setYtLink] = useState('');
  const post = async () => {
    console.log(image);
    const formdata = new FormData();
    formdata.append('title', title);
    formdata.append('body', desc);
    formdata.append('images_post', image);

    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Token 72f957f003d1ae579df255c5e46c5adefcb0d7c7',
    );
    myHeaders.append(
      'Cookie',
      'csrftoken=o4q1Ihf3JTBVbPIRuFvCtHZVT3RHp0X8; sessionid=0rx0ut9910ocx5ggaz1l6en6khbzxg1n',
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://vismayvora.pythonanywhere.com/api/posts/', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    setTitle('');
    setDesc('');
    setYtLink('');
  };
  const selectImage = async () => {
    const res = await launchImageLibrary({
      mediaType: 'photo',
    });
    console.log(res.assets[0].uri);
    setImage({
      uri: res.assets[0].uri,
      name: res.assets[0].fileName,
      type: res.assets[0].type,
    });
  };
  return (
    <View
      style={{
        padding: 30,backgroundColor: '#fff',flex:1,
      }}>
      <TextInput
        value={title}
        onChangeText={e => setTitle(e)}
        style={styles.textInput}
        placeholder="Enter Title"
      />
      <TextInput
        value={desc}
        onChangeText={e => setDesc(e)}
        style={styles.textInput}
        placeholder="Enter Description"
      />
      <Button onPress={selectImage} title="Pick Image" />
      <TextInput
        value={ytLink}
        onChangeText={e => setYtLink(e)}
        style={styles.textInput}
        placeholder="Enter YouTube Link"
      />
      <Button title="Post" onPress={post} />
    </View>
  );
};

export default UploadPost;

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 16,
    marginVertical: 20,
  },
});
