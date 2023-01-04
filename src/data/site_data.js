import moonImg from "../assets/destination/image-moon.png"
import marsImg from "../assets/destination/image-mars.png"
import europaImg from "../assets/destination/image-europa.png"
import titanImg from "../assets/destination/image-titan.png"
import douglas from '../assets/crew/image-douglas-hurley.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import ansari from '../assets/crew/image-anousheh-ansari.png'
import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg"
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg"
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg"
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg"
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg"
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg"
import bgUrlLarge from "../assets/home/background-home-desktop.jpg"
import bgUrlMedium from "../assets/home/background-home-tablet.jpg"
import bgUrlSmall from "../assets/home/background-home-mobile.jpg"
import bgUrlLargeDestination from "../assets/destination/background-destination-desktop.jpg"
import bgUrlMediumDestination from "../assets/destination/background-destination-tablet.jpg"
import bgUrlSmallDestination from "../assets/destination/background-destination-mobile.jpg"
import bgUrlLargeCrew from "../assets/crew/background-crew-desktop.jpg"
import bgUrlMediumCrew from "../assets/crew/background-crew-tablet.jpg"
import bgUrlSmallCrew from "../assets/crew/background-crew-mobile.jpg"
import bgUrlLargeTechnology from "../assets/technology/background-technology-desktop.jpg"
import bgUrlMediumTechnology from "../assets/technology/background-technology-tablet.jpg"
import bgUrlSmallTechnology from "../assets/technology/background-technology-mobile.jpg"

export const siteData = {
    backgrounds: {
        home: {
            large: bgUrlLarge,
            medium: bgUrlMedium,
            small: bgUrlSmall
        },
        destinations: {
            large: bgUrlLargeDestination,
            medium: bgUrlMediumDestination,
            small: bgUrlSmallDestination
        },
        crew: {
            large: bgUrlLargeCrew,
            medium: bgUrlMediumCrew,
            small: bgUrlSmallCrew
        },
        technologies: {
            large: bgUrlLargeTechnology,
            medium: bgUrlMediumTechnology,
            small: bgUrlSmallTechnology
        }
    },
    mainNavigation: [
        {
            name: "home",
            path: "/",
            num: "00"
        },
        {
            name: "destination",
            path: "/destination",
            num: "01"
        },
        {
            name: "crew",
            path: "/crew",
            num: "02"
        },
        {
            name: "technology",
            path: "/technology",
            num: "03"
        }
    ],
    destinations:  [
        {
          id: 1,
          name: "Moon",
          image: moonImg,
          description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days",
          active: true
        },
        {
          id: 2,
          name: "Mars",
          image: marsImg,
          description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 mil. km",
          travel: "9 months",
          active: false
        },
        {
          id: 3,
          name: "Europa",
          image: europaImg,
          description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 mil. km",
          travel: "3 years",
          active: false
        },
        {
          id: 4,
          name: "Titan",
          image: titanImg,
          description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 bil. km",
          travel: "7 years",
          active: false
        }
      ],
      crew:  [
        {
          id: 1,
          name: "Douglas Hurley",
          image: douglas,
          role: "Commander",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          active: true
        },
        {
          id: 2,
          name: "Mark Shuttleworth",
          image: mark,
          role: "Mission Specialist",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          active: false
        },
        {
          id: 3,
          name: "Victor Glover",
          image: victor,
          role: "Pilot",
          bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
          active: false
        },
        {
          id: 4,
          name: "Anousheh Ansari",
          image: ansari,
          role: "Flight Engineer",
          bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
          active: false
        }
      ],
      technologies: [
        {
            id: 1,
            name: "Launch vehicle",
            images: {
                portrait: launchVehiclePortrait,
                landscape: launchVehicleLandscape
            },
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            active: true
        },
        {
            id: 2,
            name: "Spaceport",
            images: {
                portrait: spaceportPortrait,
                landscape: spaceportLandscape
            },
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            active: false
        },
        {
            id: 3,
            name: "Space capsule",
            images: {
                portrait: spaceCapsulePortrait,
                landscape: spaceCapsuleLandscape
            },
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            active: false
        }
      ]
}

