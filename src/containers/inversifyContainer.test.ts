import { TYPES } from "../interfaces/types";
import { Warrior } from "./../interfaces/warrior";
import InversifyContainer from "./InversifyContainer";

describe("Test the Inversify Container", () => {
  test("Test the fight operation", () => {
    const fighter = InversifyContainer.get<Warrior>(TYPES.Warrior);

    expect(fighter.fight() === "bang!bang!").toBe(true);
  });

  test("Test the sneak operation", () => {
    const fighter = InversifyContainer.get<Warrior>(TYPES.Warrior);

    expect(fighter.sneak() === "chuck it!").toBe(true);
  });
});
