import {NextApiRequest, NextApiResponse} from "next";
import {AccountDataProps} from "../../interfaces";


const initState:AccountDataProps = {
    mainTitle: "Account Service",
    components: {
        mainArea: {
            topSection: {
                header: {
                    title: "Applicant Information",
                    subtitle: "Member Eligibility",
                    text: 'TEST: In order for Us to open Your membership, We ask that You deposit ' +
                        'the minimum required balance of $50 to Your Savings account. ' +
                        'Please note that the $50 remains on hold in Your account until ' +
                        'such time as You choose to close Your membership.'
                }
            },
            middleSection: {
                header: {
                    title: "Applicant Information"
                },
                grid: 3,
                form: [
                    {
                        order: 1,
                        name: 'name',
                        type: 'text',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'Name',
                        labelProps: {
                            alignText: 'left'
                        }
                    },
                    {
                        order: 3,
                        name: 'firstLastName',
                        type: 'text',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'First name',
                        labelProps: {
                            alignText: 'left'
                        }
                    },
                    {
                        order: 2,
                        name: 'secondLastName',
                        type: 'text',
                        required: false,
                        maxLength: 50,
                        minLength: 2,
                        label: 'Second name',
                        labelProps: {
                            alignText: 'left'
                        }
                    },
                    {
                        order: 4,
                        name: 'birthday',
                        type: 'date',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'Birthday',
                        labelProps: {
                            alignText: 'left'
                        }
                    },
                    {
                        order: 5,
                        name: 'test',
                        type: 'text',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'Test',
                        labelProps: {
                            alignText: 'right'
                        }
                    },
                    {
                        order: 6,
                        name: 'state',
                        type: 'text',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'State',
                        labelProps: {
                            alignText: 'right'
                        }
                    },
                    {
                        order: 7,
                        name: 'city',
                        type: 'text',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'City',
                        labelProps: {
                            alignText: 'right'
                        }
                    },
                    {
                        order: 8,
                        name: 'zip',
                        type: 'number',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'Zip',
                        dependents: ['city', 'state'],
                        labelProps: {
                            alignText: 'right'
                        }
                    },
                    {
                        isSpecial: true,
                        order: 9,
                        name: 'phone',
                        type: 'text',
                        required: true,
                        maxLength: 50,
                        minLength: 8,
                        label: 'Phone contact',
                        labelProps: {
                            alignText: 'right'
                        }
                    },
                ],

                navigationButtons: [
                    {
                        title: 'Back',
                        route: '/',
                        variant: 'outline',
                        color: 'dark',
                        type: 'button',
                    },
                    {
                        title: 'Next',
                        route: '/services-details',
                        variant: 'filled',
                        color: 'dark',
                        type: 'submit',
                    }
                ],
            }
            ,
            bottomSection: {
            }
        }
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(initState);
}
