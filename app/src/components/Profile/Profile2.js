import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    KeyboardAvoidingView,
    ScrollView,
    Modal
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import {
    Text,
    Card,
    RadioButton,
    Subheading,
    Button,
} from 'react-native-paper';
import { height, width } from '../../Consts';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile2 = ({ navigation }) => {
    const { colors } = useTheme();
    const [isModalVisible, setModalVisible] = useState(false);
    const [startdate, setStartDate] = useState('');
    const [enddate, setEndDate] = useState('');
    const [achievement, setAchievement] = useState('');
    const [authority, setAuthority] = useState('');
    const [year, setYear] = useState('');
    const [startdate2, setStartDate2] = useState('');
    const [enddate2, setEndDate2] = useState('');
    const [certificate, setCertificate] = useState('');
    const[authority1,setAuthority1]=useState('');
    const [year1,setYear1]=useState('');
    const [jobcategory, setJobcategory] = useState('');
    const [companyname, setCompanyname] = useState('');
    const [degree, setDegree] = useState('');
    const [schoolname, setSchoolname] = useState('');
    const works = ['I am currently working here.'];
    const study = ['I am currently pursuing here.'];
    const [studyhere, setStudyhere] = useState('');
    const [workhere, setWorkhere] = useState('')
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };
    const [isModalVisible1, setModalVisible1] = useState(false);
    const toggleModalVisibility1 = () => {
        setModalVisible1(!isModalVisible1);
    }
    const [isModalVisible2, setModalVisible2] = useState(false);
    const toggleModalVisibility2= () => {
        setModalVisible2(!isModalVisible2);
    }
    const [isModalVisible3, setModalVisible3] = useState(false);
    const toggleModalVisibility3 = () => {
        setModalVisible3(!isModalVisible3);
    }

    const sendEducation = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token 72f957f003d1ae579df255c5e46c5adefcb0d7c7");
        myHeaders.append("Cookie", "csrftoken=XrZ21zawQLTzsfHhgMRb0aSPUt27OtRf; sessionid=tpxs6ge4xtu4f4shfqsqgnxc4niny1tz");

        var formdata = new FormData();
        formdata.append("institute", "SVKM");
        formdata.append("start_date", "08-05-2020");
        formdata.append("end_date", "08-05-2022");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://vismayvora.pythonanywhere.com/account/education/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const sendExperience = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token 72f957f003d1ae579df255c5e46c5adefcb0d7c7");
        myHeaders.append("Cookie", "csrftoken=XrZ21zawQLTzsfHhgMRb0aSPUt27OtRf; sessionid=tpxs6ge4xtu4f4shfqsqgnxc4niny1tz");

        var formdata = new FormData();
        formdata.append("job_title", "CEO");
        formdata.append("company_name", "Google");
        formdata.append("start_date", "05-08-2020");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://vismayvora.pythonanywhere.com/account/experience/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <ScrollView>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Known Languages</Text>
                        <TouchableOpacity>

                            <Text style={{ fontSize: 18, color: '#00CFDE' }}>Add</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <Button style={styles.button1}><Text style={styles.nameInput2}>English X</Text></Button>
                        <Button style={styles.button1}><Text style={styles.nameInput2}>Hindi X</Text></Button>
                        <Button style={styles.button1}><Text style={styles.nameInput2}>Marathi X</Text></Button>
                    </View>


                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Education</Text>
                        <TouchableOpacity  onPress={toggleModalVisibility}>

                            <Text style={{ fontSize: 18, color: '#00CFDE' }}>Add</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent
                            visible={isModalVisible}
                            presentationStyle="overFullScreen"
                            onDismiss={toggleModalVisibility}>
                            <View style={styles.viewWrapper}>
                                <View style={styles.modalView}>
                                    <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Icon name="book" size={20} color="#00CFDE" style={{ margin: 10, }} />
                                        <Text style={{ margin: 10 }}>Add/Edit Work Education</Text>
                                        <Icon name="close" size={20} color="#00CFDE" style={{ margin: 10, }}     onPress={toggleModalVisibility}/>
                                    </View>
                                    <Subheading>Select school/college*</Subheading>
                                    <TextInput
                                        value={schoolname}
                                        onChangeText={setSchoolname}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />

                                    <Subheading>Select Degree*</Subheading>


                                    <TextInput
                                        value={degree}
                                        onChangeText={setDegree}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        multiline
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />
                                    <Subheading>From*</Subheading>
                                    <TextInput
                                        value={startdate}
                                        onChangeText={setStartDate}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                      
                                    />
                                    <Subheading>To*</Subheading>
                                    <TextInput
                                        value={enddate}
                                        onChangeText={setEndDate}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />
                                    <RadioButton.Group onValueChange={j => setStudyhere(j)} value={studyhere}>
                            <View style={{ flexDirection: 'column'}}>
                                {study.map((i, k) => (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginHorizontal: 10,
                                            alignItems: 'center',
                                        }}
                                        key={k}>
                                        <RadioButton value={i} color={colors.textAfter} />
                                        <Text style={{ fontSize: 15 }}>{i}</Text>
                                    </View>
                                ))}
                            </View>
                        </RadioButton.Group>
                                    <View style={styles.button2}>
                                        <Button style={styles.button3} labelStyle={styles.label1} >Delete
                                        </Button>
                                        <Button style={styles.button4} labelStyle={styles.label2} 
                                        // onPress ={sendEducation}
                                        >
                                            Save
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        
                    </View>
                    <Text style={styles.nameInput}>Please add Education, Get immediate access to jobs.</Text>

                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Achievements</Text>
                        <TouchableOpacity
                         onPress={toggleModalVisibility1}
                         >

                            <Text style={{ fontSize: 18, color: '#00CFDE' }}>Add</Text>

                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent
                            visible={isModalVisible1}
                            presentationStyle="overFullScreen"
                            onDismiss={toggleModalVisibility1}>
                            <View style={styles.viewWrapper1}>
                                <View style={styles.modalView1}>
                                    <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Icon name="book" size={20} color="#00CFDE" style={{ margin: 10, }} />
                                        <Text style={{ margin: 10 }}>Add/Edit Achievement</Text>
                                        <Icon name="close" size={20} color="#00CFDE" style={{ margin: 10, }}     onPress={toggleModalVisibility1}/>
                                    </View>
                                    <Subheading>Achievement*</Subheading>
                                    <TextInput
                                        value={achievement}
                                        onChangeText={setAchievement}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />

                                    <Subheading>Issuing Authority*</Subheading>


                                    <TextInput
                                        value={authority}
                                        onChangeText={setAuthority}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        multiline
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />
                                    <Subheading>Year*</Subheading>
                                    <TextInput
                                        value={year}
                                        onChangeText={setYear}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                      
                                    />
                                  
                                 
                                    <View style={styles.button2}>
                                        <Button style={styles.button3} labelStyle={styles.label1} >Delete
                                        </Button>
                                        <Button style={styles.button4} labelStyle={styles.label2}>Save
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                       
                    </View>
                    <Text style={styles.nameInput}>Please add Achievements, Get immediate access to jobs.</Text>

                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Work Experience</Text>
                        <TouchableOpacity  onPress={toggleModalVisibility2}>

                            <Text style={{ fontSize: 18, color: '#00CFDE' }}>Add</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent
                            visible={isModalVisible2}
                            presentationStyle="overFullScreen"
                            onDismiss={toggleModalVisibility2}>
                            <View style={styles.viewWrapper}>
                                <View style={styles.modalView}>
                                    <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Icon name="book" size={20} color="#00CFDE" style={{ margin: 10, }} />
                                        <Text style={{ margin: 10 }}>Add/Edit Work Experience</Text>
                                        <Icon name="close" size={20} color="#00CFDE" style={{ margin: 10, }}     onPress={toggleModalVisibility2}/>
                                    </View>
                                    <Subheading>Company name*</Subheading>
                                    <TextInput
                                        value={companyname}
                                        onChangeText={setCompanyname}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />

                                    <Subheading>Job Category*</Subheading>


                                    <TextInput
                                        value={jobcategory}
                                        onChangeText={setJobcategory}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        multiline
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />
                                    <Subheading>From*</Subheading>
                                    <TextInput
                                        value={startdate2}
                                        onChangeText={setStartDate2}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                      
                                    />
                                    <Subheading>To*</Subheading>
                                    <TextInput
                                        value={enddate2}
                                        onChangeText={setEndDate2}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />
                                    <RadioButton.Group onValueChange={j => setWorkhere(j)} value={workhere}>
                            <View style={{ flexDirection: 'column'}}>
                                {works.map((i, k) => (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginHorizontal: 10,
                                            alignItems: 'center',
                                        }}
                                        key={k}>
                                        <RadioButton value={i} color={colors.textAfter} />
                                        <Text style={{ fontSize: 15 }}>{i}</Text>
                                    </View>
                                ))}
                            </View>
                        </RadioButton.Group>
                                    <View style={styles.button2}>
                                        <Button style={styles.button3} labelStyle={styles.label1} >Delete
                                        </Button>
                                        <Button style={styles.button4} labelStyle={styles.label2} 
                                        // onPress ={sendExperience()}
                                        >Save
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <Text style={styles.nameInput}>Please add Experience, Get immediate access to jobs.</Text>

                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Certificates</Text>
                        <TouchableOpacity onPress={toggleModalVisibility3}>

                            <Text style={{ fontSize: 18, color: '#00CFDE' }}>Add</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent
                            visible={isModalVisible3}
                            presentationStyle="overFullScreen"
                            onDismiss={toggleModalVisibility3}>
                            <View style={styles.viewWrapper1}>
                                <View style={styles.modalView1}>
                                    <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Icon name="book" size={20} color="#00CFDE" style={{ margin: 10, }} />
                                        <Text style={{ margin: 10 }}>Add/Edit Certificate</Text>
                                        <Icon name="close" size={20} color="#00CFDE" style={{ margin: 10, }}     onPress={toggleModalVisibility3}/>
                                    </View>
                                    <Subheading>Certificate Name*</Subheading>
                                    <TextInput
                                        value={certificate}
                                        onChangeText={setCertificate}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />

                                    <Subheading>Issuing Authority*</Subheading>


                                    <TextInput
                                        value={authority1}
                                        onChangeText={setAuthority1}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        multiline
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                    />
                                    <Subheading>Year*</Subheading>
                                    <TextInput
                                        value={year1}
                                        onChangeText={setYear1}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor={colors.textAfter}
                                        style={{
                                            ...styles.nameInput5,
                                            borderColor: colors.lightblack,
                                            color: colors.text,
                                            //backgroundColor: colors.background,
                                        }}
                                      
                                    />
                                   
                                    <View style={styles.button2}>
                                        <Button style={styles.button3} labelStyle={styles.label1} >Delete
                                        </Button>
                                        <Button style={styles.button4} labelStyle={styles.label2}>Save
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <Text style={styles.nameInput}>Please add Certificate, Get immediate access to jobs.</Text>

                </View>
                <View style={styles.card2}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My Preference</Text>
                        <TouchableOpacity  >

                            <Text style={{ fontSize: 18, color: '#00CFDE' }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.nameInput1}>My preferred job form.</Text>
                        <Button style={styles.button}><Text style={styles.nameInput2}>Design</Text></Button>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.nameInput1}>My preferred job site.</Text>
                        <Button style={styles.button}><Text style={styles.nameInput2}>Bangalore</Text></Button>
                    </View>

                </View>
                <View style={styles.card3}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Personal Information</Text>
                        <TouchableOpacity>

                            <Text style={{ fontSize: 18, color: '#00CFDE' }}>Add</Text>
                        </TouchableOpacity>
                    
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.nameInput4}>Date of Birth.</Text>
                        <Text style={styles.nameInput3}>23rd Nov. 1997.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.nameInput4}>Gender.</Text>
                        <Text style={styles.nameInput3}>Male.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.nameInput4}>Current Salary.</Text>
                        <Text style={styles.nameInput3}>3 LPA.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.nameInput4}>Experience.</Text>
                        <Text style={styles.nameInput3}>1 year.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.nameInput4}>Qualification.</Text>
                        <Text style={styles.nameInput3}>Graduate.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.nameInput4}>Expected Salary.</Text>
                        <Text style={styles.nameInput3}>6 LPA.</Text>
                    </View>




                </View>








            </ScrollView>
        </View >
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        width: width * 0.9,
        alignSelf: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        // elevation: 3,
        // backgroundColor: '#fff',
        // shadowOffset: { width: 1, height: 1 },
        // shadowColor: '#333',
        // shadowOpacity: 0.05,
        // shadowRadius: 1,
        borderRadius: 15,
        height: height * 0.13,
        borderColor: '#D9D9D9',
        borderWidth: 1,
    },
    card2: {
        padding: 10,
        width: width * 0.9,
        alignSelf: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        // elevation: 3,
        // backgroundColor: '#fff',
        // shadowOffset: { width: 1, height: 1 },
        // shadowColor: '#333',
        // shadowOpacity: 0.05,
        // shadowRadius: 1,
        borderRadius: 15,
        height: height * 0.2,
        borderColor: '#D9D9D9',
        borderWidth: 1,
    },
    card3: {
        padding: 10,
        width: width * 0.9,
        alignSelf: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        // elevation: 3,
        // backgroundColor: '#fff',
        // shadowOffset: { width: 1, height: 1 },
        // shadowColor: '#333',
        // shadowOpacity: 0.05,
        // shadowRadius: 1,
        borderRadius: 15,
        height: height * 0.3,
        borderColor: '#D9D9D9',
        borderWidth: 1,
    },
    nameInput: { fontSize: 12, color: '#808080', margin: 10, },
    nameInput1: {
        fontSize: 12, color: '#808080', margin: 15, alignSelf: 'center', justifyContent: 'center', alignContent: 'center'
    },
    nameInput2: {

        fontSize: 10,
    },
    nameInput3: {

        color: '#000000',
        fontWeight: 'bold'
        , margin: 5,
    },
    nameInput4: {

        color: '#757575'
        , margin: 5,
    },
    nameInput5: {
        height: height * 0.05,
        borderWidth: 1,
        width: width * 0.7,
        margin: 5,

        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        padding: 10,
        borderRadius: 5,
    },
    linearGradient: {
        width: 70,
        paddingVertical: 3,
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
    button: {
        width: width * 0.36,
        height: height * 0.05,
        backgroundColor: '#B9E6EB',
    },
    button1: {
        width: width * 0.27,
        height: height * 0.04,
        backgroundColor: '#B9E6EB',
        margin: 3
    },
    button2: {

        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
        margin:10,
    },
    button3: {
        width: width * 0.25,
        alignSelf: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 10,
        alignContent: 'center',
        borderColor: '#EBE9E9',
        borderWidth: 1,
        borderRadius: 10,


    },
    button4: {
        width: width * 0.25,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#00CFDE',
        flexDirection: 'row',
        margin: 10,
        alignContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    viewWrapper: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalView: {
        alignItems: 'center',
        // justifyContent: 'center',
        position: 'absolute',
        top: '25%',
        left: '50%',
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
        height: height * 0.66,
        width: width * 0.8,
        backgroundColor: '#fff',
        borderRadius: 7,
    },
    viewWrapper1: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalView1: {
        alignItems: 'center',
        // justifyContent: 'center',
        position: 'absolute',
        top: '25%',
        left: '50%',
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
        height: height * 0.5,
        width: width * 0.8,
        backgroundColor: '#fff',
        borderRadius: 7,
    },
    textInput: {
        width: '80%',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        marginBottom: 8,
    },
    label1: {
        color: '#00CFDE',
        fontWeight: '100',
        fontSize: 12,


    },
    label2: {

        color: 'white',
        fontWeight: '100',
        fontSize: 12,
    },

});

export default Profile2;
