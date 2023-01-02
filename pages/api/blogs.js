import * as fs from 'fs'

export default function handler(req, res) {
    fs.readFile("blogData/data.json", 'utf-8', (err, data) => {
        res.status(200).json(JSON.parse(data))
    })

}

export const config = {
    api: {
        externalResolver: true,
    },
}