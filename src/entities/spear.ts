import { injectable } from "inversify";
import { ThrowableWeapon } from "../interfaces/throwableWeapon";

@injectable()
export class Spear implements ThrowableWeapon {
  public throw() {
    return "chuck it!";
  }
}
