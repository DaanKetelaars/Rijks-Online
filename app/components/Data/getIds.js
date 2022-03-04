const getIds = () => {
    const figs = document.querySelectorAll('figure');
    const showIds = figs.forEach(item => {
        console.log(item.id);
    })
    return showIds
}
export {
    getIds
}