const errorHandling = error => {
    if (error) {
        console.log(`log ${error}`);
        return false;
    } else {
        return true;
        console.log("dhdhdhd");
    }
}

export {
    errorHandling
}