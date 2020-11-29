export default () => {
    const today = new Date();
    const currentYear = parseInt(today.getFullYear(), 10);
    const startYear = 2006;
    let year = startYear;
    const yearArray = [year];
    while (year !== currentYear) {
        year += 1;
        yearArray.push(year);
    }
    return yearArray;
};
