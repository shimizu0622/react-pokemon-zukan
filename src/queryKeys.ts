// src/queryKeys.ts
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const pokemonQueryKeys = createQueryKeys("pokemon", {
    list: () => ["list"],
    detail: (id: number) => ["detail", id],
});