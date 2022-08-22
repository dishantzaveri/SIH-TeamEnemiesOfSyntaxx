
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { moderateScale } from '../components/responsiveSize';
import { getAddressFromLatLong } from '../../utils/helperFunctions';
import { data } from '../latlong';


// create a component
const Location = () => {
    const [curLoc, setCurLoc] = useState({
        latitude: 30.7993,
        longitude: 76.9149,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const [address, setAddress] = useState('')

    const mapRef = useRef(null)

    const onCenter = () => {
        console.log(mapRef)
        mapRef.current.animateToRegion(curLoc)
    }

    // const onRegionChange = async(props) =>{
    //     // console.log("props==>>>",props)
    //     const {latitude, longitude} = props
    //     const res = await getAddressFromLatLong(`${latitude}, ${longitude}`)
    //     console.log("res==>>>>>",res)
    //     setAddress(res.address)

    // }
    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef}
                style={StyleSheet.absoluteFill}
                initialRegion={curLoc}
                // onRegionChangeComplete={onRegionChange}
            >

                {data.map((val, i) => {
                    return (
                        <Marker
                            coordinate={val.coords}
                           
                        />
                    )
                })}
            </MapView>

            {/* <View style={styles.headerView}>
                <HomeHeader
                    setting={imagePath.icSetting}
                    centerText={address}
                />
            </View> */}
            {/* <View style={styles.bottomView}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                    <Circulerbtn
                        text={strings.MY_BITMOJI}
                    />

                    <TouchableOpacity onPress={onCenter} style={styles.navigationView}>
                        <Image source={imagePath.icNavigation} />
                    </TouchableOpacity>

                    <Circulerbtn
                        text={strings.FRIENDS}
                    />
                </View>
            </View> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    bottomView: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
    },
    headerView: {
        position: 'absolute',
        top: 36,
        left: 24,
        right: 24,
    },
    navigationView: {
        width: moderateScale(35),
        height: moderateScale(35),
        borderRadius: moderateScale(35 / 2),
        backgroundColor: '#white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default Location;
