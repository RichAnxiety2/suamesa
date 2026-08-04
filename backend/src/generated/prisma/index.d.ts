
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
 * Model TenantColors
 * 
 */
export type TenantColors = $Result.DefaultSelection<Prisma.$TenantColorsPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model WaiterInteractionLog
 * 
 */
export type WaiterInteractionLog = $Result.DefaultSelection<Prisma.$WaiterInteractionLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TableStatus: {
  FREE: 'FREE',
  OCCUPIED: 'OCCUPIED',
  CLEANING: 'CLEANING',
  RESERVED: 'RESERVED'
};

export type TableStatus = (typeof TableStatus)[keyof typeof TableStatus]


export const OrderStatus: {
  DRAFT: 'DRAFT',
  OPEN: 'OPEN',
  PREPARING: 'PREPARING',
  READY: 'READY',
  DELIVERED: 'DELIVERED',
  CLOSED: 'CLOSED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const ItemStatus: {
  PENDING: 'PENDING',
  PREPARING: 'PREPARING',
  READY: 'READY',
  DELIVERED: 'DELIVERED'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]


export const StaffProfile: {
  SUPERADMIN: 'SUPERADMIN',
  MANAGER: 'MANAGER',
  CASHIER: 'CASHIER',
  WAITER: 'WAITER',
  KITCHEN: 'KITCHEN'
};

export type StaffProfile = (typeof StaffProfile)[keyof typeof StaffProfile]


export const InteractionType: {
  ASSIGNED: 'ASSIGNED',
  CONFIRMED: 'CONFIRMED',
  TRANSFERRED: 'TRANSFERRED',
  PUXOU: 'PUXOU',
  ESCALATION: 'ESCALATION',
  GERENCIA: 'GERENCIA'
};

export type InteractionType = (typeof InteractionType)[keyof typeof InteractionType]


export const TenantStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type TenantStatus = (typeof TenantStatus)[keyof typeof TenantStatus]


export const TenantPlan: {
  FOUNDER: 'FOUNDER',
  BASIC: 'BASIC',
  PRO: 'PRO'
};

export type TenantPlan = (typeof TenantPlan)[keyof typeof TenantPlan]

}

export type TableStatus = $Enums.TableStatus

export const TableStatus: typeof $Enums.TableStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

export type StaffProfile = $Enums.StaffProfile

export const StaffProfile: typeof $Enums.StaffProfile

export type InteractionType = $Enums.InteractionType

export const InteractionType: typeof $Enums.InteractionType

export type TenantStatus = $Enums.TenantStatus

export const TenantStatus: typeof $Enums.TenantStatus

export type TenantPlan = $Enums.TenantPlan

export const TenantPlan: typeof $Enums.TenantPlan

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
   * `prisma.tenantColors`: Exposes CRUD operations for the **TenantColors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantColors
    * const tenantColors = await prisma.tenantColors.findMany()
    * ```
    */
  get tenantColors(): Prisma.TenantColorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waiterInteractionLog`: Exposes CRUD operations for the **WaiterInteractionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaiterInteractionLogs
    * const waiterInteractionLogs = await prisma.waiterInteractionLog.findMany()
    * ```
    */
  get waiterInteractionLog(): Prisma.WaiterInteractionLogDelegate<ExtArgs, ClientOptions>;
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
    TenantColors: 'TenantColors',
    Category: 'Category',
    MenuItem: 'MenuItem',
    Table: 'Table',
    Order: 'Order',
    OrderItem: 'OrderItem',
    AuditLog: 'AuditLog',
    WaiterInteractionLog: 'WaiterInteractionLog'
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
      modelProps: "tenant" | "staff" | "tenantColors" | "category" | "menuItem" | "table" | "order" | "orderItem" | "auditLog" | "waiterInteractionLog"
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
      TenantColors: {
        payload: Prisma.$TenantColorsPayload<ExtArgs>
        fields: Prisma.TenantColorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantColorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantColorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload>
          }
          findFirst: {
            args: Prisma.TenantColorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantColorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload>
          }
          findMany: {
            args: Prisma.TenantColorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload>[]
          }
          create: {
            args: Prisma.TenantColorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload>
          }
          createMany: {
            args: Prisma.TenantColorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantColorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload>[]
          }
          delete: {
            args: Prisma.TenantColorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload>
          }
          update: {
            args: Prisma.TenantColorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload>
          }
          deleteMany: {
            args: Prisma.TenantColorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantColorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantColorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload>[]
          }
          upsert: {
            args: Prisma.TenantColorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantColorsPayload>
          }
          aggregate: {
            args: Prisma.TenantColorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantColors>
          }
          groupBy: {
            args: Prisma.TenantColorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantColorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantColorsCountArgs<ExtArgs>
            result: $Utils.Optional<TenantColorsCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      WaiterInteractionLog: {
        payload: Prisma.$WaiterInteractionLogPayload<ExtArgs>
        fields: Prisma.WaiterInteractionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaiterInteractionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaiterInteractionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload>
          }
          findFirst: {
            args: Prisma.WaiterInteractionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaiterInteractionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload>
          }
          findMany: {
            args: Prisma.WaiterInteractionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload>[]
          }
          create: {
            args: Prisma.WaiterInteractionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload>
          }
          createMany: {
            args: Prisma.WaiterInteractionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaiterInteractionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload>[]
          }
          delete: {
            args: Prisma.WaiterInteractionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload>
          }
          update: {
            args: Prisma.WaiterInteractionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload>
          }
          deleteMany: {
            args: Prisma.WaiterInteractionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaiterInteractionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaiterInteractionLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload>[]
          }
          upsert: {
            args: Prisma.WaiterInteractionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterInteractionLogPayload>
          }
          aggregate: {
            args: Prisma.WaiterInteractionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaiterInteractionLog>
          }
          groupBy: {
            args: Prisma.WaiterInteractionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaiterInteractionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaiterInteractionLogCountArgs<ExtArgs>
            result: $Utils.Optional<WaiterInteractionLogCountAggregateOutputType> | number
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
    tenantColors?: TenantColorsOmit
    category?: CategoryOmit
    menuItem?: MenuItemOmit
    table?: TableOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    auditLog?: AuditLogOmit
    waiterInteractionLog?: WaiterInteractionLogOmit
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
    tables: number
    categories: number
    menu_items: number
    orders: number
    order_items: number
    audit_logs: number
    waiter_interactions: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | TenantCountOutputTypeCountStaffArgs
    tables?: boolean | TenantCountOutputTypeCountTablesArgs
    categories?: boolean | TenantCountOutputTypeCountCategoriesArgs
    menu_items?: boolean | TenantCountOutputTypeCountMenu_itemsArgs
    orders?: boolean | TenantCountOutputTypeCountOrdersArgs
    order_items?: boolean | TenantCountOutputTypeCountOrder_itemsArgs
    audit_logs?: boolean | TenantCountOutputTypeCountAudit_logsArgs
    waiter_interactions?: boolean | TenantCountOutputTypeCountWaiter_interactionsArgs
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
  export type TenantCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMenu_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountWaiter_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterInteractionLogWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    orders_as_waiter: number
    order_items_prepared: number
    audit_logs: number
    waiter_interactions_from: number
    waiter_interactions_to: number
    tables_default: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders_as_waiter?: boolean | StaffCountOutputTypeCountOrders_as_waiterArgs
    order_items_prepared?: boolean | StaffCountOutputTypeCountOrder_items_preparedArgs
    audit_logs?: boolean | StaffCountOutputTypeCountAudit_logsArgs
    waiter_interactions_from?: boolean | StaffCountOutputTypeCountWaiter_interactions_fromArgs
    waiter_interactions_to?: boolean | StaffCountOutputTypeCountWaiter_interactions_toArgs
    tables_default?: boolean | StaffCountOutputTypeCountTables_defaultArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountOrders_as_waiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountOrder_items_preparedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountWaiter_interactions_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterInteractionLogWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountWaiter_interactions_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterInteractionLogWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountTables_defaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    menu_items: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | CategoryCountOutputTypeCountMenu_itemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMenu_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    order_items: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | MenuItemCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    orders: number
    waiter_interactions: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | TableCountOutputTypeCountOrdersArgs
    waiter_interactions?: boolean | TableCountOutputTypeCountWaiter_interactionsArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountWaiter_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterInteractionLogWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    order_items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrderCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
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
    subdomain: string | null
    plan: $Enums.TenantPlan | null
    status: $Enums.TenantStatus | null
    logo_url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    deleted_by: string | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subdomain: string | null
    plan: $Enums.TenantPlan | null
    status: $Enums.TenantStatus | null
    logo_url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    deleted_by: string | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    subdomain: number
    plan: number
    status: number
    logo_url: number
    config: number
    created_at: number
    updated_at: number
    deleted_at: number
    deleted_by: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    subdomain?: true
    plan?: true
    status?: true
    logo_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    deleted_by?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    subdomain?: true
    plan?: true
    status?: true
    logo_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    deleted_by?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    subdomain?: true
    plan?: true
    status?: true
    logo_url?: true
    config?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    deleted_by?: true
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
    subdomain: string
    plan: $Enums.TenantPlan
    status: $Enums.TenantStatus
    logo_url: string | null
    config: JsonValue | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    deleted_by: string | null
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
    subdomain?: boolean
    plan?: boolean
    status?: boolean
    logo_url?: boolean
    config?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    deleted_by?: boolean
    staff?: boolean | Tenant$staffArgs<ExtArgs>
    colors?: boolean | Tenant$colorsArgs<ExtArgs>
    tables?: boolean | Tenant$tablesArgs<ExtArgs>
    categories?: boolean | Tenant$categoriesArgs<ExtArgs>
    menu_items?: boolean | Tenant$menu_itemsArgs<ExtArgs>
    orders?: boolean | Tenant$ordersArgs<ExtArgs>
    order_items?: boolean | Tenant$order_itemsArgs<ExtArgs>
    audit_logs?: boolean | Tenant$audit_logsArgs<ExtArgs>
    waiter_interactions?: boolean | Tenant$waiter_interactionsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subdomain?: boolean
    plan?: boolean
    status?: boolean
    logo_url?: boolean
    config?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    deleted_by?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subdomain?: boolean
    plan?: boolean
    status?: boolean
    logo_url?: boolean
    config?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    deleted_by?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    subdomain?: boolean
    plan?: boolean
    status?: boolean
    logo_url?: boolean
    config?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    deleted_by?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subdomain" | "plan" | "status" | "logo_url" | "config" | "created_at" | "updated_at" | "deleted_at" | "deleted_by", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | Tenant$staffArgs<ExtArgs>
    colors?: boolean | Tenant$colorsArgs<ExtArgs>
    tables?: boolean | Tenant$tablesArgs<ExtArgs>
    categories?: boolean | Tenant$categoriesArgs<ExtArgs>
    menu_items?: boolean | Tenant$menu_itemsArgs<ExtArgs>
    orders?: boolean | Tenant$ordersArgs<ExtArgs>
    order_items?: boolean | Tenant$order_itemsArgs<ExtArgs>
    audit_logs?: boolean | Tenant$audit_logsArgs<ExtArgs>
    waiter_interactions?: boolean | Tenant$waiter_interactionsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs>[]
      colors: Prisma.$TenantColorsPayload<ExtArgs> | null
      tables: Prisma.$TablePayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      menu_items: Prisma.$MenuItemPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      order_items: Prisma.$OrderItemPayload<ExtArgs>[]
      audit_logs: Prisma.$AuditLogPayload<ExtArgs>[]
      waiter_interactions: Prisma.$WaiterInteractionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subdomain: string
      plan: $Enums.TenantPlan
      status: $Enums.TenantStatus
      logo_url: string | null
      config: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      deleted_by: string | null
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
    colors<T extends Tenant$colorsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$colorsArgs<ExtArgs>>): Prisma__TenantColorsClient<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tables<T extends Tenant$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Tenant$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu_items<T extends Tenant$menu_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$menu_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Tenant$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends Tenant$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audit_logs<T extends Tenant$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waiter_interactions<T extends Tenant$waiter_interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$waiter_interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly subdomain: FieldRef<"Tenant", 'String'>
    readonly plan: FieldRef<"Tenant", 'TenantPlan'>
    readonly status: FieldRef<"Tenant", 'TenantStatus'>
    readonly logo_url: FieldRef<"Tenant", 'String'>
    readonly config: FieldRef<"Tenant", 'Json'>
    readonly created_at: FieldRef<"Tenant", 'DateTime'>
    readonly updated_at: FieldRef<"Tenant", 'DateTime'>
    readonly deleted_at: FieldRef<"Tenant", 'DateTime'>
    readonly deleted_by: FieldRef<"Tenant", 'String'>
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
   * Tenant.colors
   */
  export type Tenant$colorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    where?: TenantColorsWhereInput
  }

  /**
   * Tenant.tables
   */
  export type Tenant$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Tenant.categories
   */
  export type Tenant$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Tenant.menu_items
   */
  export type Tenant$menu_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Tenant.orders
   */
  export type Tenant$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Tenant.order_items
   */
  export type Tenant$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Tenant.audit_logs
   */
  export type Tenant$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Tenant.waiter_interactions
   */
  export type Tenant$waiter_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    where?: WaiterInteractionLogWhereInput
    orderBy?: WaiterInteractionLogOrderByWithRelationInput | WaiterInteractionLogOrderByWithRelationInput[]
    cursor?: WaiterInteractionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaiterInteractionLogScalarFieldEnum | WaiterInteractionLogScalarFieldEnum[]
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
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    commission_rate: Decimal | null
  }

  export type StaffSumAggregateOutputType = {
    commission_rate: Decimal | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    profile: $Enums.StaffProfile | null
    email: string | null
    password_hash: string | null
    last_password_change_at: Date | null
    password_change_required: boolean | null
    access_code_hash: string | null
    access_code_expires_at: Date | null
    photo_url: string | null
    active: boolean | null
    first_access_completed: boolean | null
    commission_rate: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    last_access_at: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    profile: $Enums.StaffProfile | null
    email: string | null
    password_hash: string | null
    last_password_change_at: Date | null
    password_change_required: boolean | null
    access_code_hash: string | null
    access_code_expires_at: Date | null
    photo_url: string | null
    active: boolean | null
    first_access_completed: boolean | null
    commission_rate: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    last_access_at: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    tenant_id: number
    name: number
    profile: number
    email: number
    password_hash: number
    last_password_change_at: number
    password_change_required: number
    access_code_hash: number
    access_code_expires_at: number
    photo_url: number
    active: number
    first_access_completed: number
    commission_rate: number
    created_at: number
    updated_at: number
    last_access_at: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    commission_rate?: true
  }

  export type StaffSumAggregateInputType = {
    commission_rate?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    profile?: true
    email?: true
    password_hash?: true
    last_password_change_at?: true
    password_change_required?: true
    access_code_hash?: true
    access_code_expires_at?: true
    photo_url?: true
    active?: true
    first_access_completed?: true
    commission_rate?: true
    created_at?: true
    updated_at?: true
    last_access_at?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    profile?: true
    email?: true
    password_hash?: true
    last_password_change_at?: true
    password_change_required?: true
    access_code_hash?: true
    access_code_expires_at?: true
    photo_url?: true
    active?: true
    first_access_completed?: true
    commission_rate?: true
    created_at?: true
    updated_at?: true
    last_access_at?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    profile?: true
    email?: true
    password_hash?: true
    last_password_change_at?: true
    password_change_required?: true
    access_code_hash?: true
    access_code_expires_at?: true
    photo_url?: true
    active?: true
    first_access_completed?: true
    commission_rate?: true
    created_at?: true
    updated_at?: true
    last_access_at?: true
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
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
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
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    tenant_id: string | null
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash: string | null
    last_password_change_at: Date | null
    password_change_required: boolean
    access_code_hash: string | null
    access_code_expires_at: Date | null
    photo_url: string | null
    active: boolean
    first_access_completed: boolean
    commission_rate: Decimal | null
    created_at: Date
    updated_at: Date
    last_access_at: Date | null
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
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
    tenant_id?: boolean
    name?: boolean
    profile?: boolean
    email?: boolean
    password_hash?: boolean
    last_password_change_at?: boolean
    password_change_required?: boolean
    access_code_hash?: boolean
    access_code_expires_at?: boolean
    photo_url?: boolean
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_access_at?: boolean
    tenant?: boolean | Staff$tenantArgs<ExtArgs>
    orders_as_waiter?: boolean | Staff$orders_as_waiterArgs<ExtArgs>
    order_items_prepared?: boolean | Staff$order_items_preparedArgs<ExtArgs>
    audit_logs?: boolean | Staff$audit_logsArgs<ExtArgs>
    waiter_interactions_from?: boolean | Staff$waiter_interactions_fromArgs<ExtArgs>
    waiter_interactions_to?: boolean | Staff$waiter_interactions_toArgs<ExtArgs>
    tables_default?: boolean | Staff$tables_defaultArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    profile?: boolean
    email?: boolean
    password_hash?: boolean
    last_password_change_at?: boolean
    password_change_required?: boolean
    access_code_hash?: boolean
    access_code_expires_at?: boolean
    photo_url?: boolean
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_access_at?: boolean
    tenant?: boolean | Staff$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    profile?: boolean
    email?: boolean
    password_hash?: boolean
    last_password_change_at?: boolean
    password_change_required?: boolean
    access_code_hash?: boolean
    access_code_expires_at?: boolean
    photo_url?: boolean
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_access_at?: boolean
    tenant?: boolean | Staff$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    profile?: boolean
    email?: boolean
    password_hash?: boolean
    last_password_change_at?: boolean
    password_change_required?: boolean
    access_code_hash?: boolean
    access_code_expires_at?: boolean
    photo_url?: boolean
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_access_at?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "name" | "profile" | "email" | "password_hash" | "last_password_change_at" | "password_change_required" | "access_code_hash" | "access_code_expires_at" | "photo_url" | "active" | "first_access_completed" | "commission_rate" | "created_at" | "updated_at" | "last_access_at", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Staff$tenantArgs<ExtArgs>
    orders_as_waiter?: boolean | Staff$orders_as_waiterArgs<ExtArgs>
    order_items_prepared?: boolean | Staff$order_items_preparedArgs<ExtArgs>
    audit_logs?: boolean | Staff$audit_logsArgs<ExtArgs>
    waiter_interactions_from?: boolean | Staff$waiter_interactions_fromArgs<ExtArgs>
    waiter_interactions_to?: boolean | Staff$waiter_interactions_toArgs<ExtArgs>
    tables_default?: boolean | Staff$tables_defaultArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Staff$tenantArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Staff$tenantArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs> | null
      orders_as_waiter: Prisma.$OrderPayload<ExtArgs>[]
      order_items_prepared: Prisma.$OrderItemPayload<ExtArgs>[]
      audit_logs: Prisma.$AuditLogPayload<ExtArgs>[]
      waiter_interactions_from: Prisma.$WaiterInteractionLogPayload<ExtArgs>[]
      waiter_interactions_to: Prisma.$WaiterInteractionLogPayload<ExtArgs>[]
      tables_default: Prisma.$TablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string | null
      name: string
      profile: $Enums.StaffProfile
      email: string
      password_hash: string | null
      last_password_change_at: Date | null
      password_change_required: boolean
      access_code_hash: string | null
      access_code_expires_at: Date | null
      photo_url: string | null
      active: boolean
      first_access_completed: boolean
      commission_rate: Prisma.Decimal | null
      created_at: Date
      updated_at: Date
      last_access_at: Date | null
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
    tenant<T extends Staff$tenantArgs<ExtArgs> = {}>(args?: Subset<T, Staff$tenantArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders_as_waiter<T extends Staff$orders_as_waiterArgs<ExtArgs> = {}>(args?: Subset<T, Staff$orders_as_waiterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items_prepared<T extends Staff$order_items_preparedArgs<ExtArgs> = {}>(args?: Subset<T, Staff$order_items_preparedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audit_logs<T extends Staff$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waiter_interactions_from<T extends Staff$waiter_interactions_fromArgs<ExtArgs> = {}>(args?: Subset<T, Staff$waiter_interactions_fromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waiter_interactions_to<T extends Staff$waiter_interactions_toArgs<ExtArgs> = {}>(args?: Subset<T, Staff$waiter_interactions_toArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tables_default<T extends Staff$tables_defaultArgs<ExtArgs> = {}>(args?: Subset<T, Staff$tables_defaultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly tenant_id: FieldRef<"Staff", 'String'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly profile: FieldRef<"Staff", 'StaffProfile'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly password_hash: FieldRef<"Staff", 'String'>
    readonly last_password_change_at: FieldRef<"Staff", 'DateTime'>
    readonly password_change_required: FieldRef<"Staff", 'Boolean'>
    readonly access_code_hash: FieldRef<"Staff", 'String'>
    readonly access_code_expires_at: FieldRef<"Staff", 'DateTime'>
    readonly photo_url: FieldRef<"Staff", 'String'>
    readonly active: FieldRef<"Staff", 'Boolean'>
    readonly first_access_completed: FieldRef<"Staff", 'Boolean'>
    readonly commission_rate: FieldRef<"Staff", 'Decimal'>
    readonly created_at: FieldRef<"Staff", 'DateTime'>
    readonly updated_at: FieldRef<"Staff", 'DateTime'>
    readonly last_access_at: FieldRef<"Staff", 'DateTime'>
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
   * Staff.tenant
   */
  export type Staff$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: TenantWhereInput
  }

  /**
   * Staff.orders_as_waiter
   */
  export type Staff$orders_as_waiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Staff.order_items_prepared
   */
  export type Staff$order_items_preparedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Staff.audit_logs
   */
  export type Staff$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Staff.waiter_interactions_from
   */
  export type Staff$waiter_interactions_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    where?: WaiterInteractionLogWhereInput
    orderBy?: WaiterInteractionLogOrderByWithRelationInput | WaiterInteractionLogOrderByWithRelationInput[]
    cursor?: WaiterInteractionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaiterInteractionLogScalarFieldEnum | WaiterInteractionLogScalarFieldEnum[]
  }

  /**
   * Staff.waiter_interactions_to
   */
  export type Staff$waiter_interactions_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    where?: WaiterInteractionLogWhereInput
    orderBy?: WaiterInteractionLogOrderByWithRelationInput | WaiterInteractionLogOrderByWithRelationInput[]
    cursor?: WaiterInteractionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaiterInteractionLogScalarFieldEnum | WaiterInteractionLogScalarFieldEnum[]
  }

  /**
   * Staff.tables_default
   */
  export type Staff$tables_defaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
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
   * Model TenantColors
   */

  export type AggregateTenantColors = {
    _count: TenantColorsCountAggregateOutputType | null
    _min: TenantColorsMinAggregateOutputType | null
    _max: TenantColorsMaxAggregateOutputType | null
  }

  export type TenantColorsMinAggregateOutputType = {
    tenant_id: string | null
    primary_color: string | null
    primary_light: string | null
    primary_dark: string | null
    secondary_color: string | null
    secondary_light: string | null
    secondary_dark: string | null
    background_color: string | null
    text_primary: string | null
    text_secondary: string | null
    accent_color: string | null
    active_palette: string | null
    updated_at: Date | null
    updated_by: string | null
  }

  export type TenantColorsMaxAggregateOutputType = {
    tenant_id: string | null
    primary_color: string | null
    primary_light: string | null
    primary_dark: string | null
    secondary_color: string | null
    secondary_light: string | null
    secondary_dark: string | null
    background_color: string | null
    text_primary: string | null
    text_secondary: string | null
    accent_color: string | null
    active_palette: string | null
    updated_at: Date | null
    updated_by: string | null
  }

  export type TenantColorsCountAggregateOutputType = {
    tenant_id: number
    primary_color: number
    primary_light: number
    primary_dark: number
    secondary_color: number
    secondary_light: number
    secondary_dark: number
    background_color: number
    text_primary: number
    text_secondary: number
    accent_color: number
    active_palette: number
    updated_at: number
    updated_by: number
    _all: number
  }


  export type TenantColorsMinAggregateInputType = {
    tenant_id?: true
    primary_color?: true
    primary_light?: true
    primary_dark?: true
    secondary_color?: true
    secondary_light?: true
    secondary_dark?: true
    background_color?: true
    text_primary?: true
    text_secondary?: true
    accent_color?: true
    active_palette?: true
    updated_at?: true
    updated_by?: true
  }

  export type TenantColorsMaxAggregateInputType = {
    tenant_id?: true
    primary_color?: true
    primary_light?: true
    primary_dark?: true
    secondary_color?: true
    secondary_light?: true
    secondary_dark?: true
    background_color?: true
    text_primary?: true
    text_secondary?: true
    accent_color?: true
    active_palette?: true
    updated_at?: true
    updated_by?: true
  }

  export type TenantColorsCountAggregateInputType = {
    tenant_id?: true
    primary_color?: true
    primary_light?: true
    primary_dark?: true
    secondary_color?: true
    secondary_light?: true
    secondary_dark?: true
    background_color?: true
    text_primary?: true
    text_secondary?: true
    accent_color?: true
    active_palette?: true
    updated_at?: true
    updated_by?: true
    _all?: true
  }

  export type TenantColorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantColors to aggregate.
     */
    where?: TenantColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantColors to fetch.
     */
    orderBy?: TenantColorsOrderByWithRelationInput | TenantColorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantColors
    **/
    _count?: true | TenantColorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantColorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantColorsMaxAggregateInputType
  }

  export type GetTenantColorsAggregateType<T extends TenantColorsAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantColors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantColors[P]>
      : GetScalarType<T[P], AggregateTenantColors[P]>
  }




  export type TenantColorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantColorsWhereInput
    orderBy?: TenantColorsOrderByWithAggregationInput | TenantColorsOrderByWithAggregationInput[]
    by: TenantColorsScalarFieldEnum[] | TenantColorsScalarFieldEnum
    having?: TenantColorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantColorsCountAggregateInputType | true
    _min?: TenantColorsMinAggregateInputType
    _max?: TenantColorsMaxAggregateInputType
  }

  export type TenantColorsGroupByOutputType = {
    tenant_id: string
    primary_color: string
    primary_light: string
    primary_dark: string
    secondary_color: string
    secondary_light: string
    secondary_dark: string
    background_color: string
    text_primary: string
    text_secondary: string
    accent_color: string
    active_palette: string
    updated_at: Date
    updated_by: string | null
    _count: TenantColorsCountAggregateOutputType | null
    _min: TenantColorsMinAggregateOutputType | null
    _max: TenantColorsMaxAggregateOutputType | null
  }

  type GetTenantColorsGroupByPayload<T extends TenantColorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantColorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantColorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantColorsGroupByOutputType[P]>
            : GetScalarType<T[P], TenantColorsGroupByOutputType[P]>
        }
      >
    >


  export type TenantColorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenant_id?: boolean
    primary_color?: boolean
    primary_light?: boolean
    primary_dark?: boolean
    secondary_color?: boolean
    secondary_light?: boolean
    secondary_dark?: boolean
    background_color?: boolean
    text_primary?: boolean
    text_secondary?: boolean
    accent_color?: boolean
    active_palette?: boolean
    updated_at?: boolean
    updated_by?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantColors"]>

  export type TenantColorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenant_id?: boolean
    primary_color?: boolean
    primary_light?: boolean
    primary_dark?: boolean
    secondary_color?: boolean
    secondary_light?: boolean
    secondary_dark?: boolean
    background_color?: boolean
    text_primary?: boolean
    text_secondary?: boolean
    accent_color?: boolean
    active_palette?: boolean
    updated_at?: boolean
    updated_by?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantColors"]>

  export type TenantColorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenant_id?: boolean
    primary_color?: boolean
    primary_light?: boolean
    primary_dark?: boolean
    secondary_color?: boolean
    secondary_light?: boolean
    secondary_dark?: boolean
    background_color?: boolean
    text_primary?: boolean
    text_secondary?: boolean
    accent_color?: boolean
    active_palette?: boolean
    updated_at?: boolean
    updated_by?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantColors"]>

  export type TenantColorsSelectScalar = {
    tenant_id?: boolean
    primary_color?: boolean
    primary_light?: boolean
    primary_dark?: boolean
    secondary_color?: boolean
    secondary_light?: boolean
    secondary_dark?: boolean
    background_color?: boolean
    text_primary?: boolean
    text_secondary?: boolean
    accent_color?: boolean
    active_palette?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }

  export type TenantColorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenant_id" | "primary_color" | "primary_light" | "primary_dark" | "secondary_color" | "secondary_light" | "secondary_dark" | "background_color" | "text_primary" | "text_secondary" | "accent_color" | "active_palette" | "updated_at" | "updated_by", ExtArgs["result"]["tenantColors"]>
  export type TenantColorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TenantColorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TenantColorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $TenantColorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantColors"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tenant_id: string
      primary_color: string
      primary_light: string
      primary_dark: string
      secondary_color: string
      secondary_light: string
      secondary_dark: string
      background_color: string
      text_primary: string
      text_secondary: string
      accent_color: string
      active_palette: string
      updated_at: Date
      updated_by: string | null
    }, ExtArgs["result"]["tenantColors"]>
    composites: {}
  }

  type TenantColorsGetPayload<S extends boolean | null | undefined | TenantColorsDefaultArgs> = $Result.GetResult<Prisma.$TenantColorsPayload, S>

  type TenantColorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantColorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantColorsCountAggregateInputType | true
    }

  export interface TenantColorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantColors'], meta: { name: 'TenantColors' } }
    /**
     * Find zero or one TenantColors that matches the filter.
     * @param {TenantColorsFindUniqueArgs} args - Arguments to find a TenantColors
     * @example
     * // Get one TenantColors
     * const tenantColors = await prisma.tenantColors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantColorsFindUniqueArgs>(args: SelectSubset<T, TenantColorsFindUniqueArgs<ExtArgs>>): Prisma__TenantColorsClient<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenantColors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantColorsFindUniqueOrThrowArgs} args - Arguments to find a TenantColors
     * @example
     * // Get one TenantColors
     * const tenantColors = await prisma.tenantColors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantColorsFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantColorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantColorsClient<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantColorsFindFirstArgs} args - Arguments to find a TenantColors
     * @example
     * // Get one TenantColors
     * const tenantColors = await prisma.tenantColors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantColorsFindFirstArgs>(args?: SelectSubset<T, TenantColorsFindFirstArgs<ExtArgs>>): Prisma__TenantColorsClient<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantColors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantColorsFindFirstOrThrowArgs} args - Arguments to find a TenantColors
     * @example
     * // Get one TenantColors
     * const tenantColors = await prisma.tenantColors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantColorsFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantColorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantColorsClient<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenantColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantColorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantColors
     * const tenantColors = await prisma.tenantColors.findMany()
     * 
     * // Get first 10 TenantColors
     * const tenantColors = await prisma.tenantColors.findMany({ take: 10 })
     * 
     * // Only select the `tenant_id`
     * const tenantColorsWithTenant_idOnly = await prisma.tenantColors.findMany({ select: { tenant_id: true } })
     * 
     */
    findMany<T extends TenantColorsFindManyArgs>(args?: SelectSubset<T, TenantColorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenantColors.
     * @param {TenantColorsCreateArgs} args - Arguments to create a TenantColors.
     * @example
     * // Create one TenantColors
     * const TenantColors = await prisma.tenantColors.create({
     *   data: {
     *     // ... data to create a TenantColors
     *   }
     * })
     * 
     */
    create<T extends TenantColorsCreateArgs>(args: SelectSubset<T, TenantColorsCreateArgs<ExtArgs>>): Prisma__TenantColorsClient<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenantColors.
     * @param {TenantColorsCreateManyArgs} args - Arguments to create many TenantColors.
     * @example
     * // Create many TenantColors
     * const tenantColors = await prisma.tenantColors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantColorsCreateManyArgs>(args?: SelectSubset<T, TenantColorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantColors and returns the data saved in the database.
     * @param {TenantColorsCreateManyAndReturnArgs} args - Arguments to create many TenantColors.
     * @example
     * // Create many TenantColors
     * const tenantColors = await prisma.tenantColors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantColors and only return the `tenant_id`
     * const tenantColorsWithTenant_idOnly = await prisma.tenantColors.createManyAndReturn({
     *   select: { tenant_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantColorsCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantColorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TenantColors.
     * @param {TenantColorsDeleteArgs} args - Arguments to delete one TenantColors.
     * @example
     * // Delete one TenantColors
     * const TenantColors = await prisma.tenantColors.delete({
     *   where: {
     *     // ... filter to delete one TenantColors
     *   }
     * })
     * 
     */
    delete<T extends TenantColorsDeleteArgs>(args: SelectSubset<T, TenantColorsDeleteArgs<ExtArgs>>): Prisma__TenantColorsClient<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenantColors.
     * @param {TenantColorsUpdateArgs} args - Arguments to update one TenantColors.
     * @example
     * // Update one TenantColors
     * const tenantColors = await prisma.tenantColors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantColorsUpdateArgs>(args: SelectSubset<T, TenantColorsUpdateArgs<ExtArgs>>): Prisma__TenantColorsClient<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenantColors.
     * @param {TenantColorsDeleteManyArgs} args - Arguments to filter TenantColors to delete.
     * @example
     * // Delete a few TenantColors
     * const { count } = await prisma.tenantColors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantColorsDeleteManyArgs>(args?: SelectSubset<T, TenantColorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantColorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantColors
     * const tenantColors = await prisma.tenantColors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantColorsUpdateManyArgs>(args: SelectSubset<T, TenantColorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantColors and returns the data updated in the database.
     * @param {TenantColorsUpdateManyAndReturnArgs} args - Arguments to update many TenantColors.
     * @example
     * // Update many TenantColors
     * const tenantColors = await prisma.tenantColors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TenantColors and only return the `tenant_id`
     * const tenantColorsWithTenant_idOnly = await prisma.tenantColors.updateManyAndReturn({
     *   select: { tenant_id: true },
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
    updateManyAndReturn<T extends TenantColorsUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantColorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TenantColors.
     * @param {TenantColorsUpsertArgs} args - Arguments to update or create a TenantColors.
     * @example
     * // Update or create a TenantColors
     * const tenantColors = await prisma.tenantColors.upsert({
     *   create: {
     *     // ... data to create a TenantColors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantColors we want to update
     *   }
     * })
     */
    upsert<T extends TenantColorsUpsertArgs>(args: SelectSubset<T, TenantColorsUpsertArgs<ExtArgs>>): Prisma__TenantColorsClient<$Result.GetResult<Prisma.$TenantColorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenantColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantColorsCountArgs} args - Arguments to filter TenantColors to count.
     * @example
     * // Count the number of TenantColors
     * const count = await prisma.tenantColors.count({
     *   where: {
     *     // ... the filter for the TenantColors we want to count
     *   }
     * })
    **/
    count<T extends TenantColorsCountArgs>(
      args?: Subset<T, TenantColorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantColorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantColorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantColorsAggregateArgs>(args: Subset<T, TenantColorsAggregateArgs>): Prisma.PrismaPromise<GetTenantColorsAggregateType<T>>

    /**
     * Group by TenantColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantColorsGroupByArgs} args - Group by arguments.
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
      T extends TenantColorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantColorsGroupByArgs['orderBy'] }
        : { orderBy?: TenantColorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantColorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantColorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantColors model
   */
  readonly fields: TenantColorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantColors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantColorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TenantColors model
   */
  interface TenantColorsFieldRefs {
    readonly tenant_id: FieldRef<"TenantColors", 'String'>
    readonly primary_color: FieldRef<"TenantColors", 'String'>
    readonly primary_light: FieldRef<"TenantColors", 'String'>
    readonly primary_dark: FieldRef<"TenantColors", 'String'>
    readonly secondary_color: FieldRef<"TenantColors", 'String'>
    readonly secondary_light: FieldRef<"TenantColors", 'String'>
    readonly secondary_dark: FieldRef<"TenantColors", 'String'>
    readonly background_color: FieldRef<"TenantColors", 'String'>
    readonly text_primary: FieldRef<"TenantColors", 'String'>
    readonly text_secondary: FieldRef<"TenantColors", 'String'>
    readonly accent_color: FieldRef<"TenantColors", 'String'>
    readonly active_palette: FieldRef<"TenantColors", 'String'>
    readonly updated_at: FieldRef<"TenantColors", 'DateTime'>
    readonly updated_by: FieldRef<"TenantColors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TenantColors findUnique
   */
  export type TenantColorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    /**
     * Filter, which TenantColors to fetch.
     */
    where: TenantColorsWhereUniqueInput
  }

  /**
   * TenantColors findUniqueOrThrow
   */
  export type TenantColorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    /**
     * Filter, which TenantColors to fetch.
     */
    where: TenantColorsWhereUniqueInput
  }

  /**
   * TenantColors findFirst
   */
  export type TenantColorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    /**
     * Filter, which TenantColors to fetch.
     */
    where?: TenantColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantColors to fetch.
     */
    orderBy?: TenantColorsOrderByWithRelationInput | TenantColorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantColors.
     */
    cursor?: TenantColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantColors.
     */
    distinct?: TenantColorsScalarFieldEnum | TenantColorsScalarFieldEnum[]
  }

  /**
   * TenantColors findFirstOrThrow
   */
  export type TenantColorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    /**
     * Filter, which TenantColors to fetch.
     */
    where?: TenantColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantColors to fetch.
     */
    orderBy?: TenantColorsOrderByWithRelationInput | TenantColorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantColors.
     */
    cursor?: TenantColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantColors.
     */
    distinct?: TenantColorsScalarFieldEnum | TenantColorsScalarFieldEnum[]
  }

  /**
   * TenantColors findMany
   */
  export type TenantColorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    /**
     * Filter, which TenantColors to fetch.
     */
    where?: TenantColorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantColors to fetch.
     */
    orderBy?: TenantColorsOrderByWithRelationInput | TenantColorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantColors.
     */
    cursor?: TenantColorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantColors.
     */
    distinct?: TenantColorsScalarFieldEnum | TenantColorsScalarFieldEnum[]
  }

  /**
   * TenantColors create
   */
  export type TenantColorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantColors.
     */
    data: XOR<TenantColorsCreateInput, TenantColorsUncheckedCreateInput>
  }

  /**
   * TenantColors createMany
   */
  export type TenantColorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantColors.
     */
    data: TenantColorsCreateManyInput | TenantColorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantColors createManyAndReturn
   */
  export type TenantColorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * The data used to create many TenantColors.
     */
    data: TenantColorsCreateManyInput | TenantColorsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantColors update
   */
  export type TenantColorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantColors.
     */
    data: XOR<TenantColorsUpdateInput, TenantColorsUncheckedUpdateInput>
    /**
     * Choose, which TenantColors to update.
     */
    where: TenantColorsWhereUniqueInput
  }

  /**
   * TenantColors updateMany
   */
  export type TenantColorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantColors.
     */
    data: XOR<TenantColorsUpdateManyMutationInput, TenantColorsUncheckedUpdateManyInput>
    /**
     * Filter which TenantColors to update
     */
    where?: TenantColorsWhereInput
    /**
     * Limit how many TenantColors to update.
     */
    limit?: number
  }

  /**
   * TenantColors updateManyAndReturn
   */
  export type TenantColorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * The data used to update TenantColors.
     */
    data: XOR<TenantColorsUpdateManyMutationInput, TenantColorsUncheckedUpdateManyInput>
    /**
     * Filter which TenantColors to update
     */
    where?: TenantColorsWhereInput
    /**
     * Limit how many TenantColors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantColors upsert
   */
  export type TenantColorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantColors to update in case it exists.
     */
    where: TenantColorsWhereUniqueInput
    /**
     * In case the TenantColors found by the `where` argument doesn't exist, create a new TenantColors with this data.
     */
    create: XOR<TenantColorsCreateInput, TenantColorsUncheckedCreateInput>
    /**
     * In case the TenantColors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantColorsUpdateInput, TenantColorsUncheckedUpdateInput>
  }

  /**
   * TenantColors delete
   */
  export type TenantColorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
    /**
     * Filter which TenantColors to delete.
     */
    where: TenantColorsWhereUniqueInput
  }

  /**
   * TenantColors deleteMany
   */
  export type TenantColorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantColors to delete
     */
    where?: TenantColorsWhereInput
    /**
     * Limit how many TenantColors to delete.
     */
    limit?: number
  }

  /**
   * TenantColors without action
   */
  export type TenantColorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantColors
     */
    select?: TenantColorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantColors
     */
    omit?: TenantColorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantColorsInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    sort_order: number | null
  }

  export type CategorySumAggregateOutputType = {
    sort_order: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    description: string | null
    sort_order: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    description: string | null
    sort_order: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    tenant_id: number
    name: number
    description: number
    sort_order: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    sort_order?: true
  }

  export type CategorySumAggregateInputType = {
    sort_order?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    description?: true
    sort_order?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    description?: true
    sort_order?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    description?: true
    sort_order?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    tenant_id: string
    name: string
    description: string | null
    sort_order: number
    active: boolean
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    description?: boolean
    sort_order?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    menu_items?: boolean | Category$menu_itemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    description?: boolean
    sort_order?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    description?: boolean
    sort_order?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    description?: boolean
    sort_order?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "name" | "description" | "sort_order" | "active" | "created_at" | "updated_at", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    menu_items?: boolean | Category$menu_itemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      menu_items: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      name: string
      description: string | null
      sort_order: number
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu_items<T extends Category$menu_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$menu_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly tenant_id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly sort_order: FieldRef<"Category", 'Int'>
    readonly active: FieldRef<"Category", 'Boolean'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.menu_items
   */
  export type Category$menu_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    price: Decimal | null
    preparation_time: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    price: Decimal | null
    preparation_time: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    category_id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    image_url: string | null
    available: boolean | null
    preparation_time: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    category_id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    image_url: string | null
    available: boolean | null
    preparation_time: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    tenant_id: number
    category_id: number
    name: number
    description: number
    price: number
    image_url: number
    available: number
    options: number
    preparation_time: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    price?: true
    preparation_time?: true
  }

  export type MenuItemSumAggregateInputType = {
    price?: true
    preparation_time?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    tenant_id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    image_url?: true
    available?: true
    preparation_time?: true
    created_at?: true
    updated_at?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    image_url?: true
    available?: true
    preparation_time?: true
    created_at?: true
    updated_at?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    tenant_id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    image_url?: true
    available?: true
    options?: true
    preparation_time?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    tenant_id: string
    category_id: string | null
    name: string
    description: string | null
    price: Decimal
    image_url: string | null
    available: boolean
    options: JsonValue | null
    preparation_time: number | null
    created_at: Date
    updated_at: Date
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image_url?: boolean
    available?: boolean
    options?: boolean
    preparation_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | MenuItem$categoryArgs<ExtArgs>
    order_items?: boolean | MenuItem$order_itemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image_url?: boolean
    available?: boolean
    options?: boolean
    preparation_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | MenuItem$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image_url?: boolean
    available?: boolean
    options?: boolean
    preparation_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | MenuItem$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image_url?: boolean
    available?: boolean
    options?: boolean
    preparation_time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "category_id" | "name" | "description" | "price" | "image_url" | "available" | "options" | "preparation_time" | "created_at" | "updated_at", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | MenuItem$categoryArgs<ExtArgs>
    order_items?: boolean | MenuItem$order_itemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | MenuItem$categoryArgs<ExtArgs>
  }
  export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | MenuItem$categoryArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      order_items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      category_id: string | null
      name: string
      description: string | null
      price: Prisma.Decimal
      image_url: string | null
      available: boolean
      options: Prisma.JsonValue | null
      preparation_time: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
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
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends MenuItem$categoryArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order_items<T extends MenuItem$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'String'>
    readonly tenant_id: FieldRef<"MenuItem", 'String'>
    readonly category_id: FieldRef<"MenuItem", 'String'>
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly price: FieldRef<"MenuItem", 'Decimal'>
    readonly image_url: FieldRef<"MenuItem", 'String'>
    readonly available: FieldRef<"MenuItem", 'Boolean'>
    readonly options: FieldRef<"MenuItem", 'Json'>
    readonly preparation_time: FieldRef<"MenuItem", 'Int'>
    readonly created_at: FieldRef<"MenuItem", 'DateTime'>
    readonly updated_at: FieldRef<"MenuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem.category
   */
  export type MenuItem$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * MenuItem.order_items
   */
  export type MenuItem$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    number: number | null
    capacity: number | null
  }

  export type TableSumAggregateOutputType = {
    number: number | null
    capacity: number | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    number: number | null
    capacity: number | null
    location: string | null
    status: $Enums.TableStatus | null
    default_waiter_id: string | null
    qr_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    number: number | null
    capacity: number | null
    location: string | null
    status: $Enums.TableStatus | null
    default_waiter_id: string | null
    qr_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    tenant_id: number
    number: number
    capacity: number
    location: number
    status: number
    default_waiter_id: number
    qr_code: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    number?: true
    capacity?: true
  }

  export type TableSumAggregateInputType = {
    number?: true
    capacity?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    tenant_id?: true
    number?: true
    capacity?: true
    location?: true
    status?: true
    default_waiter_id?: true
    qr_code?: true
    created_at?: true
    updated_at?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    number?: true
    capacity?: true
    location?: true
    status?: true
    default_waiter_id?: true
    qr_code?: true
    created_at?: true
    updated_at?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    tenant_id?: true
    number?: true
    capacity?: true
    location?: true
    status?: true
    default_waiter_id?: true
    qr_code?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: string
    tenant_id: string
    number: number
    capacity: number
    location: string | null
    status: $Enums.TableStatus
    default_waiter_id: string | null
    qr_code: string | null
    created_at: Date
    updated_at: Date
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    number?: boolean
    capacity?: boolean
    location?: boolean
    status?: boolean
    default_waiter_id?: boolean
    qr_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    default_waiter?: boolean | Table$default_waiterArgs<ExtArgs>
    orders?: boolean | Table$ordersArgs<ExtArgs>
    waiter_interactions?: boolean | Table$waiter_interactionsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    number?: boolean
    capacity?: boolean
    location?: boolean
    status?: boolean
    default_waiter_id?: boolean
    qr_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    default_waiter?: boolean | Table$default_waiterArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    number?: boolean
    capacity?: boolean
    location?: boolean
    status?: boolean
    default_waiter_id?: boolean
    qr_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    default_waiter?: boolean | Table$default_waiterArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    number?: boolean
    capacity?: boolean
    location?: boolean
    status?: boolean
    default_waiter_id?: boolean
    qr_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "number" | "capacity" | "location" | "status" | "default_waiter_id" | "qr_code" | "created_at" | "updated_at", ExtArgs["result"]["table"]>
  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    default_waiter?: boolean | Table$default_waiterArgs<ExtArgs>
    orders?: boolean | Table$ordersArgs<ExtArgs>
    waiter_interactions?: boolean | Table$waiter_interactionsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    default_waiter?: boolean | Table$default_waiterArgs<ExtArgs>
  }
  export type TableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    default_waiter?: boolean | Table$default_waiterArgs<ExtArgs>
  }

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      default_waiter: Prisma.$StaffPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
      waiter_interactions: Prisma.$WaiterInteractionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      number: number
      capacity: number
      location: string | null
      status: $Enums.TableStatus
      default_waiter_id: string | null
      qr_code: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {TableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
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
    updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(args: SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
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
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    default_waiter<T extends Table$default_waiterArgs<ExtArgs> = {}>(args?: Subset<T, Table$default_waiterArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Table$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Table$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waiter_interactions<T extends Table$waiter_interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Table$waiter_interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Table model
   */
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'String'>
    readonly tenant_id: FieldRef<"Table", 'String'>
    readonly number: FieldRef<"Table", 'Int'>
    readonly capacity: FieldRef<"Table", 'Int'>
    readonly location: FieldRef<"Table", 'String'>
    readonly status: FieldRef<"Table", 'TableStatus'>
    readonly default_waiter_id: FieldRef<"Table", 'String'>
    readonly qr_code: FieldRef<"Table", 'String'>
    readonly created_at: FieldRef<"Table", 'DateTime'>
    readonly updated_at: FieldRef<"Table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table createManyAndReturn
   */
  export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table updateManyAndReturn
   */
  export type TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Table.default_waiter
   */
  export type Table$default_waiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Table.orders
   */
  export type Table$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Table.waiter_interactions
   */
  export type Table$waiter_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    where?: WaiterInteractionLogWhereInput
    orderBy?: WaiterInteractionLogOrderByWithRelationInput | WaiterInteractionLogOrderByWithRelationInput[]
    cursor?: WaiterInteractionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaiterInteractionLogScalarFieldEnum | WaiterInteractionLogScalarFieldEnum[]
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: Decimal | null
    tip: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    total: Decimal | null
    tip: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    table_id: string | null
    waiter_id: string | null
    customer_name: string | null
    password_hash: string | null
    status: $Enums.OrderStatus | null
    total: Decimal | null
    tip: Decimal | null
    payment_method: string | null
    opened_at: Date | null
    closed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    table_id: string | null
    waiter_id: string | null
    customer_name: string | null
    password_hash: string | null
    status: $Enums.OrderStatus | null
    total: Decimal | null
    tip: Decimal | null
    payment_method: string | null
    opened_at: Date | null
    closed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    tenant_id: number
    table_id: number
    waiter_id: number
    customer_name: number
    password_hash: number
    status: number
    total: number
    tip: number
    payment_method: number
    opened_at: number
    closed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
    tip?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
    tip?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    tenant_id?: true
    table_id?: true
    waiter_id?: true
    customer_name?: true
    password_hash?: true
    status?: true
    total?: true
    tip?: true
    payment_method?: true
    opened_at?: true
    closed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    table_id?: true
    waiter_id?: true
    customer_name?: true
    password_hash?: true
    status?: true
    total?: true
    tip?: true
    payment_method?: true
    opened_at?: true
    closed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    tenant_id?: true
    table_id?: true
    waiter_id?: true
    customer_name?: true
    password_hash?: true
    status?: true
    total?: true
    tip?: true
    payment_method?: true
    opened_at?: true
    closed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    tenant_id: string
    table_id: string
    waiter_id: string | null
    customer_name: string | null
    password_hash: string | null
    status: $Enums.OrderStatus
    total: Decimal
    tip: Decimal
    payment_method: string | null
    opened_at: Date
    closed_at: Date | null
    created_at: Date
    updated_at: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    table_id?: boolean
    waiter_id?: boolean
    customer_name?: boolean
    password_hash?: boolean
    status?: boolean
    total?: boolean
    tip?: boolean
    payment_method?: boolean
    opened_at?: boolean
    closed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    waiter?: boolean | Order$waiterArgs<ExtArgs>
    order_items?: boolean | Order$order_itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    table_id?: boolean
    waiter_id?: boolean
    customer_name?: boolean
    password_hash?: boolean
    status?: boolean
    total?: boolean
    tip?: boolean
    payment_method?: boolean
    opened_at?: boolean
    closed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    waiter?: boolean | Order$waiterArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    table_id?: boolean
    waiter_id?: boolean
    customer_name?: boolean
    password_hash?: boolean
    status?: boolean
    total?: boolean
    tip?: boolean
    payment_method?: boolean
    opened_at?: boolean
    closed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    waiter?: boolean | Order$waiterArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    table_id?: boolean
    waiter_id?: boolean
    customer_name?: boolean
    password_hash?: boolean
    status?: boolean
    total?: boolean
    tip?: boolean
    payment_method?: boolean
    opened_at?: boolean
    closed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "table_id" | "waiter_id" | "customer_name" | "password_hash" | "status" | "total" | "tip" | "payment_method" | "opened_at" | "closed_at" | "created_at" | "updated_at", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    waiter?: boolean | Order$waiterArgs<ExtArgs>
    order_items?: boolean | Order$order_itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    waiter?: boolean | Order$waiterArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    waiter?: boolean | Order$waiterArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      table: Prisma.$TablePayload<ExtArgs>
      waiter: Prisma.$StaffPayload<ExtArgs> | null
      order_items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      table_id: string
      waiter_id: string | null
      customer_name: string | null
      password_hash: string | null
      status: $Enums.OrderStatus
      total: Prisma.Decimal
      tip: Prisma.Decimal
      payment_method: string | null
      opened_at: Date
      closed_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    waiter<T extends Order$waiterArgs<ExtArgs> = {}>(args?: Subset<T, Order$waiterArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order_items<T extends Order$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly tenant_id: FieldRef<"Order", 'String'>
    readonly table_id: FieldRef<"Order", 'String'>
    readonly waiter_id: FieldRef<"Order", 'String'>
    readonly customer_name: FieldRef<"Order", 'String'>
    readonly password_hash: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly total: FieldRef<"Order", 'Decimal'>
    readonly tip: FieldRef<"Order", 'Decimal'>
    readonly payment_method: FieldRef<"Order", 'String'>
    readonly opened_at: FieldRef<"Order", 'DateTime'>
    readonly closed_at: FieldRef<"Order", 'DateTime'>
    readonly created_at: FieldRef<"Order", 'DateTime'>
    readonly updated_at: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.waiter
   */
  export type Order$waiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Order.order_items
   */
  export type Order$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    tenant_id: string | null
    menu_item_id: string | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    observations: string | null
    status: $Enums.ItemStatus | null
    prepared_by: string | null
    sent_to_kitchen_at: Date | null
    ready_at: Date | null
    delivered_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    tenant_id: string | null
    menu_item_id: string | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    observations: string | null
    status: $Enums.ItemStatus | null
    prepared_by: string | null
    sent_to_kitchen_at: Date | null
    ready_at: Date | null
    delivered_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    order_id: number
    tenant_id: number
    menu_item_id: number
    quantity: number
    unit_price: number
    total_price: number
    observations: number
    options_chosen: number
    status: number
    prepared_by: number
    sent_to_kitchen_at: number
    ready_at: number
    delivered_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    order_id?: true
    tenant_id?: true
    menu_item_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    observations?: true
    status?: true
    prepared_by?: true
    sent_to_kitchen_at?: true
    ready_at?: true
    delivered_at?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    order_id?: true
    tenant_id?: true
    menu_item_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    observations?: true
    status?: true
    prepared_by?: true
    sent_to_kitchen_at?: true
    ready_at?: true
    delivered_at?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    order_id?: true
    tenant_id?: true
    menu_item_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    observations?: true
    options_chosen?: true
    status?: true
    prepared_by?: true
    sent_to_kitchen_at?: true
    ready_at?: true
    delivered_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    order_id: string
    tenant_id: string
    menu_item_id: string
    quantity: number
    unit_price: Decimal
    total_price: Decimal
    observations: string | null
    options_chosen: JsonValue | null
    status: $Enums.ItemStatus
    prepared_by: string | null
    sent_to_kitchen_at: Date | null
    ready_at: Date | null
    delivered_at: Date | null
    created_at: Date
    updated_at: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    tenant_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    observations?: boolean
    options_chosen?: boolean
    status?: boolean
    prepared_by?: boolean
    sent_to_kitchen_at?: boolean
    ready_at?: boolean
    delivered_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    menu_item?: boolean | MenuItemDefaultArgs<ExtArgs>
    prepared_by_staff?: boolean | OrderItem$prepared_by_staffArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    tenant_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    observations?: boolean
    options_chosen?: boolean
    status?: boolean
    prepared_by?: boolean
    sent_to_kitchen_at?: boolean
    ready_at?: boolean
    delivered_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    menu_item?: boolean | MenuItemDefaultArgs<ExtArgs>
    prepared_by_staff?: boolean | OrderItem$prepared_by_staffArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    tenant_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    observations?: boolean
    options_chosen?: boolean
    status?: boolean
    prepared_by?: boolean
    sent_to_kitchen_at?: boolean
    ready_at?: boolean
    delivered_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    menu_item?: boolean | MenuItemDefaultArgs<ExtArgs>
    prepared_by_staff?: boolean | OrderItem$prepared_by_staffArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    order_id?: boolean
    tenant_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    observations?: boolean
    options_chosen?: boolean
    status?: boolean
    prepared_by?: boolean
    sent_to_kitchen_at?: boolean
    ready_at?: boolean
    delivered_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "tenant_id" | "menu_item_id" | "quantity" | "unit_price" | "total_price" | "observations" | "options_chosen" | "status" | "prepared_by" | "sent_to_kitchen_at" | "ready_at" | "delivered_at" | "created_at" | "updated_at", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    menu_item?: boolean | MenuItemDefaultArgs<ExtArgs>
    prepared_by_staff?: boolean | OrderItem$prepared_by_staffArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    menu_item?: boolean | MenuItemDefaultArgs<ExtArgs>
    prepared_by_staff?: boolean | OrderItem$prepared_by_staffArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    menu_item?: boolean | MenuItemDefaultArgs<ExtArgs>
    prepared_by_staff?: boolean | OrderItem$prepared_by_staffArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      menu_item: Prisma.$MenuItemPayload<ExtArgs>
      prepared_by_staff: Prisma.$StaffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      tenant_id: string
      menu_item_id: string
      quantity: number
      unit_price: Prisma.Decimal
      total_price: Prisma.Decimal
      observations: string | null
      options_chosen: Prisma.JsonValue | null
      status: $Enums.ItemStatus
      prepared_by: string | null
      sent_to_kitchen_at: Date | null
      ready_at: Date | null
      delivered_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu_item<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prepared_by_staff<T extends OrderItem$prepared_by_staffArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$prepared_by_staffArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly order_id: FieldRef<"OrderItem", 'String'>
    readonly tenant_id: FieldRef<"OrderItem", 'String'>
    readonly menu_item_id: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unit_price: FieldRef<"OrderItem", 'Decimal'>
    readonly total_price: FieldRef<"OrderItem", 'Decimal'>
    readonly observations: FieldRef<"OrderItem", 'String'>
    readonly options_chosen: FieldRef<"OrderItem", 'Json'>
    readonly status: FieldRef<"OrderItem", 'ItemStatus'>
    readonly prepared_by: FieldRef<"OrderItem", 'String'>
    readonly sent_to_kitchen_at: FieldRef<"OrderItem", 'DateTime'>
    readonly ready_at: FieldRef<"OrderItem", 'DateTime'>
    readonly delivered_at: FieldRef<"OrderItem", 'DateTime'>
    readonly created_at: FieldRef<"OrderItem", 'DateTime'>
    readonly updated_at: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.prepared_by_staff
   */
  export type OrderItem$prepared_by_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    staff_id: string | null
    action: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    staff_id: string | null
    action: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    tenant_id: number
    staff_id: number
    action: number
    details: number
    ip_address: number
    user_agent: number
    created_at: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    tenant_id?: true
    staff_id?: true
    action?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    staff_id?: true
    action?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    tenant_id?: true
    staff_id?: true
    action?: true
    details?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    tenant_id: string
    staff_id: string | null
    action: string
    details: JsonValue | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    staff_id?: boolean
    action?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    staff?: boolean | AuditLog$staffArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    staff_id?: boolean
    action?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    staff?: boolean | AuditLog$staffArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    staff_id?: boolean
    action?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    staff?: boolean | AuditLog$staffArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    staff_id?: boolean
    action?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "staff_id" | "action" | "details" | "ip_address" | "user_agent" | "created_at", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    staff?: boolean | AuditLog$staffArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    staff?: boolean | AuditLog$staffArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    staff?: boolean | AuditLog$staffArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      staff: Prisma.$StaffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      staff_id: string | null
      action: string
      details: Prisma.JsonValue | null
      ip_address: string | null
      user_agent: string | null
      created_at: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends AuditLog$staffArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$staffArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly tenant_id: FieldRef<"AuditLog", 'String'>
    readonly staff_id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'Json'>
    readonly ip_address: FieldRef<"AuditLog", 'String'>
    readonly user_agent: FieldRef<"AuditLog", 'String'>
    readonly created_at: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.staff
   */
  export type AuditLog$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model WaiterInteractionLog
   */

  export type AggregateWaiterInteractionLog = {
    _count: WaiterInteractionLogCountAggregateOutputType | null
    _min: WaiterInteractionLogMinAggregateOutputType | null
    _max: WaiterInteractionLogMaxAggregateOutputType | null
  }

  export type WaiterInteractionLogMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    table_id: string | null
    from_waiter_id: string | null
    to_waiter_id: string | null
    interaction_type: $Enums.InteractionType | null
    reason: string | null
    created_at: Date | null
  }

  export type WaiterInteractionLogMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    table_id: string | null
    from_waiter_id: string | null
    to_waiter_id: string | null
    interaction_type: $Enums.InteractionType | null
    reason: string | null
    created_at: Date | null
  }

  export type WaiterInteractionLogCountAggregateOutputType = {
    id: number
    tenant_id: number
    table_id: number
    from_waiter_id: number
    to_waiter_id: number
    interaction_type: number
    reason: number
    created_at: number
    _all: number
  }


  export type WaiterInteractionLogMinAggregateInputType = {
    id?: true
    tenant_id?: true
    table_id?: true
    from_waiter_id?: true
    to_waiter_id?: true
    interaction_type?: true
    reason?: true
    created_at?: true
  }

  export type WaiterInteractionLogMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    table_id?: true
    from_waiter_id?: true
    to_waiter_id?: true
    interaction_type?: true
    reason?: true
    created_at?: true
  }

  export type WaiterInteractionLogCountAggregateInputType = {
    id?: true
    tenant_id?: true
    table_id?: true
    from_waiter_id?: true
    to_waiter_id?: true
    interaction_type?: true
    reason?: true
    created_at?: true
    _all?: true
  }

  export type WaiterInteractionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaiterInteractionLog to aggregate.
     */
    where?: WaiterInteractionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaiterInteractionLogs to fetch.
     */
    orderBy?: WaiterInteractionLogOrderByWithRelationInput | WaiterInteractionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaiterInteractionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaiterInteractionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaiterInteractionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaiterInteractionLogs
    **/
    _count?: true | WaiterInteractionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaiterInteractionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaiterInteractionLogMaxAggregateInputType
  }

  export type GetWaiterInteractionLogAggregateType<T extends WaiterInteractionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWaiterInteractionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaiterInteractionLog[P]>
      : GetScalarType<T[P], AggregateWaiterInteractionLog[P]>
  }




  export type WaiterInteractionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterInteractionLogWhereInput
    orderBy?: WaiterInteractionLogOrderByWithAggregationInput | WaiterInteractionLogOrderByWithAggregationInput[]
    by: WaiterInteractionLogScalarFieldEnum[] | WaiterInteractionLogScalarFieldEnum
    having?: WaiterInteractionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaiterInteractionLogCountAggregateInputType | true
    _min?: WaiterInteractionLogMinAggregateInputType
    _max?: WaiterInteractionLogMaxAggregateInputType
  }

  export type WaiterInteractionLogGroupByOutputType = {
    id: string
    tenant_id: string
    table_id: string
    from_waiter_id: string | null
    to_waiter_id: string | null
    interaction_type: $Enums.InteractionType
    reason: string | null
    created_at: Date
    _count: WaiterInteractionLogCountAggregateOutputType | null
    _min: WaiterInteractionLogMinAggregateOutputType | null
    _max: WaiterInteractionLogMaxAggregateOutputType | null
  }

  type GetWaiterInteractionLogGroupByPayload<T extends WaiterInteractionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaiterInteractionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaiterInteractionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaiterInteractionLogGroupByOutputType[P]>
            : GetScalarType<T[P], WaiterInteractionLogGroupByOutputType[P]>
        }
      >
    >


  export type WaiterInteractionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    table_id?: boolean
    from_waiter_id?: boolean
    to_waiter_id?: boolean
    interaction_type?: boolean
    reason?: boolean
    created_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    from_waiter?: boolean | WaiterInteractionLog$from_waiterArgs<ExtArgs>
    to_waiter?: boolean | WaiterInteractionLog$to_waiterArgs<ExtArgs>
  }, ExtArgs["result"]["waiterInteractionLog"]>

  export type WaiterInteractionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    table_id?: boolean
    from_waiter_id?: boolean
    to_waiter_id?: boolean
    interaction_type?: boolean
    reason?: boolean
    created_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    from_waiter?: boolean | WaiterInteractionLog$from_waiterArgs<ExtArgs>
    to_waiter?: boolean | WaiterInteractionLog$to_waiterArgs<ExtArgs>
  }, ExtArgs["result"]["waiterInteractionLog"]>

  export type WaiterInteractionLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    table_id?: boolean
    from_waiter_id?: boolean
    to_waiter_id?: boolean
    interaction_type?: boolean
    reason?: boolean
    created_at?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    from_waiter?: boolean | WaiterInteractionLog$from_waiterArgs<ExtArgs>
    to_waiter?: boolean | WaiterInteractionLog$to_waiterArgs<ExtArgs>
  }, ExtArgs["result"]["waiterInteractionLog"]>

  export type WaiterInteractionLogSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    table_id?: boolean
    from_waiter_id?: boolean
    to_waiter_id?: boolean
    interaction_type?: boolean
    reason?: boolean
    created_at?: boolean
  }

  export type WaiterInteractionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "table_id" | "from_waiter_id" | "to_waiter_id" | "interaction_type" | "reason" | "created_at", ExtArgs["result"]["waiterInteractionLog"]>
  export type WaiterInteractionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    from_waiter?: boolean | WaiterInteractionLog$from_waiterArgs<ExtArgs>
    to_waiter?: boolean | WaiterInteractionLog$to_waiterArgs<ExtArgs>
  }
  export type WaiterInteractionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    from_waiter?: boolean | WaiterInteractionLog$from_waiterArgs<ExtArgs>
    to_waiter?: boolean | WaiterInteractionLog$to_waiterArgs<ExtArgs>
  }
  export type WaiterInteractionLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    from_waiter?: boolean | WaiterInteractionLog$from_waiterArgs<ExtArgs>
    to_waiter?: boolean | WaiterInteractionLog$to_waiterArgs<ExtArgs>
  }

  export type $WaiterInteractionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaiterInteractionLog"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      table: Prisma.$TablePayload<ExtArgs>
      from_waiter: Prisma.$StaffPayload<ExtArgs> | null
      to_waiter: Prisma.$StaffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      table_id: string
      from_waiter_id: string | null
      to_waiter_id: string | null
      interaction_type: $Enums.InteractionType
      reason: string | null
      created_at: Date
    }, ExtArgs["result"]["waiterInteractionLog"]>
    composites: {}
  }

  type WaiterInteractionLogGetPayload<S extends boolean | null | undefined | WaiterInteractionLogDefaultArgs> = $Result.GetResult<Prisma.$WaiterInteractionLogPayload, S>

  type WaiterInteractionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaiterInteractionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaiterInteractionLogCountAggregateInputType | true
    }

  export interface WaiterInteractionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaiterInteractionLog'], meta: { name: 'WaiterInteractionLog' } }
    /**
     * Find zero or one WaiterInteractionLog that matches the filter.
     * @param {WaiterInteractionLogFindUniqueArgs} args - Arguments to find a WaiterInteractionLog
     * @example
     * // Get one WaiterInteractionLog
     * const waiterInteractionLog = await prisma.waiterInteractionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaiterInteractionLogFindUniqueArgs>(args: SelectSubset<T, WaiterInteractionLogFindUniqueArgs<ExtArgs>>): Prisma__WaiterInteractionLogClient<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaiterInteractionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaiterInteractionLogFindUniqueOrThrowArgs} args - Arguments to find a WaiterInteractionLog
     * @example
     * // Get one WaiterInteractionLog
     * const waiterInteractionLog = await prisma.waiterInteractionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaiterInteractionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WaiterInteractionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaiterInteractionLogClient<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaiterInteractionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterInteractionLogFindFirstArgs} args - Arguments to find a WaiterInteractionLog
     * @example
     * // Get one WaiterInteractionLog
     * const waiterInteractionLog = await prisma.waiterInteractionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaiterInteractionLogFindFirstArgs>(args?: SelectSubset<T, WaiterInteractionLogFindFirstArgs<ExtArgs>>): Prisma__WaiterInteractionLogClient<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaiterInteractionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterInteractionLogFindFirstOrThrowArgs} args - Arguments to find a WaiterInteractionLog
     * @example
     * // Get one WaiterInteractionLog
     * const waiterInteractionLog = await prisma.waiterInteractionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaiterInteractionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WaiterInteractionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaiterInteractionLogClient<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaiterInteractionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterInteractionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaiterInteractionLogs
     * const waiterInteractionLogs = await prisma.waiterInteractionLog.findMany()
     * 
     * // Get first 10 WaiterInteractionLogs
     * const waiterInteractionLogs = await prisma.waiterInteractionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waiterInteractionLogWithIdOnly = await prisma.waiterInteractionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaiterInteractionLogFindManyArgs>(args?: SelectSubset<T, WaiterInteractionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaiterInteractionLog.
     * @param {WaiterInteractionLogCreateArgs} args - Arguments to create a WaiterInteractionLog.
     * @example
     * // Create one WaiterInteractionLog
     * const WaiterInteractionLog = await prisma.waiterInteractionLog.create({
     *   data: {
     *     // ... data to create a WaiterInteractionLog
     *   }
     * })
     * 
     */
    create<T extends WaiterInteractionLogCreateArgs>(args: SelectSubset<T, WaiterInteractionLogCreateArgs<ExtArgs>>): Prisma__WaiterInteractionLogClient<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaiterInteractionLogs.
     * @param {WaiterInteractionLogCreateManyArgs} args - Arguments to create many WaiterInteractionLogs.
     * @example
     * // Create many WaiterInteractionLogs
     * const waiterInteractionLog = await prisma.waiterInteractionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaiterInteractionLogCreateManyArgs>(args?: SelectSubset<T, WaiterInteractionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaiterInteractionLogs and returns the data saved in the database.
     * @param {WaiterInteractionLogCreateManyAndReturnArgs} args - Arguments to create many WaiterInteractionLogs.
     * @example
     * // Create many WaiterInteractionLogs
     * const waiterInteractionLog = await prisma.waiterInteractionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaiterInteractionLogs and only return the `id`
     * const waiterInteractionLogWithIdOnly = await prisma.waiterInteractionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaiterInteractionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WaiterInteractionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaiterInteractionLog.
     * @param {WaiterInteractionLogDeleteArgs} args - Arguments to delete one WaiterInteractionLog.
     * @example
     * // Delete one WaiterInteractionLog
     * const WaiterInteractionLog = await prisma.waiterInteractionLog.delete({
     *   where: {
     *     // ... filter to delete one WaiterInteractionLog
     *   }
     * })
     * 
     */
    delete<T extends WaiterInteractionLogDeleteArgs>(args: SelectSubset<T, WaiterInteractionLogDeleteArgs<ExtArgs>>): Prisma__WaiterInteractionLogClient<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaiterInteractionLog.
     * @param {WaiterInteractionLogUpdateArgs} args - Arguments to update one WaiterInteractionLog.
     * @example
     * // Update one WaiterInteractionLog
     * const waiterInteractionLog = await prisma.waiterInteractionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaiterInteractionLogUpdateArgs>(args: SelectSubset<T, WaiterInteractionLogUpdateArgs<ExtArgs>>): Prisma__WaiterInteractionLogClient<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaiterInteractionLogs.
     * @param {WaiterInteractionLogDeleteManyArgs} args - Arguments to filter WaiterInteractionLogs to delete.
     * @example
     * // Delete a few WaiterInteractionLogs
     * const { count } = await prisma.waiterInteractionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaiterInteractionLogDeleteManyArgs>(args?: SelectSubset<T, WaiterInteractionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaiterInteractionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterInteractionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaiterInteractionLogs
     * const waiterInteractionLog = await prisma.waiterInteractionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaiterInteractionLogUpdateManyArgs>(args: SelectSubset<T, WaiterInteractionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaiterInteractionLogs and returns the data updated in the database.
     * @param {WaiterInteractionLogUpdateManyAndReturnArgs} args - Arguments to update many WaiterInteractionLogs.
     * @example
     * // Update many WaiterInteractionLogs
     * const waiterInteractionLog = await prisma.waiterInteractionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaiterInteractionLogs and only return the `id`
     * const waiterInteractionLogWithIdOnly = await prisma.waiterInteractionLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends WaiterInteractionLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WaiterInteractionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaiterInteractionLog.
     * @param {WaiterInteractionLogUpsertArgs} args - Arguments to update or create a WaiterInteractionLog.
     * @example
     * // Update or create a WaiterInteractionLog
     * const waiterInteractionLog = await prisma.waiterInteractionLog.upsert({
     *   create: {
     *     // ... data to create a WaiterInteractionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaiterInteractionLog we want to update
     *   }
     * })
     */
    upsert<T extends WaiterInteractionLogUpsertArgs>(args: SelectSubset<T, WaiterInteractionLogUpsertArgs<ExtArgs>>): Prisma__WaiterInteractionLogClient<$Result.GetResult<Prisma.$WaiterInteractionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaiterInteractionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterInteractionLogCountArgs} args - Arguments to filter WaiterInteractionLogs to count.
     * @example
     * // Count the number of WaiterInteractionLogs
     * const count = await prisma.waiterInteractionLog.count({
     *   where: {
     *     // ... the filter for the WaiterInteractionLogs we want to count
     *   }
     * })
    **/
    count<T extends WaiterInteractionLogCountArgs>(
      args?: Subset<T, WaiterInteractionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaiterInteractionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaiterInteractionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterInteractionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaiterInteractionLogAggregateArgs>(args: Subset<T, WaiterInteractionLogAggregateArgs>): Prisma.PrismaPromise<GetWaiterInteractionLogAggregateType<T>>

    /**
     * Group by WaiterInteractionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterInteractionLogGroupByArgs} args - Group by arguments.
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
      T extends WaiterInteractionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaiterInteractionLogGroupByArgs['orderBy'] }
        : { orderBy?: WaiterInteractionLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaiterInteractionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaiterInteractionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaiterInteractionLog model
   */
  readonly fields: WaiterInteractionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaiterInteractionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaiterInteractionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    from_waiter<T extends WaiterInteractionLog$from_waiterArgs<ExtArgs> = {}>(args?: Subset<T, WaiterInteractionLog$from_waiterArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    to_waiter<T extends WaiterInteractionLog$to_waiterArgs<ExtArgs> = {}>(args?: Subset<T, WaiterInteractionLog$to_waiterArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WaiterInteractionLog model
   */
  interface WaiterInteractionLogFieldRefs {
    readonly id: FieldRef<"WaiterInteractionLog", 'String'>
    readonly tenant_id: FieldRef<"WaiterInteractionLog", 'String'>
    readonly table_id: FieldRef<"WaiterInteractionLog", 'String'>
    readonly from_waiter_id: FieldRef<"WaiterInteractionLog", 'String'>
    readonly to_waiter_id: FieldRef<"WaiterInteractionLog", 'String'>
    readonly interaction_type: FieldRef<"WaiterInteractionLog", 'InteractionType'>
    readonly reason: FieldRef<"WaiterInteractionLog", 'String'>
    readonly created_at: FieldRef<"WaiterInteractionLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaiterInteractionLog findUnique
   */
  export type WaiterInteractionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which WaiterInteractionLog to fetch.
     */
    where: WaiterInteractionLogWhereUniqueInput
  }

  /**
   * WaiterInteractionLog findUniqueOrThrow
   */
  export type WaiterInteractionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which WaiterInteractionLog to fetch.
     */
    where: WaiterInteractionLogWhereUniqueInput
  }

  /**
   * WaiterInteractionLog findFirst
   */
  export type WaiterInteractionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which WaiterInteractionLog to fetch.
     */
    where?: WaiterInteractionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaiterInteractionLogs to fetch.
     */
    orderBy?: WaiterInteractionLogOrderByWithRelationInput | WaiterInteractionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaiterInteractionLogs.
     */
    cursor?: WaiterInteractionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaiterInteractionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaiterInteractionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaiterInteractionLogs.
     */
    distinct?: WaiterInteractionLogScalarFieldEnum | WaiterInteractionLogScalarFieldEnum[]
  }

  /**
   * WaiterInteractionLog findFirstOrThrow
   */
  export type WaiterInteractionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which WaiterInteractionLog to fetch.
     */
    where?: WaiterInteractionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaiterInteractionLogs to fetch.
     */
    orderBy?: WaiterInteractionLogOrderByWithRelationInput | WaiterInteractionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaiterInteractionLogs.
     */
    cursor?: WaiterInteractionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaiterInteractionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaiterInteractionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaiterInteractionLogs.
     */
    distinct?: WaiterInteractionLogScalarFieldEnum | WaiterInteractionLogScalarFieldEnum[]
  }

  /**
   * WaiterInteractionLog findMany
   */
  export type WaiterInteractionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which WaiterInteractionLogs to fetch.
     */
    where?: WaiterInteractionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaiterInteractionLogs to fetch.
     */
    orderBy?: WaiterInteractionLogOrderByWithRelationInput | WaiterInteractionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaiterInteractionLogs.
     */
    cursor?: WaiterInteractionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaiterInteractionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaiterInteractionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaiterInteractionLogs.
     */
    distinct?: WaiterInteractionLogScalarFieldEnum | WaiterInteractionLogScalarFieldEnum[]
  }

  /**
   * WaiterInteractionLog create
   */
  export type WaiterInteractionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WaiterInteractionLog.
     */
    data: XOR<WaiterInteractionLogCreateInput, WaiterInteractionLogUncheckedCreateInput>
  }

  /**
   * WaiterInteractionLog createMany
   */
  export type WaiterInteractionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaiterInteractionLogs.
     */
    data: WaiterInteractionLogCreateManyInput | WaiterInteractionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaiterInteractionLog createManyAndReturn
   */
  export type WaiterInteractionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * The data used to create many WaiterInteractionLogs.
     */
    data: WaiterInteractionLogCreateManyInput | WaiterInteractionLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaiterInteractionLog update
   */
  export type WaiterInteractionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WaiterInteractionLog.
     */
    data: XOR<WaiterInteractionLogUpdateInput, WaiterInteractionLogUncheckedUpdateInput>
    /**
     * Choose, which WaiterInteractionLog to update.
     */
    where: WaiterInteractionLogWhereUniqueInput
  }

  /**
   * WaiterInteractionLog updateMany
   */
  export type WaiterInteractionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaiterInteractionLogs.
     */
    data: XOR<WaiterInteractionLogUpdateManyMutationInput, WaiterInteractionLogUncheckedUpdateManyInput>
    /**
     * Filter which WaiterInteractionLogs to update
     */
    where?: WaiterInteractionLogWhereInput
    /**
     * Limit how many WaiterInteractionLogs to update.
     */
    limit?: number
  }

  /**
   * WaiterInteractionLog updateManyAndReturn
   */
  export type WaiterInteractionLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * The data used to update WaiterInteractionLogs.
     */
    data: XOR<WaiterInteractionLogUpdateManyMutationInput, WaiterInteractionLogUncheckedUpdateManyInput>
    /**
     * Filter which WaiterInteractionLogs to update
     */
    where?: WaiterInteractionLogWhereInput
    /**
     * Limit how many WaiterInteractionLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaiterInteractionLog upsert
   */
  export type WaiterInteractionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WaiterInteractionLog to update in case it exists.
     */
    where: WaiterInteractionLogWhereUniqueInput
    /**
     * In case the WaiterInteractionLog found by the `where` argument doesn't exist, create a new WaiterInteractionLog with this data.
     */
    create: XOR<WaiterInteractionLogCreateInput, WaiterInteractionLogUncheckedCreateInput>
    /**
     * In case the WaiterInteractionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaiterInteractionLogUpdateInput, WaiterInteractionLogUncheckedUpdateInput>
  }

  /**
   * WaiterInteractionLog delete
   */
  export type WaiterInteractionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
    /**
     * Filter which WaiterInteractionLog to delete.
     */
    where: WaiterInteractionLogWhereUniqueInput
  }

  /**
   * WaiterInteractionLog deleteMany
   */
  export type WaiterInteractionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaiterInteractionLogs to delete
     */
    where?: WaiterInteractionLogWhereInput
    /**
     * Limit how many WaiterInteractionLogs to delete.
     */
    limit?: number
  }

  /**
   * WaiterInteractionLog.from_waiter
   */
  export type WaiterInteractionLog$from_waiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * WaiterInteractionLog.to_waiter
   */
  export type WaiterInteractionLog$to_waiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * WaiterInteractionLog without action
   */
  export type WaiterInteractionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterInteractionLog
     */
    select?: WaiterInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaiterInteractionLog
     */
    omit?: WaiterInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInteractionLogInclude<ExtArgs> | null
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
    subdomain: 'subdomain',
    plan: 'plan',
    status: 'status',
    logo_url: 'logo_url',
    config: 'config',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    deleted_by: 'deleted_by'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    name: 'name',
    profile: 'profile',
    email: 'email',
    password_hash: 'password_hash',
    last_password_change_at: 'last_password_change_at',
    password_change_required: 'password_change_required',
    access_code_hash: 'access_code_hash',
    access_code_expires_at: 'access_code_expires_at',
    photo_url: 'photo_url',
    active: 'active',
    first_access_completed: 'first_access_completed',
    commission_rate: 'commission_rate',
    created_at: 'created_at',
    updated_at: 'updated_at',
    last_access_at: 'last_access_at'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const TenantColorsScalarFieldEnum: {
    tenant_id: 'tenant_id',
    primary_color: 'primary_color',
    primary_light: 'primary_light',
    primary_dark: 'primary_dark',
    secondary_color: 'secondary_color',
    secondary_light: 'secondary_light',
    secondary_dark: 'secondary_dark',
    background_color: 'background_color',
    text_primary: 'text_primary',
    text_secondary: 'text_secondary',
    accent_color: 'accent_color',
    active_palette: 'active_palette',
    updated_at: 'updated_at',
    updated_by: 'updated_by'
  };

  export type TenantColorsScalarFieldEnum = (typeof TenantColorsScalarFieldEnum)[keyof typeof TenantColorsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    name: 'name',
    description: 'description',
    sort_order: 'sort_order',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    price: 'price',
    image_url: 'image_url',
    available: 'available',
    options: 'options',
    preparation_time: 'preparation_time',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    number: 'number',
    capacity: 'capacity',
    location: 'location',
    status: 'status',
    default_waiter_id: 'default_waiter_id',
    qr_code: 'qr_code',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    table_id: 'table_id',
    waiter_id: 'waiter_id',
    customer_name: 'customer_name',
    password_hash: 'password_hash',
    status: 'status',
    total: 'total',
    tip: 'tip',
    payment_method: 'payment_method',
    opened_at: 'opened_at',
    closed_at: 'closed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    tenant_id: 'tenant_id',
    menu_item_id: 'menu_item_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    total_price: 'total_price',
    observations: 'observations',
    options_chosen: 'options_chosen',
    status: 'status',
    prepared_by: 'prepared_by',
    sent_to_kitchen_at: 'sent_to_kitchen_at',
    ready_at: 'ready_at',
    delivered_at: 'delivered_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    staff_id: 'staff_id',
    action: 'action',
    details: 'details',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    created_at: 'created_at'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const WaiterInteractionLogScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    table_id: 'table_id',
    from_waiter_id: 'from_waiter_id',
    to_waiter_id: 'to_waiter_id',
    interaction_type: 'interaction_type',
    reason: 'reason',
    created_at: 'created_at'
  };

  export type WaiterInteractionLogScalarFieldEnum = (typeof WaiterInteractionLogScalarFieldEnum)[keyof typeof WaiterInteractionLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'TenantPlan'
   */
  export type EnumTenantPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantPlan'>
    


  /**
   * Reference to a field of type 'TenantPlan[]'
   */
  export type ListEnumTenantPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantPlan[]'>
    


  /**
   * Reference to a field of type 'TenantStatus'
   */
  export type EnumTenantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantStatus'>
    


  /**
   * Reference to a field of type 'TenantStatus[]'
   */
  export type ListEnumTenantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StaffProfile'
   */
  export type EnumStaffProfileFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffProfile'>
    


  /**
   * Reference to a field of type 'StaffProfile[]'
   */
  export type ListEnumStaffProfileFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffProfile[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TableStatus'
   */
  export type EnumTableStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TableStatus'>
    


  /**
   * Reference to a field of type 'TableStatus[]'
   */
  export type ListEnumTableStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TableStatus[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus[]'
   */
  export type ListEnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus[]'>
    


  /**
   * Reference to a field of type 'InteractionType'
   */
  export type EnumInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionType'>
    


  /**
   * Reference to a field of type 'InteractionType[]'
   */
  export type ListEnumInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionType[]'>
    


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
    subdomain?: StringFilter<"Tenant"> | string
    plan?: EnumTenantPlanFilter<"Tenant"> | $Enums.TenantPlan
    status?: EnumTenantStatusFilter<"Tenant"> | $Enums.TenantStatus
    logo_url?: StringNullableFilter<"Tenant"> | string | null
    config?: JsonNullableFilter<"Tenant">
    created_at?: DateTimeFilter<"Tenant"> | Date | string
    updated_at?: DateTimeFilter<"Tenant"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    deleted_by?: StringNullableFilter<"Tenant"> | string | null
    staff?: StaffListRelationFilter
    colors?: XOR<TenantColorsNullableScalarRelationFilter, TenantColorsWhereInput> | null
    tables?: TableListRelationFilter
    categories?: CategoryListRelationFilter
    menu_items?: MenuItemListRelationFilter
    orders?: OrderListRelationFilter
    order_items?: OrderItemListRelationFilter
    audit_logs?: AuditLogListRelationFilter
    waiter_interactions?: WaiterInteractionLogListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    staff?: StaffOrderByRelationAggregateInput
    colors?: TenantColorsOrderByWithRelationInput
    tables?: TableOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    menu_items?: MenuItemOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    order_items?: OrderItemOrderByRelationAggregateInput
    audit_logs?: AuditLogOrderByRelationAggregateInput
    waiter_interactions?: WaiterInteractionLogOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subdomain?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    plan?: EnumTenantPlanFilter<"Tenant"> | $Enums.TenantPlan
    status?: EnumTenantStatusFilter<"Tenant"> | $Enums.TenantStatus
    logo_url?: StringNullableFilter<"Tenant"> | string | null
    config?: JsonNullableFilter<"Tenant">
    created_at?: DateTimeFilter<"Tenant"> | Date | string
    updated_at?: DateTimeFilter<"Tenant"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    deleted_by?: StringNullableFilter<"Tenant"> | string | null
    staff?: StaffListRelationFilter
    colors?: XOR<TenantColorsNullableScalarRelationFilter, TenantColorsWhereInput> | null
    tables?: TableListRelationFilter
    categories?: CategoryListRelationFilter
    menu_items?: MenuItemListRelationFilter
    orders?: OrderListRelationFilter
    order_items?: OrderItemListRelationFilter
    audit_logs?: AuditLogListRelationFilter
    waiter_interactions?: WaiterInteractionLogListRelationFilter
  }, "id" | "subdomain">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
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
    subdomain?: StringWithAggregatesFilter<"Tenant"> | string
    plan?: EnumTenantPlanWithAggregatesFilter<"Tenant"> | $Enums.TenantPlan
    status?: EnumTenantStatusWithAggregatesFilter<"Tenant"> | $Enums.TenantStatus
    logo_url?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    config?: JsonNullableWithAggregatesFilter<"Tenant">
    created_at?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
    deleted_by?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    tenant_id?: StringNullableFilter<"Staff"> | string | null
    name?: StringFilter<"Staff"> | string
    profile?: EnumStaffProfileFilter<"Staff"> | $Enums.StaffProfile
    email?: StringFilter<"Staff"> | string
    password_hash?: StringNullableFilter<"Staff"> | string | null
    last_password_change_at?: DateTimeNullableFilter<"Staff"> | Date | string | null
    password_change_required?: BoolFilter<"Staff"> | boolean
    access_code_hash?: StringNullableFilter<"Staff"> | string | null
    access_code_expires_at?: DateTimeNullableFilter<"Staff"> | Date | string | null
    photo_url?: StringNullableFilter<"Staff"> | string | null
    active?: BoolFilter<"Staff"> | boolean
    first_access_completed?: BoolFilter<"Staff"> | boolean
    commission_rate?: DecimalNullableFilter<"Staff"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"Staff"> | Date | string
    updated_at?: DateTimeFilter<"Staff"> | Date | string
    last_access_at?: DateTimeNullableFilter<"Staff"> | Date | string | null
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    orders_as_waiter?: OrderListRelationFilter
    order_items_prepared?: OrderItemListRelationFilter
    audit_logs?: AuditLogListRelationFilter
    waiter_interactions_from?: WaiterInteractionLogListRelationFilter
    waiter_interactions_to?: WaiterInteractionLogListRelationFilter
    tables_default?: TableListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrderInput | SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    last_password_change_at?: SortOrderInput | SortOrder
    password_change_required?: SortOrder
    access_code_hash?: SortOrderInput | SortOrder
    access_code_expires_at?: SortOrderInput | SortOrder
    photo_url?: SortOrderInput | SortOrder
    active?: SortOrder
    first_access_completed?: SortOrder
    commission_rate?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_access_at?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    orders_as_waiter?: OrderOrderByRelationAggregateInput
    order_items_prepared?: OrderItemOrderByRelationAggregateInput
    audit_logs?: AuditLogOrderByRelationAggregateInput
    waiter_interactions_from?: WaiterInteractionLogOrderByRelationAggregateInput
    waiter_interactions_to?: WaiterInteractionLogOrderByRelationAggregateInput
    tables_default?: TableOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_email?: StaffTenant_idEmailCompoundUniqueInput
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    tenant_id?: StringNullableFilter<"Staff"> | string | null
    name?: StringFilter<"Staff"> | string
    profile?: EnumStaffProfileFilter<"Staff"> | $Enums.StaffProfile
    email?: StringFilter<"Staff"> | string
    password_hash?: StringNullableFilter<"Staff"> | string | null
    last_password_change_at?: DateTimeNullableFilter<"Staff"> | Date | string | null
    password_change_required?: BoolFilter<"Staff"> | boolean
    access_code_hash?: StringNullableFilter<"Staff"> | string | null
    access_code_expires_at?: DateTimeNullableFilter<"Staff"> | Date | string | null
    photo_url?: StringNullableFilter<"Staff"> | string | null
    active?: BoolFilter<"Staff"> | boolean
    first_access_completed?: BoolFilter<"Staff"> | boolean
    commission_rate?: DecimalNullableFilter<"Staff"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"Staff"> | Date | string
    updated_at?: DateTimeFilter<"Staff"> | Date | string
    last_access_at?: DateTimeNullableFilter<"Staff"> | Date | string | null
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    orders_as_waiter?: OrderListRelationFilter
    order_items_prepared?: OrderItemListRelationFilter
    audit_logs?: AuditLogListRelationFilter
    waiter_interactions_from?: WaiterInteractionLogListRelationFilter
    waiter_interactions_to?: WaiterInteractionLogListRelationFilter
    tables_default?: TableListRelationFilter
  }, "id" | "tenant_id_email">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrderInput | SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    last_password_change_at?: SortOrderInput | SortOrder
    password_change_required?: SortOrder
    access_code_hash?: SortOrderInput | SortOrder
    access_code_expires_at?: SortOrderInput | SortOrder
    photo_url?: SortOrderInput | SortOrder
    active?: SortOrder
    first_access_completed?: SortOrder
    commission_rate?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_access_at?: SortOrderInput | SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    tenant_id?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    name?: StringWithAggregatesFilter<"Staff"> | string
    profile?: EnumStaffProfileWithAggregatesFilter<"Staff"> | $Enums.StaffProfile
    email?: StringWithAggregatesFilter<"Staff"> | string
    password_hash?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    last_password_change_at?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null
    password_change_required?: BoolWithAggregatesFilter<"Staff"> | boolean
    access_code_hash?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    access_code_expires_at?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null
    photo_url?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    active?: BoolWithAggregatesFilter<"Staff"> | boolean
    first_access_completed?: BoolWithAggregatesFilter<"Staff"> | boolean
    commission_rate?: DecimalNullableWithAggregatesFilter<"Staff"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    last_access_at?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null
  }

  export type TenantColorsWhereInput = {
    AND?: TenantColorsWhereInput | TenantColorsWhereInput[]
    OR?: TenantColorsWhereInput[]
    NOT?: TenantColorsWhereInput | TenantColorsWhereInput[]
    tenant_id?: StringFilter<"TenantColors"> | string
    primary_color?: StringFilter<"TenantColors"> | string
    primary_light?: StringFilter<"TenantColors"> | string
    primary_dark?: StringFilter<"TenantColors"> | string
    secondary_color?: StringFilter<"TenantColors"> | string
    secondary_light?: StringFilter<"TenantColors"> | string
    secondary_dark?: StringFilter<"TenantColors"> | string
    background_color?: StringFilter<"TenantColors"> | string
    text_primary?: StringFilter<"TenantColors"> | string
    text_secondary?: StringFilter<"TenantColors"> | string
    accent_color?: StringFilter<"TenantColors"> | string
    active_palette?: StringFilter<"TenantColors"> | string
    updated_at?: DateTimeFilter<"TenantColors"> | Date | string
    updated_by?: StringNullableFilter<"TenantColors"> | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type TenantColorsOrderByWithRelationInput = {
    tenant_id?: SortOrder
    primary_color?: SortOrder
    primary_light?: SortOrder
    primary_dark?: SortOrder
    secondary_color?: SortOrder
    secondary_light?: SortOrder
    secondary_dark?: SortOrder
    background_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    accent_color?: SortOrder
    active_palette?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type TenantColorsWhereUniqueInput = Prisma.AtLeast<{
    tenant_id?: string
    AND?: TenantColorsWhereInput | TenantColorsWhereInput[]
    OR?: TenantColorsWhereInput[]
    NOT?: TenantColorsWhereInput | TenantColorsWhereInput[]
    primary_color?: StringFilter<"TenantColors"> | string
    primary_light?: StringFilter<"TenantColors"> | string
    primary_dark?: StringFilter<"TenantColors"> | string
    secondary_color?: StringFilter<"TenantColors"> | string
    secondary_light?: StringFilter<"TenantColors"> | string
    secondary_dark?: StringFilter<"TenantColors"> | string
    background_color?: StringFilter<"TenantColors"> | string
    text_primary?: StringFilter<"TenantColors"> | string
    text_secondary?: StringFilter<"TenantColors"> | string
    accent_color?: StringFilter<"TenantColors"> | string
    active_palette?: StringFilter<"TenantColors"> | string
    updated_at?: DateTimeFilter<"TenantColors"> | Date | string
    updated_by?: StringNullableFilter<"TenantColors"> | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "tenant_id">

  export type TenantColorsOrderByWithAggregationInput = {
    tenant_id?: SortOrder
    primary_color?: SortOrder
    primary_light?: SortOrder
    primary_dark?: SortOrder
    secondary_color?: SortOrder
    secondary_light?: SortOrder
    secondary_dark?: SortOrder
    background_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    accent_color?: SortOrder
    active_palette?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    _count?: TenantColorsCountOrderByAggregateInput
    _max?: TenantColorsMaxOrderByAggregateInput
    _min?: TenantColorsMinOrderByAggregateInput
  }

  export type TenantColorsScalarWhereWithAggregatesInput = {
    AND?: TenantColorsScalarWhereWithAggregatesInput | TenantColorsScalarWhereWithAggregatesInput[]
    OR?: TenantColorsScalarWhereWithAggregatesInput[]
    NOT?: TenantColorsScalarWhereWithAggregatesInput | TenantColorsScalarWhereWithAggregatesInput[]
    tenant_id?: StringWithAggregatesFilter<"TenantColors"> | string
    primary_color?: StringWithAggregatesFilter<"TenantColors"> | string
    primary_light?: StringWithAggregatesFilter<"TenantColors"> | string
    primary_dark?: StringWithAggregatesFilter<"TenantColors"> | string
    secondary_color?: StringWithAggregatesFilter<"TenantColors"> | string
    secondary_light?: StringWithAggregatesFilter<"TenantColors"> | string
    secondary_dark?: StringWithAggregatesFilter<"TenantColors"> | string
    background_color?: StringWithAggregatesFilter<"TenantColors"> | string
    text_primary?: StringWithAggregatesFilter<"TenantColors"> | string
    text_secondary?: StringWithAggregatesFilter<"TenantColors"> | string
    accent_color?: StringWithAggregatesFilter<"TenantColors"> | string
    active_palette?: StringWithAggregatesFilter<"TenantColors"> | string
    updated_at?: DateTimeWithAggregatesFilter<"TenantColors"> | Date | string
    updated_by?: StringNullableWithAggregatesFilter<"TenantColors"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    tenant_id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    sort_order?: IntFilter<"Category"> | number
    active?: BoolFilter<"Category"> | boolean
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    menu_items?: MenuItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    menu_items?: MenuItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_name?: CategoryTenant_idNameCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    tenant_id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    sort_order?: IntFilter<"Category"> | number
    active?: BoolFilter<"Category"> | boolean
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    menu_items?: MenuItemListRelationFilter
  }, "id" | "tenant_id_name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    tenant_id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sort_order?: IntWithAggregatesFilter<"Category"> | number
    active?: BoolWithAggregatesFilter<"Category"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    tenant_id?: StringFilter<"MenuItem"> | string
    category_id?: StringNullableFilter<"MenuItem"> | string | null
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableFilter<"MenuItem"> | string | null
    available?: BoolFilter<"MenuItem"> | boolean
    options?: JsonNullableFilter<"MenuItem">
    preparation_time?: IntNullableFilter<"MenuItem"> | number | null
    created_at?: DateTimeFilter<"MenuItem"> | Date | string
    updated_at?: DateTimeFilter<"MenuItem"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    order_items?: OrderItemListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    image_url?: SortOrderInput | SortOrder
    available?: SortOrder
    options?: SortOrderInput | SortOrder
    preparation_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    order_items?: OrderItemOrderByRelationAggregateInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_name?: MenuItemTenant_idNameCompoundUniqueInput
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    tenant_id?: StringFilter<"MenuItem"> | string
    category_id?: StringNullableFilter<"MenuItem"> | string | null
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableFilter<"MenuItem"> | string | null
    available?: BoolFilter<"MenuItem"> | boolean
    options?: JsonNullableFilter<"MenuItem">
    preparation_time?: IntNullableFilter<"MenuItem"> | number | null
    created_at?: DateTimeFilter<"MenuItem"> | Date | string
    updated_at?: DateTimeFilter<"MenuItem"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    order_items?: OrderItemListRelationFilter
  }, "id" | "tenant_id_name">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    image_url?: SortOrderInput | SortOrder
    available?: SortOrder
    options?: SortOrderInput | SortOrder
    preparation_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItem"> | string
    tenant_id?: StringWithAggregatesFilter<"MenuItem"> | string
    category_id?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    description?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    price?: DecimalWithAggregatesFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    available?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    options?: JsonNullableWithAggregatesFilter<"MenuItem">
    preparation_time?: IntNullableWithAggregatesFilter<"MenuItem"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: StringFilter<"Table"> | string
    tenant_id?: StringFilter<"Table"> | string
    number?: IntFilter<"Table"> | number
    capacity?: IntFilter<"Table"> | number
    location?: StringNullableFilter<"Table"> | string | null
    status?: EnumTableStatusFilter<"Table"> | $Enums.TableStatus
    default_waiter_id?: StringNullableFilter<"Table"> | string | null
    qr_code?: StringNullableFilter<"Table"> | string | null
    created_at?: DateTimeFilter<"Table"> | Date | string
    updated_at?: DateTimeFilter<"Table"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    default_waiter?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    orders?: OrderListRelationFilter
    waiter_interactions?: WaiterInteractionLogListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    default_waiter_id?: SortOrderInput | SortOrder
    qr_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    default_waiter?: StaffOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    waiter_interactions?: WaiterInteractionLogOrderByRelationAggregateInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_number?: TableTenant_idNumberCompoundUniqueInput
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    tenant_id?: StringFilter<"Table"> | string
    number?: IntFilter<"Table"> | number
    capacity?: IntFilter<"Table"> | number
    location?: StringNullableFilter<"Table"> | string | null
    status?: EnumTableStatusFilter<"Table"> | $Enums.TableStatus
    default_waiter_id?: StringNullableFilter<"Table"> | string | null
    qr_code?: StringNullableFilter<"Table"> | string | null
    created_at?: DateTimeFilter<"Table"> | Date | string
    updated_at?: DateTimeFilter<"Table"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    default_waiter?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    orders?: OrderListRelationFilter
    waiter_interactions?: WaiterInteractionLogListRelationFilter
  }, "id" | "tenant_id_number">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    default_waiter_id?: SortOrderInput | SortOrder
    qr_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Table"> | string
    tenant_id?: StringWithAggregatesFilter<"Table"> | string
    number?: IntWithAggregatesFilter<"Table"> | number
    capacity?: IntWithAggregatesFilter<"Table"> | number
    location?: StringNullableWithAggregatesFilter<"Table"> | string | null
    status?: EnumTableStatusWithAggregatesFilter<"Table"> | $Enums.TableStatus
    default_waiter_id?: StringNullableWithAggregatesFilter<"Table"> | string | null
    qr_code?: StringNullableWithAggregatesFilter<"Table"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Table"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    tenant_id?: StringFilter<"Order"> | string
    table_id?: StringFilter<"Order"> | string
    waiter_id?: StringNullableFilter<"Order"> | string | null
    customer_name?: StringNullableFilter<"Order"> | string | null
    password_hash?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tip?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"Order"> | string | null
    opened_at?: DateTimeFilter<"Order"> | Date | string
    closed_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    waiter?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    order_items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    waiter_id?: SortOrderInput | SortOrder
    customer_name?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    tip?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    table?: TableOrderByWithRelationInput
    waiter?: StaffOrderByWithRelationInput
    order_items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    tenant_id?: StringFilter<"Order"> | string
    table_id?: StringFilter<"Order"> | string
    waiter_id?: StringNullableFilter<"Order"> | string | null
    customer_name?: StringNullableFilter<"Order"> | string | null
    password_hash?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tip?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"Order"> | string | null
    opened_at?: DateTimeFilter<"Order"> | Date | string
    closed_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    waiter?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    order_items?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    waiter_id?: SortOrderInput | SortOrder
    customer_name?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    tip?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    tenant_id?: StringWithAggregatesFilter<"Order"> | string
    table_id?: StringWithAggregatesFilter<"Order"> | string
    waiter_id?: StringNullableWithAggregatesFilter<"Order"> | string | null
    customer_name?: StringNullableWithAggregatesFilter<"Order"> | string | null
    password_hash?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    total?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tip?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableWithAggregatesFilter<"Order"> | string | null
    opened_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    closed_at?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    order_id?: StringFilter<"OrderItem"> | string
    tenant_id?: StringFilter<"OrderItem"> | string
    menu_item_id?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unit_price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    observations?: StringNullableFilter<"OrderItem"> | string | null
    options_chosen?: JsonNullableFilter<"OrderItem">
    status?: EnumItemStatusFilter<"OrderItem"> | $Enums.ItemStatus
    prepared_by?: StringNullableFilter<"OrderItem"> | string | null
    sent_to_kitchen_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    ready_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    delivered_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    menu_item?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    prepared_by_staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    tenant_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    observations?: SortOrderInput | SortOrder
    options_chosen?: SortOrderInput | SortOrder
    status?: SortOrder
    prepared_by?: SortOrderInput | SortOrder
    sent_to_kitchen_at?: SortOrderInput | SortOrder
    ready_at?: SortOrderInput | SortOrder
    delivered_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order?: OrderOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    menu_item?: MenuItemOrderByWithRelationInput
    prepared_by_staff?: StaffOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    order_id?: StringFilter<"OrderItem"> | string
    tenant_id?: StringFilter<"OrderItem"> | string
    menu_item_id?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unit_price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    observations?: StringNullableFilter<"OrderItem"> | string | null
    options_chosen?: JsonNullableFilter<"OrderItem">
    status?: EnumItemStatusFilter<"OrderItem"> | $Enums.ItemStatus
    prepared_by?: StringNullableFilter<"OrderItem"> | string | null
    sent_to_kitchen_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    ready_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    delivered_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    menu_item?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    prepared_by_staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    tenant_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    observations?: SortOrderInput | SortOrder
    options_chosen?: SortOrderInput | SortOrder
    status?: SortOrder
    prepared_by?: SortOrderInput | SortOrder
    sent_to_kitchen_at?: SortOrderInput | SortOrder
    ready_at?: SortOrderInput | SortOrder
    delivered_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    order_id?: StringWithAggregatesFilter<"OrderItem"> | string
    tenant_id?: StringWithAggregatesFilter<"OrderItem"> | string
    menu_item_id?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unit_price?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    observations?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    options_chosen?: JsonNullableWithAggregatesFilter<"OrderItem">
    status?: EnumItemStatusWithAggregatesFilter<"OrderItem"> | $Enums.ItemStatus
    prepared_by?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    sent_to_kitchen_at?: DateTimeNullableWithAggregatesFilter<"OrderItem"> | Date | string | null
    ready_at?: DateTimeNullableWithAggregatesFilter<"OrderItem"> | Date | string | null
    delivered_at?: DateTimeNullableWithAggregatesFilter<"OrderItem"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    tenant_id?: StringFilter<"AuditLog"> | string
    staff_id?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    ip_address?: StringNullableFilter<"AuditLog"> | string | null
    user_agent?: StringNullableFilter<"AuditLog"> | string | null
    created_at?: DateTimeFilter<"AuditLog"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    staff_id?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    created_at?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    staff?: StaffOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    tenant_id?: StringFilter<"AuditLog"> | string
    staff_id?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    ip_address?: StringNullableFilter<"AuditLog"> | string | null
    user_agent?: StringNullableFilter<"AuditLog"> | string | null
    created_at?: DateTimeFilter<"AuditLog"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    staff_id?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    tenant_id?: StringWithAggregatesFilter<"AuditLog"> | string
    staff_id?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: JsonNullableWithAggregatesFilter<"AuditLog">
    ip_address?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type WaiterInteractionLogWhereInput = {
    AND?: WaiterInteractionLogWhereInput | WaiterInteractionLogWhereInput[]
    OR?: WaiterInteractionLogWhereInput[]
    NOT?: WaiterInteractionLogWhereInput | WaiterInteractionLogWhereInput[]
    id?: StringFilter<"WaiterInteractionLog"> | string
    tenant_id?: StringFilter<"WaiterInteractionLog"> | string
    table_id?: StringFilter<"WaiterInteractionLog"> | string
    from_waiter_id?: StringNullableFilter<"WaiterInteractionLog"> | string | null
    to_waiter_id?: StringNullableFilter<"WaiterInteractionLog"> | string | null
    interaction_type?: EnumInteractionTypeFilter<"WaiterInteractionLog"> | $Enums.InteractionType
    reason?: StringNullableFilter<"WaiterInteractionLog"> | string | null
    created_at?: DateTimeFilter<"WaiterInteractionLog"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    from_waiter?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    to_waiter?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }

  export type WaiterInteractionLogOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    from_waiter_id?: SortOrderInput | SortOrder
    to_waiter_id?: SortOrderInput | SortOrder
    interaction_type?: SortOrder
    reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    table?: TableOrderByWithRelationInput
    from_waiter?: StaffOrderByWithRelationInput
    to_waiter?: StaffOrderByWithRelationInput
  }

  export type WaiterInteractionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaiterInteractionLogWhereInput | WaiterInteractionLogWhereInput[]
    OR?: WaiterInteractionLogWhereInput[]
    NOT?: WaiterInteractionLogWhereInput | WaiterInteractionLogWhereInput[]
    tenant_id?: StringFilter<"WaiterInteractionLog"> | string
    table_id?: StringFilter<"WaiterInteractionLog"> | string
    from_waiter_id?: StringNullableFilter<"WaiterInteractionLog"> | string | null
    to_waiter_id?: StringNullableFilter<"WaiterInteractionLog"> | string | null
    interaction_type?: EnumInteractionTypeFilter<"WaiterInteractionLog"> | $Enums.InteractionType
    reason?: StringNullableFilter<"WaiterInteractionLog"> | string | null
    created_at?: DateTimeFilter<"WaiterInteractionLog"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    from_waiter?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    to_waiter?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }, "id">

  export type WaiterInteractionLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    from_waiter_id?: SortOrderInput | SortOrder
    to_waiter_id?: SortOrderInput | SortOrder
    interaction_type?: SortOrder
    reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: WaiterInteractionLogCountOrderByAggregateInput
    _max?: WaiterInteractionLogMaxOrderByAggregateInput
    _min?: WaiterInteractionLogMinOrderByAggregateInput
  }

  export type WaiterInteractionLogScalarWhereWithAggregatesInput = {
    AND?: WaiterInteractionLogScalarWhereWithAggregatesInput | WaiterInteractionLogScalarWhereWithAggregatesInput[]
    OR?: WaiterInteractionLogScalarWhereWithAggregatesInput[]
    NOT?: WaiterInteractionLogScalarWhereWithAggregatesInput | WaiterInteractionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaiterInteractionLog"> | string
    tenant_id?: StringWithAggregatesFilter<"WaiterInteractionLog"> | string
    table_id?: StringWithAggregatesFilter<"WaiterInteractionLog"> | string
    from_waiter_id?: StringNullableWithAggregatesFilter<"WaiterInteractionLog"> | string | null
    to_waiter_id?: StringNullableWithAggregatesFilter<"WaiterInteractionLog"> | string | null
    interaction_type?: EnumInteractionTypeWithAggregatesFilter<"WaiterInteractionLog"> | $Enums.InteractionType
    reason?: StringNullableWithAggregatesFilter<"WaiterInteractionLog"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"WaiterInteractionLog"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffCreateNestedManyWithoutTenantInput
    colors?: TenantColorsCreateNestedOneWithoutTenantInput
    tables?: TableCreateNestedManyWithoutTenantInput
    categories?: CategoryCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
    order_items?: OrderItemCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    colors?: TenantColorsUncheckedCreateNestedOneWithoutTenantInput
    tables?: TableUncheckedCreateNestedManyWithoutTenantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUpdateOneWithoutTenantNestedInput
    tables?: TableUpdateManyWithoutTenantNestedInput
    categories?: CategoryUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUncheckedUpdateOneWithoutTenantNestedInput
    tables?: TableUncheckedUpdateManyWithoutTenantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffCreateInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    tenant?: TenantCreateNestedOneWithoutStaffInput
    orders_as_waiter?: OrderCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    tenant_id?: string | null
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    orders_as_waiter?: OrderUncheckedCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemUncheckedCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableUncheckedCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneWithoutStaffNestedInput
    orders_as_waiter?: OrderUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_as_waiter?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUncheckedUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUncheckedUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffCreateManyInput = {
    id?: string
    tenant_id?: string | null
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TenantColorsCreateInput = {
    primary_color?: string
    primary_light?: string
    primary_dark?: string
    secondary_color?: string
    secondary_light?: string
    secondary_dark?: string
    background_color?: string
    text_primary?: string
    text_secondary?: string
    accent_color?: string
    active_palette?: string
    updated_at?: Date | string
    updated_by?: string | null
    tenant: TenantCreateNestedOneWithoutColorsInput
  }

  export type TenantColorsUncheckedCreateInput = {
    tenant_id: string
    primary_color?: string
    primary_light?: string
    primary_dark?: string
    secondary_color?: string
    secondary_light?: string
    secondary_dark?: string
    background_color?: string
    text_primary?: string
    text_secondary?: string
    accent_color?: string
    active_palette?: string
    updated_at?: Date | string
    updated_by?: string | null
  }

  export type TenantColorsUpdateInput = {
    primary_color?: StringFieldUpdateOperationsInput | string
    primary_light?: StringFieldUpdateOperationsInput | string
    primary_dark?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    secondary_light?: StringFieldUpdateOperationsInput | string
    secondary_dark?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    active_palette?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutColorsNestedInput
  }

  export type TenantColorsUncheckedUpdateInput = {
    tenant_id?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    primary_light?: StringFieldUpdateOperationsInput | string
    primary_dark?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    secondary_light?: StringFieldUpdateOperationsInput | string
    secondary_dark?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    active_palette?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantColorsCreateManyInput = {
    tenant_id: string
    primary_color?: string
    primary_light?: string
    primary_dark?: string
    secondary_color?: string
    secondary_light?: string
    secondary_dark?: string
    background_color?: string
    text_primary?: string
    text_secondary?: string
    accent_color?: string
    active_palette?: string
    updated_at?: Date | string
    updated_by?: string | null
  }

  export type TenantColorsUpdateManyMutationInput = {
    primary_color?: StringFieldUpdateOperationsInput | string
    primary_light?: StringFieldUpdateOperationsInput | string
    primary_dark?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    secondary_light?: StringFieldUpdateOperationsInput | string
    secondary_dark?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    active_palette?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantColorsUncheckedUpdateManyInput = {
    tenant_id?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    primary_light?: StringFieldUpdateOperationsInput | string
    primary_dark?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    secondary_light?: StringFieldUpdateOperationsInput | string
    secondary_dark?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    active_palette?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    sort_order?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutCategoriesInput
    menu_items?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    tenant_id: string
    name: string
    description?: string | null
    sort_order?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCategoriesNestedInput
    menu_items?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    menu_items?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    tenant_id: string
    name: string
    description?: string | null
    sort_order?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutMenu_itemsInput
    category?: CategoryCreateNestedOneWithoutMenu_itemsInput
    order_items?: OrderItemCreateNestedManyWithoutMenu_itemInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    tenant_id: string
    category_id?: string | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutMenu_itemInput
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMenu_itemsNestedInput
    category?: CategoryUpdateOneWithoutMenu_itemsNestedInput
    order_items?: OrderItemUpdateManyWithoutMenu_itemNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutMenu_itemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: string
    tenant_id: string
    category_id?: string | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateInput = {
    id?: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutTablesInput
    default_waiter?: StaffCreateNestedOneWithoutTables_defaultInput
    orders?: OrderCreateNestedManyWithoutTableInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    tenant_id: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    default_waiter_id?: string | null
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTablesNestedInput
    default_waiter?: StaffUpdateOneWithoutTables_defaultNestedInput
    orders?: OrderUpdateManyWithoutTableNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    default_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: string
    tenant_id: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    default_waiter_id?: string | null
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    default_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutOrdersInput
    table: TableCreateNestedOneWithoutOrdersInput
    waiter?: StaffCreateNestedOneWithoutOrders_as_waiterInput
    order_items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    tenant_id: string
    table_id: string
    waiter_id?: string | null
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutOrdersNestedInput
    table?: TableUpdateOneRequiredWithoutOrdersNestedInput
    waiter?: StaffUpdateOneWithoutOrders_as_waiterNestedInput
    order_items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    tenant_id: string
    table_id: string
    waiter_id?: string | null
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order: OrderCreateNestedOneWithoutOrder_itemsInput
    tenant: TenantCreateNestedOneWithoutOrder_itemsInput
    menu_item: MenuItemCreateNestedOneWithoutOrder_itemsInput
    prepared_by_staff?: StaffCreateNestedOneWithoutOrder_items_preparedInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    order_id: string
    tenant_id: string
    menu_item_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    prepared_by?: string | null
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrder_itemsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutOrder_itemsNestedInput
    menu_item?: MenuItemUpdateOneRequiredWithoutOrder_itemsNestedInput
    prepared_by_staff?: StaffUpdateOneWithoutOrder_items_preparedNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    menu_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prepared_by?: NullableStringFieldUpdateOperationsInput | string | null
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    order_id: string
    tenant_id: string
    menu_item_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    prepared_by?: string | null
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    menu_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prepared_by?: NullableStringFieldUpdateOperationsInput | string | null
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
    tenant: TenantCreateNestedOneWithoutAudit_logsInput
    staff?: StaffCreateNestedOneWithoutAudit_logsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    tenant_id: string
    staff_id?: string | null
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAudit_logsNestedInput
    staff?: StaffUpdateOneWithoutAudit_logsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    tenant_id: string
    staff_id?: string | null
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogCreateInput = {
    id?: string
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
    tenant: TenantCreateNestedOneWithoutWaiter_interactionsInput
    table: TableCreateNestedOneWithoutWaiter_interactionsInput
    from_waiter?: StaffCreateNestedOneWithoutWaiter_interactions_fromInput
    to_waiter?: StaffCreateNestedOneWithoutWaiter_interactions_toInput
  }

  export type WaiterInteractionLogUncheckedCreateInput = {
    id?: string
    tenant_id: string
    table_id: string
    from_waiter_id?: string | null
    to_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type WaiterInteractionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWaiter_interactionsNestedInput
    table?: TableUpdateOneRequiredWithoutWaiter_interactionsNestedInput
    from_waiter?: StaffUpdateOneWithoutWaiter_interactions_fromNestedInput
    to_waiter?: StaffUpdateOneWithoutWaiter_interactions_toNestedInput
  }

  export type WaiterInteractionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    from_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    to_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogCreateManyInput = {
    id?: string
    tenant_id: string
    table_id: string
    from_waiter_id?: string | null
    to_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type WaiterInteractionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    from_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    to_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumTenantPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanFilter<$PrismaModel> | $Enums.TenantPlan
  }

  export type EnumTenantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantStatusFilter<$PrismaModel> | $Enums.TenantStatus
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type TenantColorsNullableScalarRelationFilter = {
    is?: TenantColorsWhereInput | null
    isNot?: TenantColorsWhereInput | null
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type WaiterInteractionLogListRelationFilter = {
    every?: WaiterInteractionLogWhereInput
    some?: WaiterInteractionLogWhereInput
    none?: WaiterInteractionLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaiterInteractionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    logo_url?: SortOrder
    config?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    deleted_by?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    logo_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    deleted_by?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    logo_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    deleted_by?: SortOrder
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

  export type EnumTenantPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanWithAggregatesFilter<$PrismaModel> | $Enums.TenantPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantPlanFilter<$PrismaModel>
    _max?: NestedEnumTenantPlanFilter<$PrismaModel>
  }

  export type EnumTenantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantStatusWithAggregatesFilter<$PrismaModel> | $Enums.TenantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantStatusFilter<$PrismaModel>
    _max?: NestedEnumTenantStatusFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type EnumStaffProfileFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffProfile | EnumStaffProfileFieldRefInput<$PrismaModel>
    in?: $Enums.StaffProfile[] | ListEnumStaffProfileFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffProfile[] | ListEnumStaffProfileFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffProfileFilter<$PrismaModel> | $Enums.StaffProfile
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type TenantNullableScalarRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type StaffTenant_idEmailCompoundUniqueInput = {
    tenant_id: string
    email: string
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    last_password_change_at?: SortOrder
    password_change_required?: SortOrder
    access_code_hash?: SortOrder
    access_code_expires_at?: SortOrder
    photo_url?: SortOrder
    active?: SortOrder
    first_access_completed?: SortOrder
    commission_rate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_access_at?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    commission_rate?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    last_password_change_at?: SortOrder
    password_change_required?: SortOrder
    access_code_hash?: SortOrder
    access_code_expires_at?: SortOrder
    photo_url?: SortOrder
    active?: SortOrder
    first_access_completed?: SortOrder
    commission_rate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_access_at?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    last_password_change_at?: SortOrder
    password_change_required?: SortOrder
    access_code_hash?: SortOrder
    access_code_expires_at?: SortOrder
    photo_url?: SortOrder
    active?: SortOrder
    first_access_completed?: SortOrder
    commission_rate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_access_at?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    commission_rate?: SortOrder
  }

  export type EnumStaffProfileWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffProfile | EnumStaffProfileFieldRefInput<$PrismaModel>
    in?: $Enums.StaffProfile[] | ListEnumStaffProfileFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffProfile[] | ListEnumStaffProfileFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffProfileWithAggregatesFilter<$PrismaModel> | $Enums.StaffProfile
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffProfileFilter<$PrismaModel>
    _max?: NestedEnumStaffProfileFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type TenantColorsCountOrderByAggregateInput = {
    tenant_id?: SortOrder
    primary_color?: SortOrder
    primary_light?: SortOrder
    primary_dark?: SortOrder
    secondary_color?: SortOrder
    secondary_light?: SortOrder
    secondary_dark?: SortOrder
    background_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    accent_color?: SortOrder
    active_palette?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type TenantColorsMaxOrderByAggregateInput = {
    tenant_id?: SortOrder
    primary_color?: SortOrder
    primary_light?: SortOrder
    primary_dark?: SortOrder
    secondary_color?: SortOrder
    secondary_light?: SortOrder
    secondary_dark?: SortOrder
    background_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    accent_color?: SortOrder
    active_palette?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type TenantColorsMinOrderByAggregateInput = {
    tenant_id?: SortOrder
    primary_color?: SortOrder
    primary_light?: SortOrder
    primary_dark?: SortOrder
    secondary_color?: SortOrder
    secondary_light?: SortOrder
    secondary_dark?: SortOrder
    background_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    accent_color?: SortOrder
    active_palette?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
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

  export type CategoryTenant_idNameCompoundUniqueInput = {
    tenant_id: string
    name: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sort_order?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sort_order?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sort_order?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    sort_order?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type MenuItemTenant_idNameCompoundUniqueInput = {
    tenant_id: string
    name: string
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    available?: SortOrder
    options?: SortOrder
    preparation_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    price?: SortOrder
    preparation_time?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    available?: SortOrder
    preparation_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    available?: SortOrder
    preparation_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    price?: SortOrder
    preparation_time?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTableStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[] | ListEnumTableStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableStatus[] | ListEnumTableStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTableStatusFilter<$PrismaModel> | $Enums.TableStatus
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type TableTenant_idNumberCompoundUniqueInput = {
    tenant_id: string
    number: number
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    status?: SortOrder
    default_waiter_id?: SortOrder
    qr_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    number?: SortOrder
    capacity?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    status?: SortOrder
    default_waiter_id?: SortOrder
    qr_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    status?: SortOrder
    default_waiter_id?: SortOrder
    qr_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    number?: SortOrder
    capacity?: SortOrder
  }

  export type EnumTableStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[] | ListEnumTableStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableStatus[] | ListEnumTableStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTableStatusWithAggregatesFilter<$PrismaModel> | $Enums.TableStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTableStatusFilter<$PrismaModel>
    _max?: NestedEnumTableStatusFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type TableScalarRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    waiter_id?: SortOrder
    customer_name?: SortOrder
    password_hash?: SortOrder
    status?: SortOrder
    total?: SortOrder
    tip?: SortOrder
    payment_method?: SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
    tip?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    waiter_id?: SortOrder
    customer_name?: SortOrder
    password_hash?: SortOrder
    status?: SortOrder
    total?: SortOrder
    tip?: SortOrder
    payment_method?: SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    waiter_id?: SortOrder
    customer_name?: SortOrder
    password_hash?: SortOrder
    status?: SortOrder
    total?: SortOrder
    tip?: SortOrder
    payment_method?: SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
    tip?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type MenuItemScalarRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    tenant_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    observations?: SortOrder
    options_chosen?: SortOrder
    status?: SortOrder
    prepared_by?: SortOrder
    sent_to_kitchen_at?: SortOrder
    ready_at?: SortOrder
    delivered_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    tenant_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    observations?: SortOrder
    status?: SortOrder
    prepared_by?: SortOrder
    sent_to_kitchen_at?: SortOrder
    ready_at?: SortOrder
    delivered_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    tenant_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    observations?: SortOrder
    status?: SortOrder
    prepared_by?: SortOrder
    sent_to_kitchen_at?: SortOrder
    ready_at?: SortOrder
    delivered_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    staff_id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    staff_id?: SortOrder
    action?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    staff_id?: SortOrder
    action?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type EnumInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeFilter<$PrismaModel> | $Enums.InteractionType
  }

  export type WaiterInteractionLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    from_waiter_id?: SortOrder
    to_waiter_id?: SortOrder
    interaction_type?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
  }

  export type WaiterInteractionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    from_waiter_id?: SortOrder
    to_waiter_id?: SortOrder
    interaction_type?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
  }

  export type WaiterInteractionLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    table_id?: SortOrder
    from_waiter_id?: SortOrder
    to_waiter_id?: SortOrder
    interaction_type?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
  }

  export type EnumInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumInteractionTypeFilter<$PrismaModel>
  }

  export type StaffCreateNestedManyWithoutTenantInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type TenantColorsCreateNestedOneWithoutTenantInput = {
    create?: XOR<TenantColorsCreateWithoutTenantInput, TenantColorsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantColorsCreateOrConnectWithoutTenantInput
    connect?: TenantColorsWhereUniqueInput
  }

  export type TableCreateNestedManyWithoutTenantInput = {
    create?: XOR<TableCreateWithoutTenantInput, TableUncheckedCreateWithoutTenantInput> | TableCreateWithoutTenantInput[] | TableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutTenantInput | TableCreateOrConnectWithoutTenantInput[]
    createMany?: TableCreateManyTenantInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutTenantInput = {
    create?: XOR<CategoryCreateWithoutTenantInput, CategoryUncheckedCreateWithoutTenantInput> | CategoryCreateWithoutTenantInput[] | CategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTenantInput | CategoryCreateOrConnectWithoutTenantInput[]
    createMany?: CategoryCreateManyTenantInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MenuItemCreateNestedManyWithoutTenantInput = {
    create?: XOR<MenuItemCreateWithoutTenantInput, MenuItemUncheckedCreateWithoutTenantInput> | MenuItemCreateWithoutTenantInput[] | MenuItemUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutTenantInput | MenuItemCreateOrConnectWithoutTenantInput[]
    createMany?: MenuItemCreateManyTenantInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutTenantInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutTenantInput = {
    create?: XOR<OrderItemCreateWithoutTenantInput, OrderItemUncheckedCreateWithoutTenantInput> | OrderItemCreateWithoutTenantInput[] | OrderItemUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutTenantInput | OrderItemCreateOrConnectWithoutTenantInput[]
    createMany?: OrderItemCreateManyTenantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutTenantInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type WaiterInteractionLogCreateNestedManyWithoutTenantInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTenantInput, WaiterInteractionLogUncheckedCreateWithoutTenantInput> | WaiterInteractionLogCreateWithoutTenantInput[] | WaiterInteractionLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTenantInput | WaiterInteractionLogCreateOrConnectWithoutTenantInput[]
    createMany?: WaiterInteractionLogCreateManyTenantInputEnvelope
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type TenantColorsUncheckedCreateNestedOneWithoutTenantInput = {
    create?: XOR<TenantColorsCreateWithoutTenantInput, TenantColorsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantColorsCreateOrConnectWithoutTenantInput
    connect?: TenantColorsWhereUniqueInput
  }

  export type TableUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TableCreateWithoutTenantInput, TableUncheckedCreateWithoutTenantInput> | TableCreateWithoutTenantInput[] | TableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutTenantInput | TableCreateOrConnectWithoutTenantInput[]
    createMany?: TableCreateManyTenantInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CategoryCreateWithoutTenantInput, CategoryUncheckedCreateWithoutTenantInput> | CategoryCreateWithoutTenantInput[] | CategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTenantInput | CategoryCreateOrConnectWithoutTenantInput[]
    createMany?: CategoryCreateManyTenantInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<MenuItemCreateWithoutTenantInput, MenuItemUncheckedCreateWithoutTenantInput> | MenuItemCreateWithoutTenantInput[] | MenuItemUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutTenantInput | MenuItemCreateOrConnectWithoutTenantInput[]
    createMany?: MenuItemCreateManyTenantInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<OrderItemCreateWithoutTenantInput, OrderItemUncheckedCreateWithoutTenantInput> | OrderItemCreateWithoutTenantInput[] | OrderItemUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutTenantInput | OrderItemCreateOrConnectWithoutTenantInput[]
    createMany?: OrderItemCreateManyTenantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTenantInput, WaiterInteractionLogUncheckedCreateWithoutTenantInput> | WaiterInteractionLogCreateWithoutTenantInput[] | WaiterInteractionLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTenantInput | WaiterInteractionLogCreateOrConnectWithoutTenantInput[]
    createMany?: WaiterInteractionLogCreateManyTenantInputEnvelope
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTenantPlanFieldUpdateOperationsInput = {
    set?: $Enums.TenantPlan
  }

  export type EnumTenantStatusFieldUpdateOperationsInput = {
    set?: $Enums.TenantStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type TenantColorsUpdateOneWithoutTenantNestedInput = {
    create?: XOR<TenantColorsCreateWithoutTenantInput, TenantColorsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantColorsCreateOrConnectWithoutTenantInput
    upsert?: TenantColorsUpsertWithoutTenantInput
    disconnect?: TenantColorsWhereInput | boolean
    delete?: TenantColorsWhereInput | boolean
    connect?: TenantColorsWhereUniqueInput
    update?: XOR<XOR<TenantColorsUpdateToOneWithWhereWithoutTenantInput, TenantColorsUpdateWithoutTenantInput>, TenantColorsUncheckedUpdateWithoutTenantInput>
  }

  export type TableUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TableCreateWithoutTenantInput, TableUncheckedCreateWithoutTenantInput> | TableCreateWithoutTenantInput[] | TableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutTenantInput | TableCreateOrConnectWithoutTenantInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutTenantInput | TableUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TableCreateManyTenantInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutTenantInput | TableUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TableUpdateManyWithWhereWithoutTenantInput | TableUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CategoryCreateWithoutTenantInput, CategoryUncheckedCreateWithoutTenantInput> | CategoryCreateWithoutTenantInput[] | CategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTenantInput | CategoryCreateOrConnectWithoutTenantInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutTenantInput | CategoryUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CategoryCreateManyTenantInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutTenantInput | CategoryUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutTenantInput | CategoryUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MenuItemUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MenuItemCreateWithoutTenantInput, MenuItemUncheckedCreateWithoutTenantInput> | MenuItemCreateWithoutTenantInput[] | MenuItemUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutTenantInput | MenuItemCreateOrConnectWithoutTenantInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutTenantInput | MenuItemUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MenuItemCreateManyTenantInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutTenantInput | MenuItemUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutTenantInput | MenuItemUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTenantInput | OrderUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTenantInput | OrderUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTenantInput | OrderUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OrderItemCreateWithoutTenantInput, OrderItemUncheckedCreateWithoutTenantInput> | OrderItemCreateWithoutTenantInput[] | OrderItemUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutTenantInput | OrderItemCreateOrConnectWithoutTenantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutTenantInput | OrderItemUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OrderItemCreateManyTenantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutTenantInput | OrderItemUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutTenantInput | OrderItemUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutTenantInput | AuditLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutTenantInput | AuditLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutTenantInput | AuditLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type WaiterInteractionLogUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTenantInput, WaiterInteractionLogUncheckedCreateWithoutTenantInput> | WaiterInteractionLogCreateWithoutTenantInput[] | WaiterInteractionLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTenantInput | WaiterInteractionLogCreateOrConnectWithoutTenantInput[]
    upsert?: WaiterInteractionLogUpsertWithWhereUniqueWithoutTenantInput | WaiterInteractionLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WaiterInteractionLogCreateManyTenantInputEnvelope
    set?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    disconnect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    delete?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    update?: WaiterInteractionLogUpdateWithWhereUniqueWithoutTenantInput | WaiterInteractionLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WaiterInteractionLogUpdateManyWithWhereWithoutTenantInput | WaiterInteractionLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
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

  export type TenantColorsUncheckedUpdateOneWithoutTenantNestedInput = {
    create?: XOR<TenantColorsCreateWithoutTenantInput, TenantColorsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantColorsCreateOrConnectWithoutTenantInput
    upsert?: TenantColorsUpsertWithoutTenantInput
    disconnect?: TenantColorsWhereInput | boolean
    delete?: TenantColorsWhereInput | boolean
    connect?: TenantColorsWhereUniqueInput
    update?: XOR<XOR<TenantColorsUpdateToOneWithWhereWithoutTenantInput, TenantColorsUpdateWithoutTenantInput>, TenantColorsUncheckedUpdateWithoutTenantInput>
  }

  export type TableUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TableCreateWithoutTenantInput, TableUncheckedCreateWithoutTenantInput> | TableCreateWithoutTenantInput[] | TableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutTenantInput | TableCreateOrConnectWithoutTenantInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutTenantInput | TableUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TableCreateManyTenantInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutTenantInput | TableUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TableUpdateManyWithWhereWithoutTenantInput | TableUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CategoryCreateWithoutTenantInput, CategoryUncheckedCreateWithoutTenantInput> | CategoryCreateWithoutTenantInput[] | CategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTenantInput | CategoryCreateOrConnectWithoutTenantInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutTenantInput | CategoryUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CategoryCreateManyTenantInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutTenantInput | CategoryUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutTenantInput | CategoryUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MenuItemCreateWithoutTenantInput, MenuItemUncheckedCreateWithoutTenantInput> | MenuItemCreateWithoutTenantInput[] | MenuItemUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutTenantInput | MenuItemCreateOrConnectWithoutTenantInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutTenantInput | MenuItemUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MenuItemCreateManyTenantInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutTenantInput | MenuItemUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutTenantInput | MenuItemUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTenantInput | OrderUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTenantInput | OrderUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTenantInput | OrderUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OrderItemCreateWithoutTenantInput, OrderItemUncheckedCreateWithoutTenantInput> | OrderItemCreateWithoutTenantInput[] | OrderItemUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutTenantInput | OrderItemCreateOrConnectWithoutTenantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutTenantInput | OrderItemUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OrderItemCreateManyTenantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutTenantInput | OrderItemUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutTenantInput | OrderItemUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutTenantInput | AuditLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutTenantInput | AuditLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutTenantInput | AuditLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTenantInput, WaiterInteractionLogUncheckedCreateWithoutTenantInput> | WaiterInteractionLogCreateWithoutTenantInput[] | WaiterInteractionLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTenantInput | WaiterInteractionLogCreateOrConnectWithoutTenantInput[]
    upsert?: WaiterInteractionLogUpsertWithWhereUniqueWithoutTenantInput | WaiterInteractionLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WaiterInteractionLogCreateManyTenantInputEnvelope
    set?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    disconnect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    delete?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    update?: WaiterInteractionLogUpdateWithWhereUniqueWithoutTenantInput | WaiterInteractionLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WaiterInteractionLogUpdateManyWithWhereWithoutTenantInput | WaiterInteractionLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutStaffInput = {
    create?: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStaffInput
    connect?: TenantWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutWaiterInput = {
    create?: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput> | OrderCreateWithoutWaiterInput[] | OrderUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWaiterInput | OrderCreateOrConnectWithoutWaiterInput[]
    createMany?: OrderCreateManyWaiterInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutPrepared_by_staffInput = {
    create?: XOR<OrderItemCreateWithoutPrepared_by_staffInput, OrderItemUncheckedCreateWithoutPrepared_by_staffInput> | OrderItemCreateWithoutPrepared_by_staffInput[] | OrderItemUncheckedCreateWithoutPrepared_by_staffInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPrepared_by_staffInput | OrderItemCreateOrConnectWithoutPrepared_by_staffInput[]
    createMany?: OrderItemCreateManyPrepared_by_staffInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutStaffInput = {
    create?: XOR<AuditLogCreateWithoutStaffInput, AuditLogUncheckedCreateWithoutStaffInput> | AuditLogCreateWithoutStaffInput[] | AuditLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutStaffInput | AuditLogCreateOrConnectWithoutStaffInput[]
    createMany?: AuditLogCreateManyStaffInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type WaiterInteractionLogCreateNestedManyWithoutFrom_waiterInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutFrom_waiterInput, WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput> | WaiterInteractionLogCreateWithoutFrom_waiterInput[] | WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutFrom_waiterInput | WaiterInteractionLogCreateOrConnectWithoutFrom_waiterInput[]
    createMany?: WaiterInteractionLogCreateManyFrom_waiterInputEnvelope
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
  }

  export type WaiterInteractionLogCreateNestedManyWithoutTo_waiterInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTo_waiterInput, WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput> | WaiterInteractionLogCreateWithoutTo_waiterInput[] | WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTo_waiterInput | WaiterInteractionLogCreateOrConnectWithoutTo_waiterInput[]
    createMany?: WaiterInteractionLogCreateManyTo_waiterInputEnvelope
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
  }

  export type TableCreateNestedManyWithoutDefault_waiterInput = {
    create?: XOR<TableCreateWithoutDefault_waiterInput, TableUncheckedCreateWithoutDefault_waiterInput> | TableCreateWithoutDefault_waiterInput[] | TableUncheckedCreateWithoutDefault_waiterInput[]
    connectOrCreate?: TableCreateOrConnectWithoutDefault_waiterInput | TableCreateOrConnectWithoutDefault_waiterInput[]
    createMany?: TableCreateManyDefault_waiterInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutWaiterInput = {
    create?: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput> | OrderCreateWithoutWaiterInput[] | OrderUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWaiterInput | OrderCreateOrConnectWithoutWaiterInput[]
    createMany?: OrderCreateManyWaiterInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutPrepared_by_staffInput = {
    create?: XOR<OrderItemCreateWithoutPrepared_by_staffInput, OrderItemUncheckedCreateWithoutPrepared_by_staffInput> | OrderItemCreateWithoutPrepared_by_staffInput[] | OrderItemUncheckedCreateWithoutPrepared_by_staffInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPrepared_by_staffInput | OrderItemCreateOrConnectWithoutPrepared_by_staffInput[]
    createMany?: OrderItemCreateManyPrepared_by_staffInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<AuditLogCreateWithoutStaffInput, AuditLogUncheckedCreateWithoutStaffInput> | AuditLogCreateWithoutStaffInput[] | AuditLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutStaffInput | AuditLogCreateOrConnectWithoutStaffInput[]
    createMany?: AuditLogCreateManyStaffInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type WaiterInteractionLogUncheckedCreateNestedManyWithoutFrom_waiterInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutFrom_waiterInput, WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput> | WaiterInteractionLogCreateWithoutFrom_waiterInput[] | WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutFrom_waiterInput | WaiterInteractionLogCreateOrConnectWithoutFrom_waiterInput[]
    createMany?: WaiterInteractionLogCreateManyFrom_waiterInputEnvelope
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
  }

  export type WaiterInteractionLogUncheckedCreateNestedManyWithoutTo_waiterInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTo_waiterInput, WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput> | WaiterInteractionLogCreateWithoutTo_waiterInput[] | WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTo_waiterInput | WaiterInteractionLogCreateOrConnectWithoutTo_waiterInput[]
    createMany?: WaiterInteractionLogCreateManyTo_waiterInputEnvelope
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutDefault_waiterInput = {
    create?: XOR<TableCreateWithoutDefault_waiterInput, TableUncheckedCreateWithoutDefault_waiterInput> | TableCreateWithoutDefault_waiterInput[] | TableUncheckedCreateWithoutDefault_waiterInput[]
    connectOrCreate?: TableCreateOrConnectWithoutDefault_waiterInput | TableCreateOrConnectWithoutDefault_waiterInput[]
    createMany?: TableCreateManyDefault_waiterInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type EnumStaffProfileFieldUpdateOperationsInput = {
    set?: $Enums.StaffProfile
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TenantUpdateOneWithoutStaffNestedInput = {
    create?: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStaffInput
    upsert?: TenantUpsertWithoutStaffInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutStaffInput, TenantUpdateWithoutStaffInput>, TenantUncheckedUpdateWithoutStaffInput>
  }

  export type OrderUpdateManyWithoutWaiterNestedInput = {
    create?: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput> | OrderCreateWithoutWaiterInput[] | OrderUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWaiterInput | OrderCreateOrConnectWithoutWaiterInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutWaiterInput | OrderUpsertWithWhereUniqueWithoutWaiterInput[]
    createMany?: OrderCreateManyWaiterInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutWaiterInput | OrderUpdateWithWhereUniqueWithoutWaiterInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutWaiterInput | OrderUpdateManyWithWhereWithoutWaiterInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutPrepared_by_staffNestedInput = {
    create?: XOR<OrderItemCreateWithoutPrepared_by_staffInput, OrderItemUncheckedCreateWithoutPrepared_by_staffInput> | OrderItemCreateWithoutPrepared_by_staffInput[] | OrderItemUncheckedCreateWithoutPrepared_by_staffInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPrepared_by_staffInput | OrderItemCreateOrConnectWithoutPrepared_by_staffInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutPrepared_by_staffInput | OrderItemUpsertWithWhereUniqueWithoutPrepared_by_staffInput[]
    createMany?: OrderItemCreateManyPrepared_by_staffInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutPrepared_by_staffInput | OrderItemUpdateWithWhereUniqueWithoutPrepared_by_staffInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutPrepared_by_staffInput | OrderItemUpdateManyWithWhereWithoutPrepared_by_staffInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AuditLogCreateWithoutStaffInput, AuditLogUncheckedCreateWithoutStaffInput> | AuditLogCreateWithoutStaffInput[] | AuditLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutStaffInput | AuditLogCreateOrConnectWithoutStaffInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutStaffInput | AuditLogUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AuditLogCreateManyStaffInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutStaffInput | AuditLogUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutStaffInput | AuditLogUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type WaiterInteractionLogUpdateManyWithoutFrom_waiterNestedInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutFrom_waiterInput, WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput> | WaiterInteractionLogCreateWithoutFrom_waiterInput[] | WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutFrom_waiterInput | WaiterInteractionLogCreateOrConnectWithoutFrom_waiterInput[]
    upsert?: WaiterInteractionLogUpsertWithWhereUniqueWithoutFrom_waiterInput | WaiterInteractionLogUpsertWithWhereUniqueWithoutFrom_waiterInput[]
    createMany?: WaiterInteractionLogCreateManyFrom_waiterInputEnvelope
    set?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    disconnect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    delete?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    update?: WaiterInteractionLogUpdateWithWhereUniqueWithoutFrom_waiterInput | WaiterInteractionLogUpdateWithWhereUniqueWithoutFrom_waiterInput[]
    updateMany?: WaiterInteractionLogUpdateManyWithWhereWithoutFrom_waiterInput | WaiterInteractionLogUpdateManyWithWhereWithoutFrom_waiterInput[]
    deleteMany?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
  }

  export type WaiterInteractionLogUpdateManyWithoutTo_waiterNestedInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTo_waiterInput, WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput> | WaiterInteractionLogCreateWithoutTo_waiterInput[] | WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTo_waiterInput | WaiterInteractionLogCreateOrConnectWithoutTo_waiterInput[]
    upsert?: WaiterInteractionLogUpsertWithWhereUniqueWithoutTo_waiterInput | WaiterInteractionLogUpsertWithWhereUniqueWithoutTo_waiterInput[]
    createMany?: WaiterInteractionLogCreateManyTo_waiterInputEnvelope
    set?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    disconnect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    delete?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    update?: WaiterInteractionLogUpdateWithWhereUniqueWithoutTo_waiterInput | WaiterInteractionLogUpdateWithWhereUniqueWithoutTo_waiterInput[]
    updateMany?: WaiterInteractionLogUpdateManyWithWhereWithoutTo_waiterInput | WaiterInteractionLogUpdateManyWithWhereWithoutTo_waiterInput[]
    deleteMany?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
  }

  export type TableUpdateManyWithoutDefault_waiterNestedInput = {
    create?: XOR<TableCreateWithoutDefault_waiterInput, TableUncheckedCreateWithoutDefault_waiterInput> | TableCreateWithoutDefault_waiterInput[] | TableUncheckedCreateWithoutDefault_waiterInput[]
    connectOrCreate?: TableCreateOrConnectWithoutDefault_waiterInput | TableCreateOrConnectWithoutDefault_waiterInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutDefault_waiterInput | TableUpsertWithWhereUniqueWithoutDefault_waiterInput[]
    createMany?: TableCreateManyDefault_waiterInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutDefault_waiterInput | TableUpdateWithWhereUniqueWithoutDefault_waiterInput[]
    updateMany?: TableUpdateManyWithWhereWithoutDefault_waiterInput | TableUpdateManyWithWhereWithoutDefault_waiterInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutWaiterNestedInput = {
    create?: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput> | OrderCreateWithoutWaiterInput[] | OrderUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWaiterInput | OrderCreateOrConnectWithoutWaiterInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutWaiterInput | OrderUpsertWithWhereUniqueWithoutWaiterInput[]
    createMany?: OrderCreateManyWaiterInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutWaiterInput | OrderUpdateWithWhereUniqueWithoutWaiterInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutWaiterInput | OrderUpdateManyWithWhereWithoutWaiterInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutPrepared_by_staffNestedInput = {
    create?: XOR<OrderItemCreateWithoutPrepared_by_staffInput, OrderItemUncheckedCreateWithoutPrepared_by_staffInput> | OrderItemCreateWithoutPrepared_by_staffInput[] | OrderItemUncheckedCreateWithoutPrepared_by_staffInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPrepared_by_staffInput | OrderItemCreateOrConnectWithoutPrepared_by_staffInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutPrepared_by_staffInput | OrderItemUpsertWithWhereUniqueWithoutPrepared_by_staffInput[]
    createMany?: OrderItemCreateManyPrepared_by_staffInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutPrepared_by_staffInput | OrderItemUpdateWithWhereUniqueWithoutPrepared_by_staffInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutPrepared_by_staffInput | OrderItemUpdateManyWithWhereWithoutPrepared_by_staffInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AuditLogCreateWithoutStaffInput, AuditLogUncheckedCreateWithoutStaffInput> | AuditLogCreateWithoutStaffInput[] | AuditLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutStaffInput | AuditLogCreateOrConnectWithoutStaffInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutStaffInput | AuditLogUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AuditLogCreateManyStaffInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutStaffInput | AuditLogUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutStaffInput | AuditLogUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterNestedInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutFrom_waiterInput, WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput> | WaiterInteractionLogCreateWithoutFrom_waiterInput[] | WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutFrom_waiterInput | WaiterInteractionLogCreateOrConnectWithoutFrom_waiterInput[]
    upsert?: WaiterInteractionLogUpsertWithWhereUniqueWithoutFrom_waiterInput | WaiterInteractionLogUpsertWithWhereUniqueWithoutFrom_waiterInput[]
    createMany?: WaiterInteractionLogCreateManyFrom_waiterInputEnvelope
    set?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    disconnect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    delete?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    update?: WaiterInteractionLogUpdateWithWhereUniqueWithoutFrom_waiterInput | WaiterInteractionLogUpdateWithWhereUniqueWithoutFrom_waiterInput[]
    updateMany?: WaiterInteractionLogUpdateManyWithWhereWithoutFrom_waiterInput | WaiterInteractionLogUpdateManyWithWhereWithoutFrom_waiterInput[]
    deleteMany?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
  }

  export type WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterNestedInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTo_waiterInput, WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput> | WaiterInteractionLogCreateWithoutTo_waiterInput[] | WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTo_waiterInput | WaiterInteractionLogCreateOrConnectWithoutTo_waiterInput[]
    upsert?: WaiterInteractionLogUpsertWithWhereUniqueWithoutTo_waiterInput | WaiterInteractionLogUpsertWithWhereUniqueWithoutTo_waiterInput[]
    createMany?: WaiterInteractionLogCreateManyTo_waiterInputEnvelope
    set?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    disconnect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    delete?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    update?: WaiterInteractionLogUpdateWithWhereUniqueWithoutTo_waiterInput | WaiterInteractionLogUpdateWithWhereUniqueWithoutTo_waiterInput[]
    updateMany?: WaiterInteractionLogUpdateManyWithWhereWithoutTo_waiterInput | WaiterInteractionLogUpdateManyWithWhereWithoutTo_waiterInput[]
    deleteMany?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutDefault_waiterNestedInput = {
    create?: XOR<TableCreateWithoutDefault_waiterInput, TableUncheckedCreateWithoutDefault_waiterInput> | TableCreateWithoutDefault_waiterInput[] | TableUncheckedCreateWithoutDefault_waiterInput[]
    connectOrCreate?: TableCreateOrConnectWithoutDefault_waiterInput | TableCreateOrConnectWithoutDefault_waiterInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutDefault_waiterInput | TableUpsertWithWhereUniqueWithoutDefault_waiterInput[]
    createMany?: TableCreateManyDefault_waiterInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutDefault_waiterInput | TableUpdateWithWhereUniqueWithoutDefault_waiterInput[]
    updateMany?: TableUpdateManyWithWhereWithoutDefault_waiterInput | TableUpdateManyWithWhereWithoutDefault_waiterInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutColorsInput = {
    create?: XOR<TenantCreateWithoutColorsInput, TenantUncheckedCreateWithoutColorsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutColorsInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<TenantCreateWithoutColorsInput, TenantUncheckedCreateWithoutColorsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutColorsInput
    upsert?: TenantUpsertWithoutColorsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutColorsInput, TenantUpdateWithoutColorsInput>, TenantUncheckedUpdateWithoutColorsInput>
  }

  export type TenantCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<TenantCreateWithoutCategoriesInput, TenantUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCategoriesInput
    connect?: TenantWhereUniqueInput
  }

  export type MenuItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<TenantCreateWithoutCategoriesInput, TenantUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCategoriesInput
    upsert?: TenantUpsertWithoutCategoriesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCategoriesInput, TenantUpdateWithoutCategoriesInput>, TenantUncheckedUpdateWithoutCategoriesInput>
  }

  export type MenuItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutMenu_itemsInput = {
    create?: XOR<TenantCreateWithoutMenu_itemsInput, TenantUncheckedCreateWithoutMenu_itemsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMenu_itemsInput
    connect?: TenantWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutMenu_itemsInput = {
    create?: XOR<CategoryCreateWithoutMenu_itemsInput, CategoryUncheckedCreateWithoutMenu_itemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenu_itemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutMenu_itemInput = {
    create?: XOR<OrderItemCreateWithoutMenu_itemInput, OrderItemUncheckedCreateWithoutMenu_itemInput> | OrderItemCreateWithoutMenu_itemInput[] | OrderItemUncheckedCreateWithoutMenu_itemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenu_itemInput | OrderItemCreateOrConnectWithoutMenu_itemInput[]
    createMany?: OrderItemCreateManyMenu_itemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMenu_itemInput = {
    create?: XOR<OrderItemCreateWithoutMenu_itemInput, OrderItemUncheckedCreateWithoutMenu_itemInput> | OrderItemCreateWithoutMenu_itemInput[] | OrderItemUncheckedCreateWithoutMenu_itemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenu_itemInput | OrderItemCreateOrConnectWithoutMenu_itemInput[]
    createMany?: OrderItemCreateManyMenu_itemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutMenu_itemsNestedInput = {
    create?: XOR<TenantCreateWithoutMenu_itemsInput, TenantUncheckedCreateWithoutMenu_itemsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMenu_itemsInput
    upsert?: TenantUpsertWithoutMenu_itemsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMenu_itemsInput, TenantUpdateWithoutMenu_itemsInput>, TenantUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type CategoryUpdateOneWithoutMenu_itemsNestedInput = {
    create?: XOR<CategoryCreateWithoutMenu_itemsInput, CategoryUncheckedCreateWithoutMenu_itemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenu_itemsInput
    upsert?: CategoryUpsertWithoutMenu_itemsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMenu_itemsInput, CategoryUpdateWithoutMenu_itemsInput>, CategoryUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type OrderItemUpdateManyWithoutMenu_itemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenu_itemInput, OrderItemUncheckedCreateWithoutMenu_itemInput> | OrderItemCreateWithoutMenu_itemInput[] | OrderItemUncheckedCreateWithoutMenu_itemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenu_itemInput | OrderItemCreateOrConnectWithoutMenu_itemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenu_itemInput | OrderItemUpsertWithWhereUniqueWithoutMenu_itemInput[]
    createMany?: OrderItemCreateManyMenu_itemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenu_itemInput | OrderItemUpdateWithWhereUniqueWithoutMenu_itemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenu_itemInput | OrderItemUpdateManyWithWhereWithoutMenu_itemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutMenu_itemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenu_itemInput, OrderItemUncheckedCreateWithoutMenu_itemInput> | OrderItemCreateWithoutMenu_itemInput[] | OrderItemUncheckedCreateWithoutMenu_itemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenu_itemInput | OrderItemCreateOrConnectWithoutMenu_itemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenu_itemInput | OrderItemUpsertWithWhereUniqueWithoutMenu_itemInput[]
    createMany?: OrderItemCreateManyMenu_itemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenu_itemInput | OrderItemUpdateWithWhereUniqueWithoutMenu_itemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenu_itemInput | OrderItemUpdateManyWithWhereWithoutMenu_itemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutTablesInput = {
    create?: XOR<TenantCreateWithoutTablesInput, TenantUncheckedCreateWithoutTablesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTablesInput
    connect?: TenantWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutTables_defaultInput = {
    create?: XOR<StaffCreateWithoutTables_defaultInput, StaffUncheckedCreateWithoutTables_defaultInput>
    connectOrCreate?: StaffCreateOrConnectWithoutTables_defaultInput
    connect?: StaffWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type WaiterInteractionLogCreateNestedManyWithoutTableInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTableInput, WaiterInteractionLogUncheckedCreateWithoutTableInput> | WaiterInteractionLogCreateWithoutTableInput[] | WaiterInteractionLogUncheckedCreateWithoutTableInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTableInput | WaiterInteractionLogCreateOrConnectWithoutTableInput[]
    createMany?: WaiterInteractionLogCreateManyTableInputEnvelope
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type WaiterInteractionLogUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTableInput, WaiterInteractionLogUncheckedCreateWithoutTableInput> | WaiterInteractionLogCreateWithoutTableInput[] | WaiterInteractionLogUncheckedCreateWithoutTableInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTableInput | WaiterInteractionLogCreateOrConnectWithoutTableInput[]
    createMany?: WaiterInteractionLogCreateManyTableInputEnvelope
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
  }

  export type EnumTableStatusFieldUpdateOperationsInput = {
    set?: $Enums.TableStatus
  }

  export type TenantUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<TenantCreateWithoutTablesInput, TenantUncheckedCreateWithoutTablesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTablesInput
    upsert?: TenantUpsertWithoutTablesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutTablesInput, TenantUpdateWithoutTablesInput>, TenantUncheckedUpdateWithoutTablesInput>
  }

  export type StaffUpdateOneWithoutTables_defaultNestedInput = {
    create?: XOR<StaffCreateWithoutTables_defaultInput, StaffUncheckedCreateWithoutTables_defaultInput>
    connectOrCreate?: StaffCreateOrConnectWithoutTables_defaultInput
    upsert?: StaffUpsertWithoutTables_defaultInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutTables_defaultInput, StaffUpdateWithoutTables_defaultInput>, StaffUncheckedUpdateWithoutTables_defaultInput>
  }

  export type OrderUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type WaiterInteractionLogUpdateManyWithoutTableNestedInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTableInput, WaiterInteractionLogUncheckedCreateWithoutTableInput> | WaiterInteractionLogCreateWithoutTableInput[] | WaiterInteractionLogUncheckedCreateWithoutTableInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTableInput | WaiterInteractionLogCreateOrConnectWithoutTableInput[]
    upsert?: WaiterInteractionLogUpsertWithWhereUniqueWithoutTableInput | WaiterInteractionLogUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: WaiterInteractionLogCreateManyTableInputEnvelope
    set?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    disconnect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    delete?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    update?: WaiterInteractionLogUpdateWithWhereUniqueWithoutTableInput | WaiterInteractionLogUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: WaiterInteractionLogUpdateManyWithWhereWithoutTableInput | WaiterInteractionLogUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type WaiterInteractionLogUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<WaiterInteractionLogCreateWithoutTableInput, WaiterInteractionLogUncheckedCreateWithoutTableInput> | WaiterInteractionLogCreateWithoutTableInput[] | WaiterInteractionLogUncheckedCreateWithoutTableInput[]
    connectOrCreate?: WaiterInteractionLogCreateOrConnectWithoutTableInput | WaiterInteractionLogCreateOrConnectWithoutTableInput[]
    upsert?: WaiterInteractionLogUpsertWithWhereUniqueWithoutTableInput | WaiterInteractionLogUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: WaiterInteractionLogCreateManyTableInputEnvelope
    set?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    disconnect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    delete?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    connect?: WaiterInteractionLogWhereUniqueInput | WaiterInteractionLogWhereUniqueInput[]
    update?: WaiterInteractionLogUpdateWithWhereUniqueWithoutTableInput | WaiterInteractionLogUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: WaiterInteractionLogUpdateManyWithWhereWithoutTableInput | WaiterInteractionLogUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TenantCreateWithoutOrdersInput, TenantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutOrdersInput
    connect?: TenantWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrdersInput
    connect?: TableWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutOrders_as_waiterInput = {
    create?: XOR<StaffCreateWithoutOrders_as_waiterInput, StaffUncheckedCreateWithoutOrders_as_waiterInput>
    connectOrCreate?: StaffCreateOrConnectWithoutOrders_as_waiterInput
    connect?: StaffWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type TenantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<TenantCreateWithoutOrdersInput, TenantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutOrdersInput
    upsert?: TenantUpsertWithoutOrdersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutOrdersInput, TenantUpdateWithoutOrdersInput>, TenantUncheckedUpdateWithoutOrdersInput>
  }

  export type TableUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrdersInput
    upsert?: TableUpsertWithoutOrdersInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutOrdersInput, TableUpdateWithoutOrdersInput>, TableUncheckedUpdateWithoutOrdersInput>
  }

  export type StaffUpdateOneWithoutOrders_as_waiterNestedInput = {
    create?: XOR<StaffCreateWithoutOrders_as_waiterInput, StaffUncheckedCreateWithoutOrders_as_waiterInput>
    connectOrCreate?: StaffCreateOrConnectWithoutOrders_as_waiterInput
    upsert?: StaffUpsertWithoutOrders_as_waiterInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutOrders_as_waiterInput, StaffUpdateWithoutOrders_as_waiterInput>, StaffUncheckedUpdateWithoutOrders_as_waiterInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<OrderCreateWithoutOrder_itemsInput, OrderUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrder_itemsInput
    connect?: OrderWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<TenantCreateWithoutOrder_itemsInput, TenantUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutOrder_itemsInput
    connect?: TenantWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<MenuItemCreateWithoutOrder_itemsInput, MenuItemUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrder_itemsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutOrder_items_preparedInput = {
    create?: XOR<StaffCreateWithoutOrder_items_preparedInput, StaffUncheckedCreateWithoutOrder_items_preparedInput>
    connectOrCreate?: StaffCreateOrConnectWithoutOrder_items_preparedInput
    connect?: StaffWhereUniqueInput
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type OrderUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrder_itemsInput, OrderUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrder_itemsInput
    upsert?: OrderUpsertWithoutOrder_itemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrder_itemsInput, OrderUpdateWithoutOrder_itemsInput>, OrderUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type TenantUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<TenantCreateWithoutOrder_itemsInput, TenantUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutOrder_itemsInput
    upsert?: TenantUpsertWithoutOrder_itemsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutOrder_itemsInput, TenantUpdateWithoutOrder_itemsInput>, TenantUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type MenuItemUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<MenuItemCreateWithoutOrder_itemsInput, MenuItemUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrder_itemsInput
    upsert?: MenuItemUpsertWithoutOrder_itemsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutOrder_itemsInput, MenuItemUpdateWithoutOrder_itemsInput>, MenuItemUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type StaffUpdateOneWithoutOrder_items_preparedNestedInput = {
    create?: XOR<StaffCreateWithoutOrder_items_preparedInput, StaffUncheckedCreateWithoutOrder_items_preparedInput>
    connectOrCreate?: StaffCreateOrConnectWithoutOrder_items_preparedInput
    upsert?: StaffUpsertWithoutOrder_items_preparedInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutOrder_items_preparedInput, StaffUpdateWithoutOrder_items_preparedInput>, StaffUncheckedUpdateWithoutOrder_items_preparedInput>
  }

  export type TenantCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<TenantCreateWithoutAudit_logsInput, TenantUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAudit_logsInput
    connect?: TenantWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<StaffCreateWithoutAudit_logsInput, StaffUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutAudit_logsInput
    connect?: StaffWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutAudit_logsNestedInput = {
    create?: XOR<TenantCreateWithoutAudit_logsInput, TenantUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAudit_logsInput
    upsert?: TenantUpsertWithoutAudit_logsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAudit_logsInput, TenantUpdateWithoutAudit_logsInput>, TenantUncheckedUpdateWithoutAudit_logsInput>
  }

  export type StaffUpdateOneWithoutAudit_logsNestedInput = {
    create?: XOR<StaffCreateWithoutAudit_logsInput, StaffUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutAudit_logsInput
    upsert?: StaffUpsertWithoutAudit_logsInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutAudit_logsInput, StaffUpdateWithoutAudit_logsInput>, StaffUncheckedUpdateWithoutAudit_logsInput>
  }

  export type TenantCreateNestedOneWithoutWaiter_interactionsInput = {
    create?: XOR<TenantCreateWithoutWaiter_interactionsInput, TenantUncheckedCreateWithoutWaiter_interactionsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutWaiter_interactionsInput
    connect?: TenantWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutWaiter_interactionsInput = {
    create?: XOR<TableCreateWithoutWaiter_interactionsInput, TableUncheckedCreateWithoutWaiter_interactionsInput>
    connectOrCreate?: TableCreateOrConnectWithoutWaiter_interactionsInput
    connect?: TableWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutWaiter_interactions_fromInput = {
    create?: XOR<StaffCreateWithoutWaiter_interactions_fromInput, StaffUncheckedCreateWithoutWaiter_interactions_fromInput>
    connectOrCreate?: StaffCreateOrConnectWithoutWaiter_interactions_fromInput
    connect?: StaffWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutWaiter_interactions_toInput = {
    create?: XOR<StaffCreateWithoutWaiter_interactions_toInput, StaffUncheckedCreateWithoutWaiter_interactions_toInput>
    connectOrCreate?: StaffCreateOrConnectWithoutWaiter_interactions_toInput
    connect?: StaffWhereUniqueInput
  }

  export type EnumInteractionTypeFieldUpdateOperationsInput = {
    set?: $Enums.InteractionType
  }

  export type TenantUpdateOneRequiredWithoutWaiter_interactionsNestedInput = {
    create?: XOR<TenantCreateWithoutWaiter_interactionsInput, TenantUncheckedCreateWithoutWaiter_interactionsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutWaiter_interactionsInput
    upsert?: TenantUpsertWithoutWaiter_interactionsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutWaiter_interactionsInput, TenantUpdateWithoutWaiter_interactionsInput>, TenantUncheckedUpdateWithoutWaiter_interactionsInput>
  }

  export type TableUpdateOneRequiredWithoutWaiter_interactionsNestedInput = {
    create?: XOR<TableCreateWithoutWaiter_interactionsInput, TableUncheckedCreateWithoutWaiter_interactionsInput>
    connectOrCreate?: TableCreateOrConnectWithoutWaiter_interactionsInput
    upsert?: TableUpsertWithoutWaiter_interactionsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutWaiter_interactionsInput, TableUpdateWithoutWaiter_interactionsInput>, TableUncheckedUpdateWithoutWaiter_interactionsInput>
  }

  export type StaffUpdateOneWithoutWaiter_interactions_fromNestedInput = {
    create?: XOR<StaffCreateWithoutWaiter_interactions_fromInput, StaffUncheckedCreateWithoutWaiter_interactions_fromInput>
    connectOrCreate?: StaffCreateOrConnectWithoutWaiter_interactions_fromInput
    upsert?: StaffUpsertWithoutWaiter_interactions_fromInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutWaiter_interactions_fromInput, StaffUpdateWithoutWaiter_interactions_fromInput>, StaffUncheckedUpdateWithoutWaiter_interactions_fromInput>
  }

  export type StaffUpdateOneWithoutWaiter_interactions_toNestedInput = {
    create?: XOR<StaffCreateWithoutWaiter_interactions_toInput, StaffUncheckedCreateWithoutWaiter_interactions_toInput>
    connectOrCreate?: StaffCreateOrConnectWithoutWaiter_interactions_toInput
    upsert?: StaffUpsertWithoutWaiter_interactions_toInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutWaiter_interactions_toInput, StaffUpdateWithoutWaiter_interactions_toInput>, StaffUncheckedUpdateWithoutWaiter_interactions_toInput>
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

  export type NestedEnumTenantPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanFilter<$PrismaModel> | $Enums.TenantPlan
  }

  export type NestedEnumTenantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantStatusFilter<$PrismaModel> | $Enums.TenantStatus
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

  export type NestedEnumTenantPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanWithAggregatesFilter<$PrismaModel> | $Enums.TenantPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantPlanFilter<$PrismaModel>
    _max?: NestedEnumTenantPlanFilter<$PrismaModel>
  }

  export type NestedEnumTenantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantStatusWithAggregatesFilter<$PrismaModel> | $Enums.TenantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantStatusFilter<$PrismaModel>
    _max?: NestedEnumTenantStatusFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumStaffProfileFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffProfile | EnumStaffProfileFieldRefInput<$PrismaModel>
    in?: $Enums.StaffProfile[] | ListEnumStaffProfileFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffProfile[] | ListEnumStaffProfileFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffProfileFilter<$PrismaModel> | $Enums.StaffProfile
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumStaffProfileWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffProfile | EnumStaffProfileFieldRefInput<$PrismaModel>
    in?: $Enums.StaffProfile[] | ListEnumStaffProfileFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffProfile[] | ListEnumStaffProfileFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffProfileWithAggregatesFilter<$PrismaModel> | $Enums.StaffProfile
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffProfileFilter<$PrismaModel>
    _max?: NestedEnumStaffProfileFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTableStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[] | ListEnumTableStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableStatus[] | ListEnumTableStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTableStatusFilter<$PrismaModel> | $Enums.TableStatus
  }

  export type NestedEnumTableStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[] | ListEnumTableStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableStatus[] | ListEnumTableStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTableStatusWithAggregatesFilter<$PrismaModel> | $Enums.TableStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTableStatusFilter<$PrismaModel>
    _max?: NestedEnumTableStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedEnumInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeFilter<$PrismaModel> | $Enums.InteractionType
  }

  export type NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumInteractionTypeFilter<$PrismaModel>
  }

  export type StaffCreateWithoutTenantInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    orders_as_waiter?: OrderCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    orders_as_waiter?: OrderUncheckedCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemUncheckedCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableUncheckedCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffCreateOrConnectWithoutTenantInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput>
  }

  export type StaffCreateManyTenantInputEnvelope = {
    data: StaffCreateManyTenantInput | StaffCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type TenantColorsCreateWithoutTenantInput = {
    primary_color?: string
    primary_light?: string
    primary_dark?: string
    secondary_color?: string
    secondary_light?: string
    secondary_dark?: string
    background_color?: string
    text_primary?: string
    text_secondary?: string
    accent_color?: string
    active_palette?: string
    updated_at?: Date | string
    updated_by?: string | null
  }

  export type TenantColorsUncheckedCreateWithoutTenantInput = {
    primary_color?: string
    primary_light?: string
    primary_dark?: string
    secondary_color?: string
    secondary_light?: string
    secondary_dark?: string
    background_color?: string
    text_primary?: string
    text_secondary?: string
    accent_color?: string
    active_palette?: string
    updated_at?: Date | string
    updated_by?: string | null
  }

  export type TenantColorsCreateOrConnectWithoutTenantInput = {
    where: TenantColorsWhereUniqueInput
    create: XOR<TenantColorsCreateWithoutTenantInput, TenantColorsUncheckedCreateWithoutTenantInput>
  }

  export type TableCreateWithoutTenantInput = {
    id?: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    default_waiter?: StaffCreateNestedOneWithoutTables_defaultInput
    orders?: OrderCreateNestedManyWithoutTableInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutTenantInput = {
    id?: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    default_waiter_id?: string | null
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutTenantInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutTenantInput, TableUncheckedCreateWithoutTenantInput>
  }

  export type TableCreateManyTenantInputEnvelope = {
    data: TableCreateManyTenantInput | TableCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    sort_order?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    menu_items?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    sort_order?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTenantInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTenantInput, CategoryUncheckedCreateWithoutTenantInput>
  }

  export type CategoryCreateManyTenantInputEnvelope = {
    data: CategoryCreateManyTenantInput | CategoryCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    category?: CategoryCreateNestedOneWithoutMenu_itemsInput
    order_items?: OrderItemCreateNestedManyWithoutMenu_itemInput
  }

  export type MenuItemUncheckedCreateWithoutTenantInput = {
    id?: string
    category_id?: string | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutMenu_itemInput
  }

  export type MenuItemCreateOrConnectWithoutTenantInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutTenantInput, MenuItemUncheckedCreateWithoutTenantInput>
  }

  export type MenuItemCreateManyTenantInputEnvelope = {
    data: MenuItemCreateManyTenantInput | MenuItemCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutTenantInput = {
    id?: string
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    table: TableCreateNestedOneWithoutOrdersInput
    waiter?: StaffCreateNestedOneWithoutOrders_as_waiterInput
    order_items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTenantInput = {
    id?: string
    table_id: string
    waiter_id?: string | null
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTenantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput>
  }

  export type OrderCreateManyTenantInputEnvelope = {
    data: OrderCreateManyTenantInput | OrderCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutTenantInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order: OrderCreateNestedOneWithoutOrder_itemsInput
    menu_item: MenuItemCreateNestedOneWithoutOrder_itemsInput
    prepared_by_staff?: StaffCreateNestedOneWithoutOrder_items_preparedInput
  }

  export type OrderItemUncheckedCreateWithoutTenantInput = {
    id?: string
    order_id: string
    menu_item_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    prepared_by?: string | null
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutTenantInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutTenantInput, OrderItemUncheckedCreateWithoutTenantInput>
  }

  export type OrderItemCreateManyTenantInputEnvelope = {
    data: OrderItemCreateManyTenantInput | OrderItemCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutTenantInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
    staff?: StaffCreateNestedOneWithoutAudit_logsInput
  }

  export type AuditLogUncheckedCreateWithoutTenantInput = {
    id?: string
    staff_id?: string | null
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutTenantInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput>
  }

  export type AuditLogCreateManyTenantInputEnvelope = {
    data: AuditLogCreateManyTenantInput | AuditLogCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type WaiterInteractionLogCreateWithoutTenantInput = {
    id?: string
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
    table: TableCreateNestedOneWithoutWaiter_interactionsInput
    from_waiter?: StaffCreateNestedOneWithoutWaiter_interactions_fromInput
    to_waiter?: StaffCreateNestedOneWithoutWaiter_interactions_toInput
  }

  export type WaiterInteractionLogUncheckedCreateWithoutTenantInput = {
    id?: string
    table_id: string
    from_waiter_id?: string | null
    to_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type WaiterInteractionLogCreateOrConnectWithoutTenantInput = {
    where: WaiterInteractionLogWhereUniqueInput
    create: XOR<WaiterInteractionLogCreateWithoutTenantInput, WaiterInteractionLogUncheckedCreateWithoutTenantInput>
  }

  export type WaiterInteractionLogCreateManyTenantInputEnvelope = {
    data: WaiterInteractionLogCreateManyTenantInput | WaiterInteractionLogCreateManyTenantInput[]
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
    tenant_id?: StringNullableFilter<"Staff"> | string | null
    name?: StringFilter<"Staff"> | string
    profile?: EnumStaffProfileFilter<"Staff"> | $Enums.StaffProfile
    email?: StringFilter<"Staff"> | string
    password_hash?: StringNullableFilter<"Staff"> | string | null
    last_password_change_at?: DateTimeNullableFilter<"Staff"> | Date | string | null
    password_change_required?: BoolFilter<"Staff"> | boolean
    access_code_hash?: StringNullableFilter<"Staff"> | string | null
    access_code_expires_at?: DateTimeNullableFilter<"Staff"> | Date | string | null
    photo_url?: StringNullableFilter<"Staff"> | string | null
    active?: BoolFilter<"Staff"> | boolean
    first_access_completed?: BoolFilter<"Staff"> | boolean
    commission_rate?: DecimalNullableFilter<"Staff"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"Staff"> | Date | string
    updated_at?: DateTimeFilter<"Staff"> | Date | string
    last_access_at?: DateTimeNullableFilter<"Staff"> | Date | string | null
  }

  export type TenantColorsUpsertWithoutTenantInput = {
    update: XOR<TenantColorsUpdateWithoutTenantInput, TenantColorsUncheckedUpdateWithoutTenantInput>
    create: XOR<TenantColorsCreateWithoutTenantInput, TenantColorsUncheckedCreateWithoutTenantInput>
    where?: TenantColorsWhereInput
  }

  export type TenantColorsUpdateToOneWithWhereWithoutTenantInput = {
    where?: TenantColorsWhereInput
    data: XOR<TenantColorsUpdateWithoutTenantInput, TenantColorsUncheckedUpdateWithoutTenantInput>
  }

  export type TenantColorsUpdateWithoutTenantInput = {
    primary_color?: StringFieldUpdateOperationsInput | string
    primary_light?: StringFieldUpdateOperationsInput | string
    primary_dark?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    secondary_light?: StringFieldUpdateOperationsInput | string
    secondary_dark?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    active_palette?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantColorsUncheckedUpdateWithoutTenantInput = {
    primary_color?: StringFieldUpdateOperationsInput | string
    primary_light?: StringFieldUpdateOperationsInput | string
    primary_dark?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    secondary_light?: StringFieldUpdateOperationsInput | string
    secondary_dark?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    active_palette?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TableUpsertWithWhereUniqueWithoutTenantInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutTenantInput, TableUncheckedUpdateWithoutTenantInput>
    create: XOR<TableCreateWithoutTenantInput, TableUncheckedCreateWithoutTenantInput>
  }

  export type TableUpdateWithWhereUniqueWithoutTenantInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutTenantInput, TableUncheckedUpdateWithoutTenantInput>
  }

  export type TableUpdateManyWithWhereWithoutTenantInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutTenantInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    id?: StringFilter<"Table"> | string
    tenant_id?: StringFilter<"Table"> | string
    number?: IntFilter<"Table"> | number
    capacity?: IntFilter<"Table"> | number
    location?: StringNullableFilter<"Table"> | string | null
    status?: EnumTableStatusFilter<"Table"> | $Enums.TableStatus
    default_waiter_id?: StringNullableFilter<"Table"> | string | null
    qr_code?: StringNullableFilter<"Table"> | string | null
    created_at?: DateTimeFilter<"Table"> | Date | string
    updated_at?: DateTimeFilter<"Table"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutTenantInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutTenantInput, CategoryUncheckedUpdateWithoutTenantInput>
    create: XOR<CategoryCreateWithoutTenantInput, CategoryUncheckedCreateWithoutTenantInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutTenantInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutTenantInput, CategoryUncheckedUpdateWithoutTenantInput>
  }

  export type CategoryUpdateManyWithWhereWithoutTenantInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutTenantInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    tenant_id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    sort_order?: IntFilter<"Category"> | number
    active?: BoolFilter<"Category"> | boolean
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
  }

  export type MenuItemUpsertWithWhereUniqueWithoutTenantInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutTenantInput, MenuItemUncheckedUpdateWithoutTenantInput>
    create: XOR<MenuItemCreateWithoutTenantInput, MenuItemUncheckedCreateWithoutTenantInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutTenantInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutTenantInput, MenuItemUncheckedUpdateWithoutTenantInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutTenantInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutTenantInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    tenant_id?: StringFilter<"MenuItem"> | string
    category_id?: StringNullableFilter<"MenuItem"> | string | null
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableFilter<"MenuItem"> | string | null
    available?: BoolFilter<"MenuItem"> | boolean
    options?: JsonNullableFilter<"MenuItem">
    preparation_time?: IntNullableFilter<"MenuItem"> | number | null
    created_at?: DateTimeFilter<"MenuItem"> | Date | string
    updated_at?: DateTimeFilter<"MenuItem"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutTenantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTenantInput, OrderUncheckedUpdateWithoutTenantInput>
    create: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTenantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTenantInput, OrderUncheckedUpdateWithoutTenantInput>
  }

  export type OrderUpdateManyWithWhereWithoutTenantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTenantInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    tenant_id?: StringFilter<"Order"> | string
    table_id?: StringFilter<"Order"> | string
    waiter_id?: StringNullableFilter<"Order"> | string | null
    customer_name?: StringNullableFilter<"Order"> | string | null
    password_hash?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tip?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"Order"> | string | null
    opened_at?: DateTimeFilter<"Order"> | Date | string
    closed_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutTenantInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutTenantInput, OrderItemUncheckedUpdateWithoutTenantInput>
    create: XOR<OrderItemCreateWithoutTenantInput, OrderItemUncheckedCreateWithoutTenantInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutTenantInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutTenantInput, OrderItemUncheckedUpdateWithoutTenantInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutTenantInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutTenantInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    order_id?: StringFilter<"OrderItem"> | string
    tenant_id?: StringFilter<"OrderItem"> | string
    menu_item_id?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unit_price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    observations?: StringNullableFilter<"OrderItem"> | string | null
    options_chosen?: JsonNullableFilter<"OrderItem">
    status?: EnumItemStatusFilter<"OrderItem"> | $Enums.ItemStatus
    prepared_by?: StringNullableFilter<"OrderItem"> | string | null
    sent_to_kitchen_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    ready_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    delivered_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutTenantInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutTenantInput, AuditLogUncheckedUpdateWithoutTenantInput>
    create: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutTenantInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutTenantInput, AuditLogUncheckedUpdateWithoutTenantInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutTenantInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutTenantInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    tenant_id?: StringFilter<"AuditLog"> | string
    staff_id?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    ip_address?: StringNullableFilter<"AuditLog"> | string | null
    user_agent?: StringNullableFilter<"AuditLog"> | string | null
    created_at?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type WaiterInteractionLogUpsertWithWhereUniqueWithoutTenantInput = {
    where: WaiterInteractionLogWhereUniqueInput
    update: XOR<WaiterInteractionLogUpdateWithoutTenantInput, WaiterInteractionLogUncheckedUpdateWithoutTenantInput>
    create: XOR<WaiterInteractionLogCreateWithoutTenantInput, WaiterInteractionLogUncheckedCreateWithoutTenantInput>
  }

  export type WaiterInteractionLogUpdateWithWhereUniqueWithoutTenantInput = {
    where: WaiterInteractionLogWhereUniqueInput
    data: XOR<WaiterInteractionLogUpdateWithoutTenantInput, WaiterInteractionLogUncheckedUpdateWithoutTenantInput>
  }

  export type WaiterInteractionLogUpdateManyWithWhereWithoutTenantInput = {
    where: WaiterInteractionLogScalarWhereInput
    data: XOR<WaiterInteractionLogUpdateManyMutationInput, WaiterInteractionLogUncheckedUpdateManyWithoutTenantInput>
  }

  export type WaiterInteractionLogScalarWhereInput = {
    AND?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
    OR?: WaiterInteractionLogScalarWhereInput[]
    NOT?: WaiterInteractionLogScalarWhereInput | WaiterInteractionLogScalarWhereInput[]
    id?: StringFilter<"WaiterInteractionLog"> | string
    tenant_id?: StringFilter<"WaiterInteractionLog"> | string
    table_id?: StringFilter<"WaiterInteractionLog"> | string
    from_waiter_id?: StringNullableFilter<"WaiterInteractionLog"> | string | null
    to_waiter_id?: StringNullableFilter<"WaiterInteractionLog"> | string | null
    interaction_type?: EnumInteractionTypeFilter<"WaiterInteractionLog"> | $Enums.InteractionType
    reason?: StringNullableFilter<"WaiterInteractionLog"> | string | null
    created_at?: DateTimeFilter<"WaiterInteractionLog"> | Date | string
  }

  export type TenantCreateWithoutStaffInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    colors?: TenantColorsCreateNestedOneWithoutTenantInput
    tables?: TableCreateNestedManyWithoutTenantInput
    categories?: CategoryCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
    order_items?: OrderItemCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    colors?: TenantColorsUncheckedCreateNestedOneWithoutTenantInput
    tables?: TableUncheckedCreateNestedManyWithoutTenantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutStaffInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
  }

  export type OrderCreateWithoutWaiterInput = {
    id?: string
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutOrdersInput
    table: TableCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutWaiterInput = {
    id?: string
    tenant_id: string
    table_id: string
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutWaiterInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput>
  }

  export type OrderCreateManyWaiterInputEnvelope = {
    data: OrderCreateManyWaiterInput | OrderCreateManyWaiterInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutPrepared_by_staffInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order: OrderCreateNestedOneWithoutOrder_itemsInput
    tenant: TenantCreateNestedOneWithoutOrder_itemsInput
    menu_item: MenuItemCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemUncheckedCreateWithoutPrepared_by_staffInput = {
    id?: string
    order_id: string
    tenant_id: string
    menu_item_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutPrepared_by_staffInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutPrepared_by_staffInput, OrderItemUncheckedCreateWithoutPrepared_by_staffInput>
  }

  export type OrderItemCreateManyPrepared_by_staffInputEnvelope = {
    data: OrderItemCreateManyPrepared_by_staffInput | OrderItemCreateManyPrepared_by_staffInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutStaffInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
    tenant: TenantCreateNestedOneWithoutAudit_logsInput
  }

  export type AuditLogUncheckedCreateWithoutStaffInput = {
    id?: string
    tenant_id: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutStaffInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutStaffInput, AuditLogUncheckedCreateWithoutStaffInput>
  }

  export type AuditLogCreateManyStaffInputEnvelope = {
    data: AuditLogCreateManyStaffInput | AuditLogCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type WaiterInteractionLogCreateWithoutFrom_waiterInput = {
    id?: string
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
    tenant: TenantCreateNestedOneWithoutWaiter_interactionsInput
    table: TableCreateNestedOneWithoutWaiter_interactionsInput
    to_waiter?: StaffCreateNestedOneWithoutWaiter_interactions_toInput
  }

  export type WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput = {
    id?: string
    tenant_id: string
    table_id: string
    to_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type WaiterInteractionLogCreateOrConnectWithoutFrom_waiterInput = {
    where: WaiterInteractionLogWhereUniqueInput
    create: XOR<WaiterInteractionLogCreateWithoutFrom_waiterInput, WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput>
  }

  export type WaiterInteractionLogCreateManyFrom_waiterInputEnvelope = {
    data: WaiterInteractionLogCreateManyFrom_waiterInput | WaiterInteractionLogCreateManyFrom_waiterInput[]
    skipDuplicates?: boolean
  }

  export type WaiterInteractionLogCreateWithoutTo_waiterInput = {
    id?: string
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
    tenant: TenantCreateNestedOneWithoutWaiter_interactionsInput
    table: TableCreateNestedOneWithoutWaiter_interactionsInput
    from_waiter?: StaffCreateNestedOneWithoutWaiter_interactions_fromInput
  }

  export type WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput = {
    id?: string
    tenant_id: string
    table_id: string
    from_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type WaiterInteractionLogCreateOrConnectWithoutTo_waiterInput = {
    where: WaiterInteractionLogWhereUniqueInput
    create: XOR<WaiterInteractionLogCreateWithoutTo_waiterInput, WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput>
  }

  export type WaiterInteractionLogCreateManyTo_waiterInputEnvelope = {
    data: WaiterInteractionLogCreateManyTo_waiterInput | WaiterInteractionLogCreateManyTo_waiterInput[]
    skipDuplicates?: boolean
  }

  export type TableCreateWithoutDefault_waiterInput = {
    id?: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutTablesInput
    orders?: OrderCreateNestedManyWithoutTableInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutDefault_waiterInput = {
    id?: string
    tenant_id: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutDefault_waiterInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutDefault_waiterInput, TableUncheckedCreateWithoutDefault_waiterInput>
  }

  export type TableCreateManyDefault_waiterInputEnvelope = {
    data: TableCreateManyDefault_waiterInput | TableCreateManyDefault_waiterInput[]
    skipDuplicates?: boolean
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
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: TenantColorsUpdateOneWithoutTenantNestedInput
    tables?: TableUpdateManyWithoutTenantNestedInput
    categories?: CategoryUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: TenantColorsUncheckedUpdateOneWithoutTenantNestedInput
    tables?: TableUncheckedUpdateManyWithoutTenantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutWaiterInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutWaiterInput, OrderUncheckedUpdateWithoutWaiterInput>
    create: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutWaiterInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutWaiterInput, OrderUncheckedUpdateWithoutWaiterInput>
  }

  export type OrderUpdateManyWithWhereWithoutWaiterInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutWaiterInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutPrepared_by_staffInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutPrepared_by_staffInput, OrderItemUncheckedUpdateWithoutPrepared_by_staffInput>
    create: XOR<OrderItemCreateWithoutPrepared_by_staffInput, OrderItemUncheckedCreateWithoutPrepared_by_staffInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutPrepared_by_staffInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutPrepared_by_staffInput, OrderItemUncheckedUpdateWithoutPrepared_by_staffInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutPrepared_by_staffInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutPrepared_by_staffInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutStaffInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutStaffInput, AuditLogUncheckedUpdateWithoutStaffInput>
    create: XOR<AuditLogCreateWithoutStaffInput, AuditLogUncheckedCreateWithoutStaffInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutStaffInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutStaffInput, AuditLogUncheckedUpdateWithoutStaffInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutStaffInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutStaffInput>
  }

  export type WaiterInteractionLogUpsertWithWhereUniqueWithoutFrom_waiterInput = {
    where: WaiterInteractionLogWhereUniqueInput
    update: XOR<WaiterInteractionLogUpdateWithoutFrom_waiterInput, WaiterInteractionLogUncheckedUpdateWithoutFrom_waiterInput>
    create: XOR<WaiterInteractionLogCreateWithoutFrom_waiterInput, WaiterInteractionLogUncheckedCreateWithoutFrom_waiterInput>
  }

  export type WaiterInteractionLogUpdateWithWhereUniqueWithoutFrom_waiterInput = {
    where: WaiterInteractionLogWhereUniqueInput
    data: XOR<WaiterInteractionLogUpdateWithoutFrom_waiterInput, WaiterInteractionLogUncheckedUpdateWithoutFrom_waiterInput>
  }

  export type WaiterInteractionLogUpdateManyWithWhereWithoutFrom_waiterInput = {
    where: WaiterInteractionLogScalarWhereInput
    data: XOR<WaiterInteractionLogUpdateManyMutationInput, WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterInput>
  }

  export type WaiterInteractionLogUpsertWithWhereUniqueWithoutTo_waiterInput = {
    where: WaiterInteractionLogWhereUniqueInput
    update: XOR<WaiterInteractionLogUpdateWithoutTo_waiterInput, WaiterInteractionLogUncheckedUpdateWithoutTo_waiterInput>
    create: XOR<WaiterInteractionLogCreateWithoutTo_waiterInput, WaiterInteractionLogUncheckedCreateWithoutTo_waiterInput>
  }

  export type WaiterInteractionLogUpdateWithWhereUniqueWithoutTo_waiterInput = {
    where: WaiterInteractionLogWhereUniqueInput
    data: XOR<WaiterInteractionLogUpdateWithoutTo_waiterInput, WaiterInteractionLogUncheckedUpdateWithoutTo_waiterInput>
  }

  export type WaiterInteractionLogUpdateManyWithWhereWithoutTo_waiterInput = {
    where: WaiterInteractionLogScalarWhereInput
    data: XOR<WaiterInteractionLogUpdateManyMutationInput, WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterInput>
  }

  export type TableUpsertWithWhereUniqueWithoutDefault_waiterInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutDefault_waiterInput, TableUncheckedUpdateWithoutDefault_waiterInput>
    create: XOR<TableCreateWithoutDefault_waiterInput, TableUncheckedCreateWithoutDefault_waiterInput>
  }

  export type TableUpdateWithWhereUniqueWithoutDefault_waiterInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutDefault_waiterInput, TableUncheckedUpdateWithoutDefault_waiterInput>
  }

  export type TableUpdateManyWithWhereWithoutDefault_waiterInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutDefault_waiterInput>
  }

  export type TenantCreateWithoutColorsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffCreateNestedManyWithoutTenantInput
    tables?: TableCreateNestedManyWithoutTenantInput
    categories?: CategoryCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
    order_items?: OrderItemCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutColorsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    tables?: TableUncheckedCreateNestedManyWithoutTenantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutColorsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutColorsInput, TenantUncheckedCreateWithoutColorsInput>
  }

  export type TenantUpsertWithoutColorsInput = {
    update: XOR<TenantUpdateWithoutColorsInput, TenantUncheckedUpdateWithoutColorsInput>
    create: XOR<TenantCreateWithoutColorsInput, TenantUncheckedCreateWithoutColorsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutColorsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutColorsInput, TenantUncheckedUpdateWithoutColorsInput>
  }

  export type TenantUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateManyWithoutTenantNestedInput
    tables?: TableUpdateManyWithoutTenantNestedInput
    categories?: CategoryUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    tables?: TableUncheckedUpdateManyWithoutTenantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutCategoriesInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffCreateNestedManyWithoutTenantInput
    colors?: TenantColorsCreateNestedOneWithoutTenantInput
    tables?: TableCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
    order_items?: OrderItemCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    colors?: TenantColorsUncheckedCreateNestedOneWithoutTenantInput
    tables?: TableUncheckedCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCategoriesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCategoriesInput, TenantUncheckedCreateWithoutCategoriesInput>
  }

  export type MenuItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutMenu_itemsInput
    order_items?: OrderItemCreateNestedManyWithoutMenu_itemInput
  }

  export type MenuItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    tenant_id: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutMenu_itemInput
  }

  export type MenuItemCreateOrConnectWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemCreateManyCategoryInputEnvelope = {
    data: MenuItemCreateManyCategoryInput | MenuItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutCategoriesInput = {
    update: XOR<TenantUpdateWithoutCategoriesInput, TenantUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TenantCreateWithoutCategoriesInput, TenantUncheckedCreateWithoutCategoriesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCategoriesInput, TenantUncheckedUpdateWithoutCategoriesInput>
  }

  export type TenantUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUpdateOneWithoutTenantNestedInput
    tables?: TableUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUncheckedUpdateOneWithoutTenantNestedInput
    tables?: TableUncheckedUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type MenuItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TenantCreateWithoutMenu_itemsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffCreateNestedManyWithoutTenantInput
    colors?: TenantColorsCreateNestedOneWithoutTenantInput
    tables?: TableCreateNestedManyWithoutTenantInput
    categories?: CategoryCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
    order_items?: OrderItemCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutMenu_itemsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    colors?: TenantColorsUncheckedCreateNestedOneWithoutTenantInput
    tables?: TableUncheckedCreateNestedManyWithoutTenantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutMenu_itemsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMenu_itemsInput, TenantUncheckedCreateWithoutMenu_itemsInput>
  }

  export type CategoryCreateWithoutMenu_itemsInput = {
    id?: string
    name: string
    description?: string | null
    sort_order?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutMenu_itemsInput = {
    id?: string
    tenant_id: string
    name: string
    description?: string | null
    sort_order?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryCreateOrConnectWithoutMenu_itemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMenu_itemsInput, CategoryUncheckedCreateWithoutMenu_itemsInput>
  }

  export type OrderItemCreateWithoutMenu_itemInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order: OrderCreateNestedOneWithoutOrder_itemsInput
    tenant: TenantCreateNestedOneWithoutOrder_itemsInput
    prepared_by_staff?: StaffCreateNestedOneWithoutOrder_items_preparedInput
  }

  export type OrderItemUncheckedCreateWithoutMenu_itemInput = {
    id?: string
    order_id: string
    tenant_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    prepared_by?: string | null
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutMenu_itemInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMenu_itemInput, OrderItemUncheckedCreateWithoutMenu_itemInput>
  }

  export type OrderItemCreateManyMenu_itemInputEnvelope = {
    data: OrderItemCreateManyMenu_itemInput | OrderItemCreateManyMenu_itemInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutMenu_itemsInput = {
    update: XOR<TenantUpdateWithoutMenu_itemsInput, TenantUncheckedUpdateWithoutMenu_itemsInput>
    create: XOR<TenantCreateWithoutMenu_itemsInput, TenantUncheckedCreateWithoutMenu_itemsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMenu_itemsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutMenu_itemsInput, TenantUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type TenantUpdateWithoutMenu_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUpdateOneWithoutTenantNestedInput
    tables?: TableUpdateManyWithoutTenantNestedInput
    categories?: CategoryUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutMenu_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUncheckedUpdateOneWithoutTenantNestedInput
    tables?: TableUncheckedUpdateManyWithoutTenantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CategoryUpsertWithoutMenu_itemsInput = {
    update: XOR<CategoryUpdateWithoutMenu_itemsInput, CategoryUncheckedUpdateWithoutMenu_itemsInput>
    create: XOR<CategoryCreateWithoutMenu_itemsInput, CategoryUncheckedCreateWithoutMenu_itemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMenu_itemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMenu_itemsInput, CategoryUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type CategoryUpdateWithoutMenu_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMenu_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMenu_itemInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMenu_itemInput, OrderItemUncheckedUpdateWithoutMenu_itemInput>
    create: XOR<OrderItemCreateWithoutMenu_itemInput, OrderItemUncheckedCreateWithoutMenu_itemInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMenu_itemInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMenu_itemInput, OrderItemUncheckedUpdateWithoutMenu_itemInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMenu_itemInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutMenu_itemInput>
  }

  export type TenantCreateWithoutTablesInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffCreateNestedManyWithoutTenantInput
    colors?: TenantColorsCreateNestedOneWithoutTenantInput
    categories?: CategoryCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
    order_items?: OrderItemCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutTablesInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    colors?: TenantColorsUncheckedCreateNestedOneWithoutTenantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutTablesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutTablesInput, TenantUncheckedCreateWithoutTablesInput>
  }

  export type StaffCreateWithoutTables_defaultInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    tenant?: TenantCreateNestedOneWithoutStaffInput
    orders_as_waiter?: OrderCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogCreateNestedManyWithoutTo_waiterInput
  }

  export type StaffUncheckedCreateWithoutTables_defaultInput = {
    id?: string
    tenant_id?: string | null
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    orders_as_waiter?: OrderUncheckedCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemUncheckedCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTo_waiterInput
  }

  export type StaffCreateOrConnectWithoutTables_defaultInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutTables_defaultInput, StaffUncheckedCreateWithoutTables_defaultInput>
  }

  export type OrderCreateWithoutTableInput = {
    id?: string
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutOrdersInput
    waiter?: StaffCreateNestedOneWithoutOrders_as_waiterInput
    order_items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTableInput = {
    id?: string
    tenant_id: string
    waiter_id?: string | null
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTableInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderCreateManyTableInputEnvelope = {
    data: OrderCreateManyTableInput | OrderCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type WaiterInteractionLogCreateWithoutTableInput = {
    id?: string
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
    tenant: TenantCreateNestedOneWithoutWaiter_interactionsInput
    from_waiter?: StaffCreateNestedOneWithoutWaiter_interactions_fromInput
    to_waiter?: StaffCreateNestedOneWithoutWaiter_interactions_toInput
  }

  export type WaiterInteractionLogUncheckedCreateWithoutTableInput = {
    id?: string
    tenant_id: string
    from_waiter_id?: string | null
    to_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type WaiterInteractionLogCreateOrConnectWithoutTableInput = {
    where: WaiterInteractionLogWhereUniqueInput
    create: XOR<WaiterInteractionLogCreateWithoutTableInput, WaiterInteractionLogUncheckedCreateWithoutTableInput>
  }

  export type WaiterInteractionLogCreateManyTableInputEnvelope = {
    data: WaiterInteractionLogCreateManyTableInput | WaiterInteractionLogCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutTablesInput = {
    update: XOR<TenantUpdateWithoutTablesInput, TenantUncheckedUpdateWithoutTablesInput>
    create: XOR<TenantCreateWithoutTablesInput, TenantUncheckedCreateWithoutTablesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutTablesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutTablesInput, TenantUncheckedUpdateWithoutTablesInput>
  }

  export type TenantUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUpdateOneWithoutTenantNestedInput
    categories?: CategoryUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUncheckedUpdateOneWithoutTenantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type StaffUpsertWithoutTables_defaultInput = {
    update: XOR<StaffUpdateWithoutTables_defaultInput, StaffUncheckedUpdateWithoutTables_defaultInput>
    create: XOR<StaffCreateWithoutTables_defaultInput, StaffUncheckedCreateWithoutTables_defaultInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutTables_defaultInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutTables_defaultInput, StaffUncheckedUpdateWithoutTables_defaultInput>
  }

  export type StaffUpdateWithoutTables_defaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneWithoutStaffNestedInput
    orders_as_waiter?: OrderUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUpdateManyWithoutTo_waiterNestedInput
  }

  export type StaffUncheckedUpdateWithoutTables_defaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_as_waiter?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUncheckedUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
  }

  export type OrderUpdateManyWithWhereWithoutTableInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTableInput>
  }

  export type WaiterInteractionLogUpsertWithWhereUniqueWithoutTableInput = {
    where: WaiterInteractionLogWhereUniqueInput
    update: XOR<WaiterInteractionLogUpdateWithoutTableInput, WaiterInteractionLogUncheckedUpdateWithoutTableInput>
    create: XOR<WaiterInteractionLogCreateWithoutTableInput, WaiterInteractionLogUncheckedCreateWithoutTableInput>
  }

  export type WaiterInteractionLogUpdateWithWhereUniqueWithoutTableInput = {
    where: WaiterInteractionLogWhereUniqueInput
    data: XOR<WaiterInteractionLogUpdateWithoutTableInput, WaiterInteractionLogUncheckedUpdateWithoutTableInput>
  }

  export type WaiterInteractionLogUpdateManyWithWhereWithoutTableInput = {
    where: WaiterInteractionLogScalarWhereInput
    data: XOR<WaiterInteractionLogUpdateManyMutationInput, WaiterInteractionLogUncheckedUpdateManyWithoutTableInput>
  }

  export type TenantCreateWithoutOrdersInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffCreateNestedManyWithoutTenantInput
    colors?: TenantColorsCreateNestedOneWithoutTenantInput
    tables?: TableCreateNestedManyWithoutTenantInput
    categories?: CategoryCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemCreateNestedManyWithoutTenantInput
    order_items?: OrderItemCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    colors?: TenantColorsUncheckedCreateNestedOneWithoutTenantInput
    tables?: TableUncheckedCreateNestedManyWithoutTenantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutTenantInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutOrdersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutOrdersInput, TenantUncheckedCreateWithoutOrdersInput>
  }

  export type TableCreateWithoutOrdersInput = {
    id?: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutTablesInput
    default_waiter?: StaffCreateNestedOneWithoutTables_defaultInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutOrdersInput = {
    id?: string
    tenant_id: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    default_waiter_id?: string | null
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutOrdersInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
  }

  export type StaffCreateWithoutOrders_as_waiterInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    tenant?: TenantCreateNestedOneWithoutStaffInput
    order_items_prepared?: OrderItemCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffUncheckedCreateWithoutOrders_as_waiterInput = {
    id?: string
    tenant_id?: string | null
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    order_items_prepared?: OrderItemUncheckedCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableUncheckedCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffCreateOrConnectWithoutOrders_as_waiterInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutOrders_as_waiterInput, StaffUncheckedCreateWithoutOrders_as_waiterInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutOrder_itemsInput
    menu_item: MenuItemCreateNestedOneWithoutOrder_itemsInput
    prepared_by_staff?: StaffCreateNestedOneWithoutOrder_items_preparedInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    tenant_id: string
    menu_item_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    prepared_by?: string | null
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutOrdersInput = {
    update: XOR<TenantUpdateWithoutOrdersInput, TenantUncheckedUpdateWithoutOrdersInput>
    create: XOR<TenantCreateWithoutOrdersInput, TenantUncheckedCreateWithoutOrdersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutOrdersInput, TenantUncheckedUpdateWithoutOrdersInput>
  }

  export type TenantUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUpdateOneWithoutTenantNestedInput
    tables?: TableUpdateManyWithoutTenantNestedInput
    categories?: CategoryUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUncheckedUpdateOneWithoutTenantNestedInput
    tables?: TableUncheckedUpdateManyWithoutTenantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUncheckedUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TableUpsertWithoutOrdersInput = {
    update: XOR<TableUpdateWithoutOrdersInput, TableUncheckedUpdateWithoutOrdersInput>
    create: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutOrdersInput, TableUncheckedUpdateWithoutOrdersInput>
  }

  export type TableUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTablesNestedInput
    default_waiter?: StaffUpdateOneWithoutTables_defaultNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    default_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTableNestedInput
  }

  export type StaffUpsertWithoutOrders_as_waiterInput = {
    update: XOR<StaffUpdateWithoutOrders_as_waiterInput, StaffUncheckedUpdateWithoutOrders_as_waiterInput>
    create: XOR<StaffCreateWithoutOrders_as_waiterInput, StaffUncheckedCreateWithoutOrders_as_waiterInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutOrders_as_waiterInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutOrders_as_waiterInput, StaffUncheckedUpdateWithoutOrders_as_waiterInput>
  }

  export type StaffUpdateWithoutOrders_as_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneWithoutStaffNestedInput
    order_items_prepared?: OrderItemUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffUncheckedUpdateWithoutOrders_as_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items_prepared?: OrderItemUncheckedUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUncheckedUpdateManyWithoutDefault_waiterNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrder_itemsInput = {
    id?: string
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutOrdersInput
    table: TableCreateNestedOneWithoutOrdersInput
    waiter?: StaffCreateNestedOneWithoutOrders_as_waiterInput
  }

  export type OrderUncheckedCreateWithoutOrder_itemsInput = {
    id?: string
    tenant_id: string
    table_id: string
    waiter_id?: string | null
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrder_itemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrder_itemsInput, OrderUncheckedCreateWithoutOrder_itemsInput>
  }

  export type TenantCreateWithoutOrder_itemsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffCreateNestedManyWithoutTenantInput
    colors?: TenantColorsCreateNestedOneWithoutTenantInput
    tables?: TableCreateNestedManyWithoutTenantInput
    categories?: CategoryCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutOrder_itemsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    colors?: TenantColorsUncheckedCreateNestedOneWithoutTenantInput
    tables?: TableUncheckedCreateNestedManyWithoutTenantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutOrder_itemsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutOrder_itemsInput, TenantUncheckedCreateWithoutOrder_itemsInput>
  }

  export type MenuItemCreateWithoutOrder_itemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutMenu_itemsInput
    category?: CategoryCreateNestedOneWithoutMenu_itemsInput
  }

  export type MenuItemUncheckedCreateWithoutOrder_itemsInput = {
    id?: string
    tenant_id: string
    category_id?: string | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MenuItemCreateOrConnectWithoutOrder_itemsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutOrder_itemsInput, MenuItemUncheckedCreateWithoutOrder_itemsInput>
  }

  export type StaffCreateWithoutOrder_items_preparedInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    tenant?: TenantCreateNestedOneWithoutStaffInput
    orders_as_waiter?: OrderCreateNestedManyWithoutWaiterInput
    audit_logs?: AuditLogCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffUncheckedCreateWithoutOrder_items_preparedInput = {
    id?: string
    tenant_id?: string | null
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    orders_as_waiter?: OrderUncheckedCreateNestedManyWithoutWaiterInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableUncheckedCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffCreateOrConnectWithoutOrder_items_preparedInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutOrder_items_preparedInput, StaffUncheckedCreateWithoutOrder_items_preparedInput>
  }

  export type OrderUpsertWithoutOrder_itemsInput = {
    update: XOR<OrderUpdateWithoutOrder_itemsInput, OrderUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<OrderCreateWithoutOrder_itemsInput, OrderUncheckedCreateWithoutOrder_itemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrder_itemsInput, OrderUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type OrderUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutOrdersNestedInput
    table?: TableUpdateOneRequiredWithoutOrdersNestedInput
    waiter?: StaffUpdateOneWithoutOrders_as_waiterNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpsertWithoutOrder_itemsInput = {
    update: XOR<TenantUpdateWithoutOrder_itemsInput, TenantUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<TenantCreateWithoutOrder_itemsInput, TenantUncheckedCreateWithoutOrder_itemsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutOrder_itemsInput, TenantUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type TenantUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUpdateOneWithoutTenantNestedInput
    tables?: TableUpdateManyWithoutTenantNestedInput
    categories?: CategoryUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUncheckedUpdateOneWithoutTenantNestedInput
    tables?: TableUncheckedUpdateManyWithoutTenantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type MenuItemUpsertWithoutOrder_itemsInput = {
    update: XOR<MenuItemUpdateWithoutOrder_itemsInput, MenuItemUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<MenuItemCreateWithoutOrder_itemsInput, MenuItemUncheckedCreateWithoutOrder_itemsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutOrder_itemsInput, MenuItemUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type MenuItemUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMenu_itemsNestedInput
    category?: CategoryUpdateOneWithoutMenu_itemsNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpsertWithoutOrder_items_preparedInput = {
    update: XOR<StaffUpdateWithoutOrder_items_preparedInput, StaffUncheckedUpdateWithoutOrder_items_preparedInput>
    create: XOR<StaffCreateWithoutOrder_items_preparedInput, StaffUncheckedCreateWithoutOrder_items_preparedInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutOrder_items_preparedInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutOrder_items_preparedInput, StaffUncheckedUpdateWithoutOrder_items_preparedInput>
  }

  export type StaffUpdateWithoutOrder_items_preparedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneWithoutStaffNestedInput
    orders_as_waiter?: OrderUpdateManyWithoutWaiterNestedInput
    audit_logs?: AuditLogUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffUncheckedUpdateWithoutOrder_items_preparedInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_as_waiter?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUncheckedUpdateManyWithoutDefault_waiterNestedInput
  }

  export type TenantCreateWithoutAudit_logsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffCreateNestedManyWithoutTenantInput
    colors?: TenantColorsCreateNestedOneWithoutTenantInput
    tables?: TableCreateNestedManyWithoutTenantInput
    categories?: CategoryCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
    order_items?: OrderItemCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    colors?: TenantColorsUncheckedCreateNestedOneWithoutTenantInput
    tables?: TableUncheckedCreateNestedManyWithoutTenantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutTenantInput
    waiter_interactions?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutAudit_logsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAudit_logsInput, TenantUncheckedCreateWithoutAudit_logsInput>
  }

  export type StaffCreateWithoutAudit_logsInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    tenant?: TenantCreateNestedOneWithoutStaffInput
    orders_as_waiter?: OrderCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemCreateNestedManyWithoutPrepared_by_staffInput
    waiter_interactions_from?: WaiterInteractionLogCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    tenant_id?: string | null
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    orders_as_waiter?: OrderUncheckedCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemUncheckedCreateNestedManyWithoutPrepared_by_staffInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedCreateNestedManyWithoutFrom_waiterInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableUncheckedCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffCreateOrConnectWithoutAudit_logsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutAudit_logsInput, StaffUncheckedCreateWithoutAudit_logsInput>
  }

  export type TenantUpsertWithoutAudit_logsInput = {
    update: XOR<TenantUpdateWithoutAudit_logsInput, TenantUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<TenantCreateWithoutAudit_logsInput, TenantUncheckedCreateWithoutAudit_logsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAudit_logsInput, TenantUncheckedUpdateWithoutAudit_logsInput>
  }

  export type TenantUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUpdateOneWithoutTenantNestedInput
    tables?: TableUpdateManyWithoutTenantNestedInput
    categories?: CategoryUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUncheckedUpdateOneWithoutTenantNestedInput
    tables?: TableUncheckedUpdateManyWithoutTenantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutTenantNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type StaffUpsertWithoutAudit_logsInput = {
    update: XOR<StaffUpdateWithoutAudit_logsInput, StaffUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<StaffCreateWithoutAudit_logsInput, StaffUncheckedCreateWithoutAudit_logsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutAudit_logsInput, StaffUncheckedUpdateWithoutAudit_logsInput>
  }

  export type StaffUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneWithoutStaffNestedInput
    orders_as_waiter?: OrderUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUpdateManyWithoutPrepared_by_staffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_as_waiter?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUncheckedUpdateManyWithoutPrepared_by_staffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUncheckedUpdateManyWithoutDefault_waiterNestedInput
  }

  export type TenantCreateWithoutWaiter_interactionsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffCreateNestedManyWithoutTenantInput
    colors?: TenantColorsCreateNestedOneWithoutTenantInput
    tables?: TableCreateNestedManyWithoutTenantInput
    categories?: CategoryCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
    order_items?: OrderItemCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutWaiter_interactionsInput = {
    id?: string
    name: string
    subdomain: string
    plan?: $Enums.TenantPlan
    status?: $Enums.TenantStatus
    logo_url?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    deleted_by?: string | null
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    colors?: TenantColorsUncheckedCreateNestedOneWithoutTenantInput
    tables?: TableUncheckedCreateNestedManyWithoutTenantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutTenantInput
    menu_items?: MenuItemUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutTenantInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutWaiter_interactionsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutWaiter_interactionsInput, TenantUncheckedCreateWithoutWaiter_interactionsInput>
  }

  export type TableCreateWithoutWaiter_interactionsInput = {
    id?: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    tenant: TenantCreateNestedOneWithoutTablesInput
    default_waiter?: StaffCreateNestedOneWithoutTables_defaultInput
    orders?: OrderCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutWaiter_interactionsInput = {
    id?: string
    tenant_id: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    default_waiter_id?: string | null
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutWaiter_interactionsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutWaiter_interactionsInput, TableUncheckedCreateWithoutWaiter_interactionsInput>
  }

  export type StaffCreateWithoutWaiter_interactions_fromInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    tenant?: TenantCreateNestedOneWithoutStaffInput
    orders_as_waiter?: OrderCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogCreateNestedManyWithoutStaffInput
    waiter_interactions_to?: WaiterInteractionLogCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffUncheckedCreateWithoutWaiter_interactions_fromInput = {
    id?: string
    tenant_id?: string | null
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    orders_as_waiter?: OrderUncheckedCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemUncheckedCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutStaffInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedCreateNestedManyWithoutTo_waiterInput
    tables_default?: TableUncheckedCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffCreateOrConnectWithoutWaiter_interactions_fromInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutWaiter_interactions_fromInput, StaffUncheckedCreateWithoutWaiter_interactions_fromInput>
  }

  export type StaffCreateWithoutWaiter_interactions_toInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    tenant?: TenantCreateNestedOneWithoutStaffInput
    orders_as_waiter?: OrderCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogCreateNestedManyWithoutFrom_waiterInput
    tables_default?: TableCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffUncheckedCreateWithoutWaiter_interactions_toInput = {
    id?: string
    tenant_id?: string | null
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
    orders_as_waiter?: OrderUncheckedCreateNestedManyWithoutWaiterInput
    order_items_prepared?: OrderItemUncheckedCreateNestedManyWithoutPrepared_by_staffInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutStaffInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedCreateNestedManyWithoutFrom_waiterInput
    tables_default?: TableUncheckedCreateNestedManyWithoutDefault_waiterInput
  }

  export type StaffCreateOrConnectWithoutWaiter_interactions_toInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutWaiter_interactions_toInput, StaffUncheckedCreateWithoutWaiter_interactions_toInput>
  }

  export type TenantUpsertWithoutWaiter_interactionsInput = {
    update: XOR<TenantUpdateWithoutWaiter_interactionsInput, TenantUncheckedUpdateWithoutWaiter_interactionsInput>
    create: XOR<TenantCreateWithoutWaiter_interactionsInput, TenantUncheckedCreateWithoutWaiter_interactionsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutWaiter_interactionsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutWaiter_interactionsInput, TenantUncheckedUpdateWithoutWaiter_interactionsInput>
  }

  export type TenantUpdateWithoutWaiter_interactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUpdateOneWithoutTenantNestedInput
    tables?: TableUpdateManyWithoutTenantNestedInput
    categories?: CategoryUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutWaiter_interactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    colors?: TenantColorsUncheckedUpdateOneWithoutTenantNestedInput
    tables?: TableUncheckedUpdateManyWithoutTenantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutTenantNestedInput
    menu_items?: MenuItemUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutTenantNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TableUpsertWithoutWaiter_interactionsInput = {
    update: XOR<TableUpdateWithoutWaiter_interactionsInput, TableUncheckedUpdateWithoutWaiter_interactionsInput>
    create: XOR<TableCreateWithoutWaiter_interactionsInput, TableUncheckedCreateWithoutWaiter_interactionsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutWaiter_interactionsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutWaiter_interactionsInput, TableUncheckedUpdateWithoutWaiter_interactionsInput>
  }

  export type TableUpdateWithoutWaiter_interactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTablesNestedInput
    default_waiter?: StaffUpdateOneWithoutTables_defaultNestedInput
    orders?: OrderUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutWaiter_interactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    default_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
  }

  export type StaffUpsertWithoutWaiter_interactions_fromInput = {
    update: XOR<StaffUpdateWithoutWaiter_interactions_fromInput, StaffUncheckedUpdateWithoutWaiter_interactions_fromInput>
    create: XOR<StaffCreateWithoutWaiter_interactions_fromInput, StaffUncheckedCreateWithoutWaiter_interactions_fromInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutWaiter_interactions_fromInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutWaiter_interactions_fromInput, StaffUncheckedUpdateWithoutWaiter_interactions_fromInput>
  }

  export type StaffUpdateWithoutWaiter_interactions_fromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneWithoutStaffNestedInput
    orders_as_waiter?: OrderUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUpdateManyWithoutStaffNestedInput
    waiter_interactions_to?: WaiterInteractionLogUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffUncheckedUpdateWithoutWaiter_interactions_fromInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_as_waiter?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUncheckedUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutStaffNestedInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUncheckedUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffUpsertWithoutWaiter_interactions_toInput = {
    update: XOR<StaffUpdateWithoutWaiter_interactions_toInput, StaffUncheckedUpdateWithoutWaiter_interactions_toInput>
    create: XOR<StaffCreateWithoutWaiter_interactions_toInput, StaffUncheckedCreateWithoutWaiter_interactions_toInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutWaiter_interactions_toInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutWaiter_interactions_toInput, StaffUncheckedUpdateWithoutWaiter_interactions_toInput>
  }

  export type StaffUpdateWithoutWaiter_interactions_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneWithoutStaffNestedInput
    orders_as_waiter?: OrderUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUpdateManyWithoutFrom_waiterNestedInput
    tables_default?: TableUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffUncheckedUpdateWithoutWaiter_interactions_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_as_waiter?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUncheckedUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterNestedInput
    tables_default?: TableUncheckedUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffCreateManyTenantInput = {
    id?: string
    name: string
    profile: $Enums.StaffProfile
    email: string
    password_hash?: string | null
    last_password_change_at?: Date | string | null
    password_change_required?: boolean
    access_code_hash?: string | null
    access_code_expires_at?: Date | string | null
    photo_url?: string | null
    active?: boolean
    first_access_completed?: boolean
    commission_rate?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    last_access_at?: Date | string | null
  }

  export type TableCreateManyTenantInput = {
    id?: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    default_waiter_id?: string | null
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryCreateManyTenantInput = {
    id?: string
    name: string
    description?: string | null
    sort_order?: number
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MenuItemCreateManyTenantInput = {
    id?: string
    category_id?: string | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderCreateManyTenantInput = {
    id?: string
    table_id: string
    waiter_id?: string | null
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateManyTenantInput = {
    id?: string
    order_id: string
    menu_item_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    prepared_by?: string | null
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AuditLogCreateManyTenantInput = {
    id?: string
    staff_id?: string | null
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type WaiterInteractionLogCreateManyTenantInput = {
    id?: string
    table_id: string
    from_waiter_id?: string | null
    to_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type StaffUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_as_waiter?: OrderUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_as_waiter?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
    order_items_prepared?: OrderItemUncheckedUpdateManyWithoutPrepared_by_staffNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutStaffNestedInput
    waiter_interactions_from?: WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterNestedInput
    waiter_interactions_to?: WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterNestedInput
    tables_default?: TableUncheckedUpdateManyWithoutDefault_waiterNestedInput
  }

  export type StaffUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: EnumStaffProfileFieldUpdateOperationsInput | $Enums.StaffProfile
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    last_password_change_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_change_required?: BoolFieldUpdateOperationsInput | boolean
    access_code_hash?: NullableStringFieldUpdateOperationsInput | string | null
    access_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    first_access_completed?: BoolFieldUpdateOperationsInput | boolean
    commission_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_access_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TableUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    default_waiter?: StaffUpdateOneWithoutTables_defaultNestedInput
    orders?: OrderUpdateManyWithoutTableNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    default_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    default_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    menu_items?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    menu_items?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutMenu_itemsNestedInput
    order_items?: OrderItemUpdateManyWithoutMenu_itemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutMenu_itemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutOrdersNestedInput
    waiter?: StaffUpdateOneWithoutOrders_as_waiterNestedInput
    order_items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrder_itemsNestedInput
    menu_item?: MenuItemUpdateOneRequiredWithoutOrder_itemsNestedInput
    prepared_by_staff?: StaffUpdateOneWithoutOrder_items_preparedNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    menu_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prepared_by?: NullableStringFieldUpdateOperationsInput | string | null
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    menu_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prepared_by?: NullableStringFieldUpdateOperationsInput | string | null
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateOneWithoutAudit_logsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutWaiter_interactionsNestedInput
    from_waiter?: StaffUpdateOneWithoutWaiter_interactions_fromNestedInput
    to_waiter?: StaffUpdateOneWithoutWaiter_interactions_toNestedInput
  }

  export type WaiterInteractionLogUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    from_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    to_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    from_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    to_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyWaiterInput = {
    id?: string
    tenant_id: string
    table_id: string
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateManyPrepared_by_staffInput = {
    id?: string
    order_id: string
    tenant_id: string
    menu_item_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AuditLogCreateManyStaffInput = {
    id?: string
    tenant_id: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type WaiterInteractionLogCreateManyFrom_waiterInput = {
    id?: string
    tenant_id: string
    table_id: string
    to_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type WaiterInteractionLogCreateManyTo_waiterInput = {
    id?: string
    tenant_id: string
    table_id: string
    from_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type TableCreateManyDefault_waiterInput = {
    id?: string
    tenant_id: string
    number: number
    capacity: number
    location?: string | null
    status?: $Enums.TableStatus
    qr_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderUpdateWithoutWaiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutOrdersNestedInput
    table?: TableUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutWaiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutWaiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutPrepared_by_staffInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrder_itemsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutOrder_itemsNestedInput
    menu_item?: MenuItemUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutPrepared_by_staffInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    menu_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutPrepared_by_staffInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    menu_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAudit_logsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogUpdateWithoutFrom_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWaiter_interactionsNestedInput
    table?: TableUpdateOneRequiredWithoutWaiter_interactionsNestedInput
    to_waiter?: StaffUpdateOneWithoutWaiter_interactions_toNestedInput
  }

  export type WaiterInteractionLogUncheckedUpdateWithoutFrom_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    to_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogUncheckedUpdateManyWithoutFrom_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    to_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogUpdateWithoutTo_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWaiter_interactionsNestedInput
    table?: TableUpdateOneRequiredWithoutWaiter_interactionsNestedInput
    from_waiter?: StaffUpdateOneWithoutWaiter_interactions_fromNestedInput
  }

  export type WaiterInteractionLogUncheckedUpdateWithoutTo_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    from_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogUncheckedUpdateManyWithoutTo_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    from_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUpdateWithoutDefault_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTablesNestedInput
    orders?: OrderUpdateManyWithoutTableNestedInput
    waiter_interactions?: WaiterInteractionLogUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutDefault_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
    waiter_interactions?: WaiterInteractionLogUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutDefault_waiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateManyCategoryInput = {
    id?: string
    tenant_id: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    available?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MenuItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMenu_itemsNestedInput
    order_items?: OrderItemUpdateManyWithoutMenu_itemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutMenu_itemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    preparation_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyMenu_itemInput = {
    id?: string
    order_id: string
    tenant_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    prepared_by?: string | null
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemUpdateWithoutMenu_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrder_itemsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutOrder_itemsNestedInput
    prepared_by_staff?: StaffUpdateOneWithoutOrder_items_preparedNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMenu_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prepared_by?: NullableStringFieldUpdateOperationsInput | string | null
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutMenu_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prepared_by?: NullableStringFieldUpdateOperationsInput | string | null
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyTableInput = {
    id?: string
    tenant_id: string
    waiter_id?: string | null
    customer_name?: string | null
    password_hash?: string | null
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    tip?: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    opened_at?: Date | string
    closed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WaiterInteractionLogCreateManyTableInput = {
    id?: string
    tenant_id: string
    from_waiter_id?: string | null
    to_waiter_id?: string | null
    interaction_type: $Enums.InteractionType
    reason?: string | null
    created_at?: Date | string
  }

  export type OrderUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutOrdersNestedInput
    waiter?: StaffUpdateOneWithoutOrders_as_waiterNestedInput
    order_items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tip?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    opened_at?: DateTimeFieldUpdateOperationsInput | Date | string
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWaiter_interactionsNestedInput
    from_waiter?: StaffUpdateOneWithoutWaiter_interactions_fromNestedInput
    to_waiter?: StaffUpdateOneWithoutWaiter_interactions_toNestedInput
  }

  export type WaiterInteractionLogUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    from_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    to_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterInteractionLogUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    from_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    to_waiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    interaction_type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    tenant_id: string
    menu_item_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    observations?: string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ItemStatus
    prepared_by?: string | null
    sent_to_kitchen_at?: Date | string | null
    ready_at?: Date | string | null
    delivered_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutOrder_itemsNestedInput
    menu_item?: MenuItemUpdateOneRequiredWithoutOrder_itemsNestedInput
    prepared_by_staff?: StaffUpdateOneWithoutOrder_items_preparedNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    menu_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prepared_by?: NullableStringFieldUpdateOperationsInput | string | null
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    menu_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    options_chosen?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prepared_by?: NullableStringFieldUpdateOperationsInput | string | null
    sent_to_kitchen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ready_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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