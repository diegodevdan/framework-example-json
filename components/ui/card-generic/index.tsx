import React, {FC, useEffect, useState} from 'react';
import {IconAlertCircle, IconCash, IconCircleCheck, IconCircleX, IconThumbUp, IconUser} from "@tabler/icons";
import {Text} from "@mantine/core";
import {openConfirmModal} from "@mantine/modals";

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
            case 'caution': return <IconAlertCircle />
            case 'user': return <IconUser />
            case 'thumb': return <IconThumbUp />
            case 'cash': return <IconCash />
            case 'success': return <IconCircleCheck />
            case 'fail': return <IconCircleX />
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
            <div onClick={openModal}>
                <h1>{getIcon(Data.icon)} {Data && Data.title}</h1>

                <div>
                    {
                        Data.data.text.map(el => (
                            <p>{getIcon(el.icon)} {el.text}</p>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div>
            {
                Data && <RenderData />
            }
        </div>
    );
};
