import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import {
    Svg,
    Polygon
} from 'react-native-svg';

import { images, icons, COLORS, FONTS, SIZES } from '../../utilities/constants'

const Dashboard = () => {
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
            img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: images.nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
    ]);

    const [recentlyViewed, setRecentlyViewed] = React.useState([
        {
            id: 0,
            name: "Nike Metcon 4",
            img: images.nikeMetcon4,
            bgColor: "#414045",
            type: "TRAINING",
            price: "$119",
            sizes: [6, 7, 8]
        },
        {
            id: 1,
            name: "Nike Metcon 6",
            img: images.nikeMetcon6,
            bgColor: "#4EABA6",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11]
        },
        {
            id: 2,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Purple,
            bgColor: "#2B4660",
            type: "TRAINING",
            price: "$124",
            sizes: [6, 7, 8, 9]
        },
        {
            id: 3,
            name: "Nike Metcon 3",
            img: images.nikeMetcon3,
            bgColor: "#A69285",
            type: "TRAINING",
            price: "$99",
            sizes: [6, 7, 8, 9, 10, 11, 12, 13]
        },
        {
            id: 4,
            name: "Nike Metcon Free",
            img: images.nikeMetconFree,
            bgColor: "#A02E41",
            type: "TRAINING",
            price: "$108",
            sizes: [6, 7, 8, 9, 10, 11]
        },
    ]);

    function renderTrendingShoes(item, index) {
        var trendingStyle = {};

        if(index === 0) {
            trendingStyle = { marginLeft: SIZES.padding }
        }

        return (
            <TouchableOpacity
                style={{ height: 240, width: 180, justifyContent: 'center', marginHorizontal: SIZES.base, ...trendingStyle }}
            >
                <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>
                <View
                    style={[{
                        flex: 1, 
                        justifyContent: 'flex-end', 
                        marginTop: SIZES.base, 
                        borderRadius: 10, 
                        marginRight: SIZES.padding, 
                        paddingLeft: SIZES.radius,
                        paddingRight: SIZES.padding,
                        paddingBottom: SIZES.radius,
                        backgroundColor: item.bgColor 
                    }, styles.trendingShadow]}
                >
                    <View style={{ height: '35%', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.white }}>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </View>
                </View>

                <View style={{ position: 'absolute', top: 27, right: 0, width: '95%', height: '100%' }}>
                    <Svg height="100%" width="100%">
                        <Polygon 
                            points="0,0 160,0 160,80"
                            fill="white"
                        />
                    </Svg>
                </View>

                <Image 
                    source={item.img}
                    resizeMode='cover'
                    style={{
                        position: 'absolute',
                        top: 50,
                        right: 0,
                        width: '98%',
                        height: 80,
                        transform: [
                            { rotate: '-15deg' }
                        ]
                    }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold }}>TRENDING</Text>

            <View style={{ height: 260, marginTop: SIZES.radius }}>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trending}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item, index}) => renderTrendingShoes(item, index)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    trendingShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    }
});

export default Dashboard;