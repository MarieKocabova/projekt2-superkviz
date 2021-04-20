let poleOtazek = [
    {
        poradi: 1, 
        otazkaText: 'Co je ikonická hračka z 80. let?', 
        moznosti: ['Kočičák', 'Mončičák', 'Opičák'],
        spravnaOdpoved: 1 
    },
    {
        poradi: 2,
        otazkaText: 'Jaké je Matějovo nejoblíbenější ovoce?',
        moznosti: ['Kokos', 'Melounek', 'Jahoda', 'Ani jedna z možností'],
        spravnaOdpoved: 2
    },
    {
        poradi: 3,
        otazkaText: 'Pro úspěšné absolvování kurzu je potřeba...',
        moznosti: ['Umět JavaScript', 'Chodit po kurzu do hospody'],
        spravnaOdpoved: 0
    }
]

let spravneOdpovedi = [];  //tady info o správných odpovědích
let aktualniOtazka;  //tady udržuju index aktuální otázky

console.log(poleOtazek[3])

//fce vygeneruj otázku
//1. červený text - na které otázce z kolika jsem
//2. text otázky
//3. obrázek
//4. div s možnostmi viz readme foreach moznosti


//init - vygeneruj otázku[0]


//onclick na odpověď
//1. poznej, kam kliknul
//1.1. zkontroluj správnost - pomůže asi tohle: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_data 

//2. ulož do proměnné odpověď (pole spravneOdpovedi)
//3. smaž veškerý obsah stránky
//4. if je nějaká další otázka (tj. aktuální index otázky + 1 !=null nebo undefined) -> vygeneruj otázku [aktuální+1], else -> vygeneruj vyhodnocení

//vyhodnocení
//1. text 'Tvoje hodnocení'
//2. cyklus foreach otázku - asi vygeneruj samostatný div, kde bude:
    //2.1. pořadí + text otázky
    //2.2. tvoje odpověď: zvolená odpověď (poleOtazek[].moznosti[zvolená])
    //2.3. if zvolená=správná -> vypiš "To je Správně", else -> Správná odpověď: poleOtazek[].spravnaOdpoved
//3. text 'Správně je spravneOdpovedi.length z poleOtazek.lenght.... Úspěšnost....%.'