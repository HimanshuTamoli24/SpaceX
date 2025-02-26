import Dragon from "./Dragon"
import Falcon from "./Falcon"
import Heavy from "./Heavy"
import RideShare from "./RideShare"
import SpaceFlight from "./SpaceFlight"
import StarFields from "./StarFields"
import StarShip from "./StarShip"
import Home from "./Home"
export {
    Dragon,
    Falcon,
    Heavy,
    RideShare,
    SpaceFlight,
    StarFields,
    StarShip,
    Home
}
export const navNewRoutes = [
    { path: "dragon", component: Dragon },
    { path: "falcon", component: Falcon },
    { path: "heavy", component: Heavy },
    { path: "rideshare", component: RideShare },
    { path: "spaceflight", component: SpaceFlight },
    { path: "starfields", component: StarFields },
    { path: "starship", component: StarShip },
    { path: "", component: Home },

];