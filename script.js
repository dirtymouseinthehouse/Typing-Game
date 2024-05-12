// Taking 25 random paragraphs to type on
const paragraphs = [
    "He stared out the window at the snowy field. He'd been stuck in the house for close to a month and his only view of the outside world was through the window. There wasn't much to see. It was mostly just the field with an occasional bird or small animal who ventured into the field. As he continued to stare out the window, he wondered how much longer he'd be shackled to the steel bar inside the house.",
    "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.",
    "He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door. He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they never did.",
    "There were two things that were important to Tracey. The first was her dog. Anyone that had ever met Tracey knew how much she loved her dog. Most would say that she treated it as her child. The dog went everywhere with her and it had been her best friend for the past five years. The second thing that was important to Tracey, however, would be a lot more surprising to most people.",
    "One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies saved one and two at a time by bulldozing the grocer and the vegetable man and the butcher until one’s cheeks burned with the silent imputation of parsimony that such close dealing implied. One dollar and eighty-seven cents. And the next day would be Christmas...",
    "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued distances show us how mother-in-laws can be charleses. Authors often misinterpret the lion as a cormous science, when in actuality it feels more like a leprous lasagna. Recent controversy aside, their band was, in this moment, a racemed suit. The clutch of a joke becomes a togaed chair. The first pickled chess is.",
    "In modern times the first scrawny kitten is, in its own way, an input. An ostrich is the beginner of a roast. An appressed exhaust is a gun of the mind. A recorder is a grade from the right perspective. A hygienic is the cowbell of a skin. Few can name a dun brazil that isn't a highbrow playroom. The unwished beast comes from a thorny oxygen. An insured advantage's respect comes with it the thought that the lucid specialist is a fix.",
    "In ancient times the legs could be said to resemble stroppy vegetables. We can assume that any instance of a centimeter can be construed as an enate paste. One cannot separate pairs from astute managers. Those americas are nothing more than fish. If this was somewhat unclear, authors often misinterpret the gosling as an unfelt banjo, when in actuality it feels more like a professed galley. A bow of the squirrel is assumed.",
    "What we don't know for sure is whether or not a pig of the coast is assumed to be a hardback pilot. The literature would have us believe that a dusky clave is not but an objective. Few can name a limbate leo that isn't a sunlit silver. The bow is a mitten. However, the drawer is a bay. If this was somewhat unclear, few can name a paunchy blue that isn't a conoid bow. The undrunk railway reveals itself as a downstage bamboo to those who look.",
    "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear. The coat is a wash. However, a cake is the llama of a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the truth, the cockney freezer reveals itself as a wiggly tornado to those who look. The first hawklike sack.",
    "An aunt is a bassoon from the right perspective. As far as we can estimate, some posit the melic myanmar to be less than kutcha. One cannot separate foods from blowzy bows. The scampish closet reveals itself as a sclerous llama to those who look. A hip is the skirt of a peak. Some hempy laundries are thought of simply as orchids. A gum is a trumpet from the right perspective. A freebie flight is a wrench of the mind. Some posit the croupy.",
    "A baby is a shingle from the right perspective. Before defenses, collars were only operations. Bails are gleesome relatives. An alloy is a streetcar's debt. A fighter of the scarecrow is assumed to be a leisured laundry. A stamp can hardly be considered a peddling payment without also being a crocodile. A skill is a meteorology's fan. Their scent was, in this moment, a hidden feeling. The competitor of a bacon becomes a boxlike cougar.",
    "A broadband jam is a network of the mind. One cannot separate chickens from glowing periods. A production is a faucet from the right perspective. The lines could be said to resemble zincoid females. A deborah is a tractor's whale. Cod are elite japans. Some posit the wiglike norwegian to be less than plashy. A pennoned windchime's burst comes with it the thought that the printed trombone is a supply. Relations are restless tests.",
    "In recent years, some teeming herons are thought of simply as numbers. Nowhere is it disputed that an unlaid fur is a marble of the mind. Far from the truth, few can name a glossy lier that isn't an ingrate bone. The chicken is a giraffe. They were lost without the abscessed leek that composed their fowl. An interviewer is a tussal bomb. Vanward maracas show us how scarfs can be doubts. Few can name an unguled punch that isn't pig.",
    "A cough is a talk from the right perspective. A designed tractor's tray comes with it the thought that the snuffly flax is a rainbow. Their health was, in this moment, an earthy passbook. This could be, or perhaps the swordfishes could be said to resemble healthy sessions. A capricorn is a helium from the right perspective. However, a sled is a mailman's tennis. The competitor of an alarm becomes a toeless raincoat. Their twist was, in this moment.",
    "Authors often misinterpret the flag as a wayless trigonometry, when in actuality it feels more like a bousy gold. Few can name a jasp oven that isn't a stutter grape. They were lost without the huffy religion that composed their booklet. Those waves are nothing more than pedestrians. Few can name a quartered semicolon that isn't a rounding scooter. Though we assume the latter, the literature would have us believe.",
    "This could be, or perhaps few can name a pasteboard quiver that isn't a brittle alligator. A swordfish is a death's numeric. Authors often misinterpret the mist as a swelling asphalt, when in actuality it feels more like a crosswise closet. Some posit the tonal brother-in-law to be less than newborn. We know that the sizes could be said to resemble sleepwalk cycles. Before seasons, supplies were only fighters. Their stew was, in this moment.",
    "The vision of an attempt becomes a lawny output. Dibbles are mis womens. The olden penalty reveals itself as a bustled field to those who look. Few can name a chalky force that isn't a primate literature. However, they were lost without the gamy screen that composed their beret. Nowhere is it disputed that a step-uncle is a factory from the right perspective. One cannot separate paints from dreary windows. What we don't know for sure is whether.",
    "A tramp is a siamese from the right perspective. We know that a flitting monkey's jaw comes with it the thought that the submersed break is a pamphlet. Their cream was, in this moment, a seedy daffodil. The nest is a visitor. Far from the truth, they were lost without the released linen that composed their step-sister. A vibraphone can hardly be considered a pardine process without also being an archaeology. The bay of a hyacinth becomes.",
    "The frosts could be said to resemble backstage chards. One cannot separate colleges from pinkish bacons. Far from the truth, the mom of a rooster becomes a chordal hydrogen. A tempo can hardly be considered a purer credit without also being a pajama. The first combined ease is, in its own way, a pantyhose. Extending this logic, the guides could be said to resemble reddest monkeies. Framed in a different way, an addle hemp is a van.",
    "Far from the truth, an ajar reminder without catamarans is truly a foundation of smarmy semicircles. An alike board without harps is truly a satin of fated pans. A hubcap sees a parent as a painful beautician. The zeitgeist contends that some intense twigs are thought of simply as effects. A cross is a poppied tune. The valanced list reveals itself as an exchanged wrist to those who look. Recent controversy aside.",
    "The hefty opinion reveals itself as a sterile peer-to-peer to those who look. This could be, or perhaps the watch of a diamond becomes a bosom baboon. In recent years, some posit the unstuffed road to be less than altern. It's an undeniable fact, really; the livelong lettuce reveals itself as an unstuffed soda to those who look. In ancient times a bit is a balance's season. The popcorn of a morning becomes a moonless beauty.",
    "If this was somewhat unclear, a friend is a fridge from the right perspective. An upset carriage is a stitch of the mind. To be more specific, a temper is a pair from the right perspective. Authors often misinterpret the liquid as a notchy baseball, when in actuality it feels more like an unbarbed angle. Though we assume the latter, the first vagrom report is, in its own way, a tower. We know that the octopus of a cd becomes an unrent dahlia.",
    "A reptant discussion's rest comes with it the thought that the condemned syrup is a wish. The drake of a wallaby becomes a sonant harp. If this was somewhat unclear, spotty children show us how technicians can be jumps. Their honey was, in this moment, an intime direction. A ship is the lion of a hate. They were lost without the croupous jeep that composed their lily. In modern times a butcher of the birth is assumed to be a spiral bean.",
    "Those cowbells are nothing more than elements. This could be, or perhaps before stockings, thoughts were only opinions. A coil of the exclamation is assumed to be a hurtless toy. A board is the cast of a religion. In ancient times the first stinko sailboat is, in its own way, an exchange. Few can name a tutti channel that isn't a footless operation. Extending this logic, an oatmeal is the rooster of a shake. Those step-sons are nothing more than matches."
];
// declaring all the necessary dom selectors and the variables needed 
//charIndx = checking each character index when traversing thorugh each spans in paragraphs i.e chracters array
// mmistakes = counting the mistakes
// flag is to handle the timer to not to reset with writing every character i.e to set the timer to trigger only when the first character is written
let charIndx =0, mistakes=0,flag=false; 
const typing_box =document.querySelector(".typing-box p");
const inpField =document.querySelector(".container .inp-field");
const timer = document.querySelector(".Time-left span b"),
mistake_tag= document.querySelector(".Mistakes span"),
cpm_tag=document.querySelector(".CPM span"),
wpm_tag=document.querySelector(".WPM span"),
tryAgainbutton=document.querySelector("button");

// all the variables for timer is taken
let t,maxtime=60,timeleft= maxtime;
timer.innerText=timeleft;


// this function will generate random paragraphs
const load_paragraph = () =>{
    let randIndx = Math.floor(Math.random()* paragraphs.length);
    // console.log(paragraphs[randIndx]);
    // here at first the typing box is taken empty and after that from the random index taken the pragraph will be selected from paragraphs array and will be inserted into typing box
    // span tags are taken for each character is to target the spans to fetch mistakes and cpm in future
    typing_box.innerHTML="";
    paragraphs[randIndx].split("").forEach(ch =>{
        let spanele=`<span>${ch}</span>`
        typing_box.innerHTML += spanele;
    });
    // at first the active is used to activate the blinking cursor animation for first letter even though nothing is typed
    typing_box.querySelectorAll("span")[0].classList.add("active");
    // keydown and click is used to trigger the input box when something is typed or clicked in typing box 
    document.addEventListener("keydown", () => inpField.focus());
    typing_box.addEventListener("click",() => inpField.focus());    
}


load_paragraph();
inpField.addEventListener("input",() =>{
    const characters = typing_box.querySelectorAll("span");
    let typed = inpField.value.split("")[charIndx];
    // if the time left is equal to 0 or character length is surpassed then clear the timer and set input value to 0 so that noting could be typed 
    if(charIndx < characters.length-1 && timeleft > 0){
        if(!flag){
            t=setInterval(() =>{
                // if time left is greater than 0 then decrement timeleft else clear timer 
                if(timeleft>0){
                    timeleft--;
                    timer.innerText=timeleft;
                    let wpm = Math.round((((charIndx - mistakes) / 5) / (maxtime - timeleft)) * 60);
                    wpm_tag.innerText=wpm;
                }
                else{
                    clearInterval(t);
                }
            },1000);
            flag =true;
        }
        // if user hasnt enter any chracter or pressed backspace
        if(typed == null){
            charIndx--;
            // decrement mistakes only if the character i.e the class index span is incorrect
            if(characters[charIndx].classList.contains("incorrect")){
                mistakes--;
            }
            characters[charIndx].classList.remove("incorrect","correct");    
        }
        else{
            //if user typed correctly
            if(characters[charIndx].innerText === typed){
                characters[charIndx].classList.add("correct");
            }
            else{
                // if user typed incorrectly then increment mistakes
                mistakes++;
                characters[charIndx].classList.add("incorrect");
                // console.log("incorrect");
            }
            charIndx++; //increment index even its typed correct or incorrect
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndx].classList.add("active");
        mistake_tag.innerText=mistakes; 
        // formula for calculating words per minute
        let wpm = Math.round((((charIndx - mistakes) / 5) / (maxtime - timeleft)) * 60);
        console.log(wpm);
        // if wpm value is 0,empty or infinite then set its value to 0
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 :wpm;
        wpm_tag.innerText=wpm;
        cpm_tag.innerText=charIndx - mistakes;
    }
    else{
        clearInterval(t);
        inpField.value="";
    }
});
//if try again button triggered it will reset all values to zero
tryAgainbutton.addEventListener("click",()=>{
        timeleft=maxtime;
        charIndx = mistakes = flag =0;
        timer.innerText=timeleft;
        mistake_tag.innerText=mistakes;
        wpm_tag.innerText=0;
        cpm_tag.innerText=0;
        load_paragraph();
        inpField.value="";
        clearInterval(t); 
});
