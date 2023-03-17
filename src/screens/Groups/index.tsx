import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpety } from '@components/ListEmpety';
import { Button } from '@components/Button';

import { Container } from './styles';

export function Groups() {

    const navigation = useNavigation();

    const [groups, setGroups] = useState<string[]>([]);


    function handleNewGroup() {
        navigation.navigate('new')
    }

    return (
        <Container>
            <Header />
            <Highlight
                title='Turmas'
                subtitle='jogue com sua turma!'
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() =>
                    <ListEmpety message='Que tal cadastrar a primeira turma?' />
                }
            />

            <Button
                title='Criar nova turma'
                onPress={handleNewGroup}
            />

        </Container>
    );
}

