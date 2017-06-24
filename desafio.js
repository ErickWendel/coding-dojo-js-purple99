class Desafio {
    jogada(primeira, segunda) {
        if (primeira === segunda) return 'empate'
        let casos = {
            pedra: {
                tesoura: 'pedra ganhou',
                papel: 'pedra perde'
                
            },
            tesoura: {
                pedra: 'tesoura perde',
                papel: 'tesoura ganha'
                
            },
            papel: {
                tesoura: 'papel perde',
                pedra: `papel ganha`
            },
            
            
        }

        return casos[primeira][segunda]

        // if (primeira === segunda) {
        //     return 'empate'
        // }

        // if (primeira === 'pedra' && segunda === 'tesoura') {
        //     return 'pedra ganhou'
        // }

        // if (primeira === 'pedra' && segunda === 'papel') {
        //     return 'pedra perde'
        // }

        // if (primeira === 'papel' && segunda === 'pedra') {
        //     return 'papel ganha'
        // }

        // if (primeira === 'papel' && segunda === 'tesoura') {
        //     return 'tesoura ganha'
        // }

        // if (primeira === 'tesoura' && segunda === 'papel') {
        //     return 'tesoura ganha'
        // }

        // if (primeira === 'tesoura' && segunda === 'pedra') {
        //     return 'tesoura perde'
        // }

        // return 'aaaa'

        // pedra -> tesoura -> papel
    }
}


module.exports = new Desafio()