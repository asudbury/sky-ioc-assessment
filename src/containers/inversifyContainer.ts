import { Container } from "inversify";
import { TYPES } from "../interfaces/types";
import { Soldier } from "../entities/soldier";
import { ShotGun } from "../entities/shotgun";
import { Spear } from "../entities/spear";
import { Warrior } from "../interfaces/warrior";
import { Weapon } from "../interfaces/weapon";
import { ThrowableWeapon } from "../interfaces/throwableWeapon";

const InversifyContainer = new Container();
InversifyContainer.bind<Warrior>(TYPES.Warrior).to(Soldier);
InversifyContainer.bind<Weapon>(TYPES.Weapon).to(ShotGun);
InversifyContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Spear);

export default InversifyContainer;
