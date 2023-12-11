import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([{
        message: 'Please enter the URL: ',
        name: 'URL',
    }])
    .then((answers) => {
        const inputUrl = answers.URL;
        const qrCode = qr.image(inputUrl);
        qrCode.pipe(fs.createWriteStream('qr-image.png'));
    });