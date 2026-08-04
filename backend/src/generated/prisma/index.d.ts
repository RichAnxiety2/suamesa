
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model Mesa
 * 
 */
export type Mesa = $Result.DefaultSelection<Prisma.$MesaPayload>
/**
 * Model Comanda
 * 
 */
export type Comanda = $Result.DefaultSelection<Prisma.$ComandaPayload>
/**
 * Model ItemComanda
 * 
 */
export type ItemComanda = $Result.DefaultSelection<Prisma.$ItemComandaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mesa`: Exposes CRUD operations for the **Mesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mesas
    * const mesas = await prisma.mesa.findMany()
    * ```
    */
  get mesa(): Prisma.MesaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comanda`: Exposes CRUD operations for the **Comanda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comandas
    * const comandas = await prisma.comanda.findMany()
    * ```
    */
  get comanda(): Prisma.ComandaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemComanda`: Exposes CRUD operations for the **ItemComanda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemComandas
    * const itemComandas = await prisma.itemComanda.findMany()
    * ```
    */
  get itemComanda(): Prisma.ItemComandaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    Staff: 'Staff',
    Mesa: 'Mesa',
    Comanda: 'Comanda',
    ItemComanda: 'ItemComanda'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "staff" | "mesa" | "comanda" | "itemComanda"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      Mesa: {
        payload: Prisma.$MesaPayload<ExtArgs>
        fields: Prisma.MesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findFirst: {
            args: Prisma.MesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findMany: {
            args: Prisma.MesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          create: {
            args: Prisma.MesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          createMany: {
            args: Prisma.MesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MesaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          delete: {
            args: Prisma.MesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          update: {
            args: Prisma.MesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          deleteMany: {
            args: Prisma.MesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MesaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          upsert: {
            args: Prisma.MesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          aggregate: {
            args: Prisma.MesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesa>
          }
          groupBy: {
            args: Prisma.MesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MesaCountArgs<ExtArgs>
            result: $Utils.Optional<MesaCountAggregateOutputType> | number
          }
        }
      }
      Comanda: {
        payload: Prisma.$ComandaPayload<ExtArgs>
        fields: Prisma.ComandaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComandaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComandaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          findFirst: {
            args: Prisma.ComandaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComandaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          findMany: {
            args: Prisma.ComandaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>[]
          }
          create: {
            args: Prisma.ComandaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          createMany: {
            args: Prisma.ComandaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComandaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>[]
          }
          delete: {
            args: Prisma.ComandaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          update: {
            args: Prisma.ComandaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          deleteMany: {
            args: Prisma.ComandaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComandaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComandaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>[]
          }
          upsert: {
            args: Prisma.ComandaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          aggregate: {
            args: Prisma.ComandaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComanda>
          }
          groupBy: {
            args: Prisma.ComandaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComandaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComandaCountArgs<ExtArgs>
            result: $Utils.Optional<ComandaCountAggregateOutputType> | number
          }
        }
      }
      ItemComanda: {
        payload: Prisma.$ItemComandaPayload<ExtArgs>
        fields: Prisma.ItemComandaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemComandaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemComandaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload>
          }
          findFirst: {
            args: Prisma.ItemComandaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemComandaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload>
          }
          findMany: {
            args: Prisma.ItemComandaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload>[]
          }
          create: {
            args: Prisma.ItemComandaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload>
          }
          createMany: {
            args: Prisma.ItemComandaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemComandaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload>[]
          }
          delete: {
            args: Prisma.ItemComandaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload>
          }
          update: {
            args: Prisma.ItemComandaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload>
          }
          deleteMany: {
            args: Prisma.ItemComandaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemComandaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemComandaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload>[]
          }
          upsert: {
            args: Prisma.ItemComandaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemComandaPayload>
          }
          aggregate: {
            args: Prisma.ItemComandaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemComanda>
          }
          groupBy: {
            args: Prisma.ItemComandaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemComandaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemComandaCountArgs<ExtArgs>
            result: $Utils.Optional<ItemComandaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    staff?: StaffOmit
    mesa?: MesaOmit
    comanda?: ComandaOmit
    itemComanda?: ItemComandaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    staff: number
    mesas: number
    comandas: number
    itens: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | TenantCountOutputTypeCountStaffArgs
    mesas?: boolean | TenantCountOutputTypeCountMesasArgs
    comandas?: boolean | TenantCountOutputTypeCountComandasArgs
    itens?: boolean | TenantCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMesasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesaWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountComandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComandaWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemComandaWhereInput
  }


  /**
   * Count Type MesaCountOutputType
   */

  export type MesaCountOutputType = {
    comandas: number
  }

  export type MesaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comandas?: boolean | MesaCountOutputTypeCountComandasArgs
  }

  // Custom InputTypes
  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesaCountOutputType
     */
    select?: MesaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeCountComandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComandaWhereInput
  }


  /**
   * Count Type ComandaCountOutputType
   */

  export type ComandaCountOutputType = {
    itens: number
  }

  export type ComandaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | ComandaCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * ComandaCountOutputType without action
   */
  export type ComandaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComandaCountOutputType
     */
    select?: ComandaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComandaCountOutputType without action
   */
  export type ComandaCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemComandaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    domain: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    domain: string
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    staff?: boolean | Tenant$staffArgs<ExtArgs>
    mesas?: boolean | Tenant$mesasArgs<ExtArgs>
    comandas?: boolean | Tenant$comandasArgs<ExtArgs>
    itens?: boolean | Tenant$itensArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "domain" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | Tenant$staffArgs<ExtArgs>
    mesas?: boolean | Tenant$mesasArgs<ExtArgs>
    comandas?: boolean | Tenant$comandasArgs<ExtArgs>
    itens?: boolean | Tenant$itensArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs>[]
      mesas: Prisma.$MesaPayload<ExtArgs>[]
      comandas: Prisma.$ComandaPayload<ExtArgs>[]
      itens: Prisma.$ItemComandaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      domain: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends Tenant$staffArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mesas<T extends Tenant$mesasArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$mesasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comandas<T extends Tenant$comandasArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$comandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itens<T extends Tenant$itensArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly domain: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.staff
   */
  export type Tenant$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Tenant.mesas
   */
  export type Tenant$mesasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    where?: MesaWhereInput
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    cursor?: MesaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Tenant.comandas
   */
  export type Tenant$comandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    where?: ComandaWhereInput
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    cursor?: ComandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Tenant.itens
   */
  export type Tenant$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    where?: ItemComandaWhereInput
    orderBy?: ItemComandaOrderByWithRelationInput | ItemComandaOrderByWithRelationInput[]
    cursor?: ItemComandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemComandaScalarFieldEnum | ItemComandaScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    accessCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    accessCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    email: number
    password: number
    role: number
    accessCode: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    email?: true
    password?: true
    role?: true
    accessCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    email?: true
    password?: true
    role?: true
    accessCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    email?: true
    password?: true
    role?: true
    accessCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    email: string
    password: string
    role: string
    accessCode: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    accessCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    accessCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    accessCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    accessCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "email" | "password" | "role" | "accessCode" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      email: string
      password: string
      role: string
      accessCode: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly tenantId: FieldRef<"Staff", 'String'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly password: FieldRef<"Staff", 'String'>
    readonly role: FieldRef<"Staff", 'String'>
    readonly accessCode: FieldRef<"Staff", 'String'>
    readonly isActive: FieldRef<"Staff", 'Boolean'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model Mesa
   */

  export type AggregateMesa = {
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  export type MesaAvgAggregateOutputType = {
    numero: number | null
  }

  export type MesaSumAggregateOutputType = {
    numero: number | null
  }

  export type MesaMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    numero: number | null
    qrCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MesaMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    numero: number | null
    qrCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MesaCountAggregateOutputType = {
    id: number
    tenantId: number
    numero: number
    qrCode: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MesaAvgAggregateInputType = {
    numero?: true
  }

  export type MesaSumAggregateInputType = {
    numero?: true
  }

  export type MesaMinAggregateInputType = {
    id?: true
    tenantId?: true
    numero?: true
    qrCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MesaMaxAggregateInputType = {
    id?: true
    tenantId?: true
    numero?: true
    qrCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MesaCountAggregateInputType = {
    id?: true
    tenantId?: true
    numero?: true
    qrCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesa to aggregate.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mesas
    **/
    _count?: true | MesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesaMaxAggregateInputType
  }

  export type GetMesaAggregateType<T extends MesaAggregateArgs> = {
        [P in keyof T & keyof AggregateMesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesa[P]>
      : GetScalarType<T[P], AggregateMesa[P]>
  }




  export type MesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesaWhereInput
    orderBy?: MesaOrderByWithAggregationInput | MesaOrderByWithAggregationInput[]
    by: MesaScalarFieldEnum[] | MesaScalarFieldEnum
    having?: MesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesaCountAggregateInputType | true
    _avg?: MesaAvgAggregateInputType
    _sum?: MesaSumAggregateInputType
    _min?: MesaMinAggregateInputType
    _max?: MesaMaxAggregateInputType
  }

  export type MesaGroupByOutputType = {
    id: string
    tenantId: string
    numero: number
    qrCode: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  type GetMesaGroupByPayload<T extends MesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesaGroupByOutputType[P]>
            : GetScalarType<T[P], MesaGroupByOutputType[P]>
        }
      >
    >


  export type MesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    numero?: boolean
    qrCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    comandas?: boolean | Mesa$comandasArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    numero?: boolean
    qrCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    numero?: boolean
    qrCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectScalar = {
    id?: boolean
    tenantId?: boolean
    numero?: boolean
    qrCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MesaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "numero" | "qrCode" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["mesa"]>
  export type MesaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    comandas?: boolean | Mesa$comandasArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MesaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type MesaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $MesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mesa"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      comandas: Prisma.$ComandaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      numero: number
      qrCode: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mesa"]>
    composites: {}
  }

  type MesaGetPayload<S extends boolean | null | undefined | MesaDefaultArgs> = $Result.GetResult<Prisma.$MesaPayload, S>

  type MesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MesaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesaCountAggregateInputType | true
    }

  export interface MesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mesa'], meta: { name: 'Mesa' } }
    /**
     * Find zero or one Mesa that matches the filter.
     * @param {MesaFindUniqueArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MesaFindUniqueArgs>(args: SelectSubset<T, MesaFindUniqueArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mesa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MesaFindUniqueOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MesaFindUniqueOrThrowArgs>(args: SelectSubset<T, MesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MesaFindFirstArgs>(args?: SelectSubset<T, MesaFindFirstArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MesaFindFirstOrThrowArgs>(args?: SelectSubset<T, MesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mesas
     * const mesas = await prisma.mesa.findMany()
     * 
     * // Get first 10 Mesas
     * const mesas = await prisma.mesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mesaWithIdOnly = await prisma.mesa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MesaFindManyArgs>(args?: SelectSubset<T, MesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mesa.
     * @param {MesaCreateArgs} args - Arguments to create a Mesa.
     * @example
     * // Create one Mesa
     * const Mesa = await prisma.mesa.create({
     *   data: {
     *     // ... data to create a Mesa
     *   }
     * })
     * 
     */
    create<T extends MesaCreateArgs>(args: SelectSubset<T, MesaCreateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mesas.
     * @param {MesaCreateManyArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesa = await prisma.mesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MesaCreateManyArgs>(args?: SelectSubset<T, MesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mesas and returns the data saved in the database.
     * @param {MesaCreateManyAndReturnArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesa = await prisma.mesa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mesas and only return the `id`
     * const mesaWithIdOnly = await prisma.mesa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MesaCreateManyAndReturnArgs>(args?: SelectSubset<T, MesaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mesa.
     * @param {MesaDeleteArgs} args - Arguments to delete one Mesa.
     * @example
     * // Delete one Mesa
     * const Mesa = await prisma.mesa.delete({
     *   where: {
     *     // ... filter to delete one Mesa
     *   }
     * })
     * 
     */
    delete<T extends MesaDeleteArgs>(args: SelectSubset<T, MesaDeleteArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mesa.
     * @param {MesaUpdateArgs} args - Arguments to update one Mesa.
     * @example
     * // Update one Mesa
     * const mesa = await prisma.mesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MesaUpdateArgs>(args: SelectSubset<T, MesaUpdateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mesas.
     * @param {MesaDeleteManyArgs} args - Arguments to filter Mesas to delete.
     * @example
     * // Delete a few Mesas
     * const { count } = await prisma.mesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MesaDeleteManyArgs>(args?: SelectSubset<T, MesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mesas
     * const mesa = await prisma.mesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MesaUpdateManyArgs>(args: SelectSubset<T, MesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas and returns the data updated in the database.
     * @param {MesaUpdateManyAndReturnArgs} args - Arguments to update many Mesas.
     * @example
     * // Update many Mesas
     * const mesa = await prisma.mesa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mesas and only return the `id`
     * const mesaWithIdOnly = await prisma.mesa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MesaUpdateManyAndReturnArgs>(args: SelectSubset<T, MesaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mesa.
     * @param {MesaUpsertArgs} args - Arguments to update or create a Mesa.
     * @example
     * // Update or create a Mesa
     * const mesa = await prisma.mesa.upsert({
     *   create: {
     *     // ... data to create a Mesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mesa we want to update
     *   }
     * })
     */
    upsert<T extends MesaUpsertArgs>(args: SelectSubset<T, MesaUpsertArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaCountArgs} args - Arguments to filter Mesas to count.
     * @example
     * // Count the number of Mesas
     * const count = await prisma.mesa.count({
     *   where: {
     *     // ... the filter for the Mesas we want to count
     *   }
     * })
    **/
    count<T extends MesaCountArgs>(
      args?: Subset<T, MesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MesaAggregateArgs>(args: Subset<T, MesaAggregateArgs>): Prisma.PrismaPromise<GetMesaAggregateType<T>>

    /**
     * Group by Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MesaGroupByArgs['orderBy'] }
        : { orderBy?: MesaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mesa model
   */
  readonly fields: MesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comandas<T extends Mesa$comandasArgs<ExtArgs> = {}>(args?: Subset<T, Mesa$comandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mesa model
   */
  interface MesaFieldRefs {
    readonly id: FieldRef<"Mesa", 'String'>
    readonly tenantId: FieldRef<"Mesa", 'String'>
    readonly numero: FieldRef<"Mesa", 'Int'>
    readonly qrCode: FieldRef<"Mesa", 'String'>
    readonly isActive: FieldRef<"Mesa", 'Boolean'>
    readonly createdAt: FieldRef<"Mesa", 'DateTime'>
    readonly updatedAt: FieldRef<"Mesa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mesa findUnique
   */
  export type MesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findUniqueOrThrow
   */
  export type MesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findFirst
   */
  export type MesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findFirstOrThrow
   */
  export type MesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findMany
   */
  export type MesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesas to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa create
   */
  export type MesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mesa.
     */
    data: XOR<MesaCreateInput, MesaUncheckedCreateInput>
  }

  /**
   * Mesa createMany
   */
  export type MesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mesas.
     */
    data: MesaCreateManyInput | MesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesa createManyAndReturn
   */
  export type MesaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * The data used to create many Mesas.
     */
    data: MesaCreateManyInput | MesaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mesa update
   */
  export type MesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mesa.
     */
    data: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
    /**
     * Choose, which Mesa to update.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa updateMany
   */
  export type MesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mesas.
     */
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyInput>
    /**
     * Filter which Mesas to update
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to update.
     */
    limit?: number
  }

  /**
   * Mesa updateManyAndReturn
   */
  export type MesaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * The data used to update Mesas.
     */
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyInput>
    /**
     * Filter which Mesas to update
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mesa upsert
   */
  export type MesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mesa to update in case it exists.
     */
    where: MesaWhereUniqueInput
    /**
     * In case the Mesa found by the `where` argument doesn't exist, create a new Mesa with this data.
     */
    create: XOR<MesaCreateInput, MesaUncheckedCreateInput>
    /**
     * In case the Mesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
  }

  /**
   * Mesa delete
   */
  export type MesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter which Mesa to delete.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa deleteMany
   */
  export type MesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesas to delete
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to delete.
     */
    limit?: number
  }

  /**
   * Mesa.comandas
   */
  export type Mesa$comandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    where?: ComandaWhereInput
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    cursor?: ComandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Mesa without action
   */
  export type MesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
  }


  /**
   * Model Comanda
   */

  export type AggregateComanda = {
    _count: ComandaCountAggregateOutputType | null
    _avg: ComandaAvgAggregateOutputType | null
    _sum: ComandaSumAggregateOutputType | null
    _min: ComandaMinAggregateOutputType | null
    _max: ComandaMaxAggregateOutputType | null
  }

  export type ComandaAvgAggregateOutputType = {
    total: number | null
  }

  export type ComandaSumAggregateOutputType = {
    total: number | null
  }

  export type ComandaMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    mesaId: string | null
    status: string | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
    closedAt: Date | null
  }

  export type ComandaMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    mesaId: string | null
    status: string | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
    closedAt: Date | null
  }

  export type ComandaCountAggregateOutputType = {
    id: number
    tenantId: number
    mesaId: number
    status: number
    total: number
    createdAt: number
    updatedAt: number
    closedAt: number
    _all: number
  }


  export type ComandaAvgAggregateInputType = {
    total?: true
  }

  export type ComandaSumAggregateInputType = {
    total?: true
  }

  export type ComandaMinAggregateInputType = {
    id?: true
    tenantId?: true
    mesaId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    closedAt?: true
  }

  export type ComandaMaxAggregateInputType = {
    id?: true
    tenantId?: true
    mesaId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    closedAt?: true
  }

  export type ComandaCountAggregateInputType = {
    id?: true
    tenantId?: true
    mesaId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    closedAt?: true
    _all?: true
  }

  export type ComandaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comanda to aggregate.
     */
    where?: ComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandas to fetch.
     */
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comandas
    **/
    _count?: true | ComandaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComandaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComandaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComandaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComandaMaxAggregateInputType
  }

  export type GetComandaAggregateType<T extends ComandaAggregateArgs> = {
        [P in keyof T & keyof AggregateComanda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComanda[P]>
      : GetScalarType<T[P], AggregateComanda[P]>
  }




  export type ComandaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComandaWhereInput
    orderBy?: ComandaOrderByWithAggregationInput | ComandaOrderByWithAggregationInput[]
    by: ComandaScalarFieldEnum[] | ComandaScalarFieldEnum
    having?: ComandaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComandaCountAggregateInputType | true
    _avg?: ComandaAvgAggregateInputType
    _sum?: ComandaSumAggregateInputType
    _min?: ComandaMinAggregateInputType
    _max?: ComandaMaxAggregateInputType
  }

  export type ComandaGroupByOutputType = {
    id: string
    tenantId: string
    mesaId: string
    status: string
    total: number
    createdAt: Date
    updatedAt: Date
    closedAt: Date | null
    _count: ComandaCountAggregateOutputType | null
    _avg: ComandaAvgAggregateOutputType | null
    _sum: ComandaSumAggregateOutputType | null
    _min: ComandaMinAggregateOutputType | null
    _max: ComandaMaxAggregateOutputType | null
  }

  type GetComandaGroupByPayload<T extends ComandaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComandaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComandaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComandaGroupByOutputType[P]>
            : GetScalarType<T[P], ComandaGroupByOutputType[P]>
        }
      >
    >


  export type ComandaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    mesaId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
    itens?: boolean | Comanda$itensArgs<ExtArgs>
    _count?: boolean | ComandaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comanda"]>

  export type ComandaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    mesaId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comanda"]>

  export type ComandaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    mesaId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comanda"]>

  export type ComandaSelectScalar = {
    id?: boolean
    tenantId?: boolean
    mesaId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
  }

  export type ComandaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "mesaId" | "status" | "total" | "createdAt" | "updatedAt" | "closedAt", ExtArgs["result"]["comanda"]>
  export type ComandaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
    itens?: boolean | Comanda$itensArgs<ExtArgs>
    _count?: boolean | ComandaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComandaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }
  export type ComandaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }

  export type $ComandaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comanda"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      mesa: Prisma.$MesaPayload<ExtArgs>
      itens: Prisma.$ItemComandaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      mesaId: string
      status: string
      total: number
      createdAt: Date
      updatedAt: Date
      closedAt: Date | null
    }, ExtArgs["result"]["comanda"]>
    composites: {}
  }

  type ComandaGetPayload<S extends boolean | null | undefined | ComandaDefaultArgs> = $Result.GetResult<Prisma.$ComandaPayload, S>

  type ComandaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComandaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComandaCountAggregateInputType | true
    }

  export interface ComandaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comanda'], meta: { name: 'Comanda' } }
    /**
     * Find zero or one Comanda that matches the filter.
     * @param {ComandaFindUniqueArgs} args - Arguments to find a Comanda
     * @example
     * // Get one Comanda
     * const comanda = await prisma.comanda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComandaFindUniqueArgs>(args: SelectSubset<T, ComandaFindUniqueArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comanda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComandaFindUniqueOrThrowArgs} args - Arguments to find a Comanda
     * @example
     * // Get one Comanda
     * const comanda = await prisma.comanda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComandaFindUniqueOrThrowArgs>(args: SelectSubset<T, ComandaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comanda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaFindFirstArgs} args - Arguments to find a Comanda
     * @example
     * // Get one Comanda
     * const comanda = await prisma.comanda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComandaFindFirstArgs>(args?: SelectSubset<T, ComandaFindFirstArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comanda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaFindFirstOrThrowArgs} args - Arguments to find a Comanda
     * @example
     * // Get one Comanda
     * const comanda = await prisma.comanda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComandaFindFirstOrThrowArgs>(args?: SelectSubset<T, ComandaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comandas
     * const comandas = await prisma.comanda.findMany()
     * 
     * // Get first 10 Comandas
     * const comandas = await prisma.comanda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comandaWithIdOnly = await prisma.comanda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComandaFindManyArgs>(args?: SelectSubset<T, ComandaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comanda.
     * @param {ComandaCreateArgs} args - Arguments to create a Comanda.
     * @example
     * // Create one Comanda
     * const Comanda = await prisma.comanda.create({
     *   data: {
     *     // ... data to create a Comanda
     *   }
     * })
     * 
     */
    create<T extends ComandaCreateArgs>(args: SelectSubset<T, ComandaCreateArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comandas.
     * @param {ComandaCreateManyArgs} args - Arguments to create many Comandas.
     * @example
     * // Create many Comandas
     * const comanda = await prisma.comanda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComandaCreateManyArgs>(args?: SelectSubset<T, ComandaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comandas and returns the data saved in the database.
     * @param {ComandaCreateManyAndReturnArgs} args - Arguments to create many Comandas.
     * @example
     * // Create many Comandas
     * const comanda = await prisma.comanda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comandas and only return the `id`
     * const comandaWithIdOnly = await prisma.comanda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComandaCreateManyAndReturnArgs>(args?: SelectSubset<T, ComandaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comanda.
     * @param {ComandaDeleteArgs} args - Arguments to delete one Comanda.
     * @example
     * // Delete one Comanda
     * const Comanda = await prisma.comanda.delete({
     *   where: {
     *     // ... filter to delete one Comanda
     *   }
     * })
     * 
     */
    delete<T extends ComandaDeleteArgs>(args: SelectSubset<T, ComandaDeleteArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comanda.
     * @param {ComandaUpdateArgs} args - Arguments to update one Comanda.
     * @example
     * // Update one Comanda
     * const comanda = await prisma.comanda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComandaUpdateArgs>(args: SelectSubset<T, ComandaUpdateArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comandas.
     * @param {ComandaDeleteManyArgs} args - Arguments to filter Comandas to delete.
     * @example
     * // Delete a few Comandas
     * const { count } = await prisma.comanda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComandaDeleteManyArgs>(args?: SelectSubset<T, ComandaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comandas
     * const comanda = await prisma.comanda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComandaUpdateManyArgs>(args: SelectSubset<T, ComandaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comandas and returns the data updated in the database.
     * @param {ComandaUpdateManyAndReturnArgs} args - Arguments to update many Comandas.
     * @example
     * // Update many Comandas
     * const comanda = await prisma.comanda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comandas and only return the `id`
     * const comandaWithIdOnly = await prisma.comanda.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComandaUpdateManyAndReturnArgs>(args: SelectSubset<T, ComandaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comanda.
     * @param {ComandaUpsertArgs} args - Arguments to update or create a Comanda.
     * @example
     * // Update or create a Comanda
     * const comanda = await prisma.comanda.upsert({
     *   create: {
     *     // ... data to create a Comanda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comanda we want to update
     *   }
     * })
     */
    upsert<T extends ComandaUpsertArgs>(args: SelectSubset<T, ComandaUpsertArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaCountArgs} args - Arguments to filter Comandas to count.
     * @example
     * // Count the number of Comandas
     * const count = await prisma.comanda.count({
     *   where: {
     *     // ... the filter for the Comandas we want to count
     *   }
     * })
    **/
    count<T extends ComandaCountArgs>(
      args?: Subset<T, ComandaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComandaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComandaAggregateArgs>(args: Subset<T, ComandaAggregateArgs>): Prisma.PrismaPromise<GetComandaAggregateType<T>>

    /**
     * Group by Comanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComandaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComandaGroupByArgs['orderBy'] }
        : { orderBy?: ComandaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComandaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComandaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comanda model
   */
  readonly fields: ComandaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comanda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComandaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mesa<T extends MesaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MesaDefaultArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Comanda$itensArgs<ExtArgs> = {}>(args?: Subset<T, Comanda$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comanda model
   */
  interface ComandaFieldRefs {
    readonly id: FieldRef<"Comanda", 'String'>
    readonly tenantId: FieldRef<"Comanda", 'String'>
    readonly mesaId: FieldRef<"Comanda", 'String'>
    readonly status: FieldRef<"Comanda", 'String'>
    readonly total: FieldRef<"Comanda", 'Float'>
    readonly createdAt: FieldRef<"Comanda", 'DateTime'>
    readonly updatedAt: FieldRef<"Comanda", 'DateTime'>
    readonly closedAt: FieldRef<"Comanda", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comanda findUnique
   */
  export type ComandaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comanda to fetch.
     */
    where: ComandaWhereUniqueInput
  }

  /**
   * Comanda findUniqueOrThrow
   */
  export type ComandaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comanda to fetch.
     */
    where: ComandaWhereUniqueInput
  }

  /**
   * Comanda findFirst
   */
  export type ComandaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comanda to fetch.
     */
    where?: ComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandas to fetch.
     */
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comandas.
     */
    cursor?: ComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comandas.
     */
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Comanda findFirstOrThrow
   */
  export type ComandaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comanda to fetch.
     */
    where?: ComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandas to fetch.
     */
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comandas.
     */
    cursor?: ComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comandas.
     */
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Comanda findMany
   */
  export type ComandaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comandas to fetch.
     */
    where?: ComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandas to fetch.
     */
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comandas.
     */
    cursor?: ComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comandas.
     */
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Comanda create
   */
  export type ComandaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * The data needed to create a Comanda.
     */
    data: XOR<ComandaCreateInput, ComandaUncheckedCreateInput>
  }

  /**
   * Comanda createMany
   */
  export type ComandaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comandas.
     */
    data: ComandaCreateManyInput | ComandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comanda createManyAndReturn
   */
  export type ComandaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * The data used to create many Comandas.
     */
    data: ComandaCreateManyInput | ComandaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comanda update
   */
  export type ComandaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * The data needed to update a Comanda.
     */
    data: XOR<ComandaUpdateInput, ComandaUncheckedUpdateInput>
    /**
     * Choose, which Comanda to update.
     */
    where: ComandaWhereUniqueInput
  }

  /**
   * Comanda updateMany
   */
  export type ComandaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comandas.
     */
    data: XOR<ComandaUpdateManyMutationInput, ComandaUncheckedUpdateManyInput>
    /**
     * Filter which Comandas to update
     */
    where?: ComandaWhereInput
    /**
     * Limit how many Comandas to update.
     */
    limit?: number
  }

  /**
   * Comanda updateManyAndReturn
   */
  export type ComandaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * The data used to update Comandas.
     */
    data: XOR<ComandaUpdateManyMutationInput, ComandaUncheckedUpdateManyInput>
    /**
     * Filter which Comandas to update
     */
    where?: ComandaWhereInput
    /**
     * Limit how many Comandas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comanda upsert
   */
  export type ComandaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * The filter to search for the Comanda to update in case it exists.
     */
    where: ComandaWhereUniqueInput
    /**
     * In case the Comanda found by the `where` argument doesn't exist, create a new Comanda with this data.
     */
    create: XOR<ComandaCreateInput, ComandaUncheckedCreateInput>
    /**
     * In case the Comanda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComandaUpdateInput, ComandaUncheckedUpdateInput>
  }

  /**
   * Comanda delete
   */
  export type ComandaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter which Comanda to delete.
     */
    where: ComandaWhereUniqueInput
  }

  /**
   * Comanda deleteMany
   */
  export type ComandaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comandas to delete
     */
    where?: ComandaWhereInput
    /**
     * Limit how many Comandas to delete.
     */
    limit?: number
  }

  /**
   * Comanda.itens
   */
  export type Comanda$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    where?: ItemComandaWhereInput
    orderBy?: ItemComandaOrderByWithRelationInput | ItemComandaOrderByWithRelationInput[]
    cursor?: ItemComandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemComandaScalarFieldEnum | ItemComandaScalarFieldEnum[]
  }

  /**
   * Comanda without action
   */
  export type ComandaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
  }


  /**
   * Model ItemComanda
   */

  export type AggregateItemComanda = {
    _count: ItemComandaCountAggregateOutputType | null
    _avg: ItemComandaAvgAggregateOutputType | null
    _sum: ItemComandaSumAggregateOutputType | null
    _min: ItemComandaMinAggregateOutputType | null
    _max: ItemComandaMaxAggregateOutputType | null
  }

  export type ItemComandaAvgAggregateOutputType = {
    quantidade: number | null
    preco: number | null
    subtotal: number | null
  }

  export type ItemComandaSumAggregateOutputType = {
    quantidade: number | null
    preco: number | null
    subtotal: number | null
  }

  export type ItemComandaMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    comandaId: string | null
    descricao: string | null
    quantidade: number | null
    preco: number | null
    subtotal: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemComandaMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    comandaId: string | null
    descricao: string | null
    quantidade: number | null
    preco: number | null
    subtotal: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemComandaCountAggregateOutputType = {
    id: number
    tenantId: number
    comandaId: number
    descricao: number
    quantidade: number
    preco: number
    subtotal: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemComandaAvgAggregateInputType = {
    quantidade?: true
    preco?: true
    subtotal?: true
  }

  export type ItemComandaSumAggregateInputType = {
    quantidade?: true
    preco?: true
    subtotal?: true
  }

  export type ItemComandaMinAggregateInputType = {
    id?: true
    tenantId?: true
    comandaId?: true
    descricao?: true
    quantidade?: true
    preco?: true
    subtotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemComandaMaxAggregateInputType = {
    id?: true
    tenantId?: true
    comandaId?: true
    descricao?: true
    quantidade?: true
    preco?: true
    subtotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemComandaCountAggregateInputType = {
    id?: true
    tenantId?: true
    comandaId?: true
    descricao?: true
    quantidade?: true
    preco?: true
    subtotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemComandaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemComanda to aggregate.
     */
    where?: ItemComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemComandas to fetch.
     */
    orderBy?: ItemComandaOrderByWithRelationInput | ItemComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemComandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemComandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemComandas
    **/
    _count?: true | ItemComandaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemComandaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemComandaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemComandaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemComandaMaxAggregateInputType
  }

  export type GetItemComandaAggregateType<T extends ItemComandaAggregateArgs> = {
        [P in keyof T & keyof AggregateItemComanda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemComanda[P]>
      : GetScalarType<T[P], AggregateItemComanda[P]>
  }




  export type ItemComandaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemComandaWhereInput
    orderBy?: ItemComandaOrderByWithAggregationInput | ItemComandaOrderByWithAggregationInput[]
    by: ItemComandaScalarFieldEnum[] | ItemComandaScalarFieldEnum
    having?: ItemComandaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemComandaCountAggregateInputType | true
    _avg?: ItemComandaAvgAggregateInputType
    _sum?: ItemComandaSumAggregateInputType
    _min?: ItemComandaMinAggregateInputType
    _max?: ItemComandaMaxAggregateInputType
  }

  export type ItemComandaGroupByOutputType = {
    id: string
    tenantId: string
    comandaId: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ItemComandaCountAggregateOutputType | null
    _avg: ItemComandaAvgAggregateOutputType | null
    _sum: ItemComandaSumAggregateOutputType | null
    _min: ItemComandaMinAggregateOutputType | null
    _max: ItemComandaMaxAggregateOutputType | null
  }

  type GetItemComandaGroupByPayload<T extends ItemComandaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemComandaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemComandaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemComandaGroupByOutputType[P]>
            : GetScalarType<T[P], ItemComandaGroupByOutputType[P]>
        }
      >
    >


  export type ItemComandaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    comandaId?: boolean
    descricao?: boolean
    quantidade?: boolean
    preco?: boolean
    subtotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemComanda"]>

  export type ItemComandaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    comandaId?: boolean
    descricao?: boolean
    quantidade?: boolean
    preco?: boolean
    subtotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemComanda"]>

  export type ItemComandaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    comandaId?: boolean
    descricao?: boolean
    quantidade?: boolean
    preco?: boolean
    subtotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemComanda"]>

  export type ItemComandaSelectScalar = {
    id?: boolean
    tenantId?: boolean
    comandaId?: boolean
    descricao?: boolean
    quantidade?: boolean
    preco?: boolean
    subtotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemComandaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "comandaId" | "descricao" | "quantidade" | "preco" | "subtotal" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["itemComanda"]>
  export type ItemComandaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }
  export type ItemComandaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }
  export type ItemComandaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }

  export type $ItemComandaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemComanda"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      comanda: Prisma.$ComandaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      comandaId: string
      descricao: string
      quantidade: number
      preco: number
      subtotal: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemComanda"]>
    composites: {}
  }

  type ItemComandaGetPayload<S extends boolean | null | undefined | ItemComandaDefaultArgs> = $Result.GetResult<Prisma.$ItemComandaPayload, S>

  type ItemComandaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemComandaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemComandaCountAggregateInputType | true
    }

  export interface ItemComandaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemComanda'], meta: { name: 'ItemComanda' } }
    /**
     * Find zero or one ItemComanda that matches the filter.
     * @param {ItemComandaFindUniqueArgs} args - Arguments to find a ItemComanda
     * @example
     * // Get one ItemComanda
     * const itemComanda = await prisma.itemComanda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemComandaFindUniqueArgs>(args: SelectSubset<T, ItemComandaFindUniqueArgs<ExtArgs>>): Prisma__ItemComandaClient<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemComanda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemComandaFindUniqueOrThrowArgs} args - Arguments to find a ItemComanda
     * @example
     * // Get one ItemComanda
     * const itemComanda = await prisma.itemComanda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemComandaFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemComandaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemComandaClient<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemComanda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemComandaFindFirstArgs} args - Arguments to find a ItemComanda
     * @example
     * // Get one ItemComanda
     * const itemComanda = await prisma.itemComanda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemComandaFindFirstArgs>(args?: SelectSubset<T, ItemComandaFindFirstArgs<ExtArgs>>): Prisma__ItemComandaClient<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemComanda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemComandaFindFirstOrThrowArgs} args - Arguments to find a ItemComanda
     * @example
     * // Get one ItemComanda
     * const itemComanda = await prisma.itemComanda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemComandaFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemComandaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemComandaClient<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemComandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemComandaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemComandas
     * const itemComandas = await prisma.itemComanda.findMany()
     * 
     * // Get first 10 ItemComandas
     * const itemComandas = await prisma.itemComanda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemComandaWithIdOnly = await prisma.itemComanda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemComandaFindManyArgs>(args?: SelectSubset<T, ItemComandaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemComanda.
     * @param {ItemComandaCreateArgs} args - Arguments to create a ItemComanda.
     * @example
     * // Create one ItemComanda
     * const ItemComanda = await prisma.itemComanda.create({
     *   data: {
     *     // ... data to create a ItemComanda
     *   }
     * })
     * 
     */
    create<T extends ItemComandaCreateArgs>(args: SelectSubset<T, ItemComandaCreateArgs<ExtArgs>>): Prisma__ItemComandaClient<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemComandas.
     * @param {ItemComandaCreateManyArgs} args - Arguments to create many ItemComandas.
     * @example
     * // Create many ItemComandas
     * const itemComanda = await prisma.itemComanda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemComandaCreateManyArgs>(args?: SelectSubset<T, ItemComandaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemComandas and returns the data saved in the database.
     * @param {ItemComandaCreateManyAndReturnArgs} args - Arguments to create many ItemComandas.
     * @example
     * // Create many ItemComandas
     * const itemComanda = await prisma.itemComanda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemComandas and only return the `id`
     * const itemComandaWithIdOnly = await prisma.itemComanda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemComandaCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemComandaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemComanda.
     * @param {ItemComandaDeleteArgs} args - Arguments to delete one ItemComanda.
     * @example
     * // Delete one ItemComanda
     * const ItemComanda = await prisma.itemComanda.delete({
     *   where: {
     *     // ... filter to delete one ItemComanda
     *   }
     * })
     * 
     */
    delete<T extends ItemComandaDeleteArgs>(args: SelectSubset<T, ItemComandaDeleteArgs<ExtArgs>>): Prisma__ItemComandaClient<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemComanda.
     * @param {ItemComandaUpdateArgs} args - Arguments to update one ItemComanda.
     * @example
     * // Update one ItemComanda
     * const itemComanda = await prisma.itemComanda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemComandaUpdateArgs>(args: SelectSubset<T, ItemComandaUpdateArgs<ExtArgs>>): Prisma__ItemComandaClient<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemComandas.
     * @param {ItemComandaDeleteManyArgs} args - Arguments to filter ItemComandas to delete.
     * @example
     * // Delete a few ItemComandas
     * const { count } = await prisma.itemComanda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemComandaDeleteManyArgs>(args?: SelectSubset<T, ItemComandaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemComandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemComandaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemComandas
     * const itemComanda = await prisma.itemComanda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemComandaUpdateManyArgs>(args: SelectSubset<T, ItemComandaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemComandas and returns the data updated in the database.
     * @param {ItemComandaUpdateManyAndReturnArgs} args - Arguments to update many ItemComandas.
     * @example
     * // Update many ItemComandas
     * const itemComanda = await prisma.itemComanda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemComandas and only return the `id`
     * const itemComandaWithIdOnly = await prisma.itemComanda.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemComandaUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemComandaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemComanda.
     * @param {ItemComandaUpsertArgs} args - Arguments to update or create a ItemComanda.
     * @example
     * // Update or create a ItemComanda
     * const itemComanda = await prisma.itemComanda.upsert({
     *   create: {
     *     // ... data to create a ItemComanda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemComanda we want to update
     *   }
     * })
     */
    upsert<T extends ItemComandaUpsertArgs>(args: SelectSubset<T, ItemComandaUpsertArgs<ExtArgs>>): Prisma__ItemComandaClient<$Result.GetResult<Prisma.$ItemComandaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemComandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemComandaCountArgs} args - Arguments to filter ItemComandas to count.
     * @example
     * // Count the number of ItemComandas
     * const count = await prisma.itemComanda.count({
     *   where: {
     *     // ... the filter for the ItemComandas we want to count
     *   }
     * })
    **/
    count<T extends ItemComandaCountArgs>(
      args?: Subset<T, ItemComandaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemComandaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemComanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemComandaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemComandaAggregateArgs>(args: Subset<T, ItemComandaAggregateArgs>): Prisma.PrismaPromise<GetItemComandaAggregateType<T>>

    /**
     * Group by ItemComanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemComandaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemComandaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemComandaGroupByArgs['orderBy'] }
        : { orderBy?: ItemComandaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemComandaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemComandaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemComanda model
   */
  readonly fields: ItemComandaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemComanda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemComandaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comanda<T extends ComandaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComandaDefaultArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemComanda model
   */
  interface ItemComandaFieldRefs {
    readonly id: FieldRef<"ItemComanda", 'String'>
    readonly tenantId: FieldRef<"ItemComanda", 'String'>
    readonly comandaId: FieldRef<"ItemComanda", 'String'>
    readonly descricao: FieldRef<"ItemComanda", 'String'>
    readonly quantidade: FieldRef<"ItemComanda", 'Int'>
    readonly preco: FieldRef<"ItemComanda", 'Float'>
    readonly subtotal: FieldRef<"ItemComanda", 'Float'>
    readonly status: FieldRef<"ItemComanda", 'String'>
    readonly createdAt: FieldRef<"ItemComanda", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemComanda", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemComanda findUnique
   */
  export type ItemComandaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    /**
     * Filter, which ItemComanda to fetch.
     */
    where: ItemComandaWhereUniqueInput
  }

  /**
   * ItemComanda findUniqueOrThrow
   */
  export type ItemComandaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    /**
     * Filter, which ItemComanda to fetch.
     */
    where: ItemComandaWhereUniqueInput
  }

  /**
   * ItemComanda findFirst
   */
  export type ItemComandaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    /**
     * Filter, which ItemComanda to fetch.
     */
    where?: ItemComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemComandas to fetch.
     */
    orderBy?: ItemComandaOrderByWithRelationInput | ItemComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemComandas.
     */
    cursor?: ItemComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemComandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemComandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemComandas.
     */
    distinct?: ItemComandaScalarFieldEnum | ItemComandaScalarFieldEnum[]
  }

  /**
   * ItemComanda findFirstOrThrow
   */
  export type ItemComandaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    /**
     * Filter, which ItemComanda to fetch.
     */
    where?: ItemComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemComandas to fetch.
     */
    orderBy?: ItemComandaOrderByWithRelationInput | ItemComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemComandas.
     */
    cursor?: ItemComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemComandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemComandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemComandas.
     */
    distinct?: ItemComandaScalarFieldEnum | ItemComandaScalarFieldEnum[]
  }

  /**
   * ItemComanda findMany
   */
  export type ItemComandaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    /**
     * Filter, which ItemComandas to fetch.
     */
    where?: ItemComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemComandas to fetch.
     */
    orderBy?: ItemComandaOrderByWithRelationInput | ItemComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemComandas.
     */
    cursor?: ItemComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemComandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemComandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemComandas.
     */
    distinct?: ItemComandaScalarFieldEnum | ItemComandaScalarFieldEnum[]
  }

  /**
   * ItemComanda create
   */
  export type ItemComandaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemComanda.
     */
    data: XOR<ItemComandaCreateInput, ItemComandaUncheckedCreateInput>
  }

  /**
   * ItemComanda createMany
   */
  export type ItemComandaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemComandas.
     */
    data: ItemComandaCreateManyInput | ItemComandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemComanda createManyAndReturn
   */
  export type ItemComandaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * The data used to create many ItemComandas.
     */
    data: ItemComandaCreateManyInput | ItemComandaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemComanda update
   */
  export type ItemComandaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemComanda.
     */
    data: XOR<ItemComandaUpdateInput, ItemComandaUncheckedUpdateInput>
    /**
     * Choose, which ItemComanda to update.
     */
    where: ItemComandaWhereUniqueInput
  }

  /**
   * ItemComanda updateMany
   */
  export type ItemComandaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemComandas.
     */
    data: XOR<ItemComandaUpdateManyMutationInput, ItemComandaUncheckedUpdateManyInput>
    /**
     * Filter which ItemComandas to update
     */
    where?: ItemComandaWhereInput
    /**
     * Limit how many ItemComandas to update.
     */
    limit?: number
  }

  /**
   * ItemComanda updateManyAndReturn
   */
  export type ItemComandaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * The data used to update ItemComandas.
     */
    data: XOR<ItemComandaUpdateManyMutationInput, ItemComandaUncheckedUpdateManyInput>
    /**
     * Filter which ItemComandas to update
     */
    where?: ItemComandaWhereInput
    /**
     * Limit how many ItemComandas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemComanda upsert
   */
  export type ItemComandaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemComanda to update in case it exists.
     */
    where: ItemComandaWhereUniqueInput
    /**
     * In case the ItemComanda found by the `where` argument doesn't exist, create a new ItemComanda with this data.
     */
    create: XOR<ItemComandaCreateInput, ItemComandaUncheckedCreateInput>
    /**
     * In case the ItemComanda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemComandaUpdateInput, ItemComandaUncheckedUpdateInput>
  }

  /**
   * ItemComanda delete
   */
  export type ItemComandaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
    /**
     * Filter which ItemComanda to delete.
     */
    where: ItemComandaWhereUniqueInput
  }

  /**
   * ItemComanda deleteMany
   */
  export type ItemComandaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemComandas to delete
     */
    where?: ItemComandaWhereInput
    /**
     * Limit how many ItemComandas to delete.
     */
    limit?: number
  }

  /**
   * ItemComanda without action
   */
  export type ItemComandaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemComanda
     */
    select?: ItemComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemComanda
     */
    omit?: ItemComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemComandaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    domain: 'domain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    accessCode: 'accessCode',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const MesaScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    numero: 'numero',
    qrCode: 'qrCode',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MesaScalarFieldEnum = (typeof MesaScalarFieldEnum)[keyof typeof MesaScalarFieldEnum]


  export const ComandaScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    mesaId: 'mesaId',
    status: 'status',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    closedAt: 'closedAt'
  };

  export type ComandaScalarFieldEnum = (typeof ComandaScalarFieldEnum)[keyof typeof ComandaScalarFieldEnum]


  export const ItemComandaScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    comandaId: 'comandaId',
    descricao: 'descricao',
    quantidade: 'quantidade',
    preco: 'preco',
    subtotal: 'subtotal',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemComandaScalarFieldEnum = (typeof ItemComandaScalarFieldEnum)[keyof typeof ItemComandaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    domain?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    staff?: StaffListRelationFilter
    mesas?: MesaListRelationFilter
    comandas?: ComandaListRelationFilter
    itens?: ItemComandaListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    staff?: StaffOrderByRelationAggregateInput
    mesas?: MesaOrderByRelationAggregateInput
    comandas?: ComandaOrderByRelationAggregateInput
    itens?: ItemComandaOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    domain?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    staff?: StaffListRelationFilter
    mesas?: MesaListRelationFilter
    comandas?: ComandaListRelationFilter
    itens?: ItemComandaListRelationFilter
  }, "id" | "slug" | "domain">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    domain?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    tenantId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    role?: StringFilter<"Staff"> | string
    accessCode?: StringNullableFilter<"Staff"> | string | null
    isActive?: BoolFilter<"Staff"> | boolean
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accessCode?: string
    tenantId_email?: StaffTenantIdEmailCompoundUniqueInput
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    tenantId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    role?: StringFilter<"Staff"> | string
    isActive?: BoolFilter<"Staff"> | boolean
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "accessCode" | "tenantId_email">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    tenantId?: StringWithAggregatesFilter<"Staff"> | string
    name?: StringWithAggregatesFilter<"Staff"> | string
    email?: StringWithAggregatesFilter<"Staff"> | string
    password?: StringWithAggregatesFilter<"Staff"> | string
    role?: StringWithAggregatesFilter<"Staff"> | string
    accessCode?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    isActive?: BoolWithAggregatesFilter<"Staff"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type MesaWhereInput = {
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    id?: StringFilter<"Mesa"> | string
    tenantId?: StringFilter<"Mesa"> | string
    numero?: IntFilter<"Mesa"> | number
    qrCode?: StringFilter<"Mesa"> | string
    isActive?: BoolFilter<"Mesa"> | boolean
    createdAt?: DateTimeFilter<"Mesa"> | Date | string
    updatedAt?: DateTimeFilter<"Mesa"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    comandas?: ComandaListRelationFilter
  }

  export type MesaOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    numero?: SortOrder
    qrCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    comandas?: ComandaOrderByRelationAggregateInput
  }

  export type MesaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrCode?: string
    tenantId_numero?: MesaTenantIdNumeroCompoundUniqueInput
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    tenantId?: StringFilter<"Mesa"> | string
    numero?: IntFilter<"Mesa"> | number
    isActive?: BoolFilter<"Mesa"> | boolean
    createdAt?: DateTimeFilter<"Mesa"> | Date | string
    updatedAt?: DateTimeFilter<"Mesa"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    comandas?: ComandaListRelationFilter
  }, "id" | "qrCode" | "tenantId_numero">

  export type MesaOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    numero?: SortOrder
    qrCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MesaCountOrderByAggregateInput
    _avg?: MesaAvgOrderByAggregateInput
    _max?: MesaMaxOrderByAggregateInput
    _min?: MesaMinOrderByAggregateInput
    _sum?: MesaSumOrderByAggregateInput
  }

  export type MesaScalarWhereWithAggregatesInput = {
    AND?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    OR?: MesaScalarWhereWithAggregatesInput[]
    NOT?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mesa"> | string
    tenantId?: StringWithAggregatesFilter<"Mesa"> | string
    numero?: IntWithAggregatesFilter<"Mesa"> | number
    qrCode?: StringWithAggregatesFilter<"Mesa"> | string
    isActive?: BoolWithAggregatesFilter<"Mesa"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Mesa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mesa"> | Date | string
  }

  export type ComandaWhereInput = {
    AND?: ComandaWhereInput | ComandaWhereInput[]
    OR?: ComandaWhereInput[]
    NOT?: ComandaWhereInput | ComandaWhereInput[]
    id?: StringFilter<"Comanda"> | string
    tenantId?: StringFilter<"Comanda"> | string
    mesaId?: StringFilter<"Comanda"> | string
    status?: StringFilter<"Comanda"> | string
    total?: FloatFilter<"Comanda"> | number
    createdAt?: DateTimeFilter<"Comanda"> | Date | string
    updatedAt?: DateTimeFilter<"Comanda"> | Date | string
    closedAt?: DateTimeNullableFilter<"Comanda"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    mesa?: XOR<MesaScalarRelationFilter, MesaWhereInput>
    itens?: ItemComandaListRelationFilter
  }

  export type ComandaOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    mesaId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    mesa?: MesaOrderByWithRelationInput
    itens?: ItemComandaOrderByRelationAggregateInput
  }

  export type ComandaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComandaWhereInput | ComandaWhereInput[]
    OR?: ComandaWhereInput[]
    NOT?: ComandaWhereInput | ComandaWhereInput[]
    tenantId?: StringFilter<"Comanda"> | string
    mesaId?: StringFilter<"Comanda"> | string
    status?: StringFilter<"Comanda"> | string
    total?: FloatFilter<"Comanda"> | number
    createdAt?: DateTimeFilter<"Comanda"> | Date | string
    updatedAt?: DateTimeFilter<"Comanda"> | Date | string
    closedAt?: DateTimeNullableFilter<"Comanda"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    mesa?: XOR<MesaScalarRelationFilter, MesaWhereInput>
    itens?: ItemComandaListRelationFilter
  }, "id">

  export type ComandaOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    mesaId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    _count?: ComandaCountOrderByAggregateInput
    _avg?: ComandaAvgOrderByAggregateInput
    _max?: ComandaMaxOrderByAggregateInput
    _min?: ComandaMinOrderByAggregateInput
    _sum?: ComandaSumOrderByAggregateInput
  }

  export type ComandaScalarWhereWithAggregatesInput = {
    AND?: ComandaScalarWhereWithAggregatesInput | ComandaScalarWhereWithAggregatesInput[]
    OR?: ComandaScalarWhereWithAggregatesInput[]
    NOT?: ComandaScalarWhereWithAggregatesInput | ComandaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comanda"> | string
    tenantId?: StringWithAggregatesFilter<"Comanda"> | string
    mesaId?: StringWithAggregatesFilter<"Comanda"> | string
    status?: StringWithAggregatesFilter<"Comanda"> | string
    total?: FloatWithAggregatesFilter<"Comanda"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comanda"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comanda"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"Comanda"> | Date | string | null
  }

  export type ItemComandaWhereInput = {
    AND?: ItemComandaWhereInput | ItemComandaWhereInput[]
    OR?: ItemComandaWhereInput[]
    NOT?: ItemComandaWhereInput | ItemComandaWhereInput[]
    id?: StringFilter<"ItemComanda"> | string
    tenantId?: StringFilter<"ItemComanda"> | string
    comandaId?: StringFilter<"ItemComanda"> | string
    descricao?: StringFilter<"ItemComanda"> | string
    quantidade?: IntFilter<"ItemComanda"> | number
    preco?: FloatFilter<"ItemComanda"> | number
    subtotal?: FloatFilter<"ItemComanda"> | number
    status?: StringFilter<"ItemComanda"> | string
    createdAt?: DateTimeFilter<"ItemComanda"> | Date | string
    updatedAt?: DateTimeFilter<"ItemComanda"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    comanda?: XOR<ComandaScalarRelationFilter, ComandaWhereInput>
  }

  export type ItemComandaOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    comandaId?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    comanda?: ComandaOrderByWithRelationInput
  }

  export type ItemComandaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemComandaWhereInput | ItemComandaWhereInput[]
    OR?: ItemComandaWhereInput[]
    NOT?: ItemComandaWhereInput | ItemComandaWhereInput[]
    tenantId?: StringFilter<"ItemComanda"> | string
    comandaId?: StringFilter<"ItemComanda"> | string
    descricao?: StringFilter<"ItemComanda"> | string
    quantidade?: IntFilter<"ItemComanda"> | number
    preco?: FloatFilter<"ItemComanda"> | number
    subtotal?: FloatFilter<"ItemComanda"> | number
    status?: StringFilter<"ItemComanda"> | string
    createdAt?: DateTimeFilter<"ItemComanda"> | Date | string
    updatedAt?: DateTimeFilter<"ItemComanda"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    comanda?: XOR<ComandaScalarRelationFilter, ComandaWhereInput>
  }, "id">

  export type ItemComandaOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    comandaId?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemComandaCountOrderByAggregateInput
    _avg?: ItemComandaAvgOrderByAggregateInput
    _max?: ItemComandaMaxOrderByAggregateInput
    _min?: ItemComandaMinOrderByAggregateInput
    _sum?: ItemComandaSumOrderByAggregateInput
  }

  export type ItemComandaScalarWhereWithAggregatesInput = {
    AND?: ItemComandaScalarWhereWithAggregatesInput | ItemComandaScalarWhereWithAggregatesInput[]
    OR?: ItemComandaScalarWhereWithAggregatesInput[]
    NOT?: ItemComandaScalarWhereWithAggregatesInput | ItemComandaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemComanda"> | string
    tenantId?: StringWithAggregatesFilter<"ItemComanda"> | string
    comandaId?: StringWithAggregatesFilter<"ItemComanda"> | string
    descricao?: StringWithAggregatesFilter<"ItemComanda"> | string
    quantidade?: IntWithAggregatesFilter<"ItemComanda"> | number
    preco?: FloatWithAggregatesFilter<"ItemComanda"> | number
    subtotal?: FloatWithAggregatesFilter<"ItemComanda"> | number
    status?: StringWithAggregatesFilter<"ItemComanda"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ItemComanda"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemComanda"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    mesas?: MesaCreateNestedManyWithoutTenantInput
    comandas?: ComandaCreateNestedManyWithoutTenantInput
    itens?: ItemComandaCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    mesas?: MesaUncheckedCreateNestedManyWithoutTenantInput
    comandas?: ComandaUncheckedCreateNestedManyWithoutTenantInput
    itens?: ItemComandaUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    mesas?: MesaUpdateManyWithoutTenantNestedInput
    comandas?: ComandaUpdateManyWithoutTenantNestedInput
    itens?: ItemComandaUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    mesas?: MesaUncheckedUpdateManyWithoutTenantNestedInput
    comandas?: ComandaUncheckedUpdateManyWithoutTenantNestedInput
    itens?: ItemComandaUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    accessCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    email: string
    password: string
    role?: string
    accessCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    email: string
    password: string
    role?: string
    accessCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesaCreateInput = {
    id?: string
    numero: number
    qrCode: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMesasInput
    comandas?: ComandaCreateNestedManyWithoutMesaInput
  }

  export type MesaUncheckedCreateInput = {
    id?: string
    tenantId: string
    numero: number
    qrCode: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comandas?: ComandaUncheckedCreateNestedManyWithoutMesaInput
  }

  export type MesaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMesasNestedInput
    comandas?: ComandaUpdateManyWithoutMesaNestedInput
  }

  export type MesaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comandas?: ComandaUncheckedUpdateManyWithoutMesaNestedInput
  }

  export type MesaCreateManyInput = {
    id?: string
    tenantId: string
    numero: number
    qrCode: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MesaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComandaCreateInput = {
    id?: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutComandasInput
    mesa: MesaCreateNestedOneWithoutComandasInput
    itens?: ItemComandaCreateNestedManyWithoutComandaInput
  }

  export type ComandaUncheckedCreateInput = {
    id?: string
    tenantId: string
    mesaId: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    itens?: ItemComandaUncheckedCreateNestedManyWithoutComandaInput
  }

  export type ComandaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutComandasNestedInput
    mesa?: MesaUpdateOneRequiredWithoutComandasNestedInput
    itens?: ItemComandaUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    mesaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itens?: ItemComandaUncheckedUpdateManyWithoutComandaNestedInput
  }

  export type ComandaCreateManyInput = {
    id?: string
    tenantId: string
    mesaId: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type ComandaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComandaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    mesaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemComandaCreateInput = {
    id?: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutItensInput
    comanda: ComandaCreateNestedOneWithoutItensInput
  }

  export type ItemComandaUncheckedCreateInput = {
    id?: string
    tenantId: string
    comandaId: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemComandaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutItensNestedInput
    comanda?: ComandaUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemComandaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    comandaId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemComandaCreateManyInput = {
    id?: string
    tenantId: string
    comandaId: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemComandaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemComandaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    comandaId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type MesaListRelationFilter = {
    every?: MesaWhereInput
    some?: MesaWhereInput
    none?: MesaWhereInput
  }

  export type ComandaListRelationFilter = {
    every?: ComandaWhereInput
    some?: ComandaWhereInput
    none?: ComandaWhereInput
  }

  export type ItemComandaListRelationFilter = {
    every?: ItemComandaWhereInput
    some?: ItemComandaWhereInput
    none?: ItemComandaWhereInput
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MesaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComandaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemComandaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StaffTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MesaTenantIdNumeroCompoundUniqueInput = {
    tenantId: string
    numero: number
  }

  export type MesaCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    numero?: SortOrder
    qrCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MesaAvgOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type MesaMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    numero?: SortOrder
    qrCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MesaMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    numero?: SortOrder
    qrCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MesaSumOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MesaScalarRelationFilter = {
    is?: MesaWhereInput
    isNot?: MesaWhereInput
  }

  export type ComandaCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    mesaId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrder
  }

  export type ComandaAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type ComandaMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    mesaId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrder
  }

  export type ComandaMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    mesaId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrder
  }

  export type ComandaSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ComandaScalarRelationFilter = {
    is?: ComandaWhereInput
    isNot?: ComandaWhereInput
  }

  export type ItemComandaCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    comandaId?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemComandaAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    preco?: SortOrder
    subtotal?: SortOrder
  }

  export type ItemComandaMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    comandaId?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemComandaMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    comandaId?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemComandaSumOrderByAggregateInput = {
    quantidade?: SortOrder
    preco?: SortOrder
    subtotal?: SortOrder
  }

  export type StaffCreateNestedManyWithoutTenantInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type MesaCreateNestedManyWithoutTenantInput = {
    create?: XOR<MesaCreateWithoutTenantInput, MesaUncheckedCreateWithoutTenantInput> | MesaCreateWithoutTenantInput[] | MesaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MesaCreateOrConnectWithoutTenantInput | MesaCreateOrConnectWithoutTenantInput[]
    createMany?: MesaCreateManyTenantInputEnvelope
    connect?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
  }

  export type ComandaCreateNestedManyWithoutTenantInput = {
    create?: XOR<ComandaCreateWithoutTenantInput, ComandaUncheckedCreateWithoutTenantInput> | ComandaCreateWithoutTenantInput[] | ComandaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutTenantInput | ComandaCreateOrConnectWithoutTenantInput[]
    createMany?: ComandaCreateManyTenantInputEnvelope
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
  }

  export type ItemComandaCreateNestedManyWithoutTenantInput = {
    create?: XOR<ItemComandaCreateWithoutTenantInput, ItemComandaUncheckedCreateWithoutTenantInput> | ItemComandaCreateWithoutTenantInput[] | ItemComandaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ItemComandaCreateOrConnectWithoutTenantInput | ItemComandaCreateOrConnectWithoutTenantInput[]
    createMany?: ItemComandaCreateManyTenantInputEnvelope
    connect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type MesaUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<MesaCreateWithoutTenantInput, MesaUncheckedCreateWithoutTenantInput> | MesaCreateWithoutTenantInput[] | MesaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MesaCreateOrConnectWithoutTenantInput | MesaCreateOrConnectWithoutTenantInput[]
    createMany?: MesaCreateManyTenantInputEnvelope
    connect?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
  }

  export type ComandaUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ComandaCreateWithoutTenantInput, ComandaUncheckedCreateWithoutTenantInput> | ComandaCreateWithoutTenantInput[] | ComandaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutTenantInput | ComandaCreateOrConnectWithoutTenantInput[]
    createMany?: ComandaCreateManyTenantInputEnvelope
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
  }

  export type ItemComandaUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ItemComandaCreateWithoutTenantInput, ItemComandaUncheckedCreateWithoutTenantInput> | ItemComandaCreateWithoutTenantInput[] | ItemComandaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ItemComandaCreateOrConnectWithoutTenantInput | ItemComandaCreateOrConnectWithoutTenantInput[]
    createMany?: ItemComandaCreateManyTenantInputEnvelope
    connect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StaffUpdateManyWithoutTenantNestedInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutTenantInput | StaffUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutTenantInput | StaffUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutTenantInput | StaffUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type MesaUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MesaCreateWithoutTenantInput, MesaUncheckedCreateWithoutTenantInput> | MesaCreateWithoutTenantInput[] | MesaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MesaCreateOrConnectWithoutTenantInput | MesaCreateOrConnectWithoutTenantInput[]
    upsert?: MesaUpsertWithWhereUniqueWithoutTenantInput | MesaUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MesaCreateManyTenantInputEnvelope
    set?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
    disconnect?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
    delete?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
    connect?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
    update?: MesaUpdateWithWhereUniqueWithoutTenantInput | MesaUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MesaUpdateManyWithWhereWithoutTenantInput | MesaUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MesaScalarWhereInput | MesaScalarWhereInput[]
  }

  export type ComandaUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ComandaCreateWithoutTenantInput, ComandaUncheckedCreateWithoutTenantInput> | ComandaCreateWithoutTenantInput[] | ComandaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutTenantInput | ComandaCreateOrConnectWithoutTenantInput[]
    upsert?: ComandaUpsertWithWhereUniqueWithoutTenantInput | ComandaUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ComandaCreateManyTenantInputEnvelope
    set?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    disconnect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    delete?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    update?: ComandaUpdateWithWhereUniqueWithoutTenantInput | ComandaUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ComandaUpdateManyWithWhereWithoutTenantInput | ComandaUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
  }

  export type ItemComandaUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ItemComandaCreateWithoutTenantInput, ItemComandaUncheckedCreateWithoutTenantInput> | ItemComandaCreateWithoutTenantInput[] | ItemComandaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ItemComandaCreateOrConnectWithoutTenantInput | ItemComandaCreateOrConnectWithoutTenantInput[]
    upsert?: ItemComandaUpsertWithWhereUniqueWithoutTenantInput | ItemComandaUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ItemComandaCreateManyTenantInputEnvelope
    set?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    disconnect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    delete?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    connect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    update?: ItemComandaUpdateWithWhereUniqueWithoutTenantInput | ItemComandaUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ItemComandaUpdateManyWithWhereWithoutTenantInput | ItemComandaUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ItemComandaScalarWhereInput | ItemComandaScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutTenantInput | StaffUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutTenantInput | StaffUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutTenantInput | StaffUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type MesaUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MesaCreateWithoutTenantInput, MesaUncheckedCreateWithoutTenantInput> | MesaCreateWithoutTenantInput[] | MesaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MesaCreateOrConnectWithoutTenantInput | MesaCreateOrConnectWithoutTenantInput[]
    upsert?: MesaUpsertWithWhereUniqueWithoutTenantInput | MesaUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MesaCreateManyTenantInputEnvelope
    set?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
    disconnect?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
    delete?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
    connect?: MesaWhereUniqueInput | MesaWhereUniqueInput[]
    update?: MesaUpdateWithWhereUniqueWithoutTenantInput | MesaUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MesaUpdateManyWithWhereWithoutTenantInput | MesaUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MesaScalarWhereInput | MesaScalarWhereInput[]
  }

  export type ComandaUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ComandaCreateWithoutTenantInput, ComandaUncheckedCreateWithoutTenantInput> | ComandaCreateWithoutTenantInput[] | ComandaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutTenantInput | ComandaCreateOrConnectWithoutTenantInput[]
    upsert?: ComandaUpsertWithWhereUniqueWithoutTenantInput | ComandaUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ComandaCreateManyTenantInputEnvelope
    set?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    disconnect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    delete?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    update?: ComandaUpdateWithWhereUniqueWithoutTenantInput | ComandaUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ComandaUpdateManyWithWhereWithoutTenantInput | ComandaUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
  }

  export type ItemComandaUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ItemComandaCreateWithoutTenantInput, ItemComandaUncheckedCreateWithoutTenantInput> | ItemComandaCreateWithoutTenantInput[] | ItemComandaUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ItemComandaCreateOrConnectWithoutTenantInput | ItemComandaCreateOrConnectWithoutTenantInput[]
    upsert?: ItemComandaUpsertWithWhereUniqueWithoutTenantInput | ItemComandaUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ItemComandaCreateManyTenantInputEnvelope
    set?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    disconnect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    delete?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    connect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    update?: ItemComandaUpdateWithWhereUniqueWithoutTenantInput | ItemComandaUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ItemComandaUpdateManyWithWhereWithoutTenantInput | ItemComandaUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ItemComandaScalarWhereInput | ItemComandaScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutStaffInput = {
    create?: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStaffInput
    connect?: TenantWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TenantUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStaffInput
    upsert?: TenantUpsertWithoutStaffInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutStaffInput, TenantUpdateWithoutStaffInput>, TenantUncheckedUpdateWithoutStaffInput>
  }

  export type TenantCreateNestedOneWithoutMesasInput = {
    create?: XOR<TenantCreateWithoutMesasInput, TenantUncheckedCreateWithoutMesasInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMesasInput
    connect?: TenantWhereUniqueInput
  }

  export type ComandaCreateNestedManyWithoutMesaInput = {
    create?: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput> | ComandaCreateWithoutMesaInput[] | ComandaUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutMesaInput | ComandaCreateOrConnectWithoutMesaInput[]
    createMany?: ComandaCreateManyMesaInputEnvelope
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
  }

  export type ComandaUncheckedCreateNestedManyWithoutMesaInput = {
    create?: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput> | ComandaCreateWithoutMesaInput[] | ComandaUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutMesaInput | ComandaCreateOrConnectWithoutMesaInput[]
    createMany?: ComandaCreateManyMesaInputEnvelope
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutMesasNestedInput = {
    create?: XOR<TenantCreateWithoutMesasInput, TenantUncheckedCreateWithoutMesasInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMesasInput
    upsert?: TenantUpsertWithoutMesasInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMesasInput, TenantUpdateWithoutMesasInput>, TenantUncheckedUpdateWithoutMesasInput>
  }

  export type ComandaUpdateManyWithoutMesaNestedInput = {
    create?: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput> | ComandaCreateWithoutMesaInput[] | ComandaUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutMesaInput | ComandaCreateOrConnectWithoutMesaInput[]
    upsert?: ComandaUpsertWithWhereUniqueWithoutMesaInput | ComandaUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: ComandaCreateManyMesaInputEnvelope
    set?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    disconnect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    delete?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    update?: ComandaUpdateWithWhereUniqueWithoutMesaInput | ComandaUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: ComandaUpdateManyWithWhereWithoutMesaInput | ComandaUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
  }

  export type ComandaUncheckedUpdateManyWithoutMesaNestedInput = {
    create?: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput> | ComandaCreateWithoutMesaInput[] | ComandaUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutMesaInput | ComandaCreateOrConnectWithoutMesaInput[]
    upsert?: ComandaUpsertWithWhereUniqueWithoutMesaInput | ComandaUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: ComandaCreateManyMesaInputEnvelope
    set?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    disconnect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    delete?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    update?: ComandaUpdateWithWhereUniqueWithoutMesaInput | ComandaUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: ComandaUpdateManyWithWhereWithoutMesaInput | ComandaUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutComandasInput = {
    create?: XOR<TenantCreateWithoutComandasInput, TenantUncheckedCreateWithoutComandasInput>
    connectOrCreate?: TenantCreateOrConnectWithoutComandasInput
    connect?: TenantWhereUniqueInput
  }

  export type MesaCreateNestedOneWithoutComandasInput = {
    create?: XOR<MesaCreateWithoutComandasInput, MesaUncheckedCreateWithoutComandasInput>
    connectOrCreate?: MesaCreateOrConnectWithoutComandasInput
    connect?: MesaWhereUniqueInput
  }

  export type ItemComandaCreateNestedManyWithoutComandaInput = {
    create?: XOR<ItemComandaCreateWithoutComandaInput, ItemComandaUncheckedCreateWithoutComandaInput> | ItemComandaCreateWithoutComandaInput[] | ItemComandaUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: ItemComandaCreateOrConnectWithoutComandaInput | ItemComandaCreateOrConnectWithoutComandaInput[]
    createMany?: ItemComandaCreateManyComandaInputEnvelope
    connect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
  }

  export type ItemComandaUncheckedCreateNestedManyWithoutComandaInput = {
    create?: XOR<ItemComandaCreateWithoutComandaInput, ItemComandaUncheckedCreateWithoutComandaInput> | ItemComandaCreateWithoutComandaInput[] | ItemComandaUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: ItemComandaCreateOrConnectWithoutComandaInput | ItemComandaCreateOrConnectWithoutComandaInput[]
    createMany?: ItemComandaCreateManyComandaInputEnvelope
    connect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutComandasNestedInput = {
    create?: XOR<TenantCreateWithoutComandasInput, TenantUncheckedCreateWithoutComandasInput>
    connectOrCreate?: TenantCreateOrConnectWithoutComandasInput
    upsert?: TenantUpsertWithoutComandasInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutComandasInput, TenantUpdateWithoutComandasInput>, TenantUncheckedUpdateWithoutComandasInput>
  }

  export type MesaUpdateOneRequiredWithoutComandasNestedInput = {
    create?: XOR<MesaCreateWithoutComandasInput, MesaUncheckedCreateWithoutComandasInput>
    connectOrCreate?: MesaCreateOrConnectWithoutComandasInput
    upsert?: MesaUpsertWithoutComandasInput
    connect?: MesaWhereUniqueInput
    update?: XOR<XOR<MesaUpdateToOneWithWhereWithoutComandasInput, MesaUpdateWithoutComandasInput>, MesaUncheckedUpdateWithoutComandasInput>
  }

  export type ItemComandaUpdateManyWithoutComandaNestedInput = {
    create?: XOR<ItemComandaCreateWithoutComandaInput, ItemComandaUncheckedCreateWithoutComandaInput> | ItemComandaCreateWithoutComandaInput[] | ItemComandaUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: ItemComandaCreateOrConnectWithoutComandaInput | ItemComandaCreateOrConnectWithoutComandaInput[]
    upsert?: ItemComandaUpsertWithWhereUniqueWithoutComandaInput | ItemComandaUpsertWithWhereUniqueWithoutComandaInput[]
    createMany?: ItemComandaCreateManyComandaInputEnvelope
    set?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    disconnect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    delete?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    connect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    update?: ItemComandaUpdateWithWhereUniqueWithoutComandaInput | ItemComandaUpdateWithWhereUniqueWithoutComandaInput[]
    updateMany?: ItemComandaUpdateManyWithWhereWithoutComandaInput | ItemComandaUpdateManyWithWhereWithoutComandaInput[]
    deleteMany?: ItemComandaScalarWhereInput | ItemComandaScalarWhereInput[]
  }

  export type ItemComandaUncheckedUpdateManyWithoutComandaNestedInput = {
    create?: XOR<ItemComandaCreateWithoutComandaInput, ItemComandaUncheckedCreateWithoutComandaInput> | ItemComandaCreateWithoutComandaInput[] | ItemComandaUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: ItemComandaCreateOrConnectWithoutComandaInput | ItemComandaCreateOrConnectWithoutComandaInput[]
    upsert?: ItemComandaUpsertWithWhereUniqueWithoutComandaInput | ItemComandaUpsertWithWhereUniqueWithoutComandaInput[]
    createMany?: ItemComandaCreateManyComandaInputEnvelope
    set?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    disconnect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    delete?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    connect?: ItemComandaWhereUniqueInput | ItemComandaWhereUniqueInput[]
    update?: ItemComandaUpdateWithWhereUniqueWithoutComandaInput | ItemComandaUpdateWithWhereUniqueWithoutComandaInput[]
    updateMany?: ItemComandaUpdateManyWithWhereWithoutComandaInput | ItemComandaUpdateManyWithWhereWithoutComandaInput[]
    deleteMany?: ItemComandaScalarWhereInput | ItemComandaScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutItensInput = {
    create?: XOR<TenantCreateWithoutItensInput, TenantUncheckedCreateWithoutItensInput>
    connectOrCreate?: TenantCreateOrConnectWithoutItensInput
    connect?: TenantWhereUniqueInput
  }

  export type ComandaCreateNestedOneWithoutItensInput = {
    create?: XOR<ComandaCreateWithoutItensInput, ComandaUncheckedCreateWithoutItensInput>
    connectOrCreate?: ComandaCreateOrConnectWithoutItensInput
    connect?: ComandaWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<TenantCreateWithoutItensInput, TenantUncheckedCreateWithoutItensInput>
    connectOrCreate?: TenantCreateOrConnectWithoutItensInput
    upsert?: TenantUpsertWithoutItensInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutItensInput, TenantUpdateWithoutItensInput>, TenantUncheckedUpdateWithoutItensInput>
  }

  export type ComandaUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<ComandaCreateWithoutItensInput, ComandaUncheckedCreateWithoutItensInput>
    connectOrCreate?: ComandaCreateOrConnectWithoutItensInput
    upsert?: ComandaUpsertWithoutItensInput
    connect?: ComandaWhereUniqueInput
    update?: XOR<XOR<ComandaUpdateToOneWithWhereWithoutItensInput, ComandaUpdateWithoutItensInput>, ComandaUncheckedUpdateWithoutItensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StaffCreateWithoutTenantInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    accessCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    accessCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutTenantInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput>
  }

  export type StaffCreateManyTenantInputEnvelope = {
    data: StaffCreateManyTenantInput | StaffCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MesaCreateWithoutTenantInput = {
    id?: string
    numero: number
    qrCode: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comandas?: ComandaCreateNestedManyWithoutMesaInput
  }

  export type MesaUncheckedCreateWithoutTenantInput = {
    id?: string
    numero: number
    qrCode: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comandas?: ComandaUncheckedCreateNestedManyWithoutMesaInput
  }

  export type MesaCreateOrConnectWithoutTenantInput = {
    where: MesaWhereUniqueInput
    create: XOR<MesaCreateWithoutTenantInput, MesaUncheckedCreateWithoutTenantInput>
  }

  export type MesaCreateManyTenantInputEnvelope = {
    data: MesaCreateManyTenantInput | MesaCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ComandaCreateWithoutTenantInput = {
    id?: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    mesa: MesaCreateNestedOneWithoutComandasInput
    itens?: ItemComandaCreateNestedManyWithoutComandaInput
  }

  export type ComandaUncheckedCreateWithoutTenantInput = {
    id?: string
    mesaId: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    itens?: ItemComandaUncheckedCreateNestedManyWithoutComandaInput
  }

  export type ComandaCreateOrConnectWithoutTenantInput = {
    where: ComandaWhereUniqueInput
    create: XOR<ComandaCreateWithoutTenantInput, ComandaUncheckedCreateWithoutTenantInput>
  }

  export type ComandaCreateManyTenantInputEnvelope = {
    data: ComandaCreateManyTenantInput | ComandaCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ItemComandaCreateWithoutTenantInput = {
    id?: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comanda: ComandaCreateNestedOneWithoutItensInput
  }

  export type ItemComandaUncheckedCreateWithoutTenantInput = {
    id?: string
    comandaId: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemComandaCreateOrConnectWithoutTenantInput = {
    where: ItemComandaWhereUniqueInput
    create: XOR<ItemComandaCreateWithoutTenantInput, ItemComandaUncheckedCreateWithoutTenantInput>
  }

  export type ItemComandaCreateManyTenantInputEnvelope = {
    data: ItemComandaCreateManyTenantInput | ItemComandaCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type StaffUpsertWithWhereUniqueWithoutTenantInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutTenantInput, StaffUncheckedUpdateWithoutTenantInput>
    create: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutTenantInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutTenantInput, StaffUncheckedUpdateWithoutTenantInput>
  }

  export type StaffUpdateManyWithWhereWithoutTenantInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutTenantInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: StringFilter<"Staff"> | string
    tenantId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    role?: StringFilter<"Staff"> | string
    accessCode?: StringNullableFilter<"Staff"> | string | null
    isActive?: BoolFilter<"Staff"> | boolean
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
  }

  export type MesaUpsertWithWhereUniqueWithoutTenantInput = {
    where: MesaWhereUniqueInput
    update: XOR<MesaUpdateWithoutTenantInput, MesaUncheckedUpdateWithoutTenantInput>
    create: XOR<MesaCreateWithoutTenantInput, MesaUncheckedCreateWithoutTenantInput>
  }

  export type MesaUpdateWithWhereUniqueWithoutTenantInput = {
    where: MesaWhereUniqueInput
    data: XOR<MesaUpdateWithoutTenantInput, MesaUncheckedUpdateWithoutTenantInput>
  }

  export type MesaUpdateManyWithWhereWithoutTenantInput = {
    where: MesaScalarWhereInput
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyWithoutTenantInput>
  }

  export type MesaScalarWhereInput = {
    AND?: MesaScalarWhereInput | MesaScalarWhereInput[]
    OR?: MesaScalarWhereInput[]
    NOT?: MesaScalarWhereInput | MesaScalarWhereInput[]
    id?: StringFilter<"Mesa"> | string
    tenantId?: StringFilter<"Mesa"> | string
    numero?: IntFilter<"Mesa"> | number
    qrCode?: StringFilter<"Mesa"> | string
    isActive?: BoolFilter<"Mesa"> | boolean
    createdAt?: DateTimeFilter<"Mesa"> | Date | string
    updatedAt?: DateTimeFilter<"Mesa"> | Date | string
  }

  export type ComandaUpsertWithWhereUniqueWithoutTenantInput = {
    where: ComandaWhereUniqueInput
    update: XOR<ComandaUpdateWithoutTenantInput, ComandaUncheckedUpdateWithoutTenantInput>
    create: XOR<ComandaCreateWithoutTenantInput, ComandaUncheckedCreateWithoutTenantInput>
  }

  export type ComandaUpdateWithWhereUniqueWithoutTenantInput = {
    where: ComandaWhereUniqueInput
    data: XOR<ComandaUpdateWithoutTenantInput, ComandaUncheckedUpdateWithoutTenantInput>
  }

  export type ComandaUpdateManyWithWhereWithoutTenantInput = {
    where: ComandaScalarWhereInput
    data: XOR<ComandaUpdateManyMutationInput, ComandaUncheckedUpdateManyWithoutTenantInput>
  }

  export type ComandaScalarWhereInput = {
    AND?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
    OR?: ComandaScalarWhereInput[]
    NOT?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
    id?: StringFilter<"Comanda"> | string
    tenantId?: StringFilter<"Comanda"> | string
    mesaId?: StringFilter<"Comanda"> | string
    status?: StringFilter<"Comanda"> | string
    total?: FloatFilter<"Comanda"> | number
    createdAt?: DateTimeFilter<"Comanda"> | Date | string
    updatedAt?: DateTimeFilter<"Comanda"> | Date | string
    closedAt?: DateTimeNullableFilter<"Comanda"> | Date | string | null
  }

  export type ItemComandaUpsertWithWhereUniqueWithoutTenantInput = {
    where: ItemComandaWhereUniqueInput
    update: XOR<ItemComandaUpdateWithoutTenantInput, ItemComandaUncheckedUpdateWithoutTenantInput>
    create: XOR<ItemComandaCreateWithoutTenantInput, ItemComandaUncheckedCreateWithoutTenantInput>
  }

  export type ItemComandaUpdateWithWhereUniqueWithoutTenantInput = {
    where: ItemComandaWhereUniqueInput
    data: XOR<ItemComandaUpdateWithoutTenantInput, ItemComandaUncheckedUpdateWithoutTenantInput>
  }

  export type ItemComandaUpdateManyWithWhereWithoutTenantInput = {
    where: ItemComandaScalarWhereInput
    data: XOR<ItemComandaUpdateManyMutationInput, ItemComandaUncheckedUpdateManyWithoutTenantInput>
  }

  export type ItemComandaScalarWhereInput = {
    AND?: ItemComandaScalarWhereInput | ItemComandaScalarWhereInput[]
    OR?: ItemComandaScalarWhereInput[]
    NOT?: ItemComandaScalarWhereInput | ItemComandaScalarWhereInput[]
    id?: StringFilter<"ItemComanda"> | string
    tenantId?: StringFilter<"ItemComanda"> | string
    comandaId?: StringFilter<"ItemComanda"> | string
    descricao?: StringFilter<"ItemComanda"> | string
    quantidade?: IntFilter<"ItemComanda"> | number
    preco?: FloatFilter<"ItemComanda"> | number
    subtotal?: FloatFilter<"ItemComanda"> | number
    status?: StringFilter<"ItemComanda"> | string
    createdAt?: DateTimeFilter<"ItemComanda"> | Date | string
    updatedAt?: DateTimeFilter<"ItemComanda"> | Date | string
  }

  export type TenantCreateWithoutStaffInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mesas?: MesaCreateNestedManyWithoutTenantInput
    comandas?: ComandaCreateNestedManyWithoutTenantInput
    itens?: ItemComandaCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mesas?: MesaUncheckedCreateNestedManyWithoutTenantInput
    comandas?: ComandaUncheckedCreateNestedManyWithoutTenantInput
    itens?: ItemComandaUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutStaffInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
  }

  export type TenantUpsertWithoutStaffInput = {
    update: XOR<TenantUpdateWithoutStaffInput, TenantUncheckedUpdateWithoutStaffInput>
    create: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutStaffInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutStaffInput, TenantUncheckedUpdateWithoutStaffInput>
  }

  export type TenantUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mesas?: MesaUpdateManyWithoutTenantNestedInput
    comandas?: ComandaUpdateManyWithoutTenantNestedInput
    itens?: ItemComandaUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mesas?: MesaUncheckedUpdateManyWithoutTenantNestedInput
    comandas?: ComandaUncheckedUpdateManyWithoutTenantNestedInput
    itens?: ItemComandaUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutMesasInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    comandas?: ComandaCreateNestedManyWithoutTenantInput
    itens?: ItemComandaCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutMesasInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    comandas?: ComandaUncheckedCreateNestedManyWithoutTenantInput
    itens?: ItemComandaUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutMesasInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMesasInput, TenantUncheckedCreateWithoutMesasInput>
  }

  export type ComandaCreateWithoutMesaInput = {
    id?: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutComandasInput
    itens?: ItemComandaCreateNestedManyWithoutComandaInput
  }

  export type ComandaUncheckedCreateWithoutMesaInput = {
    id?: string
    tenantId: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    itens?: ItemComandaUncheckedCreateNestedManyWithoutComandaInput
  }

  export type ComandaCreateOrConnectWithoutMesaInput = {
    where: ComandaWhereUniqueInput
    create: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput>
  }

  export type ComandaCreateManyMesaInputEnvelope = {
    data: ComandaCreateManyMesaInput | ComandaCreateManyMesaInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutMesasInput = {
    update: XOR<TenantUpdateWithoutMesasInput, TenantUncheckedUpdateWithoutMesasInput>
    create: XOR<TenantCreateWithoutMesasInput, TenantUncheckedCreateWithoutMesasInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMesasInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutMesasInput, TenantUncheckedUpdateWithoutMesasInput>
  }

  export type TenantUpdateWithoutMesasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    comandas?: ComandaUpdateManyWithoutTenantNestedInput
    itens?: ItemComandaUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutMesasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    comandas?: ComandaUncheckedUpdateManyWithoutTenantNestedInput
    itens?: ItemComandaUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ComandaUpsertWithWhereUniqueWithoutMesaInput = {
    where: ComandaWhereUniqueInput
    update: XOR<ComandaUpdateWithoutMesaInput, ComandaUncheckedUpdateWithoutMesaInput>
    create: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput>
  }

  export type ComandaUpdateWithWhereUniqueWithoutMesaInput = {
    where: ComandaWhereUniqueInput
    data: XOR<ComandaUpdateWithoutMesaInput, ComandaUncheckedUpdateWithoutMesaInput>
  }

  export type ComandaUpdateManyWithWhereWithoutMesaInput = {
    where: ComandaScalarWhereInput
    data: XOR<ComandaUpdateManyMutationInput, ComandaUncheckedUpdateManyWithoutMesaInput>
  }

  export type TenantCreateWithoutComandasInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    mesas?: MesaCreateNestedManyWithoutTenantInput
    itens?: ItemComandaCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutComandasInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    mesas?: MesaUncheckedCreateNestedManyWithoutTenantInput
    itens?: ItemComandaUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutComandasInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutComandasInput, TenantUncheckedCreateWithoutComandasInput>
  }

  export type MesaCreateWithoutComandasInput = {
    id?: string
    numero: number
    qrCode: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMesasInput
  }

  export type MesaUncheckedCreateWithoutComandasInput = {
    id?: string
    tenantId: string
    numero: number
    qrCode: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MesaCreateOrConnectWithoutComandasInput = {
    where: MesaWhereUniqueInput
    create: XOR<MesaCreateWithoutComandasInput, MesaUncheckedCreateWithoutComandasInput>
  }

  export type ItemComandaCreateWithoutComandaInput = {
    id?: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutItensInput
  }

  export type ItemComandaUncheckedCreateWithoutComandaInput = {
    id?: string
    tenantId: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemComandaCreateOrConnectWithoutComandaInput = {
    where: ItemComandaWhereUniqueInput
    create: XOR<ItemComandaCreateWithoutComandaInput, ItemComandaUncheckedCreateWithoutComandaInput>
  }

  export type ItemComandaCreateManyComandaInputEnvelope = {
    data: ItemComandaCreateManyComandaInput | ItemComandaCreateManyComandaInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutComandasInput = {
    update: XOR<TenantUpdateWithoutComandasInput, TenantUncheckedUpdateWithoutComandasInput>
    create: XOR<TenantCreateWithoutComandasInput, TenantUncheckedCreateWithoutComandasInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutComandasInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutComandasInput, TenantUncheckedUpdateWithoutComandasInput>
  }

  export type TenantUpdateWithoutComandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    mesas?: MesaUpdateManyWithoutTenantNestedInput
    itens?: ItemComandaUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutComandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    mesas?: MesaUncheckedUpdateManyWithoutTenantNestedInput
    itens?: ItemComandaUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type MesaUpsertWithoutComandasInput = {
    update: XOR<MesaUpdateWithoutComandasInput, MesaUncheckedUpdateWithoutComandasInput>
    create: XOR<MesaCreateWithoutComandasInput, MesaUncheckedCreateWithoutComandasInput>
    where?: MesaWhereInput
  }

  export type MesaUpdateToOneWithWhereWithoutComandasInput = {
    where?: MesaWhereInput
    data: XOR<MesaUpdateWithoutComandasInput, MesaUncheckedUpdateWithoutComandasInput>
  }

  export type MesaUpdateWithoutComandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMesasNestedInput
  }

  export type MesaUncheckedUpdateWithoutComandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemComandaUpsertWithWhereUniqueWithoutComandaInput = {
    where: ItemComandaWhereUniqueInput
    update: XOR<ItemComandaUpdateWithoutComandaInput, ItemComandaUncheckedUpdateWithoutComandaInput>
    create: XOR<ItemComandaCreateWithoutComandaInput, ItemComandaUncheckedCreateWithoutComandaInput>
  }

  export type ItemComandaUpdateWithWhereUniqueWithoutComandaInput = {
    where: ItemComandaWhereUniqueInput
    data: XOR<ItemComandaUpdateWithoutComandaInput, ItemComandaUncheckedUpdateWithoutComandaInput>
  }

  export type ItemComandaUpdateManyWithWhereWithoutComandaInput = {
    where: ItemComandaScalarWhereInput
    data: XOR<ItemComandaUpdateManyMutationInput, ItemComandaUncheckedUpdateManyWithoutComandaInput>
  }

  export type TenantCreateWithoutItensInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    mesas?: MesaCreateNestedManyWithoutTenantInput
    comandas?: ComandaCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutItensInput = {
    id?: string
    name: string
    slug: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    mesas?: MesaUncheckedCreateNestedManyWithoutTenantInput
    comandas?: ComandaUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutItensInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutItensInput, TenantUncheckedCreateWithoutItensInput>
  }

  export type ComandaCreateWithoutItensInput = {
    id?: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutComandasInput
    mesa: MesaCreateNestedOneWithoutComandasInput
  }

  export type ComandaUncheckedCreateWithoutItensInput = {
    id?: string
    tenantId: string
    mesaId: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type ComandaCreateOrConnectWithoutItensInput = {
    where: ComandaWhereUniqueInput
    create: XOR<ComandaCreateWithoutItensInput, ComandaUncheckedCreateWithoutItensInput>
  }

  export type TenantUpsertWithoutItensInput = {
    update: XOR<TenantUpdateWithoutItensInput, TenantUncheckedUpdateWithoutItensInput>
    create: XOR<TenantCreateWithoutItensInput, TenantUncheckedCreateWithoutItensInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutItensInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutItensInput, TenantUncheckedUpdateWithoutItensInput>
  }

  export type TenantUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    mesas?: MesaUpdateManyWithoutTenantNestedInput
    comandas?: ComandaUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    mesas?: MesaUncheckedUpdateManyWithoutTenantNestedInput
    comandas?: ComandaUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ComandaUpsertWithoutItensInput = {
    update: XOR<ComandaUpdateWithoutItensInput, ComandaUncheckedUpdateWithoutItensInput>
    create: XOR<ComandaCreateWithoutItensInput, ComandaUncheckedCreateWithoutItensInput>
    where?: ComandaWhereInput
  }

  export type ComandaUpdateToOneWithWhereWithoutItensInput = {
    where?: ComandaWhereInput
    data: XOR<ComandaUpdateWithoutItensInput, ComandaUncheckedUpdateWithoutItensInput>
  }

  export type ComandaUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutComandasNestedInput
    mesa?: MesaUpdateOneRequiredWithoutComandasNestedInput
  }

  export type ComandaUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    mesaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffCreateManyTenantInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    accessCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MesaCreateManyTenantInput = {
    id?: string
    numero: number
    qrCode: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComandaCreateManyTenantInput = {
    id?: string
    mesaId: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type ItemComandaCreateManyTenantInput = {
    id?: string
    comandaId: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesaUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comandas?: ComandaUpdateManyWithoutMesaNestedInput
  }

  export type MesaUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comandas?: ComandaUncheckedUpdateManyWithoutMesaNestedInput
  }

  export type MesaUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComandaUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mesa?: MesaUpdateOneRequiredWithoutComandasNestedInput
    itens?: ItemComandaUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itens?: ItemComandaUncheckedUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemComandaUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comanda?: ComandaUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemComandaUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    comandaId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemComandaUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    comandaId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComandaCreateManyMesaInput = {
    id?: string
    tenantId: string
    status?: string
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type ComandaUpdateWithoutMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutComandasNestedInput
    itens?: ItemComandaUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateWithoutMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itens?: ItemComandaUncheckedUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateManyWithoutMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemComandaCreateManyComandaInput = {
    id?: string
    tenantId: string
    descricao: string
    quantidade: number
    preco: number
    subtotal: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemComandaUpdateWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemComandaUncheckedUpdateWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemComandaUncheckedUpdateManyWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}