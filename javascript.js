        /*  All images sourced from https://commons.wikimedia.org/wiki/Main_Page.
            Each image has the author, a title/description, license type, and the link to the commons page where it was found.
            
            Each image has been checked for for possible copyright infringement and reverse image Google search.  They comply with Public Domain Mark 1.0, cc0 1.0, cc by 2.0, cc by-sa 2.5, cc by-sa 3.0, cc by-sa 4.0 attribution on creative commons, or free art license 1.3 at artlibre.org.
                https://creativecommons.org/publicdomain/mark/1.0/deed.en
                https://creativecommons.org/publicdomain/zero/1.0/deed.en
                https://creativecommons.org/licenses/by/2.0/
                https://creativecommons.org/licenses/by-sa/2.5/deed.en
                https://creativecommons.org/licenses/by-sa/3.0/deed.en
                https://creativecommons.org/licenses/by-sa/4.0/deed.en
                http://artlibre.org/licence/lal/en/
            Reference site for copyright tags: https://commons.wikimedia.org/wiki/Commons:Hirtle_chart.
        */

        //track progression through branch levels.
        var storyProgress = 0; 
        //track progression through branches.
        var trackBranch = "";  

        //text block variables declared. HAJ.
        //daughter text blocks
        var daughterTier1 = "";
        var daughterTier2 = "";
        var daughterTier3 = "";

        //chicken text blocks
        var chickenTier1 = "";
        var chickenTier2 = "";
        var chickenTier3 = "";

        //herbalist text blocks
        var herbTier1 = "";
        var herbTier2 = "";
        var herbTier3 = "";

        //QandArea variable declare.  Variable used to hide Q and A after last question answered.
        var QandA_area = "";

        //banner variable declared. HAJ.
        var banner = document.getElementById("banner");

        //Function called when submit button clicked. Allows one button to be used throughout. HAJ.
        function decisions() {
            
            //Referenced https://codepen.io/LEGGATH/pen/GpWvWx. HAJ.
            var bannerFocus = document.getElementById("banner");
            bannerFocus.setAttribute("tabindex", 1);
            bannerFocus.focus();
            /* FIX THIS!!
            if (document.getElementById("list-option-2").checked == true){
                document.getElementById("list-option-2").removeAttribute('checked');
                document.getElementById("list-option-1").setAttribute == true;
            }
            
           else{
                document.getElementById("list-option-3").checked == false;
            }*/
            switch (storyProgress) {
                case 0:
                    decisionOne();
                    storyProgress += 1;
                    break;
                case 1:
                    decisionTwo();
                    storyProgress += 1;
                    break;
                case 2:
                    decisionThree();
                    storyProgress += 1;
                    break;
            } 
    
        }   
        //Displays story block based on first decision made.  Also calls function to load next question and associated answers. HAJ.
        function decisionOne() {
              if (document.getElementById("list-option-1").checked == true) {
                daughterTier1 = "You have chosen to find the mayor’s daughter Emily.  The quest posting simply says that the mayor’s daughter Emily has not been seen in a while.  It does not tell you for how long or where she was last seen.  So first you must seek out the mayor to ask him a few more questions.  When you find the mayor, you find him on the main road talking to one of the villagers.  He informs you that he has not seen his daughter since yesterday morning and usually they eat dinner together.  The mayor isn’t sure whether she has since come home but is concerned all the same.  He has allowed you to search her room and talk to anyone you see fit.";
                document.getElementById("tier1").innerHTML = daughterTier1;
                
               // Inspiration gained from studying https://www.safaribooksonline.com/library/view/javascript-cookbook/9781449390211/ch12s16.html.  Changes banner by decision. HAJ.
                  
               /*Background image added, centered and no repeat. Added color.
                Image author: Peter van der Sluijs
                Title: Woman dressed as lady of 15th centry
                License type: cc by-sa 3.0, cc by-sa 2.5, cc by-sa 2.0, and cc by-sa 1.0.  Added background color.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Woman_dressed_as_lady_of_15th_centry.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Woman_dressed_as_lady_of_15th_centry_color.jpg')";
                
                trackBranch = "A1";
                
                //Calls function to replace question and answers with next set. HAJ.
                decisionTwoBrA_QandA();
                
              }
              else if (document.getElementById("list-option-2").checked == true){
                chickenTier1 = "You have chosen to find the farmer’s chicken.  You know that the quest is too simple for a hero of your caliber, but you have had a rough couple of weeks and want a simple task to earn a few coppers.  The posting gives you directions to the farmer’s land and you choose to head out right after breakfast at the inn.  When you arrive, the farmer walks you over to the coop so that you may take a look around and provides you with a description of the chicken in question.  You then proceed to looks for clues.";
                document.getElementById("tier1").innerHTML = chickenTier1;
                  
                /*Image author: Albertus Verhoesen 
                  Image title: Albertus Verhoesen Chickens and park vase
                  License type: Public Domain Mark 1.0
                  Original source: http://www.hampel-auctions.com/, Public Domain. Tag: PD-Art, PD-1923.
                  Retrieved from: https://commons.wikimedia.org/w/index.php?curid=869216*/
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Albertus_Verhoesen_Chickens_and_park_vase.jpg')";
                
                trackBranch = "B1";
                  
                //Calls function to replace question and answers with next set. HAJ.
                decisionTwoBrB_QandA();
              }
              else if (document.getElementById("list-option-3").checked == true){
                herbTier1 = "You have chosen to gather ingredients for the herbalist.  The posting informs you of the herbalist’s location in the village and asks you to inquire there for further details.  When you arrive, you find a small shoppe filled to the brim with herbs and flowers in jars and an older woman working at a table.  She is delighted you have decided to help her as it is not as easy as it was to gather all of the herbs she needs for her work.  There are a few different herbs she needs and suggests a few directions to head in to find them.";
                document.getElementById("tier1").innerHTML = herbTier1;
                
                /*Background image added, centered and no repeat.
                Image author: Dinesh Valke
                Title: Capparaceae
                License type: cc by-sa 2.0, unaltered.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Spider_tree_(4019640704).jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Spider_tree_(4019640704).jpg')";
                  
                trackBranch = "C1";
                  
                //Calls function to replace question and answers with next set. HAJ.
                decisionTwoBrC_QandA();
              }
              
           }
         
         //Function uses trackBranch variable value saved in decisionOne choice to call function associated with the next decision in that story branch. HAJ.
         function decisionTwo(){
              switch(trackBranch){
                  case "A1":
                    decisionTwoBrA();
                      break;
                  case "B1":
                    decisionTwoBrB();
                      break;
                  case "C1":
                    decisionTwoBrC();
                      break;
              }
           }  
          
          //Function uses trackBranch variable value saved in decisionTwo choice to call function associated with the next decision in that story branch. HAJ.
          function decisionThree(){
              switch(trackBranch){
                  //Branch A decision 3 calls.
                  case "A2a":
                    decisionThreeBrA1();
                      break;
                  case "A2b":
                    decisionThreeBrA2();
                      break;
                  case "A2c":
                    decisionThreeBrA3();
                      break;
                      
                  //Branch B decision 3 calls.
                  case "B2a":
                    decisionThreeBrB1();
                      break;
                  case "B2b":
                    decisionThreeBrB2();
                      break;
                  case "B2c":
                    decisionThreeBrB3();
                      break;
                      
                  //Branch C decision 3 calls.
                  case "C2a":
                    decisionThreeBrC1();
                      break;
                  case "C2b":
                    decisionThreeBrC2();
                      break;
                  case "C2c":
                    decisionThreeBrC3();
                      break;
              }
           }     
          
          //Decisions Tier 2. HAJ.  FIX. 
          //Results of second decision. Mayor's Daughter.
          function decisionTwoBrA(){
              if (document.getElementById("list-option-1").checked == true){
                daughterTier2 = "You have decided to search Emily's room for clues.  When you enter her room, you observe that she is a fairly tidy person; however, you do see a few items around the room that could indicate where to find her.";
                document.getElementById("tier2").innerHTML = daughterTier2;
               
                 /*Background image added, centered and no repeat.
                Image author: Jose Luiz
                Title: Português: House of Juliet - Verona
                License type: cc by-sa 4.0, image cropped to focus on bed.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Bedroom_-_House_of_Juliet_-_Verona_2016.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Bedroom_-_House_of_Juliet_-_Verona_2016_cropped.jpg')";
                  
                trackBranch = "A2a"; 
                decisionThreeBrA_QandA1();
              }
              else if (document.getElementById("list-option-2").checked == true){
                daughterTier2 = "You have chosen to ask her friends if they know anything that could aid you in your quest to find the mayor's daughter.  The maid informs you that Emily has three close friends that might be able to help.  They are Sara, Eliza, and Margaret.  She suggests that your look for them in the village as they spend the most time there.";
                document.getElementById("tier2").innerHTML = daughterTier2;
                  
                /*Background image added, centered and no repeat.
                Image author: provided to Wikimedia Commons by the Bibliothèque municipale de Toulouse as part of a cooperation project with Wikimédia France.
                Title: 	Bagnère de Luchon, Haute-Garonne. 10 octobre 1821
                License type: Public Domain Mark 1.0. Tag: PD-1923.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Bagn%C3%A8re_de_Luchon,_Haute-Garonne._10_octobre_1821_Bagneres_de_Luchon,_Haute_Garonne._October_10_1821_-_Fonds_Ancely_-_B315556101_A_COLSTON_017.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Bagnère_de_Luchon,_Haute-Garonne._10_octobre_1821_Bagneres_de_Luchon,_Haute_Garonne._October_10_1821_-_Fonds_Ancely_-_B315556101_A_COLSTON_017_cropped.jpg')";
                  
                trackBranch = "A2b"; 
                decisionThreeBrA_QandA2();
              }
              else if (document.getElementById("list-option-3").checked == true){
                daughterTier2 = "You have decided to find the one person in every village that always knows what is going on and about everything about everyone, the village's gossip.  You find her in an old chair by the hearth in the general store.  She is an older woman that loves to be in the middle of everything that is going on.  She also has a kind heart and is happy to help you in your quest.";
                document.getElementById("tier2").innerHTML = daughterTier2;
                  
                /*Background image added, centered and no repeat.
                Image author: August Allebé 
                Title: 	Old Woman by a Hearth.
                License type: Public Domain Mark 1.0, color background added. Tag: PD-Art, PD-1923.
                Retrieved from: https://commons.wikimedia.org/wiki/File:August_Alleb%C3%A9_-_Oude_vrouw_bij_de_haard.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/August_Allebé_-_Oude_vrouw_bij_de_haardColor.jpg')";
                trackBranch = "A2c"; 
                decisionThreeBrA_QandA3();
              }
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
            }
          
          //Results of second decision. Farmer's chicken.
          function decisionTwoBrB(){
              if (document.getElementById("list-option-1").checked == true){
                chickenTier2 = "You begin your search by examining the area around the chicken coop. After walking around the parameter of the coop you notice a small bit of fabric hanging off a nail near the entrance.  The fabric scrap must have been ripped off the person's clothes that took the farmer's prized chicken.";
                document.getElementById("tier2").innerHTML = chickenTier2;
                  
                /*Background image added, centered and no repeat.
                Image author: Carl Jutz
                Title: 	Carl Jutz: Buntes Federvieh, 1901, Öl auf Holz
                License type: Public Domain Mark 1.0. Tag: PD-1923. Cropped and color background added.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Jutz_Buntes_Federvieh.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Jutz_Buntes_FederviehColor.jpg')";
                trackBranch = "B2a";
                decisionThreeBrB_QandA1();
              }
              else if (document.getElementById("list-option-2").checked == true){
                chickenTier2 = "You begin your search by examining the area around the chicken coop.  After spending several minutes examining the coop and the surrounding area, you finally stumble onto a possible clue, a spyglass left in the dirt.  You feel sure that it is left by the culprits but to be sure you show it to the farmer.  As you suspected, the farmer confirms that the spyglass does not belong to him.  Knowing that it must belong to the thief, you examine the item for markings as you are aware that it is a common practice to mark items like the spyglass for identification later.";
                document.getElementById("tier2").innerHTML = chickenTier2;
                  
                /*Background image added, centered and no repeat.
                Image author: Daderot
                Title: 	Spyglass owned by Henry David Thoreau - Concord Museum
                License type: CC0 1.0 - Public Domain Dedication. Tags: Either PD-old-70, n/a, or PD-US-unpublished.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Spyglass_owned_by_Henry_David_Thoreau_-_Concord_Museum_-_Concord,_MA_-_DSC05625.JPG*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Spyglass_owned_by_Henry_David_Thoreau_-_Concord_Museum_-_Concord,_MA_-_DSC05625.JPG')";
                trackBranch = "B2b";
                decisionThreeBrB_QandA2();
              }
              else if (document.getElementById("list-option-3").checked == true){
                chickenTier2 = "You begin your search by examining the interior of the chicken coop to see if the chicken could have gotten out on its own.  In the far back corner of the coop, you see a small hole that the it would likely fit through.  When you examine the hole from the outside you see three different sets of tracks to follow.";
                document.getElementById("tier2").innerHTML = chickenTier2;
                  
                /*Background image added, centered and no repeat.
                Image author: Marie Richie from Portland, Cascadia
                Title: Goose tracks on the beach in Albany, Ore., 2002.
                License type: cc by 2.0, unaltered.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Goosed.jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Goosed.jpg')";
                trackBranch = "B2c";
                decisionThreeBrB_QandA3();
              }
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
              
            }
          
          //Results of second decision. Herbalist's ingredients.
          function decisionTwoBrC(){
              if (document.getElementById("list-option-1").checked == true){
                herbTier2 = "You have chosen to head east out of the village.  There is a forest along the roadway known to have healing herbs growing within it.  The road also leads to the coastline where there is a port as well as a few rare ingredients that can be found along the coast.  You feel that going east will give you the best chance at finding the herbs you are questing for.";
                document.getElementById("tier2").innerHTML = herbTier2;
                  
                /*Background image added, centered and no repeat.
                Image author: HAJ
                Title: Compass facing east.
                Retrieved from: idea came from - https://commons.wikimedia.org/wiki/File:Compass_Rose_en_small_E.svg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/DirectionEast.jpg')";
                trackBranch = "C2a";
                decisionThreeBrC_QandA1();
              }
              
              else if (document.getElementById("list-option-2").checked == true){
                herbTier2 = "You have chosen to head north out of the village towards some nearby hills.  You were told that there are herbs that she commonly uses growing in those hills as well as a few caves where mushrooms can be found that are useful in a few poultices.  You also recall that there is another village farther up the mountain that could have what the herbalist needs.";
                document.getElementById("tier2").innerHTML = herbTier2;
                
                /*Background image added, centered and no repeat.
                Image author: HAJ.
                Title: Compass facing north.*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/DirectionNorth.jpg')";
                trackBranch = "C2b";
                decisionThreeBrC_QandA2();
              }
              else if (document.getElementById("list-option-3").checked == true){
                herbTier2 = "You have chosen to head west out of the village towards the largest mountain on the range.  It is more of a trek that the other paths that you could have chosen but also gives you the best odds at finding rare ingredients that the herbalist is in dire need of.  She has shared that there are three paths of varying difficulty up the mountain but that they all are likely to have some of the herbs that she needs growing along those paths or nearby.";
                document.getElementById("tier2").innerHTML = herbTier2;
                  
                /*Background image added, centered and no repeat.
                Image author: HAJ
                Title: Compass facing west.*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/DirectionWest.jpg')";
                trackBranch = "C2c";
                decisionThreeBrC_QandA3();
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
            }
          
        //Decisions Tier 3. HAJ.
          
        //Branch A.
          //Results of searching the room for clues.
          function decisionThreeBrA1(){
              QandA_area = document.getElementById("QandA_area");
              
              if (document.getElementById("list-option-1").checked == true){
                daughterTier3 = "You see a bouquet of wilting wildflowers in a beautiful vase displayed prominently on her nightstand and ask the house maid about them.  <p>She tells you that her mistress loves the smell of the wildflowers from the mountainside and likes to gather them herself.  You find her injured on the mountain near a field of flowers.  She explained that while on the mountainside collecting flowers, she slipped on some loose rocks and twisted her ankle. You help her to the next farm where you borrow a horse and use it to take her back home.  The mayor calls the healer once you arrive and the healer says that Emily just needs to rest for a few days and be more careful when gathering flowers on the mountain.</p>";
                document.getElementById("tier3").innerHTML = daughterTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Guy MOLL
                Title: Aquarelle- bouquet de fleurs du jardin.
                License type: cc by 2.0, Image not altered background color added.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Aquarelle-_bouquet_de_fleurs_du_jardin_(6573762993).jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Aquarelle-_bouquet_de_fleurs_du_jardin_(6573762993)_cropped.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-2").checked == true){
                daughterTier3 = "You find multiple tickets to the carnival that left town just as you were arriving last week.  It looks like she went to it every day that it was in the village. <p>You ask around the village and find out the carnival's next stop is the next village over, about a day's ride to the west.  After spending half a day searching for other clues or signs of Emily around the village, you choose to travel to the carnival in the hopes that she wanted to see a few more shows.</p><p>You find her at the traveling carnival fair in the next village working as a lion tamer. Emily asks you to tell her father that she has found her calling and she will be fine.  You return to her father and pass along the message.  The mayor isn’t thrilled, to say the least, but pays you a few coppers for your troubles.  You suggest that he watch her at work before making any rash decisions, she’s good at what she does. </p>";
                document.getElementById("tier2").innerHTML = daughterTier3; 
                
                /*Background image added, centered and no repeat.
                Image author: Gibson & Co., Cincinnati, Ohio
                Title: The lion queen, 1874
                License type: Public Domain. Tag: PD-1923. Added background color.
                Retrieved from: https://commons.wikimedia.org/wiki/File:The_lion_queen,_1874.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/The_lion_queen,_1874Color.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-3").checked == true){
                daughterTier3 = "You find a beautifully made but well used violin sitting on a stand near the window.  On closer examination you see that it has a broken string that needs to be replaced before she can play it again. You recall seeing an artisan in the village to the east that made instruments and decide to see if Emily went to get a new string. <p>When you arrive in the next village, you head straight to the artisan's shop as you are beginning to run out of daylight to travel in.  When you arrive at the artisan's shop, he informs you that she has just left and was planning to stop at the local inn to eat before heading home.</p><p>You find Emily at the inn eating her meal.  She says that she needed to get the string replaced immediately as there is a village gathering in a few weeks at which she will be playing and needs to practice.  She knew that there was an artisan in this village and so left as soon as she was ready to travel yesterday.  She had left her father a note knowing that she may not make it back that night for dinner, but it had been caught by a breeze and flew out the open window in the kitchen.  You escort her back to her father’s home and are rewarded with a few gold coins. </p>";
                document.getElementById("tier2").innerHTML = daughterTier3; 
                  
                /*Background image added, centered and no repeat.
                Image author: listed as private. edited by User:Frinck51
                Title: Biber mysterien
                License type: cc by-sa 3.0
                Retrieved from: https://commons.wikimedia.org/wiki/File:Biber_mysterien.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/521px-Biber_mysterien.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
            }
          
          //Results from talking with her friends.
          function decisionThreeBrA2(){
              QandA_area = document.getElementById("QandA_area");
              
              if (document.getElementById("list-option-1").checked == true){
                daughterTier3 = "You find Sara helping a customer at the general store.  After the customer leaves with their dry goods, you ask Sara if she knows where Emily could be found.  Her friend tells you that Emily loves to read. She suggests that you try the library at the center of the village.  It’s not a big place but Emily loves to get lost among the stacks of books there. <p>You arrive at the village’s library just before sunset and wonder the stacks and little nooks throughout the building.  Just when you are about to give up, you find Emily in the back of the library surrounded by piles of books tucked around the back of a bookshelf.  She is a bit embarrassed but unapologetic that she had lost track of time.  When asked about why she missed dinner with her father the night before she replied that she had spent the night reading in her room that night and that her father did not hear the maid when she told him where Emily would be.</p>";
                document.getElementById("tier2").innerHTML = daughterTier3;
                  
                /*Background image added, centered and no repeat.
                Image author: antomoro
                Title: Dublin Old Library Trinity College 02
                License type: Free Art License 1.3, cropped.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Dublin_Old_Library_Trinity_College_02.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Dublin_Old_Library_Trinity_College_02_cropped.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-2").checked == true){
                daughterTier3 = "Eliza tells you that Emily has been feeding a stray dog that has been wondering around the village for a few weeks. <p>You asked around the village and asked if anyone had seen the dog.  A farmer bringing in grain from his farm tells you that while he hasn’t seen the dog he has seen Emily.  She was heading out to the fields north of town.  Following his directions, you find her out in those fields.  When you find her, Emily tells you that she couldn’t find the stray dog where she usually fed him.  So, she went looking for him and spent all day looking everywhere.  Emily found the dog in the fields perfectly healthy. You escort both her and her dog back to the mayor’s home.</p>";
                document.getElementById("tier3").innerHTML = daughterTier3; 
                
                /*Background image added, centered and no repeat.
                Image author: Edwin Henry Landseer
                Title: English: A Distinguished Member of the Humane Society
                license type: Public Domain Mark 1.0. Tag: PD-1923, PD-Art. Small amount cropped off and color border added.
                Retrieved from: https://commons.wikimedia.org/wiki/File:A_Distinguished_Member_of_the_Humane_Society_by_Sir_Edwin_Landseer.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/A_Distinguished_Member_of_the_Humane_Society_by_Sir_Edwin_LandseerColor.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              else if (document.getElementById("list-option-3").checked == true){
                daughterTier3 = "Margaret says that Emily loved her lessons in school and has been talking about going to the university in the capital.  Every time she discussed it with her father, he wasn’t keen on her going away to school and being away from home so long.  Margaret suggests checking at the university for her as she had started to talk about going to school with, or without, her father's permission.<p>It is two days travel from the village and when you arrive you find her alive, well, and now a student.  Emily tells you that in a fit of frustration, she took off to enroll at the school to study music without telling her father.  She gives you a letter that apologizes for the way she left and explains why this is so important to her.  You promise to give it to her father and as well as pass on a promise to that she will return soon to visit.</p>";
                document.getElementById("tier3").innerHTML = daughterTier3; 
                  
                /*Background image added, centered and no repeat.
                Image author: Tuxyso
                Title: Warburg-Panorama-von-Fuegeler-Kanone
                License type: cc by-sa 3.0, unaltered.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Warburg-Panorama-von-Fuegeler-Kanone.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Warburg-Panorama-von-Fuegeler-Kanone.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
            }
                    
          //Results from talking with the gossip.
          function decisionThreeBrA3(){
              QandA_area = document.getElementById("QandA_area");
              
              if (document.getElementById("list-option-1").checked == true){
                daughterTier3 = "The gossip tells you that Emily has been seen with a young blacksmith’s apprentice walking together along the main road for the past few weeks in deep discussion.  She is not sure what they are talking about as they talk quietly and stop when people come near.  The gossip shares that she feels this must mean they are smitten with each other but do not want to tell anyone yet.<p>When you arrive at the blacksmith's shop in town, you find Emily inside.  She tells you that although her and the apprentice have begun the early stages of courting each other, she has been spending time with him to learn about the blacksmithing trade to see if she wishes to pursue the craft herself.  If she decides to, he promises to help her gain an apprenticeship with his master.</p>";
                document.getElementById("tier2").innerHTML = daughterTier3;
                  
                /*Background image added, centered and no repeat.
                Image author: Unknown
                Title: Ministry of Information First World War Official Collection
                License type: Public domain. Tag: PD-Art.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Ministry_of_Information_First_World_War_Official_Collection_Q30982.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Ministry_of_Information_First_World_War_Official_Collection_Q30982_Color.jpg ')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-2").checked == true){
                daughterTier3 = "The gossip shares that Emily has shown interest in the local councilman’s son who has recently returned from university where he was studying law. You wonder the village without finding the couple so then chose to venture out to the councilman's land.  <p>When you arrive you find that the councilman is not home, but his wife shares that the couple is there once she finds out why you are inquiring.  You walk out into the fields in the direction the councilman's wife tells you she saw them walking.</p><p>When you catch up to them they share that they grew up together as they families are close friends and had discussed courting each other in the past.  They decided that courting and marriage would wait until after he had returned from university.  Now that he is finished, they plan to approach their parents and announce their intentions to marry.</p><p>When asked how her father had missed her at dinner the night before, Emily shared that she had left a message for her father informing her intention of having a meal at the councilman's home and had arrived home after her father had sequestered himself in his study. She is not sure how he had missed the message, but is glad to return home to clear up any misunderstandings.</p>";
                document.getElementById("tier3").innerHTML = daughterTier3; 
                
                /*Background image added, centered and no repeat.
                Image author: artemtation
                Title: Wedding-171843
                License type: CC0 1.0 - Public Domain Dedication. Cropped. 
                Retrieved from: https://commons.wikimedia.org/wiki/File:Wedding-171843.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Wedding-171843.jpg";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              else if (document.getElementById("list-option-3").checked == true){
                daughterTier3 = "The gossip shares with you that Emily came into town to listen to music every night the traveling minstrel was playing at the inn.  When you enquire at the inn, they share that the minstrel moved on to the next village yesterday.  You ask for directions to that village and head out immediately.  When you arrive at the next village you head directly to their local inn.  There you find Emily and the minstrel playing music for the villagers in attendance.  When asked, Emily shares that she loves music and when the opportunity arose, decided to join the traveling minstrel when he moved onto the next village.  She took her violin with her to play alongside the music he plays on his lute.  You suggest that she travel back to her village and discuss with her father her new adventure and share that the way that she left so quickly caused him to worry about her safety.  Emily and the minstrel agree that they need to talk to the mayor before another day passes.  You escort them back to the village where the mayor is both relieved to see Emily and upset with her for the way she left.  Though the mayor is not thrilled with her decision, he decides to let her try traveling to nearby villages to play music with the minstrel for the next fortnight and then deciding if he will allow her to continue.";
                document.getElementById("tier3").innerHTML = daughterTier3; 
                  
                /*Background image added, centered and no repeat.
                Image author: Joseph Menchen
                Title: Menchen 'The Miracle' (1912) ) 01
                License type: Public Domain Mark 1.0. US tag: PD-1923. Cropped and added background color.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Menchen_%27The_Miracle%27_(1912)_)_01.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/MenchenThe_Miracle(1912)Color.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
          }
            
          //Branch B. 
          //Results of finding a scrap of fabric.
          function decisionThreeBrB1(){
              QandA_area = document.getElementById("QandA_area");
              
              if (document.getElementById("list-option-1").checked == true){
                chickenTier3 = "The scrap is made of inexpensive materials and is also rough, quite dirty, and hints that the clothing is in disrepair. It strikes you that the state of the material is rougher than you have seen any of the villagers wearing and so it is likely to be from someone who is traveling through the area.  You ask around the village to find out if anyone has seen travelers recently that might be wearing clothing that would match the scrap you discovered.  Sara at the general store tells you that she has seen a band of people staying out in the valley to the south of the village by the waterfall. <p>You arrive at a vagabond's camp in the woods in time to see one of them pull a chicken off the fire that they have been roasting on a spit and start ripping it into hunks of meat to be passed around to people.  You inquire with the person that cooked the chicken where it is that he found it.  He admits that they had taken it from a farmer's chicken coop nearby hoping he would not notice.  They were just so hungry when they stumbled upon the coop that they could not resist taking just one.</p> <p>Feeling bad for them, you chose not to turn them into the magistrate for stealing and instead suggest that they offer to trade a few days of work for food from the farmer.  They are hesitant at first of how the farmer will react to them after they store his chicken, so you agree to broach the subject with the farmer yourself.  The farmer is devastated that his prized chicken is dead, but is willing to try out the trade for a few days in order to get the harvest in on time to be used for a festival the village is having next week.</p>";
                document.getElementById("tier3").innerHTML = chickenTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Albert Bierstadt 
                Title: Bierstadt Albert Campfire Site Yosemite
                License type: Public Domain Mark 1.0. Tag: PD-Art, PD-1923. Image cropped.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Bierstadt_Albert_Campfire_Site_Yosemite.jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Bierstadt_Albert_Campfire_Site_YosemiteCroppedColor.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-2").checked == true){
                chickenTier3 = "The scrap is clean wool with a simple pattern.  When examining the pattern on the fabric you realize that you have seen it before on an apron that the farmer's wife was wearing in the garden when you walked by with the farmer on the way to the chicken coop.  You return to the farmer's home and find his wife in the kitchen beginning preparations for the evening's meal.  <p>She is surprised to see you but welcomes you in to chat when she finds out that the farmer had brought you out to their farm for work.  You share that the work the farmer brought you out for is to find one of his chickens that he highly values and you show her the scrap of cloth that you found.  The farmer's wife smiles a bit embarrassed and confirms that she did rip the edge of her apron when taking a chicken to cook for supper.  When she had selected it for dinner she had not realized that her husband wanted to keep the old bird around.</p><p>You had managed to arrive just in time to save it as she was about to begin preparing the chicken.  The farmer is pleased that you found his chicken and a bit chagrined that if he had only looked in the kitchen he would have found it.  For your troubles, you get a few coppers and a hot meal prepared his wife. </p>";
                document.getElementById("tier3").innerHTML = chickenTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Peter van der Sluijs. 
                Title: Medieval woman who cut to the meat, they picture living history from
                License type: cc by-sa 3.0, cc by-sa 2.5, cc by-sa 2.0, and cc by-sa 1.0. Background color added.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Medieval_woman_who_cut_to_the_meat,_they_picture_living_history_from.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Medieval_woman_who_cut_to_the_meat,_they_picture_living_history_fromColor.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-3").checked == true){
                chickenTier3 = "The scrap is made of a rich fabric and has fine stitching making some type of flower pattern on it. You realize that the fabric matches that of a woman you saw eating at the inn when you went in to select a quest on the board.  The innkeeper, when questioned, informs you that it was Lady Beth that lives alone in a big home on the eastside of town.  As you walk up the lane to her home you hear a noise that sounded vaguely like a chicken but is so loud that it shakes the ground you are walking on.  As you come through the trees approaching the lady's home, you get your first look at the chicken as its head is poking over the top of the house.  It's now 50 feet tall.  <p>You stop in your tracks, so gob smacked that you are still standing there staring at the chicken when Lady Beth sees you through a window and comes out to greet you.  As it turns out, the lady is a witch and has decided to get back at the farmer for a passing comment he made and experiment on his favorite chicken. </p><p>With the proof of the lady's power right in front of you, you realize that discretion is the better part of valor in resolving this situation.  You talk with her for several minutes and realize that she is generally not malicious, just angry at the farmer.  You get her to agree to return the chicken back to normal size after receiving an apology from the farmer.</p><p>The farmer is stubborn and does not want to apology to the essentric lady; however, you do convince he to come see the chicken for himself.  When you both arrive at Lady Beth's home, the farmer has much the same reaction to the size of  the chicken as you do.  A bit more humbled, the farmer is quick to apology and the lady returns the chicken to normal size.</p>";
                document.getElementById("tier3").innerHTML = chickenTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Luis Miguel Bugallo Sánchez. 
                Title: Teaño - Cuntis - Galicia - Spain
                License type: cc by-sa 3.0, unaltered.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Galo_GDFL66.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Galo_GDFL66.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
          }
          
          //Results of finding a spyglass.
          function decisionThreeBrB2(){
              QandA_area = document.getElementById("QandA_area");
              
              if (document.getElementById("list-option-1").checked == true){
                chickenTier3 = "On the side of the spyglass you see the logo of local shoppe that crafts toys for children.  Upon further examination of the spyglass you also see that it is simply made, not meant to be used for work.  You surmise that it must have been left by a child playing in the area, but am not sure what that has to do with the chicken being missing.<p>You walk from farm to farm around the farmer's land looking to see if your hunch is right and some kids had been playing around the coop and perhaps had let the chicken get out of the pen the farmer had made around the chicken coop. At the farm to the west, you hear some children playing behind the house.  As you come around the back of the house you find some boys pretending to rescue the chicken from bandits. The boys are rather chagrined, but agree that they should not have taken the chicken to play with.</p><p>You talk with the mother of the boy, whose house you find them at, and you both escort the boys back to the farmer's house that they took the chicken from.  The boys apologize to the farmer and the boy's mother suggests that they do some work cleaning out the chicken coop for the farmer as punishment.  The farmer pays you for the trouble and seems pleased with getting a good story and work out of the trouble.</p>";
                document.getElementById("tier3").innerHTML = chickenTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Phil Williams 
                Title: I see no ships ... - geograph.org.uk - 126669
                License type: cc by-sa 2.0, cropped and added background color.
                Retrieved from: https://commons.wikimedia.org/wiki/File:I_see_no_ships_..._-_geograph.org.uk_-_126669.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/I_see_no_ships_..._-_geograph.org.uk_Color.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              else if (document.getElementById("list-option-2").checked == true){
                chickenTier3 = "On the side of the spyglass you find a skull & crossbones scratched into the wood. You head to the Inn to speak with the Innkeeper to find out if any pirates have been seen in the area as you have seen markings like this on their possessions before.  The Innkeeper tells you that some hunters saw a ship in a cove near the docks with a pirate flag flapping from the top mast, the center pole of the ship.  When you arrive at the cove, you find that there is a ship present that has all the makings of a pirate's ship.  <p>You make your way as slowly and inconspicuously as you can down to the ship, as there may be several pirates present but only one of you.  </p><p> You end of having to fight your way onto a pirates’ ship to save the chicken wondering the whole time if this quest is worth the effort.  With luck, and quite a bit of skills, you manage to fight your way through the pirates on board and retrieve the chicken from their hold.</p><p>After returning to the deck after retrieving the chicken, you see another group of pirates blocking your path.  You prepare to battle them again but their captain bargains to let you leave with the chicken as long as you allow them to retrieve the eggs from the wooden crate the chicken is in.  You retrieve the eggs and give them to the captain once you have made it to the beach, noting that they have a golden hue to their shells. </p> <p>You return the chicken to the farmer and he farmer admits to you that the chicken does indeed lay golden eggs and gives you two as payment.";
                document.getElementById("tier3").innerHTML = chickenTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Florida Memory. 
                Title: Replica of the HMS Bounty docked at Key West Bight 
                License type: Public Domain in the United States under the terms of Section 257.35(6). Added background color.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Replica_of_the_HMS_Bounty_docked_at_Key_West_Bight_(8431786681).jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Replica_of_the_HMS_Bounty_docked_at_Key_West_Bight_(8431786681)_Color.jpg')";
                //QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              else if (document.getElementById("list-option-3").checked == true){
                chickenTier3 = "You find an imprint of the local merchant guild logo attached to the base of the spyglass.  Knowing that there is a merchant guild hall located in the village proper, you head there to find out if anyone recognizes the spyglass.  <p>When you arrive at the guild hall you find that there are a few members in attendance, and for a few copper, they tell you that it looks like a spyglass owned by a guild elder named Branton who lives within a few minutes' walk of the farmer's land.</p><p>When you arrive at Branton's home, the merchant claims that the chicken was stolen from him last week and he was just retrieving what was his.  You try to convince him elsewise for some time without success so suggest that you moderate a discussion between him and the farmer on who really owns the chicken.</p><p>After much debate the two men finally agree that the farmer can keep the chicken but must supply the merchant with eggs for the next week.";
                document.getElementById("tier3").innerHTML = chickenTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Miscellaneous Items in High Demand, PPOC, Library of Congress. 
                Title: Old man looking through spyglass
                License type: Public Domain Mark 1.0.  Tag: PD-1923. Cropped and added color background.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Old_man_looking_through_spyglass_LCCN2003675172.tif*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/lossy-page1-747px-Old_man_looking_through_spyglass_LCCN2003675172.tif_Color.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
          }
          
          //Results of finding the hole in the coop.
          function decisionThreeBrB3(){
              QandA_area = document.getElementById("QandA_area");
              
              if (document.getElementById("list-option-1").checked == true){
                chickenTier3 = "You decide to follow the light indentations that are heading towards the barn a few yards away from the chicken coop.  As you near the barn you start to hear sounds that could be the chicken you are looking for.  <p>As you move around the bales of hay, you find the chicken.  It is pecking away at the ground behind some bales in the back of the barn. After a bit of a struggle, and several failed attempts that you are gratful no one was present for, you capture the chicken.  You return it to the gratful farmer that gives you a few copper for your trouble and a hot meal his wife has made.</p>";
                document.getElementById("tier3").innerHTML = chickenTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Nigel Chadwick 
                Title: Hay bales in a barn, South Farm - geograph.org.uk
                License type: cc by-sa 2.0, unaltered.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Hay_bales_in_a_barn,_South_Farm_-_geograph.org.uk_-_1589330.jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Hay_bales_in_a_barn,_South_Farm_-_geograph.org.uk_-_1589330.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-2").checked == true){
                chickenTier3 = "You choose to follow the tracks heading towards smoke you see in the distance, near the horizon.  As you follow the tracks into the horizon you notice that the tracks seem to be increasing in size and you begin hearing odd noises.<p>When you come around the bend in the path, you see something that you never expected to see when following chicken tracks, a dragon.  At this point you're unsure if the chicken was dinner or has somehow turned into the dragon itself.</p><p>After standing there for a few moments in indecision on how to proceed, you hear some gravely chuckling.  You look up to find that the dragon is laughing at you.  You slowly approach the dragon and ask what it is that is so humorous.  He shares that it is the dumbfounded look on your face.</p><p>You reply that you were just a little thrown by finding a dragon where you expected a chicken to be.  He says that he was cursed by a witch to be turned into a chicken, because she wanted his horde, and then sold him to the farmer.  He expected to be stuck in the body of a chicken for the rest of his days but started to feel odd when he woke up in the coop this morning.  He realized he was starting to change so got as far away from the farm as he could before he finished changing back.</p><p>He plans to take revenge on the witch as soon as he rests up and asks that you wait to tell the farmer until he has done so that the witch does not find out that her spell has failed.  In return, he offers you as much as you can carry from his recovered horde.</p>";
                document.getElementById("tier3").innerHTML = chickenTier3;
                
                /*Background image added, centered and no repeat.
                Image author: David Demaret
                Title: Smaug par David Demaret
                License type: cc by-sa 3.0. Added background color.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Smaug_par_David_Demaret.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Smaug_par_David_DemaretColor.jpg ')";
                //banner.style.backgroundSize = "70%";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              else if (document.getElementById("list-option-3").checked == true){
                chickenTier3 = "You decide to follow the light tracks heading towards the woods a stone's throw away from the chicken coop.  As you follow the tracks into the woods you start hearing chicken noises.  The noises seem to be coming from up ahead, but you do not see anything.  As you move closer to the sound, you notice a hole in the ground up ahead. <p>When you investigate it, you find the chicken whole and well. The problem is no longer where the chicken is but how to get the chicken out of there. After much trial and error, you decide that it would be better to return to the farmer's house and get a bucket, rope, and some help.</p><p>You find the farmer tending the fields and tell him you have found the chicken but need a few things, and some help, to get it back.  Once the rope and bucket are in hand, you lead the farmer to the hole where you found the chicken.  With some work, the chicken is retrieved and the farmer pays you a dozen copper for your trouble.</p>";
                document.getElementById("tier3").innerHTML = chickenTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Bill Nicholls
                Title: Hole in the ground - geograph.org.uk
                License type: cc by-sa 2.0, added color background.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Hole_in_the_ground_-_geograph.org.uk_-_1659440.jpg*/ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Hole_in_the_ground_-_geograph.org.uk_-_1659440Color.jpg ')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
          }
          
          //Results of heading East.
          function decisionThreeBrC1(){
              QandA_area = document.getElementById("QandA_area");
              
              if (document.getElementById("list-option-1").checked == true){
                herbTier3 = "You follow the road to the port where you have decided to check the shops for herbs.  It has taken you most of the day to arrive at the port but feel that it is worth the trip when you find an herbalist's shop there.  You bargain with the herbalist and manage to purchase a small amount at her shop. <p>Knowing that you will need to bring back more than you purchased to fulfill the quest, you take a meandering path back through the woods to see what else you can find.  You find a few more herbs, as well as some mushrooms, to add to the amount that you purchased.</p><p>The herbalist is actually quite pleased with the herbs you have brought her.  The ones purchased at the port are hard to come by and she was running low on the mushrooms that you picked on the way back.  She gives you a gold piece for your work and a healing poultice for cuts.</p>";
                document.getElementById("tier3").innerHTML = herbTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Sailko
                Title: View of a Harbor with Ruins
                License type: cc by-sa 4.0, cropped out frame.  Added background color.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Leonardo_coccorante,_ruderi_03.jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Leonardo_coccorante,_ruderi_03_Color.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-2").checked == true){
                herbTier3 = "You choose to follow the path that leads to the coastline.  As you walk the coastline you meet an herb gatherer gathering seaweed on the shore.  She has the ingredients you were sent to find and says that she will trade them for a day's labor at her family's farm.<p>You are unsure that a day's labor for a bundle of herbs is a fair trade, so you begin to bargain with her.  After a bit of haggling, you both agree to half a day's worth of labor for the herbs.  You follow her to her family's place and arrive just as they are setting up for the mid-day meal.  They offer to feed you before your work begins.  The meal is filling, but you are then soon put to work.  While you are there you help to till the fields, cut some firewood, and feed some livestock.</p><p>At the end of the day the gatherer approaches you and thanks you for your hard work.  She shares that her father is pleased with the amount of work that you have accomplished and invites you to have supper with them before heading out.  After sharing the meal with them, you head back to the village and your warm bed at the inn.  The next day you deliver the herbs you worked for to the herbalist, she is pleased with the quality of herbs and pays you a few gold pieces.</p>";
                document.getElementById("tier3").innerHTML = herbTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Claire Pegrum
                Title: Coastline, Islay - geograph.org.uk
                License type: cc by-sa 2.0, unaltered.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Coastline,_Islay_-_geograph.org.uk_-_272992.jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Coastline,_Islay_-_geograph.org.uk_-_272992.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-3").checked == true){
                herbTier3 = " As you are meandering through the woods near the road looking for the herbs that may be growing there, you hear a woman calling for help.  Abandoning your search for the herbs, you rush to her aid.  You find the woman in trouble in a clearing up ahead.  She is being cornered by a couple of wolves and is in need of help.<p>You carefully circle around the clearing until you have made it over to the woman in need.  While taking a few moments to access the situation, you notice some soft whimpering sounds.  Without taking your eyes off of the wolves who you now realize are a mated pair, you look in the undergrowth behind the women.  There you discover a couple of wolf pups.</p><p> Now realizing why the wolves are upset, you work to inch you and the woman slowly away from the area.  They give a few warning growls when your movements are too sudden, but otherwise allow you to leave the area. You escort her to the herbalist for the few minor injuries she has and discover she is the herbalist’s daughter that was also out gathering herbs.  The herbalist is grateful and offers you a few poultices for free. </p>";
                document.getElementById("tier3").innerHTML = herbTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Caninest
                Title: Two Grey Wolves 
                License type: cc by 2.0, added background color.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Two_Grey_Wolves_(4394641125).jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Two_Grey_Wolves_(4394641125)Color.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
          }
          
          //Results of heading North.
          function decisionThreeBrC2(){
              QandA_area = document.getElementById("QandA_area");
              
              if (document.getElementById("list-option-1").checked == true){
                herbTier3 = "The sheep herder often collects herbs for the herbalist from the heals around his home.  He has already dried a bushel and a half for her that he would have been bringing down in a few days.  When you enquire if they are for sale, he offers to share what he would have been paid in return for delivering them to the herbalist and saving him the trip down to the village. <p>In addition to that, he has a task for you.  With his share of the pay, he would have you buy a number of needed supplies from the general store and deliver them back to him at his hut.  In trade, he would pay you a few copper and a warm cloak made from the wool sheared from his sheep.</p><p>In need of a new cloak you agree to the sheep herder's deal and return to the village to deliver the herbs and pick up the requested goods.  The day is reaching its end once you have finished buying the goods from the general store, so you wait to head out at first light.  The sheep herder is pleased at your arrival.</p>";
                document.getElementById("tier3").innerHTML = herbTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Henry Brittan Willis
                Title: Landscape with sheep herder and dog
                License type: Public Domain Mark 1.0. Covered under either US tag PD-US-not renewed or PD-US-no notice.  Unaltered.
                Retrieved from: https://commons.wikimedia.org/wiki/File:Lanscape_with_sheep_herder.jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Lanscape_with_sheep_herder.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-2").checked == true){
                herbTier3 = "Not far off from where you see a herder’s hut there is a cave that you have decided to explore for the ingredients.  You know that mushrooms often grow in the caves around her and they are on the herbalist’s list.  <p>When you arrive at the entrance of the cave, you notice that it is not as large as you were hoping it would be, but it is still big enough to find what you are questing for.  You hurry to get to work as you only have a few hours in the day left where the light will reach far enough into the cave to see.</p><p>It is a long two hours, but you manage to get a satchel full of a few different types of mushrooms.  When you return to the herbalist she is pleased that most of the ones that you found are good for medicine and pays you a few pieces of silver as well as a poultice to use on cuts. </p>";
                document.getElementById("tier3").innerHTML = herbTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Luke Bales
                Title: St moré cave
                License type: cc by-sa 2.0, unaltered.
                Retrieved from: https://commons.wikimedia.org/wiki/File:St_mor%C3%A9_cave.jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/1024px-St_moré_cave.jpg ')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              } 
              else if (document.getElementById("list-option-3").checked == true){
                herbTier3 = "Instead of spending all day gathering the herbs requested, you decide to go to the next village to see if their herbalist has the herbs requested.  This way you can look in on the bar maid that works at the tavern while you’re there.<p>When you arrive at the herbalist’s shop in the next village she has the herbs you need but will not take your copper.  She notices how strong you look and will trade you only if you provide a day’s worth of labor helping her husband out on their farm.  Although it is a short trip back to the village you do not have time to return and go gather the herbs, so you decide to take her up on the trade.</p><p>After several hours of work, stopping only here and there for food and water, you have finished the day's labor and have  the herbs in hand.  Upon returning to the herbalist who gave you the quest, she pays you in a handful of silver.</p>";
                document.getElementById("tier3").innerHTML = herbTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Andy Spenceley
                Title: Cosmeston medieval village
                License type: 
                Retrieved from: https://commons.wikimedia.org/wiki/File:Cosmeston_medieval_village.jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/Cosmeston_medieval_village.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
          }
          
          //Results of heading West.
          function decisionThreeBrC3(){
              QandA_area = document.getElementById("QandA_area");
              
              if (document.getElementById("list-option-1").checked == true){
                herbTier3 = "You choose to take the steepest path. The steepest path up the mountain proves to be the most fruitful as you find a field full of the herbs needed and gather two bushels to return to the herbalist.  She is pleased with the amount you have gathered and asks you to do one more favor for her.  She needed the herbs for a poultice for the King, he is staying in a nearby village and needed the use of her skills.  Deliver the medicine to him and half of the gold reward is yours.<p>You take her up on the offer as helping the King is always good for business and he is a just King that treats his subjects well.</p><p>You arrive just in time for the medicine to save the King from the poisoning.  You notice that the King's cousin does not seemed pleased that you arrived in time to save the King.  You choose to stay the night before heading back with the excuse that you prefer heading out at first light.  In reality, you wish to investigate the poisoning.  Though you are sure to gather the reward before going to purchase a night's stay from the innkeeper.</p><p>A short while later, you hear the King's cousin walk past your room to head down for the evening's meal.  After you are sure that he has passed, you search his room for clues that would confirm your suspicions.</p><p>Just when you are about to give up, you find a small bit of leaves used to make the poison within the robes of one of his gowns.  You immediately take the evidence to the King's room after finding it, knowing that you do not have much time before the cousin returns.  The King thanks you for your trouble but suggests you leave before he confronts his cousin.  The herbalist is pleased with your work and praises you with your ingenuity in finding the poisoner.</p>";
                document.getElementById("tier3").innerHTML = herbTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Ashish Gupta
                Title: Steep trail
                license type: cc by 2.0
                Retrieved from: https://commons.wikimedia.org/wiki/File:Steep_trail_(15503684836).jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/1024px-Steep_trail_(15503684836).jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-2").checked == true){
                herbTier3 = "You choose to take the gradually climbing path up the mountain as the other paths look treacherous.  You find bits of the herb here and there along the path but not in any abundance.  <p>Still you gather enough for the herbalist to give you a few pieces of silver for you time as the herb you did find is hard to find in great quantities. She has other ingredients that she needs gathered if you choose to stay in the village for a few more days.  You are considering her offer, but am hoping that other more interesting quests appear on the board before you need to take her up on the offer.</p>";
                document.getElementById("tier3").innerHTML = herbTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Deborah Lee Soltesz
                Title: Weatherford Trail 
                license type: CC0 1.0
                Retrieved from: https://commons.wikimedia.org/wiki/File:Weatherford_Trail_(36253242181).jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/1024px-Weatherford_Trail_(36253242181).jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              else if (document.getElementById("list-option-3").checked == true){
                herbTier3 = "You choose to take the rocky path up the mountain. The rocky path looks a bit difficult, but you have heard that people have found the flowers needed by the herbalist up that way.  Your time ends up being mostly a waste; however, you do find a handful of the herbs requested.  She gives you 10 coppers for your time but feels the need to remind you that plants do not grow from rocks.<p>You are  a bit irritated at her response to your effort, but not surprised as she tends to treat everyone as a child.  Satisfied that there are other quests that you can take on for loot another day, you return to the inn for food and whatever music is playing that night.</p>";
                document.getElementById("tier3").innerHTML = herbTier3;
                
                /*Background image added, centered and no repeat.
                Image author: Staryyeyes
                Title: The cleaved rock, the exit of the Fish lake
                License type: cc by-sa 4.0, unaltered.
                Retrieved from: https://commons.wikimedia.org/wiki/File:The_cleaved_rock,_the_exit_of_the_Fish_lake.jpg */ 
                banner = document.getElementById("banner");
                banner.style.backgroundImage = "url('images/The_cleaved_rock,_the_exit_of_the_Fish_lake.jpg')";
                QandA_area.setAttribute("style","visibility = hidden; height: 0px; padding-top: 0px;");
              }
              
              //Put in place for rare event of radio button not selected when return clicked.
              else{
                  alert("Invalid Input.");
              }
          }
          //Question and Answer changes. HAJ
          
          //Branch A: Q and A. Mayor's daughter. HAJ.
          //Branch A: Q and A for second decision. HAJ
          function decisionTwoBrA_QandA(){
              document.getElementById("Question").innerHTML ="You have chosen to find the mayor’s daughter Emily, what do you decide to do first?";
              document.getElementById("QuestionOne").innerHTML ="Search her room for clues.";
              document.getElementById("QuestionTwo").innerHTML ="Ask her friends what they know.";
              document.getElementById("QuestionThree").innerHTML ="Ask the village gossip who Emily has been seen courting."; 
          }
          
          //Branch A: Q and A for third decision. Search her Room. HAJ
          function decisionThreeBrA_QandA1(){
              document.getElementById("Question").innerHTML ="You search her room for clues.  What do you find?";
              document.getElementById("QuestionOne").innerHTML ="A bouquet of wilting wildflowers.";
              document.getElementById("QuestionTwo").innerHTML ="A ticket stub to carnival.";
              document.getElementById("QuestionThree").innerHTML ="A violin with a broken string."; 
          }
          
          //Branch A: Q and A for third decision. Ask her Friends. HAJ
          function decisionThreeBrA_QandA2(){
              document.getElementById("Question").innerHTML ="Ask her friends what they know.  Which friend do you talk to?";
              document.getElementById("QuestionOne").innerHTML ="Her friend Sara who works at the general store.";
              document.getElementById("QuestionTwo").innerHTML ="Eliza who loves to wonder the village.";
              document.getElementById("QuestionThree").innerHTML =" Margaret who you find finishing up a teaching a lesson at the school house."; 
          }
           
          //Branch A: Q and A for third decision. Ask village gossip. HAJ
          function decisionThreeBrA_QandA3(){
              document.getElementById("Question").innerHTML ="You have chosen to ask the village gossip who Emily has been seen courting.  Which boy did she choose?";
              document.getElementById("QuestionOne").innerHTML ="The young blacksmith’s apprentice.";
              document.getElementById("QuestionTwo").innerHTML ="The local councilman’s son, back from school.";
              document.getElementById("QuestionThree").innerHTML ="A traveling minstrel."; 
          }
          
          //Branch B: Q and A. Find Chicken. HAJ.
          //Branch B: Q and A for second decision. HAJ
          function decisionTwoBrB_QandA(){
              document.getElementById("Question").innerHTML ="You choose to find the farmer’s prized chicken, what clue do you find?";
              document.getElementById("QuestionOne").innerHTML ="A scrap of fabric.";
              document.getElementById("QuestionTwo").innerHTML ="A spyglass laying outside the coop.";
              document.getElementById("QuestionThree").innerHTML ="A hole in the shed."; 
          }
          
          //Branch B: Q and A for third decision. HAJ
          //Scrap fabric. HAJ
          function decisionThreeBrB_QandA1(){
              document.getElementById("Question").innerHTML ="You have found a scrap of fabric.  What clues does it offer?";
              document.getElementById("QuestionOne").innerHTML ="The scrap is rough & dirty. It is also made of inexpensive materials.";
              document.getElementById("QuestionTwo").innerHTML ="Clean, spun wool. lightly dyed.";
              document.getElementById("QuestionThree").innerHTML ="Rich fabric with fine stitching."; 
          }
          
          //Spyglass. HAJ
          function decisionThreeBrB_QandA2(){
              document.getElementById("Question").innerHTML ="You have found a spyglass laying outside the coop.  Any unique markings?";
              document.getElementById("QuestionOne").innerHTML ="Logo of local toy shoppe.";
              document.getElementById("QuestionTwo").innerHTML ="Skull & Crossbones scratched into the wood.";
              document.getElementById("QuestionThree").innerHTML ="Merchant guild logo attached to the base."; 
          }
          //Tracks. HAJ.
          function decisionThreeBrB_QandA3(){
              document.getElementById("Question").innerHTML ="You have found a hole in the shed.  Which set of tracks do you follow?";
              document.getElementById("QuestionOne").innerHTML ="Light indentations going towards the barn.";
              document.getElementById("QuestionTwo").innerHTML ="Tracks heading towards smoke in the horizon.";
              document.getElementById("QuestionThree").innerHTML ="Light tracks heading towards the woods.";
          }
          
           //Branch C: Q and A. Find Herbs. HAJ.
          //Branch C: Q and A for second decision. HAJ
          function decisionTwoBrC_QandA(){
              document.getElementById("Question").innerHTML ="You choose to gather ingredients for the herbalist, which direction do you go?";
              document.getElementById("QuestionOne").innerHTML ="East.";
              document.getElementById("QuestionTwo").innerHTML ="North.";
              document.getElementById("QuestionThree").innerHTML ="West."; 
          }
          
          //Herbalist, head east. Q and A.
          function decisionThreeBrC_QandA1(){
              document.getElementById("Question").innerHTML ="You have chosen to head East out of the village.  Do you chose to?";
              document.getElementById("QuestionOne").innerHTML ="Check the shops at the port.";
              document.getElementById("QuestionTwo").innerHTML ="Walk along the coastline.";
              document.getElementById("QuestionThree").innerHTML ="Check the woods along the road."; 
          }
          
          //Herbalist, head north. Q and A.
          function decisionThreeBrC_QandA2(){
              document.getElementById("Question").innerHTML ="You have chosen to head North towards the hills.  Do you choose to?";
              document.getElementById("QuestionOne").innerHTML ="Enquire at the sheep herder’s hut.";
              document.getElementById("QuestionTwo").innerHTML ="Explore the cave.";
              document.getElementById("QuestionThree").innerHTML ="Shop at the next village."; 
          }
          
          //Herbalist, head west. Q and A.
          function decisionThreeBrC_QandA3(){
              document.getElementById("Question").innerHTML ="You have chosen to head West towards the mountains.  Which path do you take?";
              document.getElementById("QuestionOne").innerHTML ="You choose to take the steepest path.";
              document.getElementById("QuestionTwo").innerHTML ="You choose to take the gradual incline.";
              document.getElementById("QuestionThree").innerHTML ="You choose to take the rocky path."; 
          }

    //Resets the story to start by using a page reload. Referenced https://www.w3schools.com/jsref/met_loc_reload.asp.HAJ.
    function pageRefresh(){
        location.reload();
    }