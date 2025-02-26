

import{
    Dragon,
    Falcon,
    Heavy,
    RideShare,
    SpaceFlight,
    StarFields,
    StarShip,
    Home,

}
 from '../screens/index.js'
const navRoutes = [
    { name: "Falcon 9", path: "/falcon-9", component: Falcon },
    { name: "Falcon Heavy", path: "/falcon-heavy", component: Heavy },
    { name: "Dragon", path: "/dragon", component: Dragon },
    { name: "Starship", path: "/starship", component: Home },
    { name: "Human Spaceflight", path: "/human-spaceflight", component: Home },
    { name: "Rideshare", path: "/rideshare", component: Home   },
    { name: "Starshield", path: "/starshield", component: StarFields },
    { name: "Starlink", path: "/starlink", component: Falcon } ,
    { name: "", path: "/", component: Home } 
];

export { navRoutes };
