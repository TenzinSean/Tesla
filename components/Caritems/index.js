import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StylesButton from '../StylesButton';
import styles from './styles';

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image} = props.car;


    return (
        <View style={styles.carContainer}>
            <ImageBackground 
            source={image}  
            style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>
                    {name}
                </Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>


            <View style={styles.buttonContainer}>
                <StylesButton 
                        type="primary" 
                        content={"Custom Order"} 
                        onPress={() => {
                            console.warn("Custom Order was pressed");
                        }}
                />

                <StylesButton 
                        type="secondary" 
                        content={"Exiting Inventory"} 
                        onPress={() => {
                            console.warn("Exiting Inventory was pressed");
                        }}
                />
            </View>
      </View>
    );
};

export default CarItem;