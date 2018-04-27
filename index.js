var OperationCodeHack = {
    q: `Welcome to Operation CodeHack.
    Hello Agent Fraser,
    I need your help. Agent Leo has gone MIA 24:00 hours ago during Operation CodeHack. His task was to retrieve the data to prevent a major terrorist plot from happening in two days. It is of utmost importance that you locate him!! Are you ready for your mission?`,
    answers: {
        yes: {
            q: `I knew I could rely on you.  You have a lead from the last message that Agent Leo left behind. It said "Find Mr.Black". You decide on paying the mysterious Mr. Black a visit. Do you take a car or a motorbike?`,
            answers: {
                motorbike: {
                    q: `You find Mr. Black. He informs you that Agent Leo was looking for the blue door in the basement of Hotel Rewa. You have arrived there. You see that there is a problem, you are standing in front of two blue doors. On the left, there is the aquamarine door and on the right there is the navy door. Which door do you choose?`,
                    answers: {
                        "navy door": {
                            q: `You walk in and find a storage unit, but right behind a shelf you see another secret passageway. You enter it, and find that after walking through a tunnel it starts to fork. Do you decide to take the left or the right passageway?`,
                            answers: {
                                left: {
                                    q: `Good choice. You turn on your flashlight and find bloody handprints along the wall. You carefully follow the path and find a chained gate. You see a crowbar and a gun on the floor. What do you pick up to help you open the gate (you can only choose one)?`,
                                    answers: {
                                        crowbar: {
                                            q: `You have successfully opened the gate and climb down a ladder to the next lower level. You suddenly hear a sound and carefully locate it. You can't believe it, YOU have found Agent Leo! He is severely injured and you have a choice of helping him or taking the flashdrive he passes you. What do you do?`,
                                            answers: {
                                                flashdrive: `You have taken the flashdrive and rushed back to HQ to get the data decrypted. The terror plot has been prevented and the suspects have been arrested. Congratulations Agent Fraser, you have saved hundreds of lives. (You have also been able to retrieve Agent Leo, so his life is also saved).`
                                            } //closes flashdrive answer
                                            //helping
                                        }, //closes crowbar
                                        gun: `Oh shoot. There is only one bullet in the chamber and you didn't hit the lock. You are stuck behind closed gates with Agent Leo in the passageway and the terrorists find you and it ends in a fatal outcome. - MISSION FAILED`
                                    } //closes crowbar answer
                                }, //closes Left
                                right: `You continue to walk in the dark tunnel where you missed a step and fall down a hole to your death. - MISSION FAILED`
                            } //closes Left answer
                        }, //closes navy door
                        aquamarine: `You walk in, and find it's a storage unit and the door locks behind you. You are stuck until another agent finds you and the mission is lost. - MISSION FAILED`
                    } //closes navy door answer
                }, //closes motorbike
                car: `You just missed Mr. Black by 10 minutes because you got stuck in traffic. - MISSION FAILED`
            } //closes motorbike answer
        }, //closes yes
        no: `You just cost us Agent Leo's life and are responsible for hundreds of innocent lifes hanging in the balance. - MISSION FAILED`
    } //closes yes answers
}; //closes mystery

//this section is always required
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); //end of section required

const chalk = require("chalk"); //allows for coloring

function ask(OperationCodeHack) {
    // console.log("testing?");
    rl.question(OperationCodeHack.q, function(reply) {
        // console.log("Replies:", reply);
        // console.log("Operation answer", OperationCodeHack.answers["yes"]);
        if (OperationCodeHack.answers[reply]) {
            if (typeof OperationCodeHack.answers[reply] === "string") {
                console.log(OperationCodeHack.answers[reply]);
                rl.close();
            } else {
                ask(OperationCodeHack.answers[reply]);
            }
        } else {
            console.log(
                chalk
                    .rgb(255, 0, 0)
                    .bold("Please type something I can recognize.")
            );
            return ask(OperationCodeHack);
        }
    });
}
ask(OperationCodeHack);
