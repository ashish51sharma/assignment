import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

import profile from '../assets/images/profile.png';
import fire from '../assets/icons/fire.png';
import search from '../assets/icons/search.png';

// It is a HeaderComponent
const HeaderComponent = () => {
    // UseState is used to update & manage data within component.
    const [searchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        console.log('Search icon clicked'); 
        setSearchVisible(prevState => !prevState);
        console.log('Search visibility: ', !searchVisible); 
    };

    return (
        // It is a UI of a HeaderComponent

        <View style={styles.headercontainer}>
            <View style={styles.contentcontainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={profile}
                        style={styles.profileImage}
                    />
                </View>
                <Text style={styles.name}>Hello! Johnny R.</Text>
            </View>
            <Text style={styles.name1}>What do you wanna learn today?</Text>
            
            <View style={styles.iconRow}>
                <TouchableOpacity>
                    <View style={styles.boxicon1}>
                        <Image style={styles.fireicon} source={fire} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleSearch}>
                    <View style={styles.boxicon2}>
                        <Image style={styles.searchicon} source={search} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* The Search input will be visible based on the state */}
            {searchVisible && (
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search here..."
                        placeholderTextColor="#999"
                    />
                </View>
            )}
        </View>
    );
};

export default HeaderComponent;

// It is an external CSS of UI

const styles = StyleSheet.create({
    headercontainer: {
        height: hp(18), 
        backgroundColor: 'rgba(42,113,135,255)',
        paddingHorizontal: wp(3),
        elevation: 8,
    },
    contentcontainer: {
        flexDirection: 'row',
    },
    imageContainer: {
        backgroundColor: '#fff',
        height: wp(10),
        width: wp(10),
        borderRadius: wp(7),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp(3),
        overflow: 'hidden',
        marginTop: hp(1.5),
    },
    profileImage: {
        height: hp(5),
        aspectRatio: 1 / 1,
        alignSelf: 'center',
        borderRadius: 50,
    },
    name: {
        color: '#fff',
        fontSize: wp(3),
        fontWeight: '500',
        marginTop: hp(2),
    },
    name1: {
        color: '#fff',
        fontSize: wp(3),
        fontWeight: '500',
        marginLeft: wp(13),
        marginTop: hp(-2),
    },
    iconRow: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: wp(70),
    },
    boxicon1: {
        backgroundColor: '#297086',
        borderWidth: 1,
        borderColor: '#fff',
        height: wp(10),
        width: wp(10),
        borderRadius: wp(7),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp(3),
        overflow: 'hidden',
        marginTop: hp(-4.5),
    },
    boxicon2: {
        backgroundColor: '#52899d',
        borderWidth: 1,
        borderColor: '#fff',
        height: wp(10),
        width: wp(10),
        borderRadius: wp(7),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp(3),
        overflow: 'hidden',
        marginTop: hp(-4.5),
    },
    fireicon: {
        height: wp(7),
        width: wp(10),
        aspectRatio: 1 / 1,
    },
    searchicon: {
        height: wp(7),
        width: wp(10),
        aspectRatio: 1 / 1,
    },
    searchContainer: {
        marginTop: hp(2),
        paddingHorizontal: wp(3),
    },
    searchInput: {
        backgroundColor: '#fff',
        height: hp(5),
        borderRadius: wp(2),
        paddingHorizontal: wp(3),
        fontSize: wp(3.5),
        color:'black'
    },
});
