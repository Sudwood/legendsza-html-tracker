import os

def writeHtml(filename, html_content):
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(html_content)

        # 3. Confirmation message
        print(f"✅ Successfully wrote HTML content to '{os.path.abspath(filename)}'")

    except IOError as e:
        print(f"❌ An error occurred while writing the file: {e}")
base_path = os.path.dirname(os.path.abspath(__file__))
img_folder = os.path.join(base_path, "images")
file_names = os.listdir(img_folder)
tableStart="<table role=\"table\">"
tableEnd = "</table>"
tbStart = "<tbody role=\"rowgroup\">"
tbEnd = "</tbody>"
trStart = "<tr role=\"row\">"
trEnd = "</tr>"
tdStart = "<td role=\"cell\">"
tdEnd = "</td>"
floatWindow = "<div id=\"floatingWindow\" class=\"floating-window\">   <div class=\"window-header\">     <span class=\"window-title\">Totals</span>        <button id=\"collapseButton\" class=\"collapse-btn\">---</button>    </div>    <div id=\"windowContent\" lass=\"window-content\">        <p id=\"pokeTotalsP\"></p>        <p id=\"taskTotalsP\"></p>  <p id=\"rewardTotalsP\"></p>    </div></div>"
htmlFileStart = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"> <title>Legends ZA Tracker</title> <link href=\"main.css\" rel=\"stylesheet\" /> <link rel=\"icon\" type=\"image/png\" href=\"/favicons/favicon-96x96.png\" sizes=\"96x96\" /><link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicons/favicon.svg\" /><link rel=\"shortcut icon\" href=\"/favicons/favicon.ico\" /><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/favicons/apple-touch-icon.png\" /><link rel=\"manifest\" href=\"/favicons/site.webmanifest\" /></head><body>"
htmlFileEnd = "<script src=\"main.js\"> </script></body></html>"
imgStart = "<img src=\"images/"
imgEndNameStart = "\" onerror=\"this.onerror=null; this.src='ball-default.png';\"></img><p>"
nameEndIdStart = "</p><input type=\"checkbox\" id=\""
IdEnd = "\">"
header1 = "<h1>Pokedex Checkboxes</h1>"
theadStart = "<thead role=\"rowgroup\">"
theadEnd = "</thead>"
thStart = "<th role=\"columnheader\">"
thEnd = "</th>"
pStart = "<p>"
pEnd = "</p>"
inputCheckStart = "<input class=\"tasksbox\" style=\"margin-top:20px\" type=\"checkbox\" id=\""
inputCheckEnd = "\">"
inputNumStart = "<input type=\"number\" id=\""
inputNumIdEnd = "\" min=\"0\" max =\""
inputNumEnd = "\">"
out_names = []
task_nums = [5,10,15,20,25,3,8,3,8,3,8,3,8,3,8,3,8,3,8,3,8,3,8,3,8,3,8,1,2,3,3,1,0,5,10,20,50]
tasks = ["Filling Your Pokédex (01):Register 5 Pokémon in your Pokédex by either catching or evolving them.|100 pts","Filling Your Pokédex (02):Register 10 Pokémon in your Pokédex.|300 pts","Filling Your Pokédex (03):Register 15 Pokémon in your Pokédex.|300 pts","Filling Your Pokédex (04):Register 20 Pokémon in your Pokédex.|300 pts","Filling Your Pokédex (05):Register 25 Pokémon in your Pokédex.|300 pts","Catching Normal Types (01):Catch 3 Normal-type Pokémon.|300 pts","Catching Normal Types (02):Catch 8 Normal-type Pokémon.|300 pts","Catching Fire Types (01):Catch 3 Fire-type Pokémon.|300 pts","Catching Fire Types (02):Catch 8 Fire-type Pokémon.|300 pts","Catching Water Types (01):Catch 3 Water-type Pokémon.|300 pts","Catching Water Types (02):Catch 8 Water-type Pokémon.|300 pts","Catching Electric Types (01):Catch 3 Electric-type Pokémon.|300 pts","Catching Electric Types (02):Catch 8 Electric-type Pokémon.|300 pts","Catching Grass Types (01):Catch 3 Grass-type Pokémon.|300 pts","Catching Grass Types (02):Catch 8 Grass-type Pokémon.|300 pts","Catching Flying Types (01):Catch 3 Flying-type Pokémon.|300 pts","Catching Flying Types (02):Catch 8 Flying-type Pokémon.|300 pts","Catching Bug Types (01):Catch 3 Bug-type Pokémon.|300 pts","Catching Bug Types (02):Catch 8 Bug-type Pokémon.|300 pts","Catching Poison Types (01):Catch 3 Poison-type Pokémon.|300 pts","Catching Poison Types (02):Catch 8 Poison-type Pokémon.|300 pts","Catching Ground Types (01):Catch 3 Ground-type Pokémon.|300 pts","Catching Ground Types (02):Catch 8 Ground-type Pokémon.|300 pts","Catching Rock Types (01):Catch 3 Rock-type Pokémon.|300 pts","Catching Rock Types (02):Catch 8 Rock-type Pokémon.|300 pts","Catching Ghost Types (01):Catch 3 Ghost-type Pokémon.|300 pts","Catching Ghost Types (02):Catch 8 Ghost-type Pokémon.|300 pts","Surveying Wild Zone 1:Register all Pokémon who appear in Wild Zone 1 in your Pokédex.|1,000 pts","Surveying Wild Zone 2:Register all Pokémon who appear in Wild Zone 2 in your Pokédex.|1,000 pts","Surveying Wild Zone 3:Register all Pokémon who appear in Wild Zone 3 in your Pokédex.|1,000 pts","Evolving Pokémon (01):Evolve 3 Pokémon by any method.|500 pts","Evolving with Items (01):Use Evolution Stones or other items to evolve 1 Pokémon.|500 pts","Evolving via Link Trade:Receive a Pokémon that evolves after a Link Trade.|2,000 pts","Winning Pokémon Battles (01):Win 5 Pokémon battles against other Trainers.|200 pts","Winning Pokémon Battles (02):Win 10 Pokémon battles against other Trainers.|200 pts","Smashing Mega Crystals (01):Break 20 Mega Crystals around Lumiose City.|100 pts","Smashing Mega Crystals (02):Break 50 Mega Crystals around Lumiose City.|100 pts"]
item_iter =0
htmlString = htmlFileStart
htmlString+=floatWindow
htmlString+=header1
htmlString+=tableStart
htmlString+=tbStart

for name in file_names:
    
    if(item_iter == 0):
        htmlString+=trStart
        htmlString+=tdStart
        htmlString+=imgStart
        htmlString+=name
        htmlString+=imgEndNameStart
        htmlString+=name
        htmlString+=nameEndIdStart
        htmlString+=name
        htmlString+=IdEnd
        htmlString+=tdEnd
        item_iter+=1
    elif(item_iter == 9):
        htmlString+=tdStart
        htmlString+=imgStart
        htmlString+=name
        htmlString+=imgEndNameStart
        htmlString+=name
        htmlString+=nameEndIdStart
        htmlString+=name
        htmlString+=IdEnd
        htmlString+=tdEnd
        item_iter=0
        htmlString+=trEnd
    else:
        htmlString+=tdStart
        htmlString+=imgStart
        htmlString+=name
        htmlString+=imgEndNameStart
        htmlString+=name
        htmlString+=nameEndIdStart
        htmlString+=name
        htmlString+=IdEnd
        htmlString+=tdEnd
        item_iter+=1
htmlString+=tbEnd
htmlString+=tableEnd

htmlString+="</br>"

htmlString+="<h1>Mable Tasks</h1>"

htmlString+=tableStart
htmlString+=theadStart
htmlString+=trStart
htmlString+=thStart
htmlString+="<h3>Request:</h3>"
htmlString+=thEnd
htmlString+=thStart
htmlString+="<h3>Objective:</h3>"
htmlString+=thEnd
htmlString+=thStart
htmlString+="<h3>Reward:</h3>"
htmlString+=thEnd
htmlString+=thStart
htmlString+="<h3>Tracking:</h3>"
htmlString+=thEnd
htmlString+=trEnd
htmlString+=theadEnd
htmlString+=tbStart

file_path = 'tasks.txt'
iter2 = 0
for idx, line in enumerate(tasks):
    request = line.split(":")[0]
    objective = line.split(":")[1].split("|")[0]
    reward = line.split(":")[1].split("|")[1]
    if(iter2 == 0):
        htmlString+=trStart
        htmlString+=tdStart
        htmlString+=pStart
        htmlString+=request
        htmlString+=pEnd
        htmlString+=tdEnd
        htmlString+=tdStart
        htmlString+=pStart
        htmlString+=objective
        htmlString+=pEnd
        htmlString+=tdEnd
        htmlString+=tdStart
        htmlString+=pStart
        htmlString+=reward
        htmlString+=pEnd
        htmlString+=tdEnd
        #27 28 29 32
        if(idx == 27 or idx == 28 or idx == 29 or idx == 32 or idx == 31):
            htmlString+=tdStart
            htmlString+=inputCheckStart
            htmlString+=("task-"+str(idx))
            htmlString+=inputCheckEnd
            htmlString+=tdEnd
        else:
            htmlString+=tdStart
            htmlString+=inputNumStart
            htmlString+=("task-"+str(idx))
            htmlString+=inputNumIdEnd
            htmlString+=str(task_nums[idx])
            htmlString+=inputNumEnd
            htmlString+=tdEnd




htmlString+=tbEnd
htmlString+=tableEnd


htmlString+=htmlFileEnd
writeHtml("main.html", htmlString)