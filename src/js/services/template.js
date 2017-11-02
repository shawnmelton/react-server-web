import fs from 'fs'
import path from 'path'

class TemplateService {
    render(fileName, options, callback) {
        const file = path.resolve(__dirname, '../../html/'+ fileName)
        fs.readFile(file, 'utf8', (err, content) => {
            Object.keys(options).forEach((key, index) => {
                const regExp = new RegExp('<%'+ key +'%>', 'g')
                content = content.replace(regExp, options[key])
            })

            callback(content)
        })
    }
}

const service = new TemplateService()
export default service