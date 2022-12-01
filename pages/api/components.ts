import {NextApiRequest, NextApiResponse} from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        title: 'Title of component from API',
        description: 'Description of component from API',
        data: 'Data of component from API',
    });
}
