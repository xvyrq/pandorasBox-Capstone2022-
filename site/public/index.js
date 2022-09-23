// majority of the code here is from https://www.youtube.com/watch?v=y4K_5CVz7Cs

const canvas = document.getElementById('enterCanvas');
const context = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "Python's Vanguard Capstone Team E Pandora's Box アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = letters.charAt(Math.floor(Math.random() * letters.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);