import React from 'react'
import { ActivityIndicator } from 'react-native'
import { TINT_COLOR, BG_COLOR } from '../constants/Colors'
import styled from 'styled-components'

const Conainer = styled.View`
    flex: 1;
    background-color: ${BG_COLOR};
    justify-content: center;
`


export default () => (
    <Conainer>
        <ActivityIndicator color={TINT_COLOR} size='small' />
    </Conainer>
)
