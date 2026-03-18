const storyData = {
    "*you follow him*": {
        text: "And just like this, your adventure has just begun... but to what price?\n\n<div style='text-align:center;'>[END OF DEMO]</div>\n<span style='color:grey'>[full version available if the Kickstarter succeeds]</span>",
        choices: []
    },
    "... Alright, I'll help": {
        text: "-\"Great! I would introduce you to this world, but I guess you already know this place.\"\n\nThe problem? You. Forgot. Everything. What will you do?\n\n\n\nYou do not have a say in this.\nYou already accepted your fate\n\n\nOr maybe you do?",
        choices: ["*you follow him*", "*you follow him*", "Leave him behind and explore on your own"]
    },
    "Avoid it": {
        text: "You avoid the beam effortlessly... But a beam of light has shot towards you, and it doesnt seem as friendly as the other.\nYou arent able to avoid this one on time.\n\nGame Over, player.",
        choices: ["Try again"]
    },
    "Charge towards The Watcher": {
        text: "You try to charge againt Him... But there is no one to charge against.\nJust an eye, a watchful eye in the sky. Watching you.\n\nYou understand now;\n<div style='text-align:center;'>[You Are Not In Control]</div>\n",
        choices: ["Cry"]
    },
    "Confront The Watcher": {
        text: "...\nSo thee have chosen death\nThy bravery is untold\nThe fate of Æthelgard is sealed with a heart like thou\n...\nThee shall perish, but not now.\nIt's not thy time to die.\nRest, Player, thee will need it.\n<div style='text-align:center;'>[May thy woes be many, and thy days few]</div>\n\n<div style='text-align:center;'>+(box:\"X\")</div>",
        choices: ["Fight"]
    },
    "Cry": {
        text: "You cry your fate, but the tears arent yours.",
        choices: ["Cry"]
    },
    "Duck": {
        text: "As you duck to avoid it, the floor itself seems to colapse under your weight, even tho you are as light as a feather.\nYou fall into the void.\n\nGame over, Player.\n",
        choices: ["Try again"]
    },
    "Facetank it": {
        text: "The shadows enter your body like poison.\nIt's cold as a corpse... And thankfully, you are one.\n\n<span style='color:red;'>HOW?!\nTHEE SHOULD HAVE BEEN COMPLETELY WIPED AWAY!</span>\n\nAnother beam impacts, and another, but you are perfecty fine.",
        choices: ["Charge towards The Watcher", "Try to go back", "Try to talk it out"]
    },
    "Fight": {
        text: "Not even a second is given for you to think, a beam of black shadows shoots towards you.",
        choices: ["Facetank it", "Avoid it", "Duck"]
    },
    "Go back": {
        text: "You are dead.\nYou are a corpse of someone who once lived among everyone else, but...\n\nSuddenly, you awaken.\nSomeone has brought you back to life. It's a bearded man who looks like Death itself.\n-\"Ah, you are awake! It's great that it finally worked!\"",
        choices: ["Who are you?", "Why did you bring me back?"]
    },
    "Go even further": {
        text: "<span style='color:red; background: linear-gradient(to right, #ffffff 0%, #e61919 50%, #000000 100%); font-weight:bold; padding:2px 5px;'>L E A V E</span>",
        choices: ["Confront The Watcher", "Go back"]
    },
    "Go further": {
        text: "Leave.\nYou shall not be here.",
        choices: ["Go even further", "Go back"]
    },
    "I prefer eternal sleep, thank you": {
        text: "-\"Well, who am I to judge? Your wish is my command\"\n\nAnd just like that, you are dead... Again.\nMaybe it would be fun to follow that guy?\n\nEND",
        choices: []
    },
    "Leave him behind and explore on your own": {
        text: "This?\nYou arent supposed to be here. Leave",
        choices: ["Go further", "Go back"]
    },
    "No": {
        text: "-\"Well, who am I to judge\"\n\nAnd just like that, you are dead... Again.\nMaybe you would have been able to do something fun with that guy?\n\nEND",
        choices: []
    },
    "Try again": {
        text: "Again? Truly? Fine.\nI'll grant you your wish.",
        choices: ["Fight"]
    },
    "Try to go back": {
        text: "<span style='color:red;'>... I will let thee escape.\nBut next time?</span>\n\n<div style='text-align:center;'>[Watch]</div>\n<div style='text-align:center;'>[Your]</div>\n<div style='text-align:center;'>[Back]</div>",
        choices: ["Go back"]
    },
    "Try to talk it out": {
        text: "You try to even say one word, but stitches form across your lips.\nYou arent able to open your undead mouth.\n\nMore stitches start to form across your body.\nIt hurts like Hell itself\n\nYou arent dead, you are being <span style='color:red;'>Tortured eternally</span>\n\nGame Over, Player.",
        choices: ["Try again"]
    },
    "What do you mean I'm the only one?": {
        text: "-\"I'll teach you eventually... Come with me, I'll teach you.\"",
        choices: ["I prefer eternal sleep, thank you", "... Alright, I'll help"]
    },
    "Who are you?": {
        text: "-\"Good question! My name is Aprazis Crowsoul. You are Anthony Darklight, am I right? Well, I brought you back for a reason. There is this big guy, Æthelgard, who wants me gone. They think the necromancer job is truly irritating and shouldnt exist... and you are the only one able to stop them!\"",
        choices: ["Why should I help you?", "What do you mean I'm the only one?"]
    },
    "Why did you bring me back?": {
        text: "-\"So you can help me beat Æthelgard\"",
        choices: ["who?", "No"]
    },
    "Why should I help you?": {
        text: "-\"Because I am immortal, and I can bring you back to your grave.\"",
        choices: ["I prefer eternal sleep, thank you", "... Alright, I'll help"]
    },
    "who?": {
        text: "-\"Y'know, the embodiment of life and- God, it will be easier to get another corpse.\"\nAnd just like that, you are dead... Again. Maybe you would be able to do something fun with that guy?\nEND",
        choices: []
    }
};
