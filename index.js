function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function f(place = 'go to the office') {
    return `This Monday, I will ${place}.`;
}
mondayWork('work from home');

function wrapAdjective(symbol = '*') {
    return function(compliment = "a hard worker" ) {
        return `You are ${symbol}${compliment}${symbol}!`
    }
   }
wrapAdjective('||','a dedicated programmer');