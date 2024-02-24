document.addEventListener('DOMContentLoaded', function() {
    const $departureChance = document.getElementById('accumulation-departure-chance');
    const $savedMoney = document.getElementById('accumulation-saved-money');

    if($departureChance && $savedMoney) {
        const randomizeAccumulationData = () => {
            $departureChance.innerText = `${getRandomInt(0, 100)}%`;
            $savedMoney.innerText = `${getRandomInt(300, 990)}$`;
        };

        document.getElementById('accumulation-there').addEventListener('change', randomizeAccumulationData);
        document.getElementById('accumulation-back').addEventListener('change', randomizeAccumulationData);
    }
});


/** -- Utils section -- **/

// Have taken from gist: https://gist.github.com/rumf/5185663
function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
