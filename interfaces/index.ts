export interface FetchProps {
    title: string,
    description: string,
    data: string
}



//Account

export interface inputProps {
    name: string,
    type: string,
    required: boolean,
    maxLength: number,
    minLength: number,
    label: string
}

export interface footerButtonProps {
    title: string,
    route?: string,
    variant: string,
    color: string,
    type: string,
    action?: () =>  void
}

export interface MainAreaProps {
    topSection: {
        header: {
            title: string,
            subtitle: string,
            text: string
        }
    },

    middleSection: {
        header: {
            title: string
        },
        form: inputProps[],
        navigationButtons: footerButtonProps[],
    },

    bottomSection: {
        navigationButtons?: footerButtonProps[],
    }
}

export interface AccountDataProps {
    mainTitle : string,
    components: {
        mainArea: MainAreaProps
    }
}
