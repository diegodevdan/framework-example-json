import {NavigationLayout} from "../../layouts";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect, useState} from "react";
import {AccountDataProps, FetchProps, MainAreaProps} from "../../interfaces";
import styles from './styles.module.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from '@mantine/core';
import {useRouter} from "next/router";
import {setAccountData} from "../../store/slices/account-component";

interface InputProps {
    name: string,
    firstLastName: string,
    secondLastName: string,
    birthday: string
}

export default function AccountPage(){
    const {push} = useRouter();
    const dispatch = useAppDispatch();
    const {account} = useAppSelector(state => state.componentsData);
    const accountInfo = useAppSelector(state => state.accountComponent);
    const {loadData} = account;

    const [info, setInfo] = useState({} as AccountDataProps);

    const [{topSection, middleSection, bottomSection}, setMainArea] = useState({} as MainAreaProps);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<InputProps>();

    const getData = async () => {
        const resp = await fetch(loadData);
        const data = await resp.json();
        setInfo(data);
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if(!info.components) return;
        setMainArea(info.components.mainArea)
    }, [info]);

    const onSubmit:SubmitHandler<InputProps> = (data) => {
        console.log(data)
        dispatch(setAccountData(data));
        push(middleSection.navigationButtons[1].route);
    }


    return(
        <NavigationLayout>
            <div className={styles.main}>
                <h1>{info.mainTitle}</h1>

                {
                    topSection && middleSection && bottomSection && (
                        <div className={styles.mainArea}>

                            <div className={styles.topSection}>
                                <h3>{topSection.header.title}</h3>
                                <h4>{topSection.header.subtitle}</h4>
                                <div className={styles.contText}>
                                    <p>{topSection.header.text}</p>
                                </div>
                            </div>

                            <div className={styles.middleSection}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {
                                        middleSection.form.map(el => (
                                            <div>
                                                <input
                                                    defaultValue={accountInfo[el.name]}
                                                    type={el.type}
                                                    required={el.required}
                                                    maxLength={el.maxLength}
                                                    minLength={el.minLength}
                                                    {...register(el.name)}
                                                />
                                            </div>

                                        ))
                                    }

                                    <div>
                                        {
                                            middleSection.navigationButtons.map(el => (
                                                <Button
                                                    variant={el.variant}
                                                    color={el.color}
                                                    type={'submit'}
                                                >
                                                    {el.title}
                                                </Button>
                                            ))
                                        }
                                    </div>

                                </form>
                            </div>

                            <div className={styles.bottomSection}>

                            </div>
                        </div>
                    )
                }
            </div>
        </NavigationLayout>
    )
}

