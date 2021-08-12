import { injectable } from "inversify";
import { Weapon } from "../interfaces/weapon";

@injectable()
export class ShotGun implements Weapon {
  public hit() {
    return "bang!bang!";
  }
}
