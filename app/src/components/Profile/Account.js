import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import React, { useEffect ,useState } from 'react';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Account() {
  const { colors } = useTheme();
  const {data, setData} = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 72f957f003d1ae579df255c5e46c5adefcb0d7c7");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://vismayvora.pythonanywhere.com/account/entrepreneur/", requestOptions)
      .then(response => response.text())
      .then(result =>{console.log(result) ; setData(result)} )
      .catch(error => console.log('error', error));
  }, []);

 
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <LinearGradient
          colors={[colors.primary, '#ADD8E6']}
          style={{ width: '100%', height: 200, position: 'relative' }}>
          <View
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              padding: 20,
              marginRight: 'auto',
              marginLeft: 'auto',
              top: 80,
              alignItems: 'center',
              elevation: 3,
              borderRadius: 10,
              width: '70%',
              alignSelf: 'center',
            }}>
            <Image
              source={{
                uri: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/sini-shetty-.jpg',
              }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                color: 'black',
                marginTop: 20,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Sini Shetty
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Entypo name="mail" size={22} color={colors.secondary} />
              <Text
                style={{
                  marginHorizontal: 10,
                  color: 'black',
                  fontSize: 16,
                }}>
                sinishetty@gmail.com
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome5
                name="birthday-cake"
                size={22}
                color={colors.secondary}
              />
              <Text
                style={{
                  marginHorizontal: 10,
                  color: 'black',
                  fontSize: 16,
                }}>
                19/09/2000
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={{ marginTop: 160, paddingHorizontal: 30 }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              elevation: 3,
              borderRadius: 20,
            }}>
            <View
              style={{
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                paddingBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
                About
              </Text>
              <AntDesign name="edit" color={colors.primary} size={22} />
            </View>
            <View
              style={{
                marginTop: 10,
              }}>
              <Text style={{ fontWeight: '600', color: 'black', fontSize: 14 }}>
                Experience:{' '}
              </Text>
              <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                <Text style={{ color: 'black', fontWeight: '600' }}>
                  Company:{' '}
                </Text>
                <Text style={{ color: 'black' }}> Google</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                <Text style={{ color: 'black', fontWeight: '600' }}>Role: </Text>
                <Text style={{ color: 'black' }}> Software Engineer</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                <Text style={{ color: 'black', fontWeight: '600' }}>
                  Period :{' '}
                </Text>
                <Text style={{ color: 'black' }}> 2020 June - 2021 July</Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
              }}>
              <Text style={{ fontWeight: '600', color: 'black', fontSize: 14 }}>
                Education :{' '}
              </Text>
              <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                <Text style={{ color: 'black', fontWeight: '600' }}>
                  College :{' '}
                </Text>
                <Text style={{ color: 'black' }}> DJ Sanghvi</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                <Text style={{ color: 'black', fontWeight: '600' }}>Year : </Text>
                <Text style={{ color: 'black' }}> 2018-2022</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                <Text style={{ color: 'black', fontWeight: '600' }}>
                  Course :{' '}
                </Text>
                <Text style={{ color: 'black' }}> Computer Engineering</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              elevation: 3,
              borderRadius: 20,
              marginTop: 20,
              marginBottom: 100,
            }}>
            <View
              style={{
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                paddingBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
                Startups
              </Text>
              <AntDesign name="edit" color={colors.primary} size={22} />
            </View>
            <View
              style={{
                marginVertical: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
                }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                }}
              />
              <View style={{ width: '80%', marginLeft: 10 }}>
                <Text
                  style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>
                  Tesla
                </Text>
                <Text style={{ color: 'black' }}>
                  Tesla, Inc. is an American multinational automotive and clean
                  .......
                </Text>
                <Text style={{ color: 'black', fontWeight: '600' }}>
                  2020 June - Present
                </Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
                }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                }}
              />
              <View style={{ width: '80%', marginLeft: 10 }}>
                <Text
                  style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>
                  Tesla
                </Text>
                <Text style={{ color: 'black' }}>
                  Tesla, Inc. is an American multinational automotive and clean
                  .......
                </Text>
                <Text style={{ color: 'black', fontWeight: '600' }}>
                  2020 June - Present
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
