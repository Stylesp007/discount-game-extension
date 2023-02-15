

async function fetchData() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cf3f1e7826msh21313dd917e952fp1604b6jsnfd95b2cd637c',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };
  
  const res = await fetch('https://gamerpower.p.rapidapi.com/api/giveaways?platform=pc', options);
  const game = await res.json();

  document.getElementById('player').innerHTML = game.map((games) => `<li>${games.title}<li>`).join('');
  
}
fetchData()