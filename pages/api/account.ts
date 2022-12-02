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
                    text: 'In order for Us to open Your membership, We ask that You deposit ' +
                        'the minimum required balance of $50 to Your Savings account. ' +
                        'Please note that the $50 remains on hold in Your account until ' +
                        'such time as You choose to close Your membership.'
                }
            },
            middleSection: {
                header: {
                    title: "Applicant Information"
                },
                form: [
                    {
                        name: 'name',
                        type: 'text',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'Name *'
                    },
                    {
                        name: 'firstLastName',
                        type: 'text',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'First name *'
                    },
                    {
                        name: 'secondLastName',
                        type: 'text',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'Second name *'
                    },
                    {
                        name: 'birthday',
                        type: 'date',
                        required: true,
                        maxLength: 50,
                        minLength: 2,
                        label: 'Birthday *'
                    }
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
