function saturdayFun(activity = "roller-skate") {
    if (typeof activity === undefined) {
        return "roller-skate";
    }
    console.log(`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity2 = "go to the office") {
    console.log(`This Monday, I will ${activity2}.`);
}

function wrapAdjective() {
    return function () {
        const param = "special";
        return `You are ${param}`
    }
}
// code your solution here
