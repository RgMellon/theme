import React from 'react';

import { useTheme } from '../../contexts/theme'
import { Text, TouchableOpacity } from 'react-native';


import * as S from './styles';

export function Home() {
    const {handleChangeTheme } = useTheme();
    return <S.Container>
        <S.Title> oi </S.Title>

        <TouchableOpacity onPress={handleChangeTheme}>
            <Text> Mudar tema </Text>
        </TouchableOpacity>
    </S.Container>
}