let batu = document.getElementById('batu');
let kertas = document.getElementById('kertas');
let gunting = document.getElementById('gunting');
let computerChoice = document.getElementById('computerChoice');
let options = ['batu', 'gunting', 'kertas']

batu.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = options[random];
    computerChoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case 'batu':
                alert('Seri cuy');
                break;
            
            case 'gunting':
                alert('Selamat Lu Menang!!');
                break;
        
            default:
                alert('Kalah Lu cuy hahahaha');
                break;
        }
    }, 300);
})

gunting.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = options[random];
    computerChoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case 'batu':
                alert('Kalah Lu cuy hahahaha');
                break;
            
            case 'gunting':
                alert('Seri cuy');
                break;
        
            default:
                alert('Selamat Lu Menang!!');
                break;
        }
    }, 300);
})

kertas.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = options[random];
    computerChoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case 'batu':
                alert('Selamat Lu Menang!!');
                break;
            
            case 'gunting':
                alert('Kalah Lu cuy hahahaha');
                break;
        
            default:
                alert('Seri cuy');
                break;
        }
    }, 300);
})

