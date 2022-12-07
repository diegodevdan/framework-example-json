import {NavigationLayout} from "../../layouts";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect, useState} from "react";
import {AccountDataProps, FetchProps, inputProps, MainAreaProps} from "../../interfaces";
import styles from './styles.module.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Grid} from '@mantine/core';
import {useRouter} from "next/router";
import {setAccountData} from "../../store/slices/account-component";
import classNames from "classnames";

interface InputProps {
    name: string,
    firstLastName: string,
    secondLastName: string,
    birthday: string,
}

export default function AccountPage() {
    const {push} = useRouter();
    const dispatch = useAppDispatch();
    const {account} = useAppSelector(state => state.componentsData);
    const accountInfo = useAppSelector(state => state.accountComponent);
    const {loadData} = account;
    const [gridFormColumns, setGridFormColumns] = useState(1);
    const [sortedInputs, setSortedInputs] = useState<inputProps[]>([]);

    const [info, setInfo] = useState({} as AccountDataProps);

    const [{topSection, middleSection, bottomSection}, setMainArea] = useState({} as MainAreaProps);

    const {register, handleSubmit, getValues, formState: {errors}, setValue} = useForm<InputProps>();

    const getData = async () => {
        const resp = await fetch(loadData);
        const data = await resp.json();
        setInfo(data);
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (!info.components) return;
        setMainArea(info.components.mainArea)
    }, [info]);

    const onSubmit: SubmitHandler<InputProps> = (data) => {
        dispatch(setAccountData(data));
        // @ts-ignore
        push(middleSection.navigationButtons[1].route);
    }

    function getGridForm(gridVersion:number) {
        switch (middleSection.grid) {
            case 1: {
                setGridFormColumns(12);
                break;
            };

            case 2: {
                setGridFormColumns(6);
                break;
            }

            case 3: {
                setGridFormColumns(4);
                break;
            }

            default: {
                setGridFormColumns(12);
                break;
            }
        }
    }

    useEffect(() => {
        if(!middleSection) return;
        getGridForm(middleSection.grid);
    }, [middleSection]);

    function setOrderInput(){
        if(!middleSection) return;
        const ordered = middleSection.form.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
        console.log(ordered);
        setSortedInputs(ordered)
        console.log(middleSection.form);
    }

    useEffect(() => {
        setOrderInput();
    }, [middleSection])

    const formatSpecialInputs = (event:any) => {
        const currentValue = event.target.value;
        const formatedValue = currentValue.substr(0, 3)+ '-' + currentValue.substr(3, 4)+ '-' + currentValue.substr(6, 4);
        if(currentValue.length < 9) return;
        // @ts-ignore
        setValue('phone', `${formatedValue}`);
    }


    const showConditionalsInputs = (inputStopper:string | undefined) => {
        const values = getValues();
        console.log(values)
        // @ts-ignore
        const inputStopperValue = values[inputStopper];
        console.log(inputStopperValue)

        if(inputStopperValue){
            return true
        }

        return false;
    }

    return (
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
                                    <Grid>
                                        {
                                            // middleSection.form.map(el => (
                                            sortedInputs.map(el => (
                                                <Grid.Col span={gridFormColumns}>
                                                    <div className={classNames(styles.contInput)}>
                                                        <div
                                                            className={styles.contLabel}
                                                            style={{
                                                                // @ts-ignore
                                                                textAlign: el.labelProps.alignText! || 'left'
                                                        }}>
                                                            <label
                                                                className={styles.label}
                                                                htmlFor={el.name}
                                                            >{el.label} {el.required && '*'}</label>
                                                        </div>
                                                        <input
                                                            // @ts-ignore
                                                            defaultValue={accountInfo[el.name]}
                                                            type={el.type}
                                                            required={el.required}
                                                            maxLength={el.maxLength}
                                                            minLength={el.minLength}
                                                            // @ts-ignore
                                                            {...register(el.name, {
                                                                onChange: formatSpecialInputs
                                                            })}
                                                        />
                                                    </div>
                                                </Grid.Col>
                                            ))
                                        }
                                    </Grid>


                                    <div className={styles.contButtons}>
                                        {
                                            middleSection.navigationButtons.map(el => (
                                                <Button
                                                    // @ts-ignore
                                                    variant={el.variant}
                                                    color={el.color}
                                                    // @ts-ignore
                                                    type={el.type}
                                                    radius="xs"
                                                    size={'md'}
                                                    className={styles.button}
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
