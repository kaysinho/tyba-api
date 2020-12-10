const app = require('./app');

main = async () => {
    await app.listen(app.get('port'));
    console.log(`API on port ${app.get('port')}`);
}

main();