import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Weapon } from "../interfaces/weapon";
import { ThrowableWeapon } from "../interfaces/throwableWeapon";
import { Warrior } from "../interfaces/warrior";
import { TYPES } from "../interfaces/types";

@injectable()
class Soldier implements Warrior {
  private weapon: Weapon;
  private throwableWeapon: ThrowableWeapon;

  public constructor(
    @inject(TYPES.Weapon) weapon: Weapon,
    @inject(TYPES.ThrowableWeapon) throwableWeapon: ThrowableWeapon
  ) {
    this.weapon = weapon;
    this.throwableWeapon = throwableWeapon;
  }

  public fight() {
    return this.weapon.hit();
  }
  public sneak() {
    return this.throwableWeapon.throw();
  }
}

export { Soldier, Weapon, ThrowableWeapon };
