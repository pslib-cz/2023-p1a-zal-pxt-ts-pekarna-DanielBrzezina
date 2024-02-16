/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/
const cena: number = 6.5
let kwh: number = 0;
type Odber = {
    cas: number,//sekundy
    prikon: number,//wat
}
let data: Array<Odber> = [
    { cas: 600, prikon: 3500 },
    { cas: 120, prikon: 0 },
    { cas: 300, prikon: 1700 },
    { cas: 60, prikon: 0 },
    { cas: 800, prikon: 100 },
]
for (let i of data) {
    kwh += (i.cas / 3600) * (i.prikon / 1000)
} console.log(kwh * cena)//cena
console.log(kwh / 5)//pruměrný odběr 