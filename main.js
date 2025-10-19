const PokeNames = ["001-Chikorita.png","002-Bayleef.png","003-Meganium.png","004-Tepig.png","005-Pignite.png","006-Emboar.png","007-Totodile.png","008-Croconaw.png","009-Feraligatr.png","010-Fletchling.png","011-Fletchinder.png","012-Talonflame.png","013-Bunnelby.png","014-Diggersby.png","015-Scatterbug.png","016-Spewpa.png","017-Vivillon.png","018-Weedle.png","019-Kakuna.png","020-Beedrill.png","021-Pidgey.png","022-Pidgeotto.png","023-Pidgeot.png","024-Mareep.png","025-Flaaffy.png","026-Ampharos.png","027-Patrat.png","028-Watchog.png","029-Budew.png","030-Roselia.png","031-Roserade.png","032-Magikarp.png","033-Gyarados.png","034-Binacle.png","035-Barbaracle.png","036-Staryu.png","037-Starmie.png","038-Flabebe.png","039-Floette.png","040-Florges.png","041-Skiddo.png","042-Gogoat.png","043-Espurr.png","044-Meowstic.png","045-Litleo.png","046-Pyroar.png","047-Pancham.png","048-Pangoro.png","049-Trubbish.png","050-Garbodor.png","051-Dedenne.png","052-Pichu.png","053-Pikachu.png","054-Raichu.png","055-Cleffa.png","056-Clefairy.png","057-Clefable.png","058-Spinarak.png","059-Ariados.png","060-Ekans.png","061-Arbok.png","062-Abra.png","063-Kadabra.png","064-Alakazam.png","065-Gastly.png","066-Haunter.png","067-Gengar.png","068-Venipede.png","069-Whirlipede.png","070-Scolipede.png","071-Honedge.png","072-Doublade.png","073-Aegislash.png","074-Bellsprout.png","075-Weepinbell.png","076-Victreebel.png","077-Pansage.png","078-Simisage.png","079-Pansear.png","080-Simisear.png","081-Panpour.png","082-Simipour.png","083-Meditite.png","084-Medicham.png","085-Electrike.png","086-Manectric.png","087-Ralts.png","088-Kirlia.png","089-Gardevoir.png","090-Gallade.png","091-Houndour.png","092-Houndoom.png","093-Swablu.png","094-Altaria.png","095-Audino.png","096-Spritzee.png","097-Aromatisse.png","098-Swirlix.png","099-Slurpuff.png","100-Eevee.png","101-Vaporeon.png","102-Jolteon.png","103-Flareon.png","104-Espeon.png","105-Umbreon.png","106-Leafeon.png","107-Glaceon.png","108-Sylveon.png","109-Buneary.png","110-Lopunny.png","111-Shuppet.png","112-Banette.png","113-Vanillite.png","114-Vanillish.png","115-Vanilluxe.png","116-Numel.png","117-Camerupt.png","118-Hippopotas.png","119-Hippowdon.png","120-Drilbur.png","121-Excadrill.png","122-Sandile.png","123-Krokorok.png","124-Krookodile.png","125-Machop.png","126-Machoke.png","127-Machamp.png","128-Gible.png","129-Gabite.png","130-Garchomp.png","131-Carbink.png","132-Sableye.png","133-Mawile.png","134-Absol.png","135-Riolu.png","136-Lucario.png","137-Slowpoke.png","138-Slowbro.png","139-Slowking.png","140-Carvanha.png","141-Sharpedo.png","142-Tynamo.png","143-Eelektrik.png","144-Eelektross.png","145-Dratini.png","146-Dragonair.png","147-Dragonite.png","148-Bulbasaur.png","149-Ivysaur.png","150-Venusaur.png","151-Charmander.png","152-Charmeleon.png","153-Charizard.png","154-Squirtle.png","155-Wartortle.png","156-Blastoise.png","157-Stunfisk.png","158-Furfrou.png","159-Inkay.png","160-Malamar.png","161-Skrelp.png","162-Dragalge.png","163-Clauncher.png","164-Clawitzer.png","165-Goomy.png","166-Sliggoo.png","167-Goodra.png","168-Delibird.png","169-Snorunt.png","170-Glalie.png","171-Froslass.png","172-Snover.png","173-Abomasnow.png","174-Bergmite.png","175-Avalugg.png","176-Scyther.png","177-Scizor.png","178-Pinsir.png","179-Heracross.png","180-Emolga.png","181-Hawlucha.png","182-Phantump.png","183-Trevenant.png","184-Scraggy.png","185-Scrafty.png","186-Noibat.png","187-Noivern.png","188-Klefki.png","189-Litwick.png","190-Lampent.png","191-Chandelure.png","192-Aerodactyl.png","193-Tyrunt.png","194-Tyrantrum.png","195-Amaura.png","196-Aurorus.png","197-Onix.png","198-Steelix.png","199-Aron.png","200-Lairon.png","201-Aggron.png","202-Helioptile.png","203-Heliolisk.png","204-Pumpkaboo.png","205-Gourgeist.png","206-Larvitar.png","207-Pupitar.png","208-Tyranitar.png","209-Froakie.png","210-Frogadier.png","211-Greninja.png","212-Falinks.png","213-Chespin.png","214-Quilladin.png","215-Chesnaught.png","216-Skarmory.png","217-Fennekin.png","218-Braixen.png","219-Delphox.png","220-Bagon.png","221-Shelgon.png","222-Salamence.png","223-Kangaskhan.png","224-Drampa.png","225-Beldum.png","226-Metang.png","227-Metagross.png","228-Xerneas.png","229-Yveltal.png","230-Zygarde.png"]

const tasks = ["task-0","task-1","task-2","task-3","task-4","task-5","task-6","task-7","task-8","task-9","task-10","task-11","task-12","task-13","task-14","task-15","task-16","task-17","task-18","task-19","task-20","task-21","task-22","task-23","task-24","task-25","task-26","task-27","task-28","task-29","task-30","task-31","task-32","task-33","task-34","task-35","task-36"]
const rewards = [100,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,1000,1000,1000,500,500,2000,200,200,100,100]
let taskArr = []
let pokemonArr = []
const numbers = [5,10,15,20,25,3,8,3,8,3,8,3,8,3,8,3,8,3,8,3,8,3,8,3,8,3,8,1,1,1,3,1,1,5,10,20,50]
let he1 = null
let wi1 = null
const pokemonArrayString = localStorage.getItem('pokemonArray');
const taskArrayString = localStorage.getItem('taskArray');
if (pokemonArrayString) 
{
    pokemonArr = JSON.parse(pokemonArrayString);
}
else
{
    for(x in PokeNames)
    {
        pokemonArr[x] = 0
    }
}
if (taskArrayString) 
{
    taskArr = JSON.parse(taskArrayString);
}
else
{
    for(x in tasks)
    {
        taskArr[x] = 0
    }
}
if(pokemonArr.length!== 0)
{
    for(x in pokemonArr)
    {
        checkbox = document.getElementById(PokeNames[x])
        if(pokemonArr[x] == 0)
        {
            checkbox.checked = false
        }
        if(pokemonArr[x] == 1)
        {
            checkbox.checked = true
        }
    }
}
if(taskArr.length!== 0)
{
    for(x in taskArr)
    {
        input = document.getElementById(tasks[x])
        if(x == 27 || x == 28 || x == 29 || x == 32 || x == 31)
        {
            if(taskArr[x] == 0)
            {
                input.checked = false
            }
            if(taskArr[x] == 1)
            {
                input.checked = true
            }
        }
        else
        {
            input.value = taskArr[x]
        }
    }
}
console.log("loaded")


const windowElement = document.getElementById('floatingWindow');
const header = windowElement.querySelector('.window-header');
let isDragging = false;
let offsetX, offsetY;
const collapseButton = document.getElementById('collapseButton');
const shouldHideString = localStorage.getItem('shouldHide');


if (collapseButton && windowElement) {

    collapseButton.addEventListener('click', () => {
        

        windowElement.classList.toggle('collapsed');
        const windowContent = document.getElementById("windowContent")
        

        if (windowElement.classList.contains('collapsed')) {
            collapseButton.textContent = '+';

            windowElement.style.opacity = 0.55
            windowContent.style.display = 'none'
            localStorage.setItem('shouldHide',"1");
            
        } else {
            collapseButton.textContent = '---';
            windowElement.style.opacity = 1
            windowContent.style.display = 'inline'
            localStorage.setItem('shouldHide',"0");
        }
    });
}

header.addEventListener('mousedown', (e) => {
    isDragging = true;

    offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    offsetY = e.clientY - windowElement.getBoundingClientRect().top;

    
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    windowElement.style.left = `${e.clientX - offsetX}px`;
    windowElement.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});


updateFloatingValues()
if(shouldHideString!=null)
{
    if(shouldHideString == "0")
    {

    }
    else if(shouldHideString == "1")
    {

        windowElement.classList.toggle('collapsed');
        const windowContent = document.getElementById("windowContent")
     
        if (windowElement.classList.contains('collapsed')) {
            collapseButton.textContent = '+';
            windowElement.style.opacity = 0.55
            windowContent.style.display = 'none'
            localStorage.setItem('shouldHide',"1");
            
        } else {
            collapseButton.textContent = '---';
            windowElement.style.opacity = 1
            windowContent.style.display = 'inline'
            localStorage.setItem('shouldHide',"0");
        }
    }
}
PokeNames.forEach(id => {

  const inputElement = document.getElementById(id);


  if (inputElement) {

    inputElement.addEventListener('change', handleChangePoke);
    

  } else {
    console.warn(`Element with ID "${id}" not found in the DOM.`);
  }
});


tasks.forEach(id => {

  const inputElement = document.getElementById(id);

  if (inputElement) {

    inputElement.addEventListener('change', handleChangeTasks);
    

  } else {
    console.warn(`Element with ID "${id}" not found in the DOM.`);
  }
});

function handleChangePoke(event) {
  const elementId = event.target.id;
  const newValue = +event.target.checked;
  var index = PokeNames.indexOf(elementId)
  pokemonArr[index] = newValue
  localStorage.setItem('pokemonArray', JSON.stringify(pokemonArr));
  updateFloatingValues()

}



function handleChangeTasks(event) {
    const elementId = event.target.id;
    
    if(elementId == "tasks-27" || elementId == "tasks-28" || elementId == "tasks-29" || elementId == "tasks-32"|| elementId == "tasks-31")
    {
        const newValue = event.target.checked;
        var index = tasks.indexOf(elementId)
        taskArr[index] = newValue
    }
    else
    {   
        const newValue = event.target.value;
        var index = tasks.indexOf(elementId)
        taskArr[index] = newValue
    }
    localStorage.setItem('taskArray', JSON.stringify(taskArr));
    updateFloatingValues()

}
function updateFloatingValues()
{
    const pokeTotalsP = document.getElementById("pokeTotalsP")
const taskTotalsP = document.getElementById("taskTotalsP")
const rewardtotalsP  = document.getElementById("rewardTotalsP")
var donePokes = 0
const totalPokes = pokemonArr.length
const totalTasks = taskArr.length
var rewardsCurr = 0
var totalrewards = 0
for(x in pokemonArr)
{
    if(pokemonArr[x] == 1)
    {
        donePokes+=1
    }
}
var doneTasks = 0
for(x in taskArr)
{
    totalrewards+=(+rewards[x])
    if(x == 27 || x == 28 || x == 29 || x == 32 || x == 31)
    {
        if(taskArr[x] == 1)
        {
            doneTasks+=1
            rewardsCurr+=(+rewards[x])
        }
    }
    else
    {
        if(taskArr[x] == numbers[x])
        {
            doneTasks+=1
            rewardsCurr+=(+rewards[x])
        }
    }
}
var pokePercent =( ((+donePokes) / (+totalPokes)) * 100 ).toFixed(2)
var taskPercent =( ((+doneTasks) / (+totalTasks)) * 100 ).toFixed(2)
var rewardPercent =( ((+rewardsCurr) / (+totalrewards)) * 100 ).toFixed(2)
pokeTotalsP.textContent = ("Pokemon Collected: "+donePokes+" / "+totalPokes+"  -  "+pokePercent+"%")
taskTotalsP.textContent = ("Tasks Completed: "+doneTasks+" / "+totalTasks+"  -  "+taskPercent+"%")
rewardtotalsP.textContent = ("Reward Pts: "+rewardsCurr+" / "+totalrewards+"  -  "+rewardPercent+"%")
}