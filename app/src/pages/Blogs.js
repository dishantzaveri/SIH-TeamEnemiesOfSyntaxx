import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { data, popular } from '../components/BlogData';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const Blogs = props => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://quotes.rest/qod?language=en", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, []);

    return (

        <ScrollView >
            <View style={styles.container}>
                <View style={styles.YourDailyRead}>
                    <View>
                        <Text style={styles.YourDailyReadText}>
                            Your Daily Read <Text style={styles.verticalLine}>|</Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        style={{ paddingHorizontal: 20 }}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <View>
                                        <TouchableOpacity

                                            onPress={() =>
                                                props.navigation.navigate('OpenBlogScreen', { data: item })
                                            }>
                                            <View>
                                                <Image
                                                    source={{ uri: item.image }}
                                                    style={{
                                                        width: width - 100,
                                                        height: height - 500,
                                                        borderRadius: 14,
                                                        marginRight: 30,
                                                    }}
                                                    resizeMode="cover"
                                                />
                                            </View>

                                            <View
                                                style={{
                                                    width: width - 90,
                                                    position: 'absolute',
                                                    bottom: 90,
                                                    left: 10,
                                                    paddingHorizontal: 10,
                                                }}>
                                                <Text
                                                    style={{
                                                        color: 'white',
                                                        fontSize: 24,
                                                        fontWeight: 'bold',
                                                        lineHeight: 28,
                                                    }}>
                                                    {item.title}
                                                </Text>
                                            </View>

                                            <View style={styles.profilePic2}>
                                                <View>
                                                    <Image
                                                        source={{ uri: item.profilePic }}
                                                        style={styles.profilePicStyle}
                                                        resizeMode="cover"
                                                    />
                                                </View>

                                                <View>
                                                    <View>
                                                        <Text
                                                            style={{
                                                                color: 'white',
                                                                fontSize: 16,
                                                                fontWeight: 'bold',
                                                            }}>
                                                            {item.author}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>

                {/* Your Daily Read End */}

                {/* POPULAR START */}

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 30,
                        paddingVertical: 15,
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: -5 }}>
                        Motivational Stories <Text style={styles.verticalLine}>|</Text>
                    </Text>
                </View>

                <FlatList
                    data={popular}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    onPress={() =>
                                        props.navigation.navigate('OpenBlogScreen', { data: item })
                                    }>
                                    <View style={styles.popularStories}>
                                        <View style={{ marginRight: 20 }}>
                                            <Image
                                                source={{ uri: item.image }}
                                                style={styles.BlogImage}
                                            />
                                        </View>

                                        <View style={{ width: '60%', marginTop: -10 }}>
                                            <Text></Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: '600',
                                                    marginBottom: 4,
                                                }}>
                                                {item.title}
                                            </Text>

                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    opacity: 0.4,
                                                }}>
                                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <View>
                                                        <Text style={{ fontSize: 12 }}>{item.author}</Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            marginHorizontal: 40,
                                                        }}>
                                                        <Feather
                                                            name="thumbs-up"
                                                            size={14}
                                                            color="#000"
                                                        />
                                                        <Text style={{ marginHorizontal: 4, fontSize: 12 }}>
                                                            {item.likes} Likes
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
            </View>
        </ScrollView>

    );
};

export default Blogs;

const styles = StyleSheet.create({
    tracksContainer: {
        marginVertical: 10,
        padding: 10,
        paddingTop: 0,
        paddingLeft: 20,
        position: 'relative',
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    trackTitle: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    track: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        position: 'relative',
    },
    trackContent: {
        width: 150,
        height: 150,
        backgroundColor: 'black',
        borderRadius: 10,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingBottom: 10,
    },
    trackImage: {
        opacity: 1,
    },
    YourDailyRead: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    YourDailyReadText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
    profilePicStyle: {
        width: 50,
        height: 50,
        borderRadius: 20,
        marginRight: 14,
    },
    profilePic2: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    popularStories: {
        flexDirection: 'row',
        paddingBottom: 30,
        paddingLeft: 30,
        alignItems: 'center',
        marginTop: 0,
    },
    BlogImage: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    verticalLine: {
        fontWeight: 'bold',
        color: "#face1b",
        fontSize: 30,
        textShadowRadius: 4,
        textShadowColor: 'grey',
    },
});
