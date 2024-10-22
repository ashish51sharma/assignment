import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; 
import home1 from '../assets/icons/home1.png';
import category from '../assets/icons/category.png';
import bell from '../assets/icons/bell.png';
import chat from '../assets/icons/chat.png';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homePressed: false,
            feedPressed: false,
            notificationPressed: false,
            chatPressed:false
        };
    }

    handlehomePress = () => {
        this.setState({ 
            homePressed: true, 
            feedPressed: false, 
            notificationPressed: false ,
            chatPressed:false

        });
    }

    handlefeedPress = () => {
        this.setState({ 
            feedPressed: true, 
            homePressed:false,
            notificationPressed: false ,
            chatPressed:false
        });
    }

    handlenotificationPress = () => {
        this.setState({ 
            notificationPressed: true, 
            homePressed:false,
            feedPressed: false, 
            chatPressed:false
        });
    }
    
    handlechatPress = () => {
        this.setState({ 
            chatPressed: true, 
            notificationPressed: false, 
            homePressed:false,
            feedPressed: false, 
        });
    }

    render() {
        return (
            <View style={styles.footerContainer}>
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={this.handlehomePress}
                >
                    <View
                        style={[
                            this.state.homePressed && { backgroundColor:'#E5E6E4',borderRadius: wp(50), width: wp(14), padding: wp(1.3) }
                        ]}
                    >
                        <Image
                            source={home1}
                            resizeMode="cover"
                            style={styles.footerIcon}
                        />
                   
                    <Text style={{ color: this.state.homePressed ? '#52899d' : '#fff',alignSelf:'center',fontWeight:'bold',fontSize:wp(2.5)}}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={this.handlefeedPress}
                >
                    <View
                        style={[
                            this.state.feedPressed && { backgroundColor:'#E5E6E4',borderRadius: wp(50), width: wp(14),padding: wp(1.3) }
                        ]}
                    >
                        <Image
                            source={category}
                            resizeMode="cover"
                            style={styles.footerIcon}
                        />
                        <Text style={{color: this.state.feedPressed ? '#52899d' : '#fff',alignSelf:'center',fontSize:wp(2.5),fontWeight:'bold'}}>Feed</Text>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={this.handlenotificationPress}
                >
                    <View
                        style={[
                            this.state.notificationPressed && { backgroundColor:'#fff',borderRadius: wp(80), width: wp(16),padding: wp(1.3) }
                        ]}
                    >
                        <Image
                            source={bell}
                            resizeMode="cover"
                            style={styles.footerIcon}
                        />
                    <Text style={{color: this.state.notificationPressed ? '#52899d' : '#fff',alignSelf:'center',fontWeight:'bold',fontSize:wp(2.5)}}>Notification</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={this.handlechatPress}
                >
                    <View
                        style={[
                            this.state.chatPressed && { backgroundColor:'#E5E6E4',borderRadius: wp(50), width: wp(14), padding: wp(1.3) }
                        ]}
                    >
                        <Image
                            source={chat}
                            resizeMode="cover"
                            style={styles.footerIcon}
                        />
                    <Text style={{color: this.state.chatPressed ? '#52899d' : '#fff',alignSelf:'center',fontWeight:'bold',fontSize:wp(2.5)}}>Chat</Text>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default FooterComponent;
// It is a External CSS of UI
const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: 'rgba(42,113,135,255)',
        height: hp(10),
        justifyContent: 'center',
        paddingHorizontal: wp(3),
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
    },
    footerIcon: {
        height: wp(6),
        aspectRatio: 1 / 1,
        alignSelf:'center'
    },
});
