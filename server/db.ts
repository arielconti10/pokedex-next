import { createKysely } from '@vercel/postgres-kysely';

// interface UserTable {
//   id: Generated<string>;
//   email: string;
// }

// interface AccountTable {}
// interface VerificationTokenTable {}
// interface SessionTable {}
interface PokemonTable {
  id: number;
  identifier: string;
  species_id: number;
  height: number;
  weight: number;
  base_experience: number;
  order: number;
  is_default: boolean;
}

export interface Database {
  // [user]: UserTable;
  // account: AccountTable;
  // verificationToken: VerificationTokenTable;
  // session: SessionTable;
  pokemon: PokemonTable;
}

export const db = createKysely<Database>()

