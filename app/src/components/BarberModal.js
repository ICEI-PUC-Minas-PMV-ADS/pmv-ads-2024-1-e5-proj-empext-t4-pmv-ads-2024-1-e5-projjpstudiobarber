import React from "react";
import style from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import { Modal } from "react-native";

import ExpandIcon from '../assets/expand.svg';

const Modal = styled.Modal``;

const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end; 
`;

const ModalBody = styled.View`
    background-color: #83D6E3;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 300px;
    padding: 10px 20px 30px 20px;
`;

const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height:40px;
`;

export default ({show, setShow, user, service}) => {
    const navigation = useNavigation();

    const handleCloseButton = () => {
        setShow(false);
    }

    return(
        <Modal
            transparent={true}
            visible={show}
            animationType="slide"
        >

            <ModalArea>
                <ModalBody>
                    <CloseButton onPress={handleCloseButton}>
                        <ExpandIcon width="40"  height="40" fill="#000000"/>
                    </CloseButton>
                </ModalBody>
            </ModalArea>

        </Modal>
    );
}
