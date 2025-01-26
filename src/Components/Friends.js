import { useState } from "react";

import Friend from "./Friend";
import FriendInteraction from "./FriendInteraction";

import Star from "../Assets/Friends/Idle-Star.gif";
import Bear from "../Assets/Friends/Idle-Bear.gif";
import Halo from "../Assets/Friends/Idle-Halo.gif";

const greetings = ["", "HII LET'S BE FRIENDS!!", "ZzzzzZzzZzzz", "You look nice, what's your name? :~)"];
const interactions = [
    [],
    [
        "We are FLOAT AND FRIENDS, a virtual third space connecting you to your next artistic internet best friend.", 
        "Our mission is to create a welcoming virtual third-space for anyone with an idea. Our goal is to foster community, provide resources, and support your ideas from start to finish.",
        "Through workshops, socials, and structured programs, our focus is on artmaking as a communal practice. In a world continuously pushing us to monetize our art, and squishing that art into “content,” FLOAT AND FRIENDS aims to remind us that art can be done for art’s sake, and creativity is in our very human nature. At the same time, we provide workshops, guides, speaker nights, portfolio building opportunities, and other resources to help reveal often hidden steps for those who are interested in a creative career."
    ],
    ["*Snoreee*", "*Snoooore Snoore Snoore*", "*SNOOOOORE snoore SNOORE SNORE*"],
    [
        "Hello! I'm just admiring the wonderful messages left here on this lamp post. Seems like no matter who or where or when you are, you can leave something here and be certain that the person you've left it for will find it!",
        "Would you like to leave a message?"
    ]
];

function Friends () {
    const [ interactor, setInteractor ] = useState(0);

    const interact = () => {
        switch(interactor) {
            default:
                return <></>;
            case 1:
                return (
                    <div>
                        <FriendInteraction contents={interactions[1]} end={() => setInteractor(0)}/>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <FriendInteraction contents={interactions[2]} end={() => setInteractor(0)}/>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <FriendInteraction contents={interactions[3]} end={() => setInteractor(0)}/>
                    </div>
                )
        }
    }

    return (
        <div>
            <Friend pos={[700, 40]} idle={Star} greeting={greetings[1]} passMic={() => setInteractor(1)}/>
            <Friend pos={[550, 60]} idle={Bear} greeting={greetings[2]} passMic={() => setInteractor(2)}/>
            <Friend pos={[10,350]} idle={Halo} greeting={greetings[3]} passMic={() => setInteractor(3)}/>
            {interact()}
        </div>
    );
}

export default Friends;