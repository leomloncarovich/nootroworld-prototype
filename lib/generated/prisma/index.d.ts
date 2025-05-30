
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Supplement
 * 
 */
export type Supplement = $Result.DefaultSelection<Prisma.$SupplementPayload>
/**
 * Model Benefit
 * 
 */
export type Benefit = $Result.DefaultSelection<Prisma.$BenefitPayload>
/**
 * Model SupplementBenefit
 * 
 */
export type SupplementBenefit = $Result.DefaultSelection<Prisma.$SupplementBenefitPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model UsageGuide
 * 
 */
export type UsageGuide = $Result.DefaultSelection<Prisma.$UsageGuidePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.supplement`: Exposes CRUD operations for the **Supplement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supplements
    * const supplements = await prisma.supplement.findMany()
    * ```
    */
  get supplement(): Prisma.SupplementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.benefit`: Exposes CRUD operations for the **Benefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benefits
    * const benefits = await prisma.benefit.findMany()
    * ```
    */
  get benefit(): Prisma.BenefitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplementBenefit`: Exposes CRUD operations for the **SupplementBenefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplementBenefits
    * const supplementBenefits = await prisma.supplementBenefit.findMany()
    * ```
    */
  get supplementBenefit(): Prisma.SupplementBenefitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageGuide`: Exposes CRUD operations for the **UsageGuide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageGuides
    * const usageGuides = await prisma.usageGuide.findMany()
    * ```
    */
  get usageGuide(): Prisma.UsageGuideDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Category: 'Category',
    Supplement: 'Supplement',
    Benefit: 'Benefit',
    SupplementBenefit: 'SupplementBenefit',
    Product: 'Product',
    UsageGuide: 'UsageGuide'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "supplement" | "benefit" | "supplementBenefit" | "product" | "usageGuide"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Supplement: {
        payload: Prisma.$SupplementPayload<ExtArgs>
        fields: Prisma.SupplementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload>
          }
          findFirst: {
            args: Prisma.SupplementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload>
          }
          findMany: {
            args: Prisma.SupplementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload>[]
          }
          create: {
            args: Prisma.SupplementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload>
          }
          createMany: {
            args: Prisma.SupplementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload>[]
          }
          delete: {
            args: Prisma.SupplementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload>
          }
          update: {
            args: Prisma.SupplementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload>
          }
          deleteMany: {
            args: Prisma.SupplementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload>[]
          }
          upsert: {
            args: Prisma.SupplementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementPayload>
          }
          aggregate: {
            args: Prisma.SupplementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplement>
          }
          groupBy: {
            args: Prisma.SupplementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplementCountArgs<ExtArgs>
            result: $Utils.Optional<SupplementCountAggregateOutputType> | number
          }
        }
      }
      Benefit: {
        payload: Prisma.$BenefitPayload<ExtArgs>
        fields: Prisma.BenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findFirst: {
            args: Prisma.BenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findMany: {
            args: Prisma.BenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          create: {
            args: Prisma.BenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          createMany: {
            args: Prisma.BenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          delete: {
            args: Prisma.BenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          update: {
            args: Prisma.BenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          deleteMany: {
            args: Prisma.BenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          upsert: {
            args: Prisma.BenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          aggregate: {
            args: Prisma.BenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenefit>
          }
          groupBy: {
            args: Prisma.BenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenefitCountArgs<ExtArgs>
            result: $Utils.Optional<BenefitCountAggregateOutputType> | number
          }
        }
      }
      SupplementBenefit: {
        payload: Prisma.$SupplementBenefitPayload<ExtArgs>
        fields: Prisma.SupplementBenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplementBenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplementBenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload>
          }
          findFirst: {
            args: Prisma.SupplementBenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplementBenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload>
          }
          findMany: {
            args: Prisma.SupplementBenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload>[]
          }
          create: {
            args: Prisma.SupplementBenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload>
          }
          createMany: {
            args: Prisma.SupplementBenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplementBenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload>[]
          }
          delete: {
            args: Prisma.SupplementBenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload>
          }
          update: {
            args: Prisma.SupplementBenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload>
          }
          deleteMany: {
            args: Prisma.SupplementBenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplementBenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplementBenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload>[]
          }
          upsert: {
            args: Prisma.SupplementBenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplementBenefitPayload>
          }
          aggregate: {
            args: Prisma.SupplementBenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplementBenefit>
          }
          groupBy: {
            args: Prisma.SupplementBenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplementBenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplementBenefitCountArgs<ExtArgs>
            result: $Utils.Optional<SupplementBenefitCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      UsageGuide: {
        payload: Prisma.$UsageGuidePayload<ExtArgs>
        fields: Prisma.UsageGuideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageGuideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageGuideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload>
          }
          findFirst: {
            args: Prisma.UsageGuideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageGuideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload>
          }
          findMany: {
            args: Prisma.UsageGuideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload>[]
          }
          create: {
            args: Prisma.UsageGuideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload>
          }
          createMany: {
            args: Prisma.UsageGuideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageGuideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload>[]
          }
          delete: {
            args: Prisma.UsageGuideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload>
          }
          update: {
            args: Prisma.UsageGuideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload>
          }
          deleteMany: {
            args: Prisma.UsageGuideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageGuideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageGuideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload>[]
          }
          upsert: {
            args: Prisma.UsageGuideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageGuidePayload>
          }
          aggregate: {
            args: Prisma.UsageGuideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageGuide>
          }
          groupBy: {
            args: Prisma.UsageGuideGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageGuideGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageGuideCountArgs<ExtArgs>
            result: $Utils.Optional<UsageGuideCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    supplement?: SupplementOmit
    benefit?: BenefitOmit
    supplementBenefit?: SupplementBenefitOmit
    product?: ProductOmit
    usageGuide?: UsageGuideOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    supplements: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplements?: boolean | CategoryCountOutputTypeCountSupplementsArgs
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
  export type CategoryCountOutputTypeCountSupplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplementWhereInput
  }


  /**
   * Count Type SupplementCountOutputType
   */

  export type SupplementCountOutputType = {
    benefits: number
    products: number
  }

  export type SupplementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefits?: boolean | SupplementCountOutputTypeCountBenefitsArgs
    products?: boolean | SupplementCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SupplementCountOutputType without action
   */
  export type SupplementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementCountOutputType
     */
    select?: SupplementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplementCountOutputType without action
   */
  export type SupplementCountOutputTypeCountBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplementBenefitWhereInput
  }

  /**
   * SupplementCountOutputType without action
   */
  export type SupplementCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type BenefitCountOutputType
   */

  export type BenefitCountOutputType = {
    supplements: number
  }

  export type BenefitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplements?: boolean | BenefitCountOutputTypeCountSupplementsArgs
  }

  // Custom InputTypes
  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitCountOutputType
     */
    select?: BenefitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeCountSupplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplementBenefitWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
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
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplements?: boolean | Category$supplementsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplements?: boolean | Category$supplementsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      supplements: Prisma.$SupplementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
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
    supplements<T extends Category$supplementsArgs<ExtArgs> = {}>(args?: Subset<T, Category$supplementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
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
   * Category.supplements
   */
  export type Category$supplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    where?: SupplementWhereInput
    orderBy?: SupplementOrderByWithRelationInput | SupplementOrderByWithRelationInput[]
    cursor?: SupplementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplementScalarFieldEnum | SupplementScalarFieldEnum[]
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
   * Model Supplement
   */

  export type AggregateSupplement = {
    _count: SupplementCountAggregateOutputType | null
    _avg: SupplementAvgAggregateOutputType | null
    _sum: SupplementSumAggregateOutputType | null
    _min: SupplementMinAggregateOutputType | null
    _max: SupplementMaxAggregateOutputType | null
  }

  export type SupplementAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    rating: number | null
    reviews: number | null
  }

  export type SupplementSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    rating: number | null
    reviews: number | null
  }

  export type SupplementMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    categoryId: number | null
    rating: number | null
    reviews: number | null
    topPrice: string | null
    badge: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplementMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    categoryId: number | null
    rating: number | null
    reviews: number | null
    topPrice: string | null
    badge: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    categoryId: number
    rating: number
    reviews: number
    topPrice: number
    badge: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplementAvgAggregateInputType = {
    id?: true
    categoryId?: true
    rating?: true
    reviews?: true
  }

  export type SupplementSumAggregateInputType = {
    id?: true
    categoryId?: true
    rating?: true
    reviews?: true
  }

  export type SupplementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    rating?: true
    reviews?: true
    topPrice?: true
    badge?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    rating?: true
    reviews?: true
    topPrice?: true
    badge?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    rating?: true
    reviews?: true
    topPrice?: true
    badge?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplement to aggregate.
     */
    where?: SupplementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supplements to fetch.
     */
    orderBy?: SupplementOrderByWithRelationInput | SupplementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supplements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Supplements
    **/
    _count?: true | SupplementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplementMaxAggregateInputType
  }

  export type GetSupplementAggregateType<T extends SupplementAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplement[P]>
      : GetScalarType<T[P], AggregateSupplement[P]>
  }




  export type SupplementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplementWhereInput
    orderBy?: SupplementOrderByWithAggregationInput | SupplementOrderByWithAggregationInput[]
    by: SupplementScalarFieldEnum[] | SupplementScalarFieldEnum
    having?: SupplementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplementCountAggregateInputType | true
    _avg?: SupplementAvgAggregateInputType
    _sum?: SupplementSumAggregateInputType
    _min?: SupplementMinAggregateInputType
    _max?: SupplementMaxAggregateInputType
  }

  export type SupplementGroupByOutputType = {
    id: number
    name: string
    description: string | null
    categoryId: number
    rating: number
    reviews: number
    topPrice: string
    badge: string | null
    link: string | null
    createdAt: Date
    updatedAt: Date
    _count: SupplementCountAggregateOutputType | null
    _avg: SupplementAvgAggregateOutputType | null
    _sum: SupplementSumAggregateOutputType | null
    _min: SupplementMinAggregateOutputType | null
    _max: SupplementMaxAggregateOutputType | null
  }

  type GetSupplementGroupByPayload<T extends SupplementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplementGroupByOutputType[P]>
            : GetScalarType<T[P], SupplementGroupByOutputType[P]>
        }
      >
    >


  export type SupplementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    rating?: boolean
    reviews?: boolean
    topPrice?: boolean
    badge?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    benefits?: boolean | Supplement$benefitsArgs<ExtArgs>
    products?: boolean | Supplement$productsArgs<ExtArgs>
    usageGuide?: boolean | Supplement$usageGuideArgs<ExtArgs>
    _count?: boolean | SupplementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplement"]>

  export type SupplementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    rating?: boolean
    reviews?: boolean
    topPrice?: boolean
    badge?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplement"]>

  export type SupplementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    rating?: boolean
    reviews?: boolean
    topPrice?: boolean
    badge?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplement"]>

  export type SupplementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    rating?: boolean
    reviews?: boolean
    topPrice?: boolean
    badge?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "categoryId" | "rating" | "reviews" | "topPrice" | "badge" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["supplement"]>
  export type SupplementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    benefits?: boolean | Supplement$benefitsArgs<ExtArgs>
    products?: boolean | Supplement$productsArgs<ExtArgs>
    usageGuide?: boolean | Supplement$usageGuideArgs<ExtArgs>
    _count?: boolean | SupplementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SupplementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $SupplementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplement"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      benefits: Prisma.$SupplementBenefitPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      usageGuide: Prisma.$UsageGuidePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      categoryId: number
      rating: number
      reviews: number
      topPrice: string
      badge: string | null
      link: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplement"]>
    composites: {}
  }

  type SupplementGetPayload<S extends boolean | null | undefined | SupplementDefaultArgs> = $Result.GetResult<Prisma.$SupplementPayload, S>

  type SupplementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplementCountAggregateInputType | true
    }

  export interface SupplementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplement'], meta: { name: 'Supplement' } }
    /**
     * Find zero or one Supplement that matches the filter.
     * @param {SupplementFindUniqueArgs} args - Arguments to find a Supplement
     * @example
     * // Get one Supplement
     * const supplement = await prisma.supplement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplementFindUniqueArgs>(args: SelectSubset<T, SupplementFindUniqueArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplementFindUniqueOrThrowArgs} args - Arguments to find a Supplement
     * @example
     * // Get one Supplement
     * const supplement = await prisma.supplement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplementFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementFindFirstArgs} args - Arguments to find a Supplement
     * @example
     * // Get one Supplement
     * const supplement = await prisma.supplement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplementFindFirstArgs>(args?: SelectSubset<T, SupplementFindFirstArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementFindFirstOrThrowArgs} args - Arguments to find a Supplement
     * @example
     * // Get one Supplement
     * const supplement = await prisma.supplement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplementFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supplements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supplements
     * const supplements = await prisma.supplement.findMany()
     * 
     * // Get first 10 Supplements
     * const supplements = await prisma.supplement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplementWithIdOnly = await prisma.supplement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplementFindManyArgs>(args?: SelectSubset<T, SupplementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplement.
     * @param {SupplementCreateArgs} args - Arguments to create a Supplement.
     * @example
     * // Create one Supplement
     * const Supplement = await prisma.supplement.create({
     *   data: {
     *     // ... data to create a Supplement
     *   }
     * })
     * 
     */
    create<T extends SupplementCreateArgs>(args: SelectSubset<T, SupplementCreateArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supplements.
     * @param {SupplementCreateManyArgs} args - Arguments to create many Supplements.
     * @example
     * // Create many Supplements
     * const supplement = await prisma.supplement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplementCreateManyArgs>(args?: SelectSubset<T, SupplementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supplements and returns the data saved in the database.
     * @param {SupplementCreateManyAndReturnArgs} args - Arguments to create many Supplements.
     * @example
     * // Create many Supplements
     * const supplement = await prisma.supplement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supplements and only return the `id`
     * const supplementWithIdOnly = await prisma.supplement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplementCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplement.
     * @param {SupplementDeleteArgs} args - Arguments to delete one Supplement.
     * @example
     * // Delete one Supplement
     * const Supplement = await prisma.supplement.delete({
     *   where: {
     *     // ... filter to delete one Supplement
     *   }
     * })
     * 
     */
    delete<T extends SupplementDeleteArgs>(args: SelectSubset<T, SupplementDeleteArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplement.
     * @param {SupplementUpdateArgs} args - Arguments to update one Supplement.
     * @example
     * // Update one Supplement
     * const supplement = await prisma.supplement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplementUpdateArgs>(args: SelectSubset<T, SupplementUpdateArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supplements.
     * @param {SupplementDeleteManyArgs} args - Arguments to filter Supplements to delete.
     * @example
     * // Delete a few Supplements
     * const { count } = await prisma.supplement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplementDeleteManyArgs>(args?: SelectSubset<T, SupplementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supplements
     * const supplement = await prisma.supplement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplementUpdateManyArgs>(args: SelectSubset<T, SupplementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supplements and returns the data updated in the database.
     * @param {SupplementUpdateManyAndReturnArgs} args - Arguments to update many Supplements.
     * @example
     * // Update many Supplements
     * const supplement = await prisma.supplement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supplements and only return the `id`
     * const supplementWithIdOnly = await prisma.supplement.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplementUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplement.
     * @param {SupplementUpsertArgs} args - Arguments to update or create a Supplement.
     * @example
     * // Update or create a Supplement
     * const supplement = await prisma.supplement.upsert({
     *   create: {
     *     // ... data to create a Supplement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplement we want to update
     *   }
     * })
     */
    upsert<T extends SupplementUpsertArgs>(args: SelectSubset<T, SupplementUpsertArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementCountArgs} args - Arguments to filter Supplements to count.
     * @example
     * // Count the number of Supplements
     * const count = await prisma.supplement.count({
     *   where: {
     *     // ... the filter for the Supplements we want to count
     *   }
     * })
    **/
    count<T extends SupplementCountArgs>(
      args?: Subset<T, SupplementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplementAggregateArgs>(args: Subset<T, SupplementAggregateArgs>): Prisma.PrismaPromise<GetSupplementAggregateType<T>>

    /**
     * Group by Supplement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementGroupByArgs} args - Group by arguments.
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
      T extends SupplementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplementGroupByArgs['orderBy'] }
        : { orderBy?: SupplementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplement model
   */
  readonly fields: SupplementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    benefits<T extends Supplement$benefitsArgs<ExtArgs> = {}>(args?: Subset<T, Supplement$benefitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Supplement$productsArgs<ExtArgs> = {}>(args?: Subset<T, Supplement$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageGuide<T extends Supplement$usageGuideArgs<ExtArgs> = {}>(args?: Subset<T, Supplement$usageGuideArgs<ExtArgs>>): Prisma__UsageGuideClient<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Supplement model
   */
  interface SupplementFieldRefs {
    readonly id: FieldRef<"Supplement", 'Int'>
    readonly name: FieldRef<"Supplement", 'String'>
    readonly description: FieldRef<"Supplement", 'String'>
    readonly categoryId: FieldRef<"Supplement", 'Int'>
    readonly rating: FieldRef<"Supplement", 'Float'>
    readonly reviews: FieldRef<"Supplement", 'Int'>
    readonly topPrice: FieldRef<"Supplement", 'String'>
    readonly badge: FieldRef<"Supplement", 'String'>
    readonly link: FieldRef<"Supplement", 'String'>
    readonly createdAt: FieldRef<"Supplement", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplement findUnique
   */
  export type SupplementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    /**
     * Filter, which Supplement to fetch.
     */
    where: SupplementWhereUniqueInput
  }

  /**
   * Supplement findUniqueOrThrow
   */
  export type SupplementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    /**
     * Filter, which Supplement to fetch.
     */
    where: SupplementWhereUniqueInput
  }

  /**
   * Supplement findFirst
   */
  export type SupplementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    /**
     * Filter, which Supplement to fetch.
     */
    where?: SupplementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supplements to fetch.
     */
    orderBy?: SupplementOrderByWithRelationInput | SupplementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supplements.
     */
    cursor?: SupplementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supplements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supplements.
     */
    distinct?: SupplementScalarFieldEnum | SupplementScalarFieldEnum[]
  }

  /**
   * Supplement findFirstOrThrow
   */
  export type SupplementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    /**
     * Filter, which Supplement to fetch.
     */
    where?: SupplementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supplements to fetch.
     */
    orderBy?: SupplementOrderByWithRelationInput | SupplementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supplements.
     */
    cursor?: SupplementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supplements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supplements.
     */
    distinct?: SupplementScalarFieldEnum | SupplementScalarFieldEnum[]
  }

  /**
   * Supplement findMany
   */
  export type SupplementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    /**
     * Filter, which Supplements to fetch.
     */
    where?: SupplementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supplements to fetch.
     */
    orderBy?: SupplementOrderByWithRelationInput | SupplementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Supplements.
     */
    cursor?: SupplementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supplements.
     */
    skip?: number
    distinct?: SupplementScalarFieldEnum | SupplementScalarFieldEnum[]
  }

  /**
   * Supplement create
   */
  export type SupplementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplement.
     */
    data: XOR<SupplementCreateInput, SupplementUncheckedCreateInput>
  }

  /**
   * Supplement createMany
   */
  export type SupplementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Supplements.
     */
    data: SupplementCreateManyInput | SupplementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplement createManyAndReturn
   */
  export type SupplementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * The data used to create many Supplements.
     */
    data: SupplementCreateManyInput | SupplementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Supplement update
   */
  export type SupplementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplement.
     */
    data: XOR<SupplementUpdateInput, SupplementUncheckedUpdateInput>
    /**
     * Choose, which Supplement to update.
     */
    where: SupplementWhereUniqueInput
  }

  /**
   * Supplement updateMany
   */
  export type SupplementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Supplements.
     */
    data: XOR<SupplementUpdateManyMutationInput, SupplementUncheckedUpdateManyInput>
    /**
     * Filter which Supplements to update
     */
    where?: SupplementWhereInput
    /**
     * Limit how many Supplements to update.
     */
    limit?: number
  }

  /**
   * Supplement updateManyAndReturn
   */
  export type SupplementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * The data used to update Supplements.
     */
    data: XOR<SupplementUpdateManyMutationInput, SupplementUncheckedUpdateManyInput>
    /**
     * Filter which Supplements to update
     */
    where?: SupplementWhereInput
    /**
     * Limit how many Supplements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Supplement upsert
   */
  export type SupplementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplement to update in case it exists.
     */
    where: SupplementWhereUniqueInput
    /**
     * In case the Supplement found by the `where` argument doesn't exist, create a new Supplement with this data.
     */
    create: XOR<SupplementCreateInput, SupplementUncheckedCreateInput>
    /**
     * In case the Supplement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplementUpdateInput, SupplementUncheckedUpdateInput>
  }

  /**
   * Supplement delete
   */
  export type SupplementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
    /**
     * Filter which Supplement to delete.
     */
    where: SupplementWhereUniqueInput
  }

  /**
   * Supplement deleteMany
   */
  export type SupplementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplements to delete
     */
    where?: SupplementWhereInput
    /**
     * Limit how many Supplements to delete.
     */
    limit?: number
  }

  /**
   * Supplement.benefits
   */
  export type Supplement$benefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    where?: SupplementBenefitWhereInput
    orderBy?: SupplementBenefitOrderByWithRelationInput | SupplementBenefitOrderByWithRelationInput[]
    cursor?: SupplementBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplementBenefitScalarFieldEnum | SupplementBenefitScalarFieldEnum[]
  }

  /**
   * Supplement.products
   */
  export type Supplement$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Supplement.usageGuide
   */
  export type Supplement$usageGuideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    where?: UsageGuideWhereInput
  }

  /**
   * Supplement without action
   */
  export type SupplementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplement
     */
    select?: SupplementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplement
     */
    omit?: SupplementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementInclude<ExtArgs> | null
  }


  /**
   * Model Benefit
   */

  export type AggregateBenefit = {
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  export type BenefitAvgAggregateOutputType = {
    id: number | null
  }

  export type BenefitSumAggregateOutputType = {
    id: number | null
  }

  export type BenefitMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BenefitAvgAggregateInputType = {
    id?: true
  }

  export type BenefitSumAggregateInputType = {
    id?: true
  }

  export type BenefitMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefit to aggregate.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Benefits
    **/
    _count?: true | BenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenefitMaxAggregateInputType
  }

  export type GetBenefitAggregateType<T extends BenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefit[P]>
      : GetScalarType<T[P], AggregateBenefit[P]>
  }




  export type BenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitWhereInput
    orderBy?: BenefitOrderByWithAggregationInput | BenefitOrderByWithAggregationInput[]
    by: BenefitScalarFieldEnum[] | BenefitScalarFieldEnum
    having?: BenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenefitCountAggregateInputType | true
    _avg?: BenefitAvgAggregateInputType
    _sum?: BenefitSumAggregateInputType
    _min?: BenefitMinAggregateInputType
    _max?: BenefitMaxAggregateInputType
  }

  export type BenefitGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  type GetBenefitGroupByPayload<T extends BenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenefitGroupByOutputType[P]>
            : GetScalarType<T[P], BenefitGroupByOutputType[P]>
        }
      >
    >


  export type BenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplements?: boolean | Benefit$supplementsArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["benefit"]>
  export type BenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplements?: boolean | Benefit$supplementsArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Benefit"
    objects: {
      supplements: Prisma.$SupplementBenefitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["benefit"]>
    composites: {}
  }

  type BenefitGetPayload<S extends boolean | null | undefined | BenefitDefaultArgs> = $Result.GetResult<Prisma.$BenefitPayload, S>

  type BenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BenefitCountAggregateInputType | true
    }

  export interface BenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Benefit'], meta: { name: 'Benefit' } }
    /**
     * Find zero or one Benefit that matches the filter.
     * @param {BenefitFindUniqueArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BenefitFindUniqueArgs>(args: SelectSubset<T, BenefitFindUniqueArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Benefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BenefitFindUniqueOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, BenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BenefitFindFirstArgs>(args?: SelectSubset<T, BenefitFindFirstArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, BenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benefits
     * const benefits = await prisma.benefit.findMany()
     * 
     * // Get first 10 Benefits
     * const benefits = await prisma.benefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benefitWithIdOnly = await prisma.benefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BenefitFindManyArgs>(args?: SelectSubset<T, BenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Benefit.
     * @param {BenefitCreateArgs} args - Arguments to create a Benefit.
     * @example
     * // Create one Benefit
     * const Benefit = await prisma.benefit.create({
     *   data: {
     *     // ... data to create a Benefit
     *   }
     * })
     * 
     */
    create<T extends BenefitCreateArgs>(args: SelectSubset<T, BenefitCreateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Benefits.
     * @param {BenefitCreateManyArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BenefitCreateManyArgs>(args?: SelectSubset<T, BenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Benefits and returns the data saved in the database.
     * @param {BenefitCreateManyAndReturnArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, BenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Benefit.
     * @param {BenefitDeleteArgs} args - Arguments to delete one Benefit.
     * @example
     * // Delete one Benefit
     * const Benefit = await prisma.benefit.delete({
     *   where: {
     *     // ... filter to delete one Benefit
     *   }
     * })
     * 
     */
    delete<T extends BenefitDeleteArgs>(args: SelectSubset<T, BenefitDeleteArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Benefit.
     * @param {BenefitUpdateArgs} args - Arguments to update one Benefit.
     * @example
     * // Update one Benefit
     * const benefit = await prisma.benefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BenefitUpdateArgs>(args: SelectSubset<T, BenefitUpdateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Benefits.
     * @param {BenefitDeleteManyArgs} args - Arguments to filter Benefits to delete.
     * @example
     * // Delete a few Benefits
     * const { count } = await prisma.benefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BenefitDeleteManyArgs>(args?: SelectSubset<T, BenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BenefitUpdateManyArgs>(args: SelectSubset<T, BenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits and returns the data updated in the database.
     * @param {BenefitUpdateManyAndReturnArgs} args - Arguments to update many Benefits.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.updateManyAndReturn({
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
    updateManyAndReturn<T extends BenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, BenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Benefit.
     * @param {BenefitUpsertArgs} args - Arguments to update or create a Benefit.
     * @example
     * // Update or create a Benefit
     * const benefit = await prisma.benefit.upsert({
     *   create: {
     *     // ... data to create a Benefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benefit we want to update
     *   }
     * })
     */
    upsert<T extends BenefitUpsertArgs>(args: SelectSubset<T, BenefitUpsertArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitCountArgs} args - Arguments to filter Benefits to count.
     * @example
     * // Count the number of Benefits
     * const count = await prisma.benefit.count({
     *   where: {
     *     // ... the filter for the Benefits we want to count
     *   }
     * })
    **/
    count<T extends BenefitCountArgs>(
      args?: Subset<T, BenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BenefitAggregateArgs>(args: Subset<T, BenefitAggregateArgs>): Prisma.PrismaPromise<GetBenefitAggregateType<T>>

    /**
     * Group by Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitGroupByArgs} args - Group by arguments.
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
      T extends BenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenefitGroupByArgs['orderBy'] }
        : { orderBy?: BenefitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Benefit model
   */
  readonly fields: BenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Benefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplements<T extends Benefit$supplementsArgs<ExtArgs> = {}>(args?: Subset<T, Benefit$supplementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Benefit model
   */
  interface BenefitFieldRefs {
    readonly id: FieldRef<"Benefit", 'Int'>
    readonly name: FieldRef<"Benefit", 'String'>
    readonly description: FieldRef<"Benefit", 'String'>
    readonly createdAt: FieldRef<"Benefit", 'DateTime'>
    readonly updatedAt: FieldRef<"Benefit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Benefit findUnique
   */
  export type BenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findUniqueOrThrow
   */
  export type BenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findFirst
   */
  export type BenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findFirstOrThrow
   */
  export type BenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findMany
   */
  export type BenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefits to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit create
   */
  export type BenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a Benefit.
     */
    data: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
  }

  /**
   * Benefit createMany
   */
  export type BenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit createManyAndReturn
   */
  export type BenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit update
   */
  export type BenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a Benefit.
     */
    data: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
    /**
     * Choose, which Benefit to update.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit updateMany
   */
  export type BenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
  }

  /**
   * Benefit updateManyAndReturn
   */
  export type BenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
  }

  /**
   * Benefit upsert
   */
  export type BenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the Benefit to update in case it exists.
     */
    where: BenefitWhereUniqueInput
    /**
     * In case the Benefit found by the `where` argument doesn't exist, create a new Benefit with this data.
     */
    create: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
    /**
     * In case the Benefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
  }

  /**
   * Benefit delete
   */
  export type BenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter which Benefit to delete.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit deleteMany
   */
  export type BenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefits to delete
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to delete.
     */
    limit?: number
  }

  /**
   * Benefit.supplements
   */
  export type Benefit$supplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    where?: SupplementBenefitWhereInput
    orderBy?: SupplementBenefitOrderByWithRelationInput | SupplementBenefitOrderByWithRelationInput[]
    cursor?: SupplementBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplementBenefitScalarFieldEnum | SupplementBenefitScalarFieldEnum[]
  }

  /**
   * Benefit without action
   */
  export type BenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
  }


  /**
   * Model SupplementBenefit
   */

  export type AggregateSupplementBenefit = {
    _count: SupplementBenefitCountAggregateOutputType | null
    _avg: SupplementBenefitAvgAggregateOutputType | null
    _sum: SupplementBenefitSumAggregateOutputType | null
    _min: SupplementBenefitMinAggregateOutputType | null
    _max: SupplementBenefitMaxAggregateOutputType | null
  }

  export type SupplementBenefitAvgAggregateOutputType = {
    supplementId: number | null
    benefitId: number | null
  }

  export type SupplementBenefitSumAggregateOutputType = {
    supplementId: number | null
    benefitId: number | null
  }

  export type SupplementBenefitMinAggregateOutputType = {
    supplementId: number | null
    benefitId: number | null
  }

  export type SupplementBenefitMaxAggregateOutputType = {
    supplementId: number | null
    benefitId: number | null
  }

  export type SupplementBenefitCountAggregateOutputType = {
    supplementId: number
    benefitId: number
    _all: number
  }


  export type SupplementBenefitAvgAggregateInputType = {
    supplementId?: true
    benefitId?: true
  }

  export type SupplementBenefitSumAggregateInputType = {
    supplementId?: true
    benefitId?: true
  }

  export type SupplementBenefitMinAggregateInputType = {
    supplementId?: true
    benefitId?: true
  }

  export type SupplementBenefitMaxAggregateInputType = {
    supplementId?: true
    benefitId?: true
  }

  export type SupplementBenefitCountAggregateInputType = {
    supplementId?: true
    benefitId?: true
    _all?: true
  }

  export type SupplementBenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplementBenefit to aggregate.
     */
    where?: SupplementBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplementBenefits to fetch.
     */
    orderBy?: SupplementBenefitOrderByWithRelationInput | SupplementBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplementBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplementBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplementBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplementBenefits
    **/
    _count?: true | SupplementBenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplementBenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplementBenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplementBenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplementBenefitMaxAggregateInputType
  }

  export type GetSupplementBenefitAggregateType<T extends SupplementBenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplementBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplementBenefit[P]>
      : GetScalarType<T[P], AggregateSupplementBenefit[P]>
  }




  export type SupplementBenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplementBenefitWhereInput
    orderBy?: SupplementBenefitOrderByWithAggregationInput | SupplementBenefitOrderByWithAggregationInput[]
    by: SupplementBenefitScalarFieldEnum[] | SupplementBenefitScalarFieldEnum
    having?: SupplementBenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplementBenefitCountAggregateInputType | true
    _avg?: SupplementBenefitAvgAggregateInputType
    _sum?: SupplementBenefitSumAggregateInputType
    _min?: SupplementBenefitMinAggregateInputType
    _max?: SupplementBenefitMaxAggregateInputType
  }

  export type SupplementBenefitGroupByOutputType = {
    supplementId: number
    benefitId: number
    _count: SupplementBenefitCountAggregateOutputType | null
    _avg: SupplementBenefitAvgAggregateOutputType | null
    _sum: SupplementBenefitSumAggregateOutputType | null
    _min: SupplementBenefitMinAggregateOutputType | null
    _max: SupplementBenefitMaxAggregateOutputType | null
  }

  type GetSupplementBenefitGroupByPayload<T extends SupplementBenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplementBenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplementBenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplementBenefitGroupByOutputType[P]>
            : GetScalarType<T[P], SupplementBenefitGroupByOutputType[P]>
        }
      >
    >


  export type SupplementBenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supplementId?: boolean
    benefitId?: boolean
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplementBenefit"]>

  export type SupplementBenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supplementId?: boolean
    benefitId?: boolean
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplementBenefit"]>

  export type SupplementBenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supplementId?: boolean
    benefitId?: boolean
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplementBenefit"]>

  export type SupplementBenefitSelectScalar = {
    supplementId?: boolean
    benefitId?: boolean
  }

  export type SupplementBenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"supplementId" | "benefitId", ExtArgs["result"]["supplementBenefit"]>
  export type SupplementBenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }
  export type SupplementBenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }
  export type SupplementBenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }

  export type $SupplementBenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplementBenefit"
    objects: {
      supplement: Prisma.$SupplementPayload<ExtArgs>
      benefit: Prisma.$BenefitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      supplementId: number
      benefitId: number
    }, ExtArgs["result"]["supplementBenefit"]>
    composites: {}
  }

  type SupplementBenefitGetPayload<S extends boolean | null | undefined | SupplementBenefitDefaultArgs> = $Result.GetResult<Prisma.$SupplementBenefitPayload, S>

  type SupplementBenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplementBenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplementBenefitCountAggregateInputType | true
    }

  export interface SupplementBenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplementBenefit'], meta: { name: 'SupplementBenefit' } }
    /**
     * Find zero or one SupplementBenefit that matches the filter.
     * @param {SupplementBenefitFindUniqueArgs} args - Arguments to find a SupplementBenefit
     * @example
     * // Get one SupplementBenefit
     * const supplementBenefit = await prisma.supplementBenefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplementBenefitFindUniqueArgs>(args: SelectSubset<T, SupplementBenefitFindUniqueArgs<ExtArgs>>): Prisma__SupplementBenefitClient<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupplementBenefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplementBenefitFindUniqueOrThrowArgs} args - Arguments to find a SupplementBenefit
     * @example
     * // Get one SupplementBenefit
     * const supplementBenefit = await prisma.supplementBenefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplementBenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplementBenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplementBenefitClient<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplementBenefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementBenefitFindFirstArgs} args - Arguments to find a SupplementBenefit
     * @example
     * // Get one SupplementBenefit
     * const supplementBenefit = await prisma.supplementBenefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplementBenefitFindFirstArgs>(args?: SelectSubset<T, SupplementBenefitFindFirstArgs<ExtArgs>>): Prisma__SupplementBenefitClient<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplementBenefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementBenefitFindFirstOrThrowArgs} args - Arguments to find a SupplementBenefit
     * @example
     * // Get one SupplementBenefit
     * const supplementBenefit = await prisma.supplementBenefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplementBenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplementBenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplementBenefitClient<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupplementBenefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementBenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplementBenefits
     * const supplementBenefits = await prisma.supplementBenefit.findMany()
     * 
     * // Get first 10 SupplementBenefits
     * const supplementBenefits = await prisma.supplementBenefit.findMany({ take: 10 })
     * 
     * // Only select the `supplementId`
     * const supplementBenefitWithSupplementIdOnly = await prisma.supplementBenefit.findMany({ select: { supplementId: true } })
     * 
     */
    findMany<T extends SupplementBenefitFindManyArgs>(args?: SelectSubset<T, SupplementBenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupplementBenefit.
     * @param {SupplementBenefitCreateArgs} args - Arguments to create a SupplementBenefit.
     * @example
     * // Create one SupplementBenefit
     * const SupplementBenefit = await prisma.supplementBenefit.create({
     *   data: {
     *     // ... data to create a SupplementBenefit
     *   }
     * })
     * 
     */
    create<T extends SupplementBenefitCreateArgs>(args: SelectSubset<T, SupplementBenefitCreateArgs<ExtArgs>>): Prisma__SupplementBenefitClient<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupplementBenefits.
     * @param {SupplementBenefitCreateManyArgs} args - Arguments to create many SupplementBenefits.
     * @example
     * // Create many SupplementBenefits
     * const supplementBenefit = await prisma.supplementBenefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplementBenefitCreateManyArgs>(args?: SelectSubset<T, SupplementBenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplementBenefits and returns the data saved in the database.
     * @param {SupplementBenefitCreateManyAndReturnArgs} args - Arguments to create many SupplementBenefits.
     * @example
     * // Create many SupplementBenefits
     * const supplementBenefit = await prisma.supplementBenefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplementBenefits and only return the `supplementId`
     * const supplementBenefitWithSupplementIdOnly = await prisma.supplementBenefit.createManyAndReturn({
     *   select: { supplementId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplementBenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplementBenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupplementBenefit.
     * @param {SupplementBenefitDeleteArgs} args - Arguments to delete one SupplementBenefit.
     * @example
     * // Delete one SupplementBenefit
     * const SupplementBenefit = await prisma.supplementBenefit.delete({
     *   where: {
     *     // ... filter to delete one SupplementBenefit
     *   }
     * })
     * 
     */
    delete<T extends SupplementBenefitDeleteArgs>(args: SelectSubset<T, SupplementBenefitDeleteArgs<ExtArgs>>): Prisma__SupplementBenefitClient<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupplementBenefit.
     * @param {SupplementBenefitUpdateArgs} args - Arguments to update one SupplementBenefit.
     * @example
     * // Update one SupplementBenefit
     * const supplementBenefit = await prisma.supplementBenefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplementBenefitUpdateArgs>(args: SelectSubset<T, SupplementBenefitUpdateArgs<ExtArgs>>): Prisma__SupplementBenefitClient<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupplementBenefits.
     * @param {SupplementBenefitDeleteManyArgs} args - Arguments to filter SupplementBenefits to delete.
     * @example
     * // Delete a few SupplementBenefits
     * const { count } = await prisma.supplementBenefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplementBenefitDeleteManyArgs>(args?: SelectSubset<T, SupplementBenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplementBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementBenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplementBenefits
     * const supplementBenefit = await prisma.supplementBenefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplementBenefitUpdateManyArgs>(args: SelectSubset<T, SupplementBenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplementBenefits and returns the data updated in the database.
     * @param {SupplementBenefitUpdateManyAndReturnArgs} args - Arguments to update many SupplementBenefits.
     * @example
     * // Update many SupplementBenefits
     * const supplementBenefit = await prisma.supplementBenefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupplementBenefits and only return the `supplementId`
     * const supplementBenefitWithSupplementIdOnly = await prisma.supplementBenefit.updateManyAndReturn({
     *   select: { supplementId: true },
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
    updateManyAndReturn<T extends SupplementBenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplementBenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupplementBenefit.
     * @param {SupplementBenefitUpsertArgs} args - Arguments to update or create a SupplementBenefit.
     * @example
     * // Update or create a SupplementBenefit
     * const supplementBenefit = await prisma.supplementBenefit.upsert({
     *   create: {
     *     // ... data to create a SupplementBenefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplementBenefit we want to update
     *   }
     * })
     */
    upsert<T extends SupplementBenefitUpsertArgs>(args: SelectSubset<T, SupplementBenefitUpsertArgs<ExtArgs>>): Prisma__SupplementBenefitClient<$Result.GetResult<Prisma.$SupplementBenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupplementBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementBenefitCountArgs} args - Arguments to filter SupplementBenefits to count.
     * @example
     * // Count the number of SupplementBenefits
     * const count = await prisma.supplementBenefit.count({
     *   where: {
     *     // ... the filter for the SupplementBenefits we want to count
     *   }
     * })
    **/
    count<T extends SupplementBenefitCountArgs>(
      args?: Subset<T, SupplementBenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplementBenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplementBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementBenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplementBenefitAggregateArgs>(args: Subset<T, SupplementBenefitAggregateArgs>): Prisma.PrismaPromise<GetSupplementBenefitAggregateType<T>>

    /**
     * Group by SupplementBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementBenefitGroupByArgs} args - Group by arguments.
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
      T extends SupplementBenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplementBenefitGroupByArgs['orderBy'] }
        : { orderBy?: SupplementBenefitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplementBenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplementBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplementBenefit model
   */
  readonly fields: SupplementBenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplementBenefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplementBenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplement<T extends SupplementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplementDefaultArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    benefit<T extends BenefitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BenefitDefaultArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupplementBenefit model
   */
  interface SupplementBenefitFieldRefs {
    readonly supplementId: FieldRef<"SupplementBenefit", 'Int'>
    readonly benefitId: FieldRef<"SupplementBenefit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SupplementBenefit findUnique
   */
  export type SupplementBenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SupplementBenefit to fetch.
     */
    where: SupplementBenefitWhereUniqueInput
  }

  /**
   * SupplementBenefit findUniqueOrThrow
   */
  export type SupplementBenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SupplementBenefit to fetch.
     */
    where: SupplementBenefitWhereUniqueInput
  }

  /**
   * SupplementBenefit findFirst
   */
  export type SupplementBenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SupplementBenefit to fetch.
     */
    where?: SupplementBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplementBenefits to fetch.
     */
    orderBy?: SupplementBenefitOrderByWithRelationInput | SupplementBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplementBenefits.
     */
    cursor?: SupplementBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplementBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplementBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplementBenefits.
     */
    distinct?: SupplementBenefitScalarFieldEnum | SupplementBenefitScalarFieldEnum[]
  }

  /**
   * SupplementBenefit findFirstOrThrow
   */
  export type SupplementBenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SupplementBenefit to fetch.
     */
    where?: SupplementBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplementBenefits to fetch.
     */
    orderBy?: SupplementBenefitOrderByWithRelationInput | SupplementBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplementBenefits.
     */
    cursor?: SupplementBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplementBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplementBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplementBenefits.
     */
    distinct?: SupplementBenefitScalarFieldEnum | SupplementBenefitScalarFieldEnum[]
  }

  /**
   * SupplementBenefit findMany
   */
  export type SupplementBenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SupplementBenefits to fetch.
     */
    where?: SupplementBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplementBenefits to fetch.
     */
    orderBy?: SupplementBenefitOrderByWithRelationInput | SupplementBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplementBenefits.
     */
    cursor?: SupplementBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplementBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplementBenefits.
     */
    skip?: number
    distinct?: SupplementBenefitScalarFieldEnum | SupplementBenefitScalarFieldEnum[]
  }

  /**
   * SupplementBenefit create
   */
  export type SupplementBenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplementBenefit.
     */
    data: XOR<SupplementBenefitCreateInput, SupplementBenefitUncheckedCreateInput>
  }

  /**
   * SupplementBenefit createMany
   */
  export type SupplementBenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplementBenefits.
     */
    data: SupplementBenefitCreateManyInput | SupplementBenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplementBenefit createManyAndReturn
   */
  export type SupplementBenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * The data used to create many SupplementBenefits.
     */
    data: SupplementBenefitCreateManyInput | SupplementBenefitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplementBenefit update
   */
  export type SupplementBenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplementBenefit.
     */
    data: XOR<SupplementBenefitUpdateInput, SupplementBenefitUncheckedUpdateInput>
    /**
     * Choose, which SupplementBenefit to update.
     */
    where: SupplementBenefitWhereUniqueInput
  }

  /**
   * SupplementBenefit updateMany
   */
  export type SupplementBenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplementBenefits.
     */
    data: XOR<SupplementBenefitUpdateManyMutationInput, SupplementBenefitUncheckedUpdateManyInput>
    /**
     * Filter which SupplementBenefits to update
     */
    where?: SupplementBenefitWhereInput
    /**
     * Limit how many SupplementBenefits to update.
     */
    limit?: number
  }

  /**
   * SupplementBenefit updateManyAndReturn
   */
  export type SupplementBenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * The data used to update SupplementBenefits.
     */
    data: XOR<SupplementBenefitUpdateManyMutationInput, SupplementBenefitUncheckedUpdateManyInput>
    /**
     * Filter which SupplementBenefits to update
     */
    where?: SupplementBenefitWhereInput
    /**
     * Limit how many SupplementBenefits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplementBenefit upsert
   */
  export type SupplementBenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplementBenefit to update in case it exists.
     */
    where: SupplementBenefitWhereUniqueInput
    /**
     * In case the SupplementBenefit found by the `where` argument doesn't exist, create a new SupplementBenefit with this data.
     */
    create: XOR<SupplementBenefitCreateInput, SupplementBenefitUncheckedCreateInput>
    /**
     * In case the SupplementBenefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplementBenefitUpdateInput, SupplementBenefitUncheckedUpdateInput>
  }

  /**
   * SupplementBenefit delete
   */
  export type SupplementBenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
    /**
     * Filter which SupplementBenefit to delete.
     */
    where: SupplementBenefitWhereUniqueInput
  }

  /**
   * SupplementBenefit deleteMany
   */
  export type SupplementBenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplementBenefits to delete
     */
    where?: SupplementBenefitWhereInput
    /**
     * Limit how many SupplementBenefits to delete.
     */
    limit?: number
  }

  /**
   * SupplementBenefit without action
   */
  export type SupplementBenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementBenefit
     */
    select?: SupplementBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplementBenefit
     */
    omit?: SupplementBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplementBenefitInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    rank: number | null
    rating: number | null
    reviews: number | null
    supplementId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    rank: number | null
    rating: number | null
    reviews: number | null
    supplementId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    rank: number | null
    name: string | null
    brand: string | null
    price: string | null
    rating: number | null
    reviews: number | null
    dosage: string | null
    capsules: string | null
    badge: string | null
    supplementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    rank: number | null
    name: string | null
    brand: string | null
    price: string | null
    rating: number | null
    reviews: number | null
    dosage: string | null
    capsules: string | null
    badge: string | null
    supplementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    rank: number
    name: number
    brand: number
    price: number
    rating: number
    reviews: number
    dosage: number
    capsules: number
    badge: number
    supplementId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    rank?: true
    rating?: true
    reviews?: true
    supplementId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    rank?: true
    rating?: true
    reviews?: true
    supplementId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    rank?: true
    name?: true
    brand?: true
    price?: true
    rating?: true
    reviews?: true
    dosage?: true
    capsules?: true
    badge?: true
    supplementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    rank?: true
    name?: true
    brand?: true
    price?: true
    rating?: true
    reviews?: true
    dosage?: true
    capsules?: true
    badge?: true
    supplementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    rank?: true
    name?: true
    brand?: true
    price?: true
    rating?: true
    reviews?: true
    dosage?: true
    capsules?: true
    badge?: true
    supplementId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    rank: number | null
    name: string
    brand: string
    price: string
    rating: number
    reviews: number
    dosage: string
    capsules: string
    badge: string | null
    supplementId: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rank?: boolean
    name?: boolean
    brand?: boolean
    price?: boolean
    rating?: boolean
    reviews?: boolean
    dosage?: boolean
    capsules?: boolean
    badge?: boolean
    supplementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rank?: boolean
    name?: boolean
    brand?: boolean
    price?: boolean
    rating?: boolean
    reviews?: boolean
    dosage?: boolean
    capsules?: boolean
    badge?: boolean
    supplementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rank?: boolean
    name?: boolean
    brand?: boolean
    price?: boolean
    rating?: boolean
    reviews?: boolean
    dosage?: boolean
    capsules?: boolean
    badge?: boolean
    supplementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    rank?: boolean
    name?: boolean
    brand?: boolean
    price?: boolean
    rating?: boolean
    reviews?: boolean
    dosage?: boolean
    capsules?: boolean
    badge?: boolean
    supplementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rank" | "name" | "brand" | "price" | "rating" | "reviews" | "dosage" | "capsules" | "badge" | "supplementId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      supplement: Prisma.$SupplementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rank: number | null
      name: string
      brand: string
      price: string
      rating: number
      reviews: number
      dosage: string
      capsules: string
      badge: string | null
      supplementId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplement<T extends SupplementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplementDefaultArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly rank: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'String'>
    readonly rating: FieldRef<"Product", 'Float'>
    readonly reviews: FieldRef<"Product", 'Int'>
    readonly dosage: FieldRef<"Product", 'String'>
    readonly capsules: FieldRef<"Product", 'String'>
    readonly badge: FieldRef<"Product", 'String'>
    readonly supplementId: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model UsageGuide
   */

  export type AggregateUsageGuide = {
    _count: UsageGuideCountAggregateOutputType | null
    _avg: UsageGuideAvgAggregateOutputType | null
    _sum: UsageGuideSumAggregateOutputType | null
    _min: UsageGuideMinAggregateOutputType | null
    _max: UsageGuideMaxAggregateOutputType | null
  }

  export type UsageGuideAvgAggregateOutputType = {
    id: number | null
    supplementId: number | null
  }

  export type UsageGuideSumAggregateOutputType = {
    id: number | null
    supplementId: number | null
  }

  export type UsageGuideMinAggregateOutputType = {
    id: number | null
    supplementId: number | null
    timing: string | null
    timingDesc: string | null
    withFood: string | null
    withFoodDesc: string | null
    timeToEffect: string | null
    effectDesc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageGuideMaxAggregateOutputType = {
    id: number | null
    supplementId: number | null
    timing: string | null
    timingDesc: string | null
    withFood: string | null
    withFoodDesc: string | null
    timeToEffect: string | null
    effectDesc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageGuideCountAggregateOutputType = {
    id: number
    supplementId: number
    timing: number
    timingDesc: number
    withFood: number
    withFoodDesc: number
    timeToEffect: number
    effectDesc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsageGuideAvgAggregateInputType = {
    id?: true
    supplementId?: true
  }

  export type UsageGuideSumAggregateInputType = {
    id?: true
    supplementId?: true
  }

  export type UsageGuideMinAggregateInputType = {
    id?: true
    supplementId?: true
    timing?: true
    timingDesc?: true
    withFood?: true
    withFoodDesc?: true
    timeToEffect?: true
    effectDesc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageGuideMaxAggregateInputType = {
    id?: true
    supplementId?: true
    timing?: true
    timingDesc?: true
    withFood?: true
    withFoodDesc?: true
    timeToEffect?: true
    effectDesc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageGuideCountAggregateInputType = {
    id?: true
    supplementId?: true
    timing?: true
    timingDesc?: true
    withFood?: true
    withFoodDesc?: true
    timeToEffect?: true
    effectDesc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsageGuideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageGuide to aggregate.
     */
    where?: UsageGuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageGuides to fetch.
     */
    orderBy?: UsageGuideOrderByWithRelationInput | UsageGuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageGuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageGuides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageGuides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageGuides
    **/
    _count?: true | UsageGuideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageGuideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageGuideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageGuideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageGuideMaxAggregateInputType
  }

  export type GetUsageGuideAggregateType<T extends UsageGuideAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageGuide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageGuide[P]>
      : GetScalarType<T[P], AggregateUsageGuide[P]>
  }




  export type UsageGuideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageGuideWhereInput
    orderBy?: UsageGuideOrderByWithAggregationInput | UsageGuideOrderByWithAggregationInput[]
    by: UsageGuideScalarFieldEnum[] | UsageGuideScalarFieldEnum
    having?: UsageGuideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageGuideCountAggregateInputType | true
    _avg?: UsageGuideAvgAggregateInputType
    _sum?: UsageGuideSumAggregateInputType
    _min?: UsageGuideMinAggregateInputType
    _max?: UsageGuideMaxAggregateInputType
  }

  export type UsageGuideGroupByOutputType = {
    id: number
    supplementId: number
    timing: string | null
    timingDesc: string | null
    withFood: string | null
    withFoodDesc: string | null
    timeToEffect: string | null
    effectDesc: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsageGuideCountAggregateOutputType | null
    _avg: UsageGuideAvgAggregateOutputType | null
    _sum: UsageGuideSumAggregateOutputType | null
    _min: UsageGuideMinAggregateOutputType | null
    _max: UsageGuideMaxAggregateOutputType | null
  }

  type GetUsageGuideGroupByPayload<T extends UsageGuideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageGuideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageGuideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageGuideGroupByOutputType[P]>
            : GetScalarType<T[P], UsageGuideGroupByOutputType[P]>
        }
      >
    >


  export type UsageGuideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplementId?: boolean
    timing?: boolean
    timingDesc?: boolean
    withFood?: boolean
    withFoodDesc?: boolean
    timeToEffect?: boolean
    effectDesc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageGuide"]>

  export type UsageGuideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplementId?: boolean
    timing?: boolean
    timingDesc?: boolean
    withFood?: boolean
    withFoodDesc?: boolean
    timeToEffect?: boolean
    effectDesc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageGuide"]>

  export type UsageGuideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplementId?: boolean
    timing?: boolean
    timingDesc?: boolean
    withFood?: boolean
    withFoodDesc?: boolean
    timeToEffect?: boolean
    effectDesc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageGuide"]>

  export type UsageGuideSelectScalar = {
    id?: boolean
    supplementId?: boolean
    timing?: boolean
    timingDesc?: boolean
    withFood?: boolean
    withFoodDesc?: boolean
    timeToEffect?: boolean
    effectDesc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsageGuideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplementId" | "timing" | "timingDesc" | "withFood" | "withFoodDesc" | "timeToEffect" | "effectDesc" | "createdAt" | "updatedAt", ExtArgs["result"]["usageGuide"]>
  export type UsageGuideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }
  export type UsageGuideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }
  export type UsageGuideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplement?: boolean | SupplementDefaultArgs<ExtArgs>
  }

  export type $UsageGuidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageGuide"
    objects: {
      supplement: Prisma.$SupplementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supplementId: number
      timing: string | null
      timingDesc: string | null
      withFood: string | null
      withFoodDesc: string | null
      timeToEffect: string | null
      effectDesc: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usageGuide"]>
    composites: {}
  }

  type UsageGuideGetPayload<S extends boolean | null | undefined | UsageGuideDefaultArgs> = $Result.GetResult<Prisma.$UsageGuidePayload, S>

  type UsageGuideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageGuideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageGuideCountAggregateInputType | true
    }

  export interface UsageGuideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageGuide'], meta: { name: 'UsageGuide' } }
    /**
     * Find zero or one UsageGuide that matches the filter.
     * @param {UsageGuideFindUniqueArgs} args - Arguments to find a UsageGuide
     * @example
     * // Get one UsageGuide
     * const usageGuide = await prisma.usageGuide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageGuideFindUniqueArgs>(args: SelectSubset<T, UsageGuideFindUniqueArgs<ExtArgs>>): Prisma__UsageGuideClient<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageGuide that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageGuideFindUniqueOrThrowArgs} args - Arguments to find a UsageGuide
     * @example
     * // Get one UsageGuide
     * const usageGuide = await prisma.usageGuide.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageGuideFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageGuideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageGuideClient<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageGuide that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageGuideFindFirstArgs} args - Arguments to find a UsageGuide
     * @example
     * // Get one UsageGuide
     * const usageGuide = await prisma.usageGuide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageGuideFindFirstArgs>(args?: SelectSubset<T, UsageGuideFindFirstArgs<ExtArgs>>): Prisma__UsageGuideClient<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageGuide that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageGuideFindFirstOrThrowArgs} args - Arguments to find a UsageGuide
     * @example
     * // Get one UsageGuide
     * const usageGuide = await prisma.usageGuide.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageGuideFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageGuideFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageGuideClient<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageGuides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageGuideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageGuides
     * const usageGuides = await prisma.usageGuide.findMany()
     * 
     * // Get first 10 UsageGuides
     * const usageGuides = await prisma.usageGuide.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageGuideWithIdOnly = await prisma.usageGuide.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageGuideFindManyArgs>(args?: SelectSubset<T, UsageGuideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageGuide.
     * @param {UsageGuideCreateArgs} args - Arguments to create a UsageGuide.
     * @example
     * // Create one UsageGuide
     * const UsageGuide = await prisma.usageGuide.create({
     *   data: {
     *     // ... data to create a UsageGuide
     *   }
     * })
     * 
     */
    create<T extends UsageGuideCreateArgs>(args: SelectSubset<T, UsageGuideCreateArgs<ExtArgs>>): Prisma__UsageGuideClient<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageGuides.
     * @param {UsageGuideCreateManyArgs} args - Arguments to create many UsageGuides.
     * @example
     * // Create many UsageGuides
     * const usageGuide = await prisma.usageGuide.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageGuideCreateManyArgs>(args?: SelectSubset<T, UsageGuideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageGuides and returns the data saved in the database.
     * @param {UsageGuideCreateManyAndReturnArgs} args - Arguments to create many UsageGuides.
     * @example
     * // Create many UsageGuides
     * const usageGuide = await prisma.usageGuide.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageGuides and only return the `id`
     * const usageGuideWithIdOnly = await prisma.usageGuide.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageGuideCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageGuideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageGuide.
     * @param {UsageGuideDeleteArgs} args - Arguments to delete one UsageGuide.
     * @example
     * // Delete one UsageGuide
     * const UsageGuide = await prisma.usageGuide.delete({
     *   where: {
     *     // ... filter to delete one UsageGuide
     *   }
     * })
     * 
     */
    delete<T extends UsageGuideDeleteArgs>(args: SelectSubset<T, UsageGuideDeleteArgs<ExtArgs>>): Prisma__UsageGuideClient<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageGuide.
     * @param {UsageGuideUpdateArgs} args - Arguments to update one UsageGuide.
     * @example
     * // Update one UsageGuide
     * const usageGuide = await prisma.usageGuide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageGuideUpdateArgs>(args: SelectSubset<T, UsageGuideUpdateArgs<ExtArgs>>): Prisma__UsageGuideClient<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageGuides.
     * @param {UsageGuideDeleteManyArgs} args - Arguments to filter UsageGuides to delete.
     * @example
     * // Delete a few UsageGuides
     * const { count } = await prisma.usageGuide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageGuideDeleteManyArgs>(args?: SelectSubset<T, UsageGuideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageGuides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageGuideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageGuides
     * const usageGuide = await prisma.usageGuide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageGuideUpdateManyArgs>(args: SelectSubset<T, UsageGuideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageGuides and returns the data updated in the database.
     * @param {UsageGuideUpdateManyAndReturnArgs} args - Arguments to update many UsageGuides.
     * @example
     * // Update many UsageGuides
     * const usageGuide = await prisma.usageGuide.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageGuides and only return the `id`
     * const usageGuideWithIdOnly = await prisma.usageGuide.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsageGuideUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageGuideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageGuide.
     * @param {UsageGuideUpsertArgs} args - Arguments to update or create a UsageGuide.
     * @example
     * // Update or create a UsageGuide
     * const usageGuide = await prisma.usageGuide.upsert({
     *   create: {
     *     // ... data to create a UsageGuide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageGuide we want to update
     *   }
     * })
     */
    upsert<T extends UsageGuideUpsertArgs>(args: SelectSubset<T, UsageGuideUpsertArgs<ExtArgs>>): Prisma__UsageGuideClient<$Result.GetResult<Prisma.$UsageGuidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageGuides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageGuideCountArgs} args - Arguments to filter UsageGuides to count.
     * @example
     * // Count the number of UsageGuides
     * const count = await prisma.usageGuide.count({
     *   where: {
     *     // ... the filter for the UsageGuides we want to count
     *   }
     * })
    **/
    count<T extends UsageGuideCountArgs>(
      args?: Subset<T, UsageGuideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageGuideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageGuide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageGuideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsageGuideAggregateArgs>(args: Subset<T, UsageGuideAggregateArgs>): Prisma.PrismaPromise<GetUsageGuideAggregateType<T>>

    /**
     * Group by UsageGuide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageGuideGroupByArgs} args - Group by arguments.
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
      T extends UsageGuideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageGuideGroupByArgs['orderBy'] }
        : { orderBy?: UsageGuideGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsageGuideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageGuideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageGuide model
   */
  readonly fields: UsageGuideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageGuide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageGuideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplement<T extends SupplementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplementDefaultArgs<ExtArgs>>): Prisma__SupplementClient<$Result.GetResult<Prisma.$SupplementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsageGuide model
   */
  interface UsageGuideFieldRefs {
    readonly id: FieldRef<"UsageGuide", 'Int'>
    readonly supplementId: FieldRef<"UsageGuide", 'Int'>
    readonly timing: FieldRef<"UsageGuide", 'String'>
    readonly timingDesc: FieldRef<"UsageGuide", 'String'>
    readonly withFood: FieldRef<"UsageGuide", 'String'>
    readonly withFoodDesc: FieldRef<"UsageGuide", 'String'>
    readonly timeToEffect: FieldRef<"UsageGuide", 'String'>
    readonly effectDesc: FieldRef<"UsageGuide", 'String'>
    readonly createdAt: FieldRef<"UsageGuide", 'DateTime'>
    readonly updatedAt: FieldRef<"UsageGuide", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageGuide findUnique
   */
  export type UsageGuideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    /**
     * Filter, which UsageGuide to fetch.
     */
    where: UsageGuideWhereUniqueInput
  }

  /**
   * UsageGuide findUniqueOrThrow
   */
  export type UsageGuideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    /**
     * Filter, which UsageGuide to fetch.
     */
    where: UsageGuideWhereUniqueInput
  }

  /**
   * UsageGuide findFirst
   */
  export type UsageGuideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    /**
     * Filter, which UsageGuide to fetch.
     */
    where?: UsageGuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageGuides to fetch.
     */
    orderBy?: UsageGuideOrderByWithRelationInput | UsageGuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageGuides.
     */
    cursor?: UsageGuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageGuides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageGuides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageGuides.
     */
    distinct?: UsageGuideScalarFieldEnum | UsageGuideScalarFieldEnum[]
  }

  /**
   * UsageGuide findFirstOrThrow
   */
  export type UsageGuideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    /**
     * Filter, which UsageGuide to fetch.
     */
    where?: UsageGuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageGuides to fetch.
     */
    orderBy?: UsageGuideOrderByWithRelationInput | UsageGuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageGuides.
     */
    cursor?: UsageGuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageGuides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageGuides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageGuides.
     */
    distinct?: UsageGuideScalarFieldEnum | UsageGuideScalarFieldEnum[]
  }

  /**
   * UsageGuide findMany
   */
  export type UsageGuideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    /**
     * Filter, which UsageGuides to fetch.
     */
    where?: UsageGuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageGuides to fetch.
     */
    orderBy?: UsageGuideOrderByWithRelationInput | UsageGuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageGuides.
     */
    cursor?: UsageGuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageGuides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageGuides.
     */
    skip?: number
    distinct?: UsageGuideScalarFieldEnum | UsageGuideScalarFieldEnum[]
  }

  /**
   * UsageGuide create
   */
  export type UsageGuideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageGuide.
     */
    data: XOR<UsageGuideCreateInput, UsageGuideUncheckedCreateInput>
  }

  /**
   * UsageGuide createMany
   */
  export type UsageGuideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageGuides.
     */
    data: UsageGuideCreateManyInput | UsageGuideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageGuide createManyAndReturn
   */
  export type UsageGuideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * The data used to create many UsageGuides.
     */
    data: UsageGuideCreateManyInput | UsageGuideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageGuide update
   */
  export type UsageGuideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageGuide.
     */
    data: XOR<UsageGuideUpdateInput, UsageGuideUncheckedUpdateInput>
    /**
     * Choose, which UsageGuide to update.
     */
    where: UsageGuideWhereUniqueInput
  }

  /**
   * UsageGuide updateMany
   */
  export type UsageGuideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageGuides.
     */
    data: XOR<UsageGuideUpdateManyMutationInput, UsageGuideUncheckedUpdateManyInput>
    /**
     * Filter which UsageGuides to update
     */
    where?: UsageGuideWhereInput
    /**
     * Limit how many UsageGuides to update.
     */
    limit?: number
  }

  /**
   * UsageGuide updateManyAndReturn
   */
  export type UsageGuideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * The data used to update UsageGuides.
     */
    data: XOR<UsageGuideUpdateManyMutationInput, UsageGuideUncheckedUpdateManyInput>
    /**
     * Filter which UsageGuides to update
     */
    where?: UsageGuideWhereInput
    /**
     * Limit how many UsageGuides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageGuide upsert
   */
  export type UsageGuideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageGuide to update in case it exists.
     */
    where: UsageGuideWhereUniqueInput
    /**
     * In case the UsageGuide found by the `where` argument doesn't exist, create a new UsageGuide with this data.
     */
    create: XOR<UsageGuideCreateInput, UsageGuideUncheckedCreateInput>
    /**
     * In case the UsageGuide was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageGuideUpdateInput, UsageGuideUncheckedUpdateInput>
  }

  /**
   * UsageGuide delete
   */
  export type UsageGuideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
    /**
     * Filter which UsageGuide to delete.
     */
    where: UsageGuideWhereUniqueInput
  }

  /**
   * UsageGuide deleteMany
   */
  export type UsageGuideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageGuides to delete
     */
    where?: UsageGuideWhereInput
    /**
     * Limit how many UsageGuides to delete.
     */
    limit?: number
  }

  /**
   * UsageGuide without action
   */
  export type UsageGuideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageGuide
     */
    select?: UsageGuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageGuide
     */
    omit?: UsageGuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageGuideInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SupplementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    categoryId: 'categoryId',
    rating: 'rating',
    reviews: 'reviews',
    topPrice: 'topPrice',
    badge: 'badge',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplementScalarFieldEnum = (typeof SupplementScalarFieldEnum)[keyof typeof SupplementScalarFieldEnum]


  export const BenefitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BenefitScalarFieldEnum = (typeof BenefitScalarFieldEnum)[keyof typeof BenefitScalarFieldEnum]


  export const SupplementBenefitScalarFieldEnum: {
    supplementId: 'supplementId',
    benefitId: 'benefitId'
  };

  export type SupplementBenefitScalarFieldEnum = (typeof SupplementBenefitScalarFieldEnum)[keyof typeof SupplementBenefitScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    rank: 'rank',
    name: 'name',
    brand: 'brand',
    price: 'price',
    rating: 'rating',
    reviews: 'reviews',
    dosage: 'dosage',
    capsules: 'capsules',
    badge: 'badge',
    supplementId: 'supplementId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UsageGuideScalarFieldEnum: {
    id: 'id',
    supplementId: 'supplementId',
    timing: 'timing',
    timingDesc: 'timingDesc',
    withFood: 'withFood',
    withFoodDesc: 'withFoodDesc',
    timeToEffect: 'timeToEffect',
    effectDesc: 'effectDesc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsageGuideScalarFieldEnum = (typeof UsageGuideScalarFieldEnum)[keyof typeof UsageGuideScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    supplements?: SupplementListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplements?: SupplementOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    supplements?: SupplementListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SupplementWhereInput = {
    AND?: SupplementWhereInput | SupplementWhereInput[]
    OR?: SupplementWhereInput[]
    NOT?: SupplementWhereInput | SupplementWhereInput[]
    id?: IntFilter<"Supplement"> | number
    name?: StringFilter<"Supplement"> | string
    description?: StringNullableFilter<"Supplement"> | string | null
    categoryId?: IntFilter<"Supplement"> | number
    rating?: FloatFilter<"Supplement"> | number
    reviews?: IntFilter<"Supplement"> | number
    topPrice?: StringFilter<"Supplement"> | string
    badge?: StringNullableFilter<"Supplement"> | string | null
    link?: StringNullableFilter<"Supplement"> | string | null
    createdAt?: DateTimeFilter<"Supplement"> | Date | string
    updatedAt?: DateTimeFilter<"Supplement"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    benefits?: SupplementBenefitListRelationFilter
    products?: ProductListRelationFilter
    usageGuide?: XOR<UsageGuideNullableScalarRelationFilter, UsageGuideWhereInput> | null
  }

  export type SupplementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    topPrice?: SortOrder
    badge?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    benefits?: SupplementBenefitOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    usageGuide?: UsageGuideOrderByWithRelationInput
  }

  export type SupplementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplementWhereInput | SupplementWhereInput[]
    OR?: SupplementWhereInput[]
    NOT?: SupplementWhereInput | SupplementWhereInput[]
    name?: StringFilter<"Supplement"> | string
    description?: StringNullableFilter<"Supplement"> | string | null
    categoryId?: IntFilter<"Supplement"> | number
    rating?: FloatFilter<"Supplement"> | number
    reviews?: IntFilter<"Supplement"> | number
    topPrice?: StringFilter<"Supplement"> | string
    badge?: StringNullableFilter<"Supplement"> | string | null
    link?: StringNullableFilter<"Supplement"> | string | null
    createdAt?: DateTimeFilter<"Supplement"> | Date | string
    updatedAt?: DateTimeFilter<"Supplement"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    benefits?: SupplementBenefitListRelationFilter
    products?: ProductListRelationFilter
    usageGuide?: XOR<UsageGuideNullableScalarRelationFilter, UsageGuideWhereInput> | null
  }, "id">

  export type SupplementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    topPrice?: SortOrder
    badge?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplementCountOrderByAggregateInput
    _avg?: SupplementAvgOrderByAggregateInput
    _max?: SupplementMaxOrderByAggregateInput
    _min?: SupplementMinOrderByAggregateInput
    _sum?: SupplementSumOrderByAggregateInput
  }

  export type SupplementScalarWhereWithAggregatesInput = {
    AND?: SupplementScalarWhereWithAggregatesInput | SupplementScalarWhereWithAggregatesInput[]
    OR?: SupplementScalarWhereWithAggregatesInput[]
    NOT?: SupplementScalarWhereWithAggregatesInput | SupplementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplement"> | number
    name?: StringWithAggregatesFilter<"Supplement"> | string
    description?: StringNullableWithAggregatesFilter<"Supplement"> | string | null
    categoryId?: IntWithAggregatesFilter<"Supplement"> | number
    rating?: FloatWithAggregatesFilter<"Supplement"> | number
    reviews?: IntWithAggregatesFilter<"Supplement"> | number
    topPrice?: StringWithAggregatesFilter<"Supplement"> | string
    badge?: StringNullableWithAggregatesFilter<"Supplement"> | string | null
    link?: StringNullableWithAggregatesFilter<"Supplement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Supplement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplement"> | Date | string
  }

  export type BenefitWhereInput = {
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    id?: IntFilter<"Benefit"> | number
    name?: StringFilter<"Benefit"> | string
    description?: StringNullableFilter<"Benefit"> | string | null
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    supplements?: SupplementBenefitListRelationFilter
  }

  export type BenefitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplements?: SupplementBenefitOrderByRelationAggregateInput
  }

  export type BenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    description?: StringNullableFilter<"Benefit"> | string | null
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    supplements?: SupplementBenefitListRelationFilter
  }, "id" | "name">

  export type BenefitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BenefitCountOrderByAggregateInput
    _avg?: BenefitAvgOrderByAggregateInput
    _max?: BenefitMaxOrderByAggregateInput
    _min?: BenefitMinOrderByAggregateInput
    _sum?: BenefitSumOrderByAggregateInput
  }

  export type BenefitScalarWhereWithAggregatesInput = {
    AND?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    OR?: BenefitScalarWhereWithAggregatesInput[]
    NOT?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Benefit"> | number
    name?: StringWithAggregatesFilter<"Benefit"> | string
    description?: StringNullableWithAggregatesFilter<"Benefit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
  }

  export type SupplementBenefitWhereInput = {
    AND?: SupplementBenefitWhereInput | SupplementBenefitWhereInput[]
    OR?: SupplementBenefitWhereInput[]
    NOT?: SupplementBenefitWhereInput | SupplementBenefitWhereInput[]
    supplementId?: IntFilter<"SupplementBenefit"> | number
    benefitId?: IntFilter<"SupplementBenefit"> | number
    supplement?: XOR<SupplementScalarRelationFilter, SupplementWhereInput>
    benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
  }

  export type SupplementBenefitOrderByWithRelationInput = {
    supplementId?: SortOrder
    benefitId?: SortOrder
    supplement?: SupplementOrderByWithRelationInput
    benefit?: BenefitOrderByWithRelationInput
  }

  export type SupplementBenefitWhereUniqueInput = Prisma.AtLeast<{
    supplementId_benefitId?: SupplementBenefitSupplementIdBenefitIdCompoundUniqueInput
    AND?: SupplementBenefitWhereInput | SupplementBenefitWhereInput[]
    OR?: SupplementBenefitWhereInput[]
    NOT?: SupplementBenefitWhereInput | SupplementBenefitWhereInput[]
    supplementId?: IntFilter<"SupplementBenefit"> | number
    benefitId?: IntFilter<"SupplementBenefit"> | number
    supplement?: XOR<SupplementScalarRelationFilter, SupplementWhereInput>
    benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
  }, "supplementId_benefitId">

  export type SupplementBenefitOrderByWithAggregationInput = {
    supplementId?: SortOrder
    benefitId?: SortOrder
    _count?: SupplementBenefitCountOrderByAggregateInput
    _avg?: SupplementBenefitAvgOrderByAggregateInput
    _max?: SupplementBenefitMaxOrderByAggregateInput
    _min?: SupplementBenefitMinOrderByAggregateInput
    _sum?: SupplementBenefitSumOrderByAggregateInput
  }

  export type SupplementBenefitScalarWhereWithAggregatesInput = {
    AND?: SupplementBenefitScalarWhereWithAggregatesInput | SupplementBenefitScalarWhereWithAggregatesInput[]
    OR?: SupplementBenefitScalarWhereWithAggregatesInput[]
    NOT?: SupplementBenefitScalarWhereWithAggregatesInput | SupplementBenefitScalarWhereWithAggregatesInput[]
    supplementId?: IntWithAggregatesFilter<"SupplementBenefit"> | number
    benefitId?: IntWithAggregatesFilter<"SupplementBenefit"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    rank?: IntNullableFilter<"Product"> | number | null
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    price?: StringFilter<"Product"> | string
    rating?: FloatFilter<"Product"> | number
    reviews?: IntFilter<"Product"> | number
    dosage?: StringFilter<"Product"> | string
    capsules?: StringFilter<"Product"> | string
    badge?: StringNullableFilter<"Product"> | string | null
    supplementId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    supplement?: XOR<SupplementScalarRelationFilter, SupplementWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    rank?: SortOrderInput | SortOrder
    name?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    dosage?: SortOrder
    capsules?: SortOrder
    badge?: SortOrderInput | SortOrder
    supplementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplement?: SupplementOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    rank?: IntNullableFilter<"Product"> | number | null
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    price?: StringFilter<"Product"> | string
    rating?: FloatFilter<"Product"> | number
    reviews?: IntFilter<"Product"> | number
    dosage?: StringFilter<"Product"> | string
    capsules?: StringFilter<"Product"> | string
    badge?: StringNullableFilter<"Product"> | string | null
    supplementId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    supplement?: XOR<SupplementScalarRelationFilter, SupplementWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    rank?: SortOrderInput | SortOrder
    name?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    dosage?: SortOrder
    capsules?: SortOrder
    badge?: SortOrderInput | SortOrder
    supplementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    rank?: IntNullableWithAggregatesFilter<"Product"> | number | null
    name?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringWithAggregatesFilter<"Product"> | string
    price?: StringWithAggregatesFilter<"Product"> | string
    rating?: FloatWithAggregatesFilter<"Product"> | number
    reviews?: IntWithAggregatesFilter<"Product"> | number
    dosage?: StringWithAggregatesFilter<"Product"> | string
    capsules?: StringWithAggregatesFilter<"Product"> | string
    badge?: StringNullableWithAggregatesFilter<"Product"> | string | null
    supplementId?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type UsageGuideWhereInput = {
    AND?: UsageGuideWhereInput | UsageGuideWhereInput[]
    OR?: UsageGuideWhereInput[]
    NOT?: UsageGuideWhereInput | UsageGuideWhereInput[]
    id?: IntFilter<"UsageGuide"> | number
    supplementId?: IntFilter<"UsageGuide"> | number
    timing?: StringNullableFilter<"UsageGuide"> | string | null
    timingDesc?: StringNullableFilter<"UsageGuide"> | string | null
    withFood?: StringNullableFilter<"UsageGuide"> | string | null
    withFoodDesc?: StringNullableFilter<"UsageGuide"> | string | null
    timeToEffect?: StringNullableFilter<"UsageGuide"> | string | null
    effectDesc?: StringNullableFilter<"UsageGuide"> | string | null
    createdAt?: DateTimeFilter<"UsageGuide"> | Date | string
    updatedAt?: DateTimeFilter<"UsageGuide"> | Date | string
    supplement?: XOR<SupplementScalarRelationFilter, SupplementWhereInput>
  }

  export type UsageGuideOrderByWithRelationInput = {
    id?: SortOrder
    supplementId?: SortOrder
    timing?: SortOrderInput | SortOrder
    timingDesc?: SortOrderInput | SortOrder
    withFood?: SortOrderInput | SortOrder
    withFoodDesc?: SortOrderInput | SortOrder
    timeToEffect?: SortOrderInput | SortOrder
    effectDesc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplement?: SupplementOrderByWithRelationInput
  }

  export type UsageGuideWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    supplementId?: number
    AND?: UsageGuideWhereInput | UsageGuideWhereInput[]
    OR?: UsageGuideWhereInput[]
    NOT?: UsageGuideWhereInput | UsageGuideWhereInput[]
    timing?: StringNullableFilter<"UsageGuide"> | string | null
    timingDesc?: StringNullableFilter<"UsageGuide"> | string | null
    withFood?: StringNullableFilter<"UsageGuide"> | string | null
    withFoodDesc?: StringNullableFilter<"UsageGuide"> | string | null
    timeToEffect?: StringNullableFilter<"UsageGuide"> | string | null
    effectDesc?: StringNullableFilter<"UsageGuide"> | string | null
    createdAt?: DateTimeFilter<"UsageGuide"> | Date | string
    updatedAt?: DateTimeFilter<"UsageGuide"> | Date | string
    supplement?: XOR<SupplementScalarRelationFilter, SupplementWhereInput>
  }, "id" | "supplementId">

  export type UsageGuideOrderByWithAggregationInput = {
    id?: SortOrder
    supplementId?: SortOrder
    timing?: SortOrderInput | SortOrder
    timingDesc?: SortOrderInput | SortOrder
    withFood?: SortOrderInput | SortOrder
    withFoodDesc?: SortOrderInput | SortOrder
    timeToEffect?: SortOrderInput | SortOrder
    effectDesc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsageGuideCountOrderByAggregateInput
    _avg?: UsageGuideAvgOrderByAggregateInput
    _max?: UsageGuideMaxOrderByAggregateInput
    _min?: UsageGuideMinOrderByAggregateInput
    _sum?: UsageGuideSumOrderByAggregateInput
  }

  export type UsageGuideScalarWhereWithAggregatesInput = {
    AND?: UsageGuideScalarWhereWithAggregatesInput | UsageGuideScalarWhereWithAggregatesInput[]
    OR?: UsageGuideScalarWhereWithAggregatesInput[]
    NOT?: UsageGuideScalarWhereWithAggregatesInput | UsageGuideScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsageGuide"> | number
    supplementId?: IntWithAggregatesFilter<"UsageGuide"> | number
    timing?: StringNullableWithAggregatesFilter<"UsageGuide"> | string | null
    timingDesc?: StringNullableWithAggregatesFilter<"UsageGuide"> | string | null
    withFood?: StringNullableWithAggregatesFilter<"UsageGuide"> | string | null
    withFoodDesc?: StringNullableWithAggregatesFilter<"UsageGuide"> | string | null
    timeToEffect?: StringNullableWithAggregatesFilter<"UsageGuide"> | string | null
    effectDesc?: StringNullableWithAggregatesFilter<"UsageGuide"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UsageGuide"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UsageGuide"> | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplements?: SupplementCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplements?: SupplementUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplements?: SupplementUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplements?: SupplementUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplementCreateInput = {
    name: string
    description?: string | null
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSupplementsInput
    benefits?: SupplementBenefitCreateNestedManyWithoutSupplementInput
    products?: ProductCreateNestedManyWithoutSupplementInput
    usageGuide?: UsageGuideCreateNestedOneWithoutSupplementInput
  }

  export type SupplementUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: SupplementBenefitUncheckedCreateNestedManyWithoutSupplementInput
    products?: ProductUncheckedCreateNestedManyWithoutSupplementInput
    usageGuide?: UsageGuideUncheckedCreateNestedOneWithoutSupplementInput
  }

  export type SupplementUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSupplementsNestedInput
    benefits?: SupplementBenefitUpdateManyWithoutSupplementNestedInput
    products?: ProductUpdateManyWithoutSupplementNestedInput
    usageGuide?: UsageGuideUpdateOneWithoutSupplementNestedInput
  }

  export type SupplementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: SupplementBenefitUncheckedUpdateManyWithoutSupplementNestedInput
    products?: ProductUncheckedUpdateManyWithoutSupplementNestedInput
    usageGuide?: UsageGuideUncheckedUpdateOneWithoutSupplementNestedInput
  }

  export type SupplementCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplementUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplements?: SupplementBenefitCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplements?: SupplementBenefitUncheckedCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplements?: SupplementBenefitUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplements?: SupplementBenefitUncheckedUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplementBenefitCreateInput = {
    supplement: SupplementCreateNestedOneWithoutBenefitsInput
    benefit: BenefitCreateNestedOneWithoutSupplementsInput
  }

  export type SupplementBenefitUncheckedCreateInput = {
    supplementId: number
    benefitId: number
  }

  export type SupplementBenefitUpdateInput = {
    supplement?: SupplementUpdateOneRequiredWithoutBenefitsNestedInput
    benefit?: BenefitUpdateOneRequiredWithoutSupplementsNestedInput
  }

  export type SupplementBenefitUncheckedUpdateInput = {
    supplementId?: IntFieldUpdateOperationsInput | number
    benefitId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplementBenefitCreateManyInput = {
    supplementId: number
    benefitId: number
  }

  export type SupplementBenefitUpdateManyMutationInput = {

  }

  export type SupplementBenefitUncheckedUpdateManyInput = {
    supplementId?: IntFieldUpdateOperationsInput | number
    benefitId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    rank?: number | null
    name: string
    brand: string
    price: string
    rating?: number
    reviews?: number
    dosage: string
    capsules: string
    badge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplement: SupplementCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    rank?: number | null
    name: string
    brand: string
    price: string
    rating?: number
    reviews?: number
    dosage: string
    capsules: string
    badge?: string | null
    supplementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateInput = {
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    capsules?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplement?: SupplementUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    capsules?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    supplementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: number
    rank?: number | null
    name: string
    brand: string
    price: string
    rating?: number
    reviews?: number
    dosage: string
    capsules: string
    badge?: string | null
    supplementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    capsules?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    capsules?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    supplementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageGuideCreateInput = {
    timing?: string | null
    timingDesc?: string | null
    withFood?: string | null
    withFoodDesc?: string | null
    timeToEffect?: string | null
    effectDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplement: SupplementCreateNestedOneWithoutUsageGuideInput
  }

  export type UsageGuideUncheckedCreateInput = {
    id?: number
    supplementId: number
    timing?: string | null
    timingDesc?: string | null
    withFood?: string | null
    withFoodDesc?: string | null
    timeToEffect?: string | null
    effectDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageGuideUpdateInput = {
    timing?: NullableStringFieldUpdateOperationsInput | string | null
    timingDesc?: NullableStringFieldUpdateOperationsInput | string | null
    withFood?: NullableStringFieldUpdateOperationsInput | string | null
    withFoodDesc?: NullableStringFieldUpdateOperationsInput | string | null
    timeToEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplement?: SupplementUpdateOneRequiredWithoutUsageGuideNestedInput
  }

  export type UsageGuideUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplementId?: IntFieldUpdateOperationsInput | number
    timing?: NullableStringFieldUpdateOperationsInput | string | null
    timingDesc?: NullableStringFieldUpdateOperationsInput | string | null
    withFood?: NullableStringFieldUpdateOperationsInput | string | null
    withFoodDesc?: NullableStringFieldUpdateOperationsInput | string | null
    timeToEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageGuideCreateManyInput = {
    id?: number
    supplementId: number
    timing?: string | null
    timingDesc?: string | null
    withFood?: string | null
    withFoodDesc?: string | null
    timeToEffect?: string | null
    effectDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageGuideUpdateManyMutationInput = {
    timing?: NullableStringFieldUpdateOperationsInput | string | null
    timingDesc?: NullableStringFieldUpdateOperationsInput | string | null
    withFood?: NullableStringFieldUpdateOperationsInput | string | null
    withFoodDesc?: NullableStringFieldUpdateOperationsInput | string | null
    timeToEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageGuideUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplementId?: IntFieldUpdateOperationsInput | number
    timing?: NullableStringFieldUpdateOperationsInput | string | null
    timingDesc?: NullableStringFieldUpdateOperationsInput | string | null
    withFood?: NullableStringFieldUpdateOperationsInput | string | null
    withFoodDesc?: NullableStringFieldUpdateOperationsInput | string | null
    timeToEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SupplementListRelationFilter = {
    every?: SupplementWhereInput
    some?: SupplementWhereInput
    none?: SupplementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SupplementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SupplementBenefitListRelationFilter = {
    every?: SupplementBenefitWhereInput
    some?: SupplementBenefitWhereInput
    none?: SupplementBenefitWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type UsageGuideNullableScalarRelationFilter = {
    is?: UsageGuideWhereInput | null
    isNot?: UsageGuideWhereInput | null
  }

  export type SupplementBenefitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    topPrice?: SortOrder
    badge?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplementAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
  }

  export type SupplementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    topPrice?: SortOrder
    badge?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    topPrice?: SortOrder
    badge?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplementSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
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

  export type BenefitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplementScalarRelationFilter = {
    is?: SupplementWhereInput
    isNot?: SupplementWhereInput
  }

  export type BenefitScalarRelationFilter = {
    is?: BenefitWhereInput
    isNot?: BenefitWhereInput
  }

  export type SupplementBenefitSupplementIdBenefitIdCompoundUniqueInput = {
    supplementId: number
    benefitId: number
  }

  export type SupplementBenefitCountOrderByAggregateInput = {
    supplementId?: SortOrder
    benefitId?: SortOrder
  }

  export type SupplementBenefitAvgOrderByAggregateInput = {
    supplementId?: SortOrder
    benefitId?: SortOrder
  }

  export type SupplementBenefitMaxOrderByAggregateInput = {
    supplementId?: SortOrder
    benefitId?: SortOrder
  }

  export type SupplementBenefitMinOrderByAggregateInput = {
    supplementId?: SortOrder
    benefitId?: SortOrder
  }

  export type SupplementBenefitSumOrderByAggregateInput = {
    supplementId?: SortOrder
    benefitId?: SortOrder
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

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    dosage?: SortOrder
    capsules?: SortOrder
    badge?: SortOrder
    supplementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    supplementId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    dosage?: SortOrder
    capsules?: SortOrder
    badge?: SortOrder
    supplementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    dosage?: SortOrder
    capsules?: SortOrder
    badge?: SortOrder
    supplementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    supplementId?: SortOrder
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

  export type UsageGuideCountOrderByAggregateInput = {
    id?: SortOrder
    supplementId?: SortOrder
    timing?: SortOrder
    timingDesc?: SortOrder
    withFood?: SortOrder
    withFoodDesc?: SortOrder
    timeToEffect?: SortOrder
    effectDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageGuideAvgOrderByAggregateInput = {
    id?: SortOrder
    supplementId?: SortOrder
  }

  export type UsageGuideMaxOrderByAggregateInput = {
    id?: SortOrder
    supplementId?: SortOrder
    timing?: SortOrder
    timingDesc?: SortOrder
    withFood?: SortOrder
    withFoodDesc?: SortOrder
    timeToEffect?: SortOrder
    effectDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageGuideMinOrderByAggregateInput = {
    id?: SortOrder
    supplementId?: SortOrder
    timing?: SortOrder
    timingDesc?: SortOrder
    withFood?: SortOrder
    withFoodDesc?: SortOrder
    timeToEffect?: SortOrder
    effectDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageGuideSumOrderByAggregateInput = {
    id?: SortOrder
    supplementId?: SortOrder
  }

  export type SupplementCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SupplementCreateWithoutCategoryInput, SupplementUncheckedCreateWithoutCategoryInput> | SupplementCreateWithoutCategoryInput[] | SupplementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SupplementCreateOrConnectWithoutCategoryInput | SupplementCreateOrConnectWithoutCategoryInput[]
    createMany?: SupplementCreateManyCategoryInputEnvelope
    connect?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
  }

  export type SupplementUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SupplementCreateWithoutCategoryInput, SupplementUncheckedCreateWithoutCategoryInput> | SupplementCreateWithoutCategoryInput[] | SupplementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SupplementCreateOrConnectWithoutCategoryInput | SupplementCreateOrConnectWithoutCategoryInput[]
    createMany?: SupplementCreateManyCategoryInputEnvelope
    connect?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SupplementUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SupplementCreateWithoutCategoryInput, SupplementUncheckedCreateWithoutCategoryInput> | SupplementCreateWithoutCategoryInput[] | SupplementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SupplementCreateOrConnectWithoutCategoryInput | SupplementCreateOrConnectWithoutCategoryInput[]
    upsert?: SupplementUpsertWithWhereUniqueWithoutCategoryInput | SupplementUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SupplementCreateManyCategoryInputEnvelope
    set?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
    disconnect?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
    delete?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
    connect?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
    update?: SupplementUpdateWithWhereUniqueWithoutCategoryInput | SupplementUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SupplementUpdateManyWithWhereWithoutCategoryInput | SupplementUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SupplementScalarWhereInput | SupplementScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplementUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SupplementCreateWithoutCategoryInput, SupplementUncheckedCreateWithoutCategoryInput> | SupplementCreateWithoutCategoryInput[] | SupplementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SupplementCreateOrConnectWithoutCategoryInput | SupplementCreateOrConnectWithoutCategoryInput[]
    upsert?: SupplementUpsertWithWhereUniqueWithoutCategoryInput | SupplementUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SupplementCreateManyCategoryInputEnvelope
    set?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
    disconnect?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
    delete?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
    connect?: SupplementWhereUniqueInput | SupplementWhereUniqueInput[]
    update?: SupplementUpdateWithWhereUniqueWithoutCategoryInput | SupplementUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SupplementUpdateManyWithWhereWithoutCategoryInput | SupplementUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SupplementScalarWhereInput | SupplementScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSupplementsInput = {
    create?: XOR<CategoryCreateWithoutSupplementsInput, CategoryUncheckedCreateWithoutSupplementsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSupplementsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SupplementBenefitCreateNestedManyWithoutSupplementInput = {
    create?: XOR<SupplementBenefitCreateWithoutSupplementInput, SupplementBenefitUncheckedCreateWithoutSupplementInput> | SupplementBenefitCreateWithoutSupplementInput[] | SupplementBenefitUncheckedCreateWithoutSupplementInput[]
    connectOrCreate?: SupplementBenefitCreateOrConnectWithoutSupplementInput | SupplementBenefitCreateOrConnectWithoutSupplementInput[]
    createMany?: SupplementBenefitCreateManySupplementInputEnvelope
    connect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutSupplementInput = {
    create?: XOR<ProductCreateWithoutSupplementInput, ProductUncheckedCreateWithoutSupplementInput> | ProductCreateWithoutSupplementInput[] | ProductUncheckedCreateWithoutSupplementInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplementInput | ProductCreateOrConnectWithoutSupplementInput[]
    createMany?: ProductCreateManySupplementInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UsageGuideCreateNestedOneWithoutSupplementInput = {
    create?: XOR<UsageGuideCreateWithoutSupplementInput, UsageGuideUncheckedCreateWithoutSupplementInput>
    connectOrCreate?: UsageGuideCreateOrConnectWithoutSupplementInput
    connect?: UsageGuideWhereUniqueInput
  }

  export type SupplementBenefitUncheckedCreateNestedManyWithoutSupplementInput = {
    create?: XOR<SupplementBenefitCreateWithoutSupplementInput, SupplementBenefitUncheckedCreateWithoutSupplementInput> | SupplementBenefitCreateWithoutSupplementInput[] | SupplementBenefitUncheckedCreateWithoutSupplementInput[]
    connectOrCreate?: SupplementBenefitCreateOrConnectWithoutSupplementInput | SupplementBenefitCreateOrConnectWithoutSupplementInput[]
    createMany?: SupplementBenefitCreateManySupplementInputEnvelope
    connect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSupplementInput = {
    create?: XOR<ProductCreateWithoutSupplementInput, ProductUncheckedCreateWithoutSupplementInput> | ProductCreateWithoutSupplementInput[] | ProductUncheckedCreateWithoutSupplementInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplementInput | ProductCreateOrConnectWithoutSupplementInput[]
    createMany?: ProductCreateManySupplementInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UsageGuideUncheckedCreateNestedOneWithoutSupplementInput = {
    create?: XOR<UsageGuideCreateWithoutSupplementInput, UsageGuideUncheckedCreateWithoutSupplementInput>
    connectOrCreate?: UsageGuideCreateOrConnectWithoutSupplementInput
    connect?: UsageGuideWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutSupplementsNestedInput = {
    create?: XOR<CategoryCreateWithoutSupplementsInput, CategoryUncheckedCreateWithoutSupplementsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSupplementsInput
    upsert?: CategoryUpsertWithoutSupplementsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSupplementsInput, CategoryUpdateWithoutSupplementsInput>, CategoryUncheckedUpdateWithoutSupplementsInput>
  }

  export type SupplementBenefitUpdateManyWithoutSupplementNestedInput = {
    create?: XOR<SupplementBenefitCreateWithoutSupplementInput, SupplementBenefitUncheckedCreateWithoutSupplementInput> | SupplementBenefitCreateWithoutSupplementInput[] | SupplementBenefitUncheckedCreateWithoutSupplementInput[]
    connectOrCreate?: SupplementBenefitCreateOrConnectWithoutSupplementInput | SupplementBenefitCreateOrConnectWithoutSupplementInput[]
    upsert?: SupplementBenefitUpsertWithWhereUniqueWithoutSupplementInput | SupplementBenefitUpsertWithWhereUniqueWithoutSupplementInput[]
    createMany?: SupplementBenefitCreateManySupplementInputEnvelope
    set?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    disconnect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    delete?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    connect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    update?: SupplementBenefitUpdateWithWhereUniqueWithoutSupplementInput | SupplementBenefitUpdateWithWhereUniqueWithoutSupplementInput[]
    updateMany?: SupplementBenefitUpdateManyWithWhereWithoutSupplementInput | SupplementBenefitUpdateManyWithWhereWithoutSupplementInput[]
    deleteMany?: SupplementBenefitScalarWhereInput | SupplementBenefitScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutSupplementNestedInput = {
    create?: XOR<ProductCreateWithoutSupplementInput, ProductUncheckedCreateWithoutSupplementInput> | ProductCreateWithoutSupplementInput[] | ProductUncheckedCreateWithoutSupplementInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplementInput | ProductCreateOrConnectWithoutSupplementInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplementInput | ProductUpsertWithWhereUniqueWithoutSupplementInput[]
    createMany?: ProductCreateManySupplementInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplementInput | ProductUpdateWithWhereUniqueWithoutSupplementInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplementInput | ProductUpdateManyWithWhereWithoutSupplementInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UsageGuideUpdateOneWithoutSupplementNestedInput = {
    create?: XOR<UsageGuideCreateWithoutSupplementInput, UsageGuideUncheckedCreateWithoutSupplementInput>
    connectOrCreate?: UsageGuideCreateOrConnectWithoutSupplementInput
    upsert?: UsageGuideUpsertWithoutSupplementInput
    disconnect?: UsageGuideWhereInput | boolean
    delete?: UsageGuideWhereInput | boolean
    connect?: UsageGuideWhereUniqueInput
    update?: XOR<XOR<UsageGuideUpdateToOneWithWhereWithoutSupplementInput, UsageGuideUpdateWithoutSupplementInput>, UsageGuideUncheckedUpdateWithoutSupplementInput>
  }

  export type SupplementBenefitUncheckedUpdateManyWithoutSupplementNestedInput = {
    create?: XOR<SupplementBenefitCreateWithoutSupplementInput, SupplementBenefitUncheckedCreateWithoutSupplementInput> | SupplementBenefitCreateWithoutSupplementInput[] | SupplementBenefitUncheckedCreateWithoutSupplementInput[]
    connectOrCreate?: SupplementBenefitCreateOrConnectWithoutSupplementInput | SupplementBenefitCreateOrConnectWithoutSupplementInput[]
    upsert?: SupplementBenefitUpsertWithWhereUniqueWithoutSupplementInput | SupplementBenefitUpsertWithWhereUniqueWithoutSupplementInput[]
    createMany?: SupplementBenefitCreateManySupplementInputEnvelope
    set?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    disconnect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    delete?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    connect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    update?: SupplementBenefitUpdateWithWhereUniqueWithoutSupplementInput | SupplementBenefitUpdateWithWhereUniqueWithoutSupplementInput[]
    updateMany?: SupplementBenefitUpdateManyWithWhereWithoutSupplementInput | SupplementBenefitUpdateManyWithWhereWithoutSupplementInput[]
    deleteMany?: SupplementBenefitScalarWhereInput | SupplementBenefitScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSupplementNestedInput = {
    create?: XOR<ProductCreateWithoutSupplementInput, ProductUncheckedCreateWithoutSupplementInput> | ProductCreateWithoutSupplementInput[] | ProductUncheckedCreateWithoutSupplementInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplementInput | ProductCreateOrConnectWithoutSupplementInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplementInput | ProductUpsertWithWhereUniqueWithoutSupplementInput[]
    createMany?: ProductCreateManySupplementInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplementInput | ProductUpdateWithWhereUniqueWithoutSupplementInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplementInput | ProductUpdateManyWithWhereWithoutSupplementInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UsageGuideUncheckedUpdateOneWithoutSupplementNestedInput = {
    create?: XOR<UsageGuideCreateWithoutSupplementInput, UsageGuideUncheckedCreateWithoutSupplementInput>
    connectOrCreate?: UsageGuideCreateOrConnectWithoutSupplementInput
    upsert?: UsageGuideUpsertWithoutSupplementInput
    disconnect?: UsageGuideWhereInput | boolean
    delete?: UsageGuideWhereInput | boolean
    connect?: UsageGuideWhereUniqueInput
    update?: XOR<XOR<UsageGuideUpdateToOneWithWhereWithoutSupplementInput, UsageGuideUpdateWithoutSupplementInput>, UsageGuideUncheckedUpdateWithoutSupplementInput>
  }

  export type SupplementBenefitCreateNestedManyWithoutBenefitInput = {
    create?: XOR<SupplementBenefitCreateWithoutBenefitInput, SupplementBenefitUncheckedCreateWithoutBenefitInput> | SupplementBenefitCreateWithoutBenefitInput[] | SupplementBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: SupplementBenefitCreateOrConnectWithoutBenefitInput | SupplementBenefitCreateOrConnectWithoutBenefitInput[]
    createMany?: SupplementBenefitCreateManyBenefitInputEnvelope
    connect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
  }

  export type SupplementBenefitUncheckedCreateNestedManyWithoutBenefitInput = {
    create?: XOR<SupplementBenefitCreateWithoutBenefitInput, SupplementBenefitUncheckedCreateWithoutBenefitInput> | SupplementBenefitCreateWithoutBenefitInput[] | SupplementBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: SupplementBenefitCreateOrConnectWithoutBenefitInput | SupplementBenefitCreateOrConnectWithoutBenefitInput[]
    createMany?: SupplementBenefitCreateManyBenefitInputEnvelope
    connect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
  }

  export type SupplementBenefitUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<SupplementBenefitCreateWithoutBenefitInput, SupplementBenefitUncheckedCreateWithoutBenefitInput> | SupplementBenefitCreateWithoutBenefitInput[] | SupplementBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: SupplementBenefitCreateOrConnectWithoutBenefitInput | SupplementBenefitCreateOrConnectWithoutBenefitInput[]
    upsert?: SupplementBenefitUpsertWithWhereUniqueWithoutBenefitInput | SupplementBenefitUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: SupplementBenefitCreateManyBenefitInputEnvelope
    set?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    disconnect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    delete?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    connect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    update?: SupplementBenefitUpdateWithWhereUniqueWithoutBenefitInput | SupplementBenefitUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: SupplementBenefitUpdateManyWithWhereWithoutBenefitInput | SupplementBenefitUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: SupplementBenefitScalarWhereInput | SupplementBenefitScalarWhereInput[]
  }

  export type SupplementBenefitUncheckedUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<SupplementBenefitCreateWithoutBenefitInput, SupplementBenefitUncheckedCreateWithoutBenefitInput> | SupplementBenefitCreateWithoutBenefitInput[] | SupplementBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: SupplementBenefitCreateOrConnectWithoutBenefitInput | SupplementBenefitCreateOrConnectWithoutBenefitInput[]
    upsert?: SupplementBenefitUpsertWithWhereUniqueWithoutBenefitInput | SupplementBenefitUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: SupplementBenefitCreateManyBenefitInputEnvelope
    set?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    disconnect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    delete?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    connect?: SupplementBenefitWhereUniqueInput | SupplementBenefitWhereUniqueInput[]
    update?: SupplementBenefitUpdateWithWhereUniqueWithoutBenefitInput | SupplementBenefitUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: SupplementBenefitUpdateManyWithWhereWithoutBenefitInput | SupplementBenefitUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: SupplementBenefitScalarWhereInput | SupplementBenefitScalarWhereInput[]
  }

  export type SupplementCreateNestedOneWithoutBenefitsInput = {
    create?: XOR<SupplementCreateWithoutBenefitsInput, SupplementUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: SupplementCreateOrConnectWithoutBenefitsInput
    connect?: SupplementWhereUniqueInput
  }

  export type BenefitCreateNestedOneWithoutSupplementsInput = {
    create?: XOR<BenefitCreateWithoutSupplementsInput, BenefitUncheckedCreateWithoutSupplementsInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutSupplementsInput
    connect?: BenefitWhereUniqueInput
  }

  export type SupplementUpdateOneRequiredWithoutBenefitsNestedInput = {
    create?: XOR<SupplementCreateWithoutBenefitsInput, SupplementUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: SupplementCreateOrConnectWithoutBenefitsInput
    upsert?: SupplementUpsertWithoutBenefitsInput
    connect?: SupplementWhereUniqueInput
    update?: XOR<XOR<SupplementUpdateToOneWithWhereWithoutBenefitsInput, SupplementUpdateWithoutBenefitsInput>, SupplementUncheckedUpdateWithoutBenefitsInput>
  }

  export type BenefitUpdateOneRequiredWithoutSupplementsNestedInput = {
    create?: XOR<BenefitCreateWithoutSupplementsInput, BenefitUncheckedCreateWithoutSupplementsInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutSupplementsInput
    upsert?: BenefitUpsertWithoutSupplementsInput
    connect?: BenefitWhereUniqueInput
    update?: XOR<XOR<BenefitUpdateToOneWithWhereWithoutSupplementsInput, BenefitUpdateWithoutSupplementsInput>, BenefitUncheckedUpdateWithoutSupplementsInput>
  }

  export type SupplementCreateNestedOneWithoutProductsInput = {
    create?: XOR<SupplementCreateWithoutProductsInput, SupplementUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplementCreateOrConnectWithoutProductsInput
    connect?: SupplementWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplementUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SupplementCreateWithoutProductsInput, SupplementUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplementCreateOrConnectWithoutProductsInput
    upsert?: SupplementUpsertWithoutProductsInput
    connect?: SupplementWhereUniqueInput
    update?: XOR<XOR<SupplementUpdateToOneWithWhereWithoutProductsInput, SupplementUpdateWithoutProductsInput>, SupplementUncheckedUpdateWithoutProductsInput>
  }

  export type SupplementCreateNestedOneWithoutUsageGuideInput = {
    create?: XOR<SupplementCreateWithoutUsageGuideInput, SupplementUncheckedCreateWithoutUsageGuideInput>
    connectOrCreate?: SupplementCreateOrConnectWithoutUsageGuideInput
    connect?: SupplementWhereUniqueInput
  }

  export type SupplementUpdateOneRequiredWithoutUsageGuideNestedInput = {
    create?: XOR<SupplementCreateWithoutUsageGuideInput, SupplementUncheckedCreateWithoutUsageGuideInput>
    connectOrCreate?: SupplementCreateOrConnectWithoutUsageGuideInput
    upsert?: SupplementUpsertWithoutUsageGuideInput
    connect?: SupplementWhereUniqueInput
    update?: XOR<XOR<SupplementUpdateToOneWithWhereWithoutUsageGuideInput, SupplementUpdateWithoutUsageGuideInput>, SupplementUncheckedUpdateWithoutUsageGuideInput>
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

  export type SupplementCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: SupplementBenefitCreateNestedManyWithoutSupplementInput
    products?: ProductCreateNestedManyWithoutSupplementInput
    usageGuide?: UsageGuideCreateNestedOneWithoutSupplementInput
  }

  export type SupplementUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description?: string | null
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: SupplementBenefitUncheckedCreateNestedManyWithoutSupplementInput
    products?: ProductUncheckedCreateNestedManyWithoutSupplementInput
    usageGuide?: UsageGuideUncheckedCreateNestedOneWithoutSupplementInput
  }

  export type SupplementCreateOrConnectWithoutCategoryInput = {
    where: SupplementWhereUniqueInput
    create: XOR<SupplementCreateWithoutCategoryInput, SupplementUncheckedCreateWithoutCategoryInput>
  }

  export type SupplementCreateManyCategoryInputEnvelope = {
    data: SupplementCreateManyCategoryInput | SupplementCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SupplementUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SupplementWhereUniqueInput
    update: XOR<SupplementUpdateWithoutCategoryInput, SupplementUncheckedUpdateWithoutCategoryInput>
    create: XOR<SupplementCreateWithoutCategoryInput, SupplementUncheckedCreateWithoutCategoryInput>
  }

  export type SupplementUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SupplementWhereUniqueInput
    data: XOR<SupplementUpdateWithoutCategoryInput, SupplementUncheckedUpdateWithoutCategoryInput>
  }

  export type SupplementUpdateManyWithWhereWithoutCategoryInput = {
    where: SupplementScalarWhereInput
    data: XOR<SupplementUpdateManyMutationInput, SupplementUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SupplementScalarWhereInput = {
    AND?: SupplementScalarWhereInput | SupplementScalarWhereInput[]
    OR?: SupplementScalarWhereInput[]
    NOT?: SupplementScalarWhereInput | SupplementScalarWhereInput[]
    id?: IntFilter<"Supplement"> | number
    name?: StringFilter<"Supplement"> | string
    description?: StringNullableFilter<"Supplement"> | string | null
    categoryId?: IntFilter<"Supplement"> | number
    rating?: FloatFilter<"Supplement"> | number
    reviews?: IntFilter<"Supplement"> | number
    topPrice?: StringFilter<"Supplement"> | string
    badge?: StringNullableFilter<"Supplement"> | string | null
    link?: StringNullableFilter<"Supplement"> | string | null
    createdAt?: DateTimeFilter<"Supplement"> | Date | string
    updatedAt?: DateTimeFilter<"Supplement"> | Date | string
  }

  export type CategoryCreateWithoutSupplementsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutSupplementsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutSupplementsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSupplementsInput, CategoryUncheckedCreateWithoutSupplementsInput>
  }

  export type SupplementBenefitCreateWithoutSupplementInput = {
    benefit: BenefitCreateNestedOneWithoutSupplementsInput
  }

  export type SupplementBenefitUncheckedCreateWithoutSupplementInput = {
    benefitId: number
  }

  export type SupplementBenefitCreateOrConnectWithoutSupplementInput = {
    where: SupplementBenefitWhereUniqueInput
    create: XOR<SupplementBenefitCreateWithoutSupplementInput, SupplementBenefitUncheckedCreateWithoutSupplementInput>
  }

  export type SupplementBenefitCreateManySupplementInputEnvelope = {
    data: SupplementBenefitCreateManySupplementInput | SupplementBenefitCreateManySupplementInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutSupplementInput = {
    rank?: number | null
    name: string
    brand: string
    price: string
    rating?: number
    reviews?: number
    dosage: string
    capsules: string
    badge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutSupplementInput = {
    id?: number
    rank?: number | null
    name: string
    brand: string
    price: string
    rating?: number
    reviews?: number
    dosage: string
    capsules: string
    badge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutSupplementInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSupplementInput, ProductUncheckedCreateWithoutSupplementInput>
  }

  export type ProductCreateManySupplementInputEnvelope = {
    data: ProductCreateManySupplementInput | ProductCreateManySupplementInput[]
    skipDuplicates?: boolean
  }

  export type UsageGuideCreateWithoutSupplementInput = {
    timing?: string | null
    timingDesc?: string | null
    withFood?: string | null
    withFoodDesc?: string | null
    timeToEffect?: string | null
    effectDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageGuideUncheckedCreateWithoutSupplementInput = {
    id?: number
    timing?: string | null
    timingDesc?: string | null
    withFood?: string | null
    withFoodDesc?: string | null
    timeToEffect?: string | null
    effectDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageGuideCreateOrConnectWithoutSupplementInput = {
    where: UsageGuideWhereUniqueInput
    create: XOR<UsageGuideCreateWithoutSupplementInput, UsageGuideUncheckedCreateWithoutSupplementInput>
  }

  export type CategoryUpsertWithoutSupplementsInput = {
    update: XOR<CategoryUpdateWithoutSupplementsInput, CategoryUncheckedUpdateWithoutSupplementsInput>
    create: XOR<CategoryCreateWithoutSupplementsInput, CategoryUncheckedCreateWithoutSupplementsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSupplementsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSupplementsInput, CategoryUncheckedUpdateWithoutSupplementsInput>
  }

  export type CategoryUpdateWithoutSupplementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutSupplementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplementBenefitUpsertWithWhereUniqueWithoutSupplementInput = {
    where: SupplementBenefitWhereUniqueInput
    update: XOR<SupplementBenefitUpdateWithoutSupplementInput, SupplementBenefitUncheckedUpdateWithoutSupplementInput>
    create: XOR<SupplementBenefitCreateWithoutSupplementInput, SupplementBenefitUncheckedCreateWithoutSupplementInput>
  }

  export type SupplementBenefitUpdateWithWhereUniqueWithoutSupplementInput = {
    where: SupplementBenefitWhereUniqueInput
    data: XOR<SupplementBenefitUpdateWithoutSupplementInput, SupplementBenefitUncheckedUpdateWithoutSupplementInput>
  }

  export type SupplementBenefitUpdateManyWithWhereWithoutSupplementInput = {
    where: SupplementBenefitScalarWhereInput
    data: XOR<SupplementBenefitUpdateManyMutationInput, SupplementBenefitUncheckedUpdateManyWithoutSupplementInput>
  }

  export type SupplementBenefitScalarWhereInput = {
    AND?: SupplementBenefitScalarWhereInput | SupplementBenefitScalarWhereInput[]
    OR?: SupplementBenefitScalarWhereInput[]
    NOT?: SupplementBenefitScalarWhereInput | SupplementBenefitScalarWhereInput[]
    supplementId?: IntFilter<"SupplementBenefit"> | number
    benefitId?: IntFilter<"SupplementBenefit"> | number
  }

  export type ProductUpsertWithWhereUniqueWithoutSupplementInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSupplementInput, ProductUncheckedUpdateWithoutSupplementInput>
    create: XOR<ProductCreateWithoutSupplementInput, ProductUncheckedCreateWithoutSupplementInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSupplementInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSupplementInput, ProductUncheckedUpdateWithoutSupplementInput>
  }

  export type ProductUpdateManyWithWhereWithoutSupplementInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSupplementInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    rank?: IntNullableFilter<"Product"> | number | null
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    price?: StringFilter<"Product"> | string
    rating?: FloatFilter<"Product"> | number
    reviews?: IntFilter<"Product"> | number
    dosage?: StringFilter<"Product"> | string
    capsules?: StringFilter<"Product"> | string
    badge?: StringNullableFilter<"Product"> | string | null
    supplementId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type UsageGuideUpsertWithoutSupplementInput = {
    update: XOR<UsageGuideUpdateWithoutSupplementInput, UsageGuideUncheckedUpdateWithoutSupplementInput>
    create: XOR<UsageGuideCreateWithoutSupplementInput, UsageGuideUncheckedCreateWithoutSupplementInput>
    where?: UsageGuideWhereInput
  }

  export type UsageGuideUpdateToOneWithWhereWithoutSupplementInput = {
    where?: UsageGuideWhereInput
    data: XOR<UsageGuideUpdateWithoutSupplementInput, UsageGuideUncheckedUpdateWithoutSupplementInput>
  }

  export type UsageGuideUpdateWithoutSupplementInput = {
    timing?: NullableStringFieldUpdateOperationsInput | string | null
    timingDesc?: NullableStringFieldUpdateOperationsInput | string | null
    withFood?: NullableStringFieldUpdateOperationsInput | string | null
    withFoodDesc?: NullableStringFieldUpdateOperationsInput | string | null
    timeToEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageGuideUncheckedUpdateWithoutSupplementInput = {
    id?: IntFieldUpdateOperationsInput | number
    timing?: NullableStringFieldUpdateOperationsInput | string | null
    timingDesc?: NullableStringFieldUpdateOperationsInput | string | null
    withFood?: NullableStringFieldUpdateOperationsInput | string | null
    withFoodDesc?: NullableStringFieldUpdateOperationsInput | string | null
    timeToEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplementBenefitCreateWithoutBenefitInput = {
    supplement: SupplementCreateNestedOneWithoutBenefitsInput
  }

  export type SupplementBenefitUncheckedCreateWithoutBenefitInput = {
    supplementId: number
  }

  export type SupplementBenefitCreateOrConnectWithoutBenefitInput = {
    where: SupplementBenefitWhereUniqueInput
    create: XOR<SupplementBenefitCreateWithoutBenefitInput, SupplementBenefitUncheckedCreateWithoutBenefitInput>
  }

  export type SupplementBenefitCreateManyBenefitInputEnvelope = {
    data: SupplementBenefitCreateManyBenefitInput | SupplementBenefitCreateManyBenefitInput[]
    skipDuplicates?: boolean
  }

  export type SupplementBenefitUpsertWithWhereUniqueWithoutBenefitInput = {
    where: SupplementBenefitWhereUniqueInput
    update: XOR<SupplementBenefitUpdateWithoutBenefitInput, SupplementBenefitUncheckedUpdateWithoutBenefitInput>
    create: XOR<SupplementBenefitCreateWithoutBenefitInput, SupplementBenefitUncheckedCreateWithoutBenefitInput>
  }

  export type SupplementBenefitUpdateWithWhereUniqueWithoutBenefitInput = {
    where: SupplementBenefitWhereUniqueInput
    data: XOR<SupplementBenefitUpdateWithoutBenefitInput, SupplementBenefitUncheckedUpdateWithoutBenefitInput>
  }

  export type SupplementBenefitUpdateManyWithWhereWithoutBenefitInput = {
    where: SupplementBenefitScalarWhereInput
    data: XOR<SupplementBenefitUpdateManyMutationInput, SupplementBenefitUncheckedUpdateManyWithoutBenefitInput>
  }

  export type SupplementCreateWithoutBenefitsInput = {
    name: string
    description?: string | null
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSupplementsInput
    products?: ProductCreateNestedManyWithoutSupplementInput
    usageGuide?: UsageGuideCreateNestedOneWithoutSupplementInput
  }

  export type SupplementUncheckedCreateWithoutBenefitsInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSupplementInput
    usageGuide?: UsageGuideUncheckedCreateNestedOneWithoutSupplementInput
  }

  export type SupplementCreateOrConnectWithoutBenefitsInput = {
    where: SupplementWhereUniqueInput
    create: XOR<SupplementCreateWithoutBenefitsInput, SupplementUncheckedCreateWithoutBenefitsInput>
  }

  export type BenefitCreateWithoutSupplementsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUncheckedCreateWithoutSupplementsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitCreateOrConnectWithoutSupplementsInput = {
    where: BenefitWhereUniqueInput
    create: XOR<BenefitCreateWithoutSupplementsInput, BenefitUncheckedCreateWithoutSupplementsInput>
  }

  export type SupplementUpsertWithoutBenefitsInput = {
    update: XOR<SupplementUpdateWithoutBenefitsInput, SupplementUncheckedUpdateWithoutBenefitsInput>
    create: XOR<SupplementCreateWithoutBenefitsInput, SupplementUncheckedCreateWithoutBenefitsInput>
    where?: SupplementWhereInput
  }

  export type SupplementUpdateToOneWithWhereWithoutBenefitsInput = {
    where?: SupplementWhereInput
    data: XOR<SupplementUpdateWithoutBenefitsInput, SupplementUncheckedUpdateWithoutBenefitsInput>
  }

  export type SupplementUpdateWithoutBenefitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSupplementsNestedInput
    products?: ProductUpdateManyWithoutSupplementNestedInput
    usageGuide?: UsageGuideUpdateOneWithoutSupplementNestedInput
  }

  export type SupplementUncheckedUpdateWithoutBenefitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSupplementNestedInput
    usageGuide?: UsageGuideUncheckedUpdateOneWithoutSupplementNestedInput
  }

  export type BenefitUpsertWithoutSupplementsInput = {
    update: XOR<BenefitUpdateWithoutSupplementsInput, BenefitUncheckedUpdateWithoutSupplementsInput>
    create: XOR<BenefitCreateWithoutSupplementsInput, BenefitUncheckedCreateWithoutSupplementsInput>
    where?: BenefitWhereInput
  }

  export type BenefitUpdateToOneWithWhereWithoutSupplementsInput = {
    where?: BenefitWhereInput
    data: XOR<BenefitUpdateWithoutSupplementsInput, BenefitUncheckedUpdateWithoutSupplementsInput>
  }

  export type BenefitUpdateWithoutSupplementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateWithoutSupplementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplementCreateWithoutProductsInput = {
    name: string
    description?: string | null
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSupplementsInput
    benefits?: SupplementBenefitCreateNestedManyWithoutSupplementInput
    usageGuide?: UsageGuideCreateNestedOneWithoutSupplementInput
  }

  export type SupplementUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: SupplementBenefitUncheckedCreateNestedManyWithoutSupplementInput
    usageGuide?: UsageGuideUncheckedCreateNestedOneWithoutSupplementInput
  }

  export type SupplementCreateOrConnectWithoutProductsInput = {
    where: SupplementWhereUniqueInput
    create: XOR<SupplementCreateWithoutProductsInput, SupplementUncheckedCreateWithoutProductsInput>
  }

  export type SupplementUpsertWithoutProductsInput = {
    update: XOR<SupplementUpdateWithoutProductsInput, SupplementUncheckedUpdateWithoutProductsInput>
    create: XOR<SupplementCreateWithoutProductsInput, SupplementUncheckedCreateWithoutProductsInput>
    where?: SupplementWhereInput
  }

  export type SupplementUpdateToOneWithWhereWithoutProductsInput = {
    where?: SupplementWhereInput
    data: XOR<SupplementUpdateWithoutProductsInput, SupplementUncheckedUpdateWithoutProductsInput>
  }

  export type SupplementUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSupplementsNestedInput
    benefits?: SupplementBenefitUpdateManyWithoutSupplementNestedInput
    usageGuide?: UsageGuideUpdateOneWithoutSupplementNestedInput
  }

  export type SupplementUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: SupplementBenefitUncheckedUpdateManyWithoutSupplementNestedInput
    usageGuide?: UsageGuideUncheckedUpdateOneWithoutSupplementNestedInput
  }

  export type SupplementCreateWithoutUsageGuideInput = {
    name: string
    description?: string | null
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSupplementsInput
    benefits?: SupplementBenefitCreateNestedManyWithoutSupplementInput
    products?: ProductCreateNestedManyWithoutSupplementInput
  }

  export type SupplementUncheckedCreateWithoutUsageGuideInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: SupplementBenefitUncheckedCreateNestedManyWithoutSupplementInput
    products?: ProductUncheckedCreateNestedManyWithoutSupplementInput
  }

  export type SupplementCreateOrConnectWithoutUsageGuideInput = {
    where: SupplementWhereUniqueInput
    create: XOR<SupplementCreateWithoutUsageGuideInput, SupplementUncheckedCreateWithoutUsageGuideInput>
  }

  export type SupplementUpsertWithoutUsageGuideInput = {
    update: XOR<SupplementUpdateWithoutUsageGuideInput, SupplementUncheckedUpdateWithoutUsageGuideInput>
    create: XOR<SupplementCreateWithoutUsageGuideInput, SupplementUncheckedCreateWithoutUsageGuideInput>
    where?: SupplementWhereInput
  }

  export type SupplementUpdateToOneWithWhereWithoutUsageGuideInput = {
    where?: SupplementWhereInput
    data: XOR<SupplementUpdateWithoutUsageGuideInput, SupplementUncheckedUpdateWithoutUsageGuideInput>
  }

  export type SupplementUpdateWithoutUsageGuideInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSupplementsNestedInput
    benefits?: SupplementBenefitUpdateManyWithoutSupplementNestedInput
    products?: ProductUpdateManyWithoutSupplementNestedInput
  }

  export type SupplementUncheckedUpdateWithoutUsageGuideInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: SupplementBenefitUncheckedUpdateManyWithoutSupplementNestedInput
    products?: ProductUncheckedUpdateManyWithoutSupplementNestedInput
  }

  export type SupplementCreateManyCategoryInput = {
    id?: number
    name: string
    description?: string | null
    rating?: number
    reviews?: number
    topPrice: string
    badge?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplementUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: SupplementBenefitUpdateManyWithoutSupplementNestedInput
    products?: ProductUpdateManyWithoutSupplementNestedInput
    usageGuide?: UsageGuideUpdateOneWithoutSupplementNestedInput
  }

  export type SupplementUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: SupplementBenefitUncheckedUpdateManyWithoutSupplementNestedInput
    products?: ProductUncheckedUpdateManyWithoutSupplementNestedInput
    usageGuide?: UsageGuideUncheckedUpdateOneWithoutSupplementNestedInput
  }

  export type SupplementUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    topPrice?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplementBenefitCreateManySupplementInput = {
    benefitId: number
  }

  export type ProductCreateManySupplementInput = {
    id?: number
    rank?: number | null
    name: string
    brand: string
    price: string
    rating?: number
    reviews?: number
    dosage: string
    capsules: string
    badge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplementBenefitUpdateWithoutSupplementInput = {
    benefit?: BenefitUpdateOneRequiredWithoutSupplementsNestedInput
  }

  export type SupplementBenefitUncheckedUpdateWithoutSupplementInput = {
    benefitId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplementBenefitUncheckedUpdateManyWithoutSupplementInput = {
    benefitId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutSupplementInput = {
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    capsules?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutSupplementInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    capsules?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyWithoutSupplementInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    capsules?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplementBenefitCreateManyBenefitInput = {
    supplementId: number
  }

  export type SupplementBenefitUpdateWithoutBenefitInput = {
    supplement?: SupplementUpdateOneRequiredWithoutBenefitsNestedInput
  }

  export type SupplementBenefitUncheckedUpdateWithoutBenefitInput = {
    supplementId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplementBenefitUncheckedUpdateManyWithoutBenefitInput = {
    supplementId?: IntFieldUpdateOperationsInput | number
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