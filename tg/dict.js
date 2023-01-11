const ante = {
    dictionary : [
        ["a","ah"],
        ["akesi","reptile"],
        ["ala","not"],
        ["alasa","hunt"],
        ["ale","all"],
        ["ali","all"],
        ["anpa","under"],
        ["ante","other"],
        ["anu","or"],
        ["apeja","separate"],
        ["awen","wait"],
        ["e","the"],
        ["en","and"],
        ["epiku","epic"],
        ["esun","shop"],
        ["ijo","object"],
        ["ike","bad"],
        ["ilo","tool"],
        ["insa","inside"],
        ["isipin","think"],
        ["jaki","yucky"],
        ["jan","person"],
        ["jasima","reflect"],
        ["jelo","yellow"],
        ["jo","have"],
        ["jonke","honk"],
        ["jume","dream"],
        ["kala","fish"],
        ["kalama","sound"],
        ["kama","come"],
        ["kapesi","brown"],
        ["kasi","plant"],
        ["ken","can"],
        ["kepeken","use"],
        ["kijetesantakalu","raccoon"],
        ["kili","fruit"],
        ["kin","still"],
        ["kipisi","piece"],
        ["kiwen","rock"],
        ["ko","powder"],
        ["kokosila","ike"],
        ["kon","air"],
        ["ku","dictionary"],
        ["kule","colour"],
        ["kulijo","coolio"],
        ["kulupu","group"],
        ["kute","hear"],
        ["la","yes"],
        ["lanpan","steal"],
        ["lape","sleep"],
        ["laso","grue"],
        ["lawa","head"],
        ["leko","square"],
        ["len","fabric"],
        ["lete","cold"],
        ["li","is"],
        ["lili","little"],
        ["linja","string"],
        ["linluwi","internet"],
        ["lipu","card"],
        ["loje","red"],
        ["lon","on"],
        ["luka","hand"],
        ["lukin","look"],
        ["lupa","hole"],
        ["ma","land"],
        ["majuna","old"],
        ["mama","parent"],
        ["mani","money"],
        ["meli","girl"],
        ["meso","middle"],
        ["mi","me"],
        ["mije","boy"],
        ["misa","mouse"],
        ["misikeke","medicine"],
        ["moku","food"],
        ["moli","die"],
        ["monsi","behind"],
        ["monsuta","monster"],
        ["mu","moo"],
        ["mulapisu","pizza"],
        ["mun","moon"],
        ["musi","fun"],
        ["mute","many"],
        ["n","hm"],
        ["namako","spice"],
        ["nanpa","number"],
        ["nasa","silly"],
        ["nasin","path"],
        ["nena","bump"],
        ["ni","this"],
        ["nimi","word"],
        ["nimisin","nuword"],
        ["nja","nya"],
        ["noka","foot"],
        ["o","oh"],
        ["oke","okay"],
        ["oki","okay"],
        ["oko","eye"],
        ["olin","love"],
        ["ona","they"],
        ["pa","bruh"],
        ["pakala","break"],
        ["pali","work"],
        ["palisa","stick"],
        ["pan","bread"],
        ["pana","give"],
        ["pata","sibling"],
        ["pi","of"],
        ["pika","electricity"],
        ["pilin","feel"],
        ["pimeja","black"],
        ["pini","end"],
        ["pipi","insect"],
        ["poka","side"],
        ["poki","container"],
        ["pona","good"],
        ["powe","false"],
        ["pu","Pu"],
        ["puwa","soft"],
        ["sama","same"],
        ["seli","hot"],
        ["selo","skin"],
        ["seme","what"],
        ["sewi","high"],
        ["sijelo","body"],
        ["sike","circle"],
        ["sin","new"],
        ["sina","you"],
        ["sinpin","front"],
        ["sitelen","image"],
        ["soko","fungus"],
        ["sona","know"],
        ["soweli","animal"],
        ["suli","big"],
        ["suno","sun"],
        ["supa","flat"],
        ["suwi","sweet"],
        ["taki","tack"],
        ["tan","from"],
        ["taso","sole"],
        ["tawa","towards"],
        ["telo","water"],
        ["tenpo","time"],
        ["toki","talk"],
        ["tomo","house"],
        ["tonsi","enby"],
        ["tu","two"],
        ["unpa","sex"],
        ["usawi","wizard"],
        ["uta","mouth"],
        ["utala","fight"],
        ["wa","wha"],
        ["walo","white"],
        ["wan","one"],
        ["waso","bird"],
        ["wawa","strong"],
        ["weka","rid"],
        ["wekama","right-back"],
        ["wile","will"],
        ["wuwojiti","worcestershire"],
        ["yupekosi","George"]
        ],
    search : function(word, source) {
        for (let i = 0; i < ante.dictionary.length; i++) {
            if (ante.dictionary[i][source] === word) {
                return ante.dictionary[i][1 - source];
            }
        }

        return word;
    }
}