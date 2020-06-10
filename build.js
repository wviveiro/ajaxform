const exec = async (command) => {
    const {execSync} = require('child_process');
    return await execSync(command, {stdio: 'inherit'});
}

const main = async () => {
    try {
        console.log('Remove old files');
        await exec('rm -rf ./dist');

        console.log('Build lib files');
        await exec("npm run babel");

        const path = require('path');
        const fs = require('fs');
        const csspath = path.resolve(`${__dirname}/src/styles/index.scss`);

        if (fs.existsSync(csspath)) {
            console.log('Building css file');
            await exec("npm run sass");
        }

        console.log('Done!');
    } catch (e) {
        console.log('Something went wrong');
        console.error(e);
    }

}

main();