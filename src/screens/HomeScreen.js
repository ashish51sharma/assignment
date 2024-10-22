import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import rightarrow from '../assets/icons/rightarrow.png';
import mern from '../assets/images/mern.jpeg';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { data } from "../data/Data";
import FooterComponent from "../components/FooterComponent";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Assigned', // Initially, the Assigned is active
        };
    }

    handleTabPress = (tabName) => {
        this.setState({ activeTab: tabName });
        console.log(tabName + " tab clicked!");
    }

    handlePressIn = (tabName) => {
        this.setState({ activeTab: tabName });
    }

    handlePressOut = () => {
        this.setState({ activeTab: '' });
    }

    renderItem1 = ({ item }) => {
        return (
            <View>
                <View style={styles.flatlistcoursecontainer}>
                    <View style={styles.courseborder}>
                        <Image source={item.image1} style={styles.courseimage} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp(0.5) }}>
                        <Text style={styles.coursetext1}>{item.text1}</Text>
                        <Text style={styles.coursetext2}>{item.text2}</Text>
                    </View>
                    <Text style={styles.coursetext3}>{item.text3}</Text>
                </View>
            </View>
        );
    }
    renderItem2 = ({ item }) => {
        return (
            <View>
                <View style={
                   styles.learingcontainer
                }>
                    <View style={styles.learningborder}>
                        <Image source={item.image1} style={styles.learningimage} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp(0.5) }}>
                        <Text style={styles.learningtext1}>{item.text1}</Text>
                        <Text style={styles.learningtext2}>{item.text2}</Text>
                    </View>
                    <Text style={styles.learningtext3}>{item.text3}</Text>
                </View>
            </View>
        );
    }
    renderItem3 = ({ item }) => {
        return (
            <View>
                <View style={
                   styles.quizcontainer
                }>
                    <View style={styles.quizborder}>
                        <Image source={item.image1} style={styles.quizimage} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp(0.5) }}>
                        <Text style={styles.quiztext1}>{item.text1}</Text>
                        <Text style={styles.quiztext2}>{item.text2}</Text>
                    </View>
                    <Text style={styles.quiztext3}>{item.text3}</Text>
                </View>
            </View>
        );
    }

    render() {
        const { activeTab } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <HeaderComponent />
                <ScrollView>
                    <View style={styles.tabcontainer}>
                        <TouchableOpacity
                            onPress={() => this.handleTabPress('Ongoing')}
                            style={[
                                styles.tabButton,
                                activeTab === 'Ongoing' && styles.activeTabButton
                            ]}
                            activeOpacity={0.7}
                        >
                            <Text style={[
                                styles.tabtext,
                                activeTab === 'Ongoing' && styles.activeTabText
                            ]}>
                                Ongoing
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.handleTabPress('Assigned')}
                            style={[
                                styles.tabButton,
                                activeTab === 'Assigned' && styles.activeTabButton
                            ]}
                            activeOpacity={0.7}
                        >
                            <Text style={[
                                styles.tabtext,
                                activeTab === 'Assigned' && styles.activeTabText
                            ]}>
                                Assigned
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.handleTabPress('Explore')}
                            style={[
                                styles.tabButton,
                                activeTab === 'Explore' && styles.activeTabButton
                            ]}
                            activeOpacity={0.7}
                        >
                            <Text style={[
                                styles.tabtext,
                                activeTab === 'Explore' && styles.activeTabText
                            ]}>
                                Explore
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.courseHeader}>
                        <Text style={styles.coursetext}>Courses</Text>
                        <TouchableOpacity onPress={() => console.log('See more clicked')}>
                            <Text style={styles.coursetext5}>see more</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={rightarrow} style={styles.rightarrowicon} />

                    <View>
                        <FlatList
                            data={data.course}
                            renderItem={this.renderItem1}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                     
                        />
                    </View>

                    <View style={styles.courseHeader}>
                        <Text style={styles.coursetext}>Learning Paths</Text>
                        <TouchableOpacity onPress={() => console.log('See more clicked')}>
                            <Text style={styles.coursetext5}>see more</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={rightarrow} style={styles.rightarrowicon} />
                    <View>
                        <FlatList
                            data={data.learningpath}
                            renderItem={this.renderItem2}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                     
                        />
                    </View>
                    <View style={styles.courseHeader}>
                        <Text style={styles.coursetext}>Quiz</Text>
                        <TouchableOpacity onPress={() => console.log('See more clicked')}>
                            <Text style={styles.coursetext5}>see more</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={rightarrow} style={styles.rightarrowicon} />
                    <View>
                        <FlatList
                            data={data.quiz}
                            renderItem={this.renderItem3}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                  
                        />
                    </View>
                </ScrollView>
                <FooterComponent />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(233,244,248,255)',
        marginTop: hp(2),
        height: hp(6),
        paddingHorizontal: wp(3),
        width: wp(90),
        alignSelf: 'center',
        borderRadius: wp(3),
    },
    tabButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: wp(2),
        marginHorizontal: wp(1),
    },
    activeTabButton: {
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'rgba(42,113,135,255)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tabtext: {
        color: 'rgba(101,153,169,255)',
        fontSize: 16,
    },
    activeTabText: {
        color: '#fff',
    },
    courseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp(90),
        alignSelf: 'center',
        marginTop: hp(2),
    },
    coursetext: {
        fontWeight: 'bold',
        color: 'black',
    },
    coursetext5: {
        // fontWeight: 'bold',
        color: '#297FBB',
        fontSize:wp(3)
    },
  

    courseItemText: {
        color: 'black',
        marginTop: hp(1),
    },
    flatlistcoursecontainer: {
        backgroundColor: '#F9F9F8',
        height: hp(22),
        marginBottom: hp(2),
        width: wp(43),
        marginLeft: wp(5),
        marginTop: hp(3),
        borderRadius: wp(3),
        padding: wp(1),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 1
    },
    courseborder: {
        borderWidth: 1, borderStyle: 'dashed', borderColor: '#297FBB', borderRadius: wp(2)
    },
    courseimage:{
        height: hp(15), width: wp(39.3), borderRadius: wp(3), alignSelf: 'center'
    },
    coursetext1:{
         color: 'lightgrey', fontSize: wp(3) 
    },
    coursetext2:{
         color: '#7fc5f5', marginLeft: wp(1), fontSize: wp(3), alignSelf: 'center'
    },
    coursetext3:{
        color: 'black', fontWeight: 'bold', marginTop: hp(0.3)
    },
    learingcontainer:{
        backgroundColor: 'rgba(233,244,248,255)',
        height: hp(22),
        width: wp(43),
        marginBottom: hp(2),
        marginLeft: wp(5),
        marginTop: hp(3),
        borderRadius: wp(3),
        padding: wp(1),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 1
    },
    learningborder:{
        borderWidth: 1, borderStyle: 'dashed', borderColor: '#297FBB', borderRadius: wp(2)
    },
    learningimage:{
        height: hp(15), width: wp(39.3), borderRadius: wp(3), alignSelf: 'center'
    },
    learningtext1:{
         color: 'grey', fontSize: wp(3) 
    },
    learningtext2:{
        color: '#7fc5f5', marginLeft: wp(1), fontSize: wp(3), alignSelf: 'center'
    },
    learningtext3:{
        color: 'black', fontWeight: 'bold', marginTop: hp(0.3)
    },
    quizcontainer:{
        backgroundColor: '#F9F9F8',
        height: hp(22),
        marginBottom: hp(2),
        width: wp(43),
        marginLeft: wp(5),
        marginTop: hp(3),
        borderRadius: wp(3),
        padding: wp(1),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 1
    },
    quizborder:{
        borderWidth: 1, borderStyle: 'dashed', borderColor: '#297FBB', borderRadius: wp(2)
    },
    quizimage:{
        height: hp(15), width: wp(39.3), borderRadius: wp(3), alignSelf: 'center'
    },
    quiztext1:{
        color: 'lightgrey', fontSize: wp(3)
    },
    quiztext2:{
        color: '#7fc5f5', marginLeft: wp(1), fontSize: wp(3), alignSelf: 'center'
    },
    quiztext3:{
        color: 'black', fontWeight: 'bold', marginTop: hp(0.3)
    },
    rightarrowicon:{
        aspectRatio: 1 / 1, height: hp(1), width: wp(3), marginTop: hp(-1.9), alignSelf: 'center', marginLeft: wp(93)
    }
});
