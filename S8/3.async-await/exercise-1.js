const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });

    await promise;
    console.log('Time out!');
};

runTimeOut();
