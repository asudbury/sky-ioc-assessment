import InversifyContainer from "./containers/inversifyContainer";
import { TYPES } from "./interfaces/types";
import { Warrior } from "./interfaces/warrior";

export function getFight(): string {
  const fighter = InversifyContainer.get<Warrior>(TYPES.Warrior);
  return fighter.fight();
}

export function getSneak(): string {
  const fighter = InversifyContainer.get<Warrior>(TYPES.Warrior);
  return fighter.sneak();
}
