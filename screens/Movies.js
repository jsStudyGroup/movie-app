import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default ({navigation}) => (
    <>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
            <Text>Go to Detail -></Text>
        </TouchableOpacity>
    </>
)