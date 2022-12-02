import React, {FC, useEffect, useState} from 'react';
import {IconAlertCircle, IconCash, IconCircleCheck, IconCircleX, IconThumbUp, IconUser} from "@tabler/icons";
import {Text} from "@mantine/core";
import {openConfirmModal} from "@mantine/modals";
import styles from './styles.module.css';

interface TextProps {
    icon: string,
    text: number
}

interface CardGenericProps {
    data: {
        order: number,
        title: string,
        icon: string,
        backRoute: string,
        nextRoute: string,
        data: {
            text: TextProps[]
        }
    }
}



export const CardGeneric = (data: CardGenericProps) => {
    const [{data: Data}, setInitialData] = useState({} as CardGenericProps);

    useEffect(() => {
        setInitialData(data);
    }, [data])

    const getIcon = (icon:string) => {
        switch (icon) {
            case 'caution': return <IconAlertCircle className={styles.icon} color={'red'} />
            case 'user': return <IconUser className={styles.icon} color={'cyan'}/>
            case 'thumb': return <IconThumbUp className={styles.icon} color='brown'/>
            case 'cash': return <IconCash className={styles.icon} color={'green'}/>
            case 'success': return <IconCircleCheck className={styles.icon} color={'green'} size={20}/>
            case 'fail': return <IconCircleX className={styles.icon} color={'red'} size={20}/>
            default: break;
        }
    }

    const openModal = () => openConfirmModal({
        children: (
            <RenderData />
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('Confirmed'),
    });

    const RenderData = () => {
        return (
            <div
                className={styles.contCard}
                onClick={openModal}
            >
                <h1>{getIcon(Data.icon)} {Data && Data.title}</h1>

                <div>
                    {
                        Data.data.text.map(el => (
                            <p className={styles.text}>{getIcon(el.icon)} {el.text}</p>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className={styles.main}>
            {
                Data && <RenderData />
            }
        </div>
    );
};
