
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
 * Model Articulo
 * 
 */
export type Articulo = $Result.DefaultSelection<Prisma.$ArticuloPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articulos
 * const articulos = await prisma.articulo.findMany()
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
   * // Fetch zero or more Articulos
   * const articulos = await prisma.articulo.findMany()
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
   * `prisma.articulo`: Exposes CRUD operations for the **Articulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articulos
    * const articulos = await prisma.articulo.findMany()
    * ```
    */
  get articulo(): Prisma.ArticuloDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Articulo: 'Articulo'
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
      modelProps: "articulo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Articulo: {
        payload: Prisma.$ArticuloPayload<ExtArgs>
        fields: Prisma.ArticuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload>
          }
          findFirst: {
            args: Prisma.ArticuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload>
          }
          findMany: {
            args: Prisma.ArticuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload>[]
          }
          create: {
            args: Prisma.ArticuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload>
          }
          createMany: {
            args: Prisma.ArticuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticuloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload>[]
          }
          delete: {
            args: Prisma.ArticuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload>
          }
          update: {
            args: Prisma.ArticuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload>
          }
          deleteMany: {
            args: Prisma.ArticuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticuloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload>[]
          }
          upsert: {
            args: Prisma.ArticuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPayload>
          }
          aggregate: {
            args: Prisma.ArticuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticulo>
          }
          groupBy: {
            args: Prisma.ArticuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticuloCountArgs<ExtArgs>
            result: $Utils.Optional<ArticuloCountAggregateOutputType> | number
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
    articulo?: ArticuloOmit
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
   * Models
   */

  /**
   * Model Articulo
   */

  export type AggregateArticulo = {
    _count: ArticuloCountAggregateOutputType | null
    _avg: ArticuloAvgAggregateOutputType | null
    _sum: ArticuloSumAggregateOutputType | null
    _min: ArticuloMinAggregateOutputType | null
    _max: ArticuloMaxAggregateOutputType | null
  }

  export type ArticuloAvgAggregateOutputType = {
    id: number | null
    demanda: number | null
    costoAlmacenamiento: number | null
    costoPedido: number | null
    costoCompra: number | null
  }

  export type ArticuloSumAggregateOutputType = {
    id: number | null
    demanda: number | null
    costoAlmacenamiento: number | null
    costoPedido: number | null
    costoCompra: number | null
  }

  export type ArticuloMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    demanda: number | null
    costoAlmacenamiento: number | null
    costoPedido: number | null
    costoCompra: number | null
    estado: boolean | null
    fechaBaja: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticuloMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    demanda: number | null
    costoAlmacenamiento: number | null
    costoPedido: number | null
    costoCompra: number | null
    estado: boolean | null
    fechaBaja: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticuloCountAggregateOutputType = {
    id: number
    codigo: number
    descripcion: number
    demanda: number
    costoAlmacenamiento: number
    costoPedido: number
    costoCompra: number
    estado: number
    fechaBaja: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticuloAvgAggregateInputType = {
    id?: true
    demanda?: true
    costoAlmacenamiento?: true
    costoPedido?: true
    costoCompra?: true
  }

  export type ArticuloSumAggregateInputType = {
    id?: true
    demanda?: true
    costoAlmacenamiento?: true
    costoPedido?: true
    costoCompra?: true
  }

  export type ArticuloMinAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    demanda?: true
    costoAlmacenamiento?: true
    costoPedido?: true
    costoCompra?: true
    estado?: true
    fechaBaja?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticuloMaxAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    demanda?: true
    costoAlmacenamiento?: true
    costoPedido?: true
    costoCompra?: true
    estado?: true
    fechaBaja?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticuloCountAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    demanda?: true
    costoAlmacenamiento?: true
    costoPedido?: true
    costoCompra?: true
    estado?: true
    fechaBaja?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articulo to aggregate.
     */
    where?: ArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articulos to fetch.
     */
    orderBy?: ArticuloOrderByWithRelationInput | ArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articulos
    **/
    _count?: true | ArticuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticuloMaxAggregateInputType
  }

  export type GetArticuloAggregateType<T extends ArticuloAggregateArgs> = {
        [P in keyof T & keyof AggregateArticulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticulo[P]>
      : GetScalarType<T[P], AggregateArticulo[P]>
  }




  export type ArticuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloWhereInput
    orderBy?: ArticuloOrderByWithAggregationInput | ArticuloOrderByWithAggregationInput[]
    by: ArticuloScalarFieldEnum[] | ArticuloScalarFieldEnum
    having?: ArticuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticuloCountAggregateInputType | true
    _avg?: ArticuloAvgAggregateInputType
    _sum?: ArticuloSumAggregateInputType
    _min?: ArticuloMinAggregateInputType
    _max?: ArticuloMaxAggregateInputType
  }

  export type ArticuloGroupByOutputType = {
    id: number
    codigo: string
    descripcion: string
    demanda: number
    costoAlmacenamiento: number
    costoPedido: number
    costoCompra: number
    estado: boolean
    fechaBaja: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ArticuloCountAggregateOutputType | null
    _avg: ArticuloAvgAggregateOutputType | null
    _sum: ArticuloSumAggregateOutputType | null
    _min: ArticuloMinAggregateOutputType | null
    _max: ArticuloMaxAggregateOutputType | null
  }

  type GetArticuloGroupByPayload<T extends ArticuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticuloGroupByOutputType[P]>
            : GetScalarType<T[P], ArticuloGroupByOutputType[P]>
        }
      >
    >


  export type ArticuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    demanda?: boolean
    costoAlmacenamiento?: boolean
    costoPedido?: boolean
    costoCompra?: boolean
    estado?: boolean
    fechaBaja?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["articulo"]>

  export type ArticuloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    demanda?: boolean
    costoAlmacenamiento?: boolean
    costoPedido?: boolean
    costoCompra?: boolean
    estado?: boolean
    fechaBaja?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["articulo"]>

  export type ArticuloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    demanda?: boolean
    costoAlmacenamiento?: boolean
    costoPedido?: boolean
    costoCompra?: boolean
    estado?: boolean
    fechaBaja?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["articulo"]>

  export type ArticuloSelectScalar = {
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    demanda?: boolean
    costoAlmacenamiento?: boolean
    costoPedido?: boolean
    costoCompra?: boolean
    estado?: boolean
    fechaBaja?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descripcion" | "demanda" | "costoAlmacenamiento" | "costoPedido" | "costoCompra" | "estado" | "fechaBaja" | "createdAt" | "updatedAt", ExtArgs["result"]["articulo"]>

  export type $ArticuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Articulo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      descripcion: string
      demanda: number
      costoAlmacenamiento: number
      costoPedido: number
      costoCompra: number
      estado: boolean
      fechaBaja: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articulo"]>
    composites: {}
  }

  type ArticuloGetPayload<S extends boolean | null | undefined | ArticuloDefaultArgs> = $Result.GetResult<Prisma.$ArticuloPayload, S>

  type ArticuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticuloCountAggregateInputType | true
    }

  export interface ArticuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Articulo'], meta: { name: 'Articulo' } }
    /**
     * Find zero or one Articulo that matches the filter.
     * @param {ArticuloFindUniqueArgs} args - Arguments to find a Articulo
     * @example
     * // Get one Articulo
     * const articulo = await prisma.articulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticuloFindUniqueArgs>(args: SelectSubset<T, ArticuloFindUniqueArgs<ExtArgs>>): Prisma__ArticuloClient<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticuloFindUniqueOrThrowArgs} args - Arguments to find a Articulo
     * @example
     * // Get one Articulo
     * const articulo = await prisma.articulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticuloFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticuloClient<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloFindFirstArgs} args - Arguments to find a Articulo
     * @example
     * // Get one Articulo
     * const articulo = await prisma.articulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticuloFindFirstArgs>(args?: SelectSubset<T, ArticuloFindFirstArgs<ExtArgs>>): Prisma__ArticuloClient<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloFindFirstOrThrowArgs} args - Arguments to find a Articulo
     * @example
     * // Get one Articulo
     * const articulo = await prisma.articulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticuloFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticuloClient<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articulos
     * const articulos = await prisma.articulo.findMany()
     * 
     * // Get first 10 Articulos
     * const articulos = await prisma.articulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articuloWithIdOnly = await prisma.articulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticuloFindManyArgs>(args?: SelectSubset<T, ArticuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articulo.
     * @param {ArticuloCreateArgs} args - Arguments to create a Articulo.
     * @example
     * // Create one Articulo
     * const Articulo = await prisma.articulo.create({
     *   data: {
     *     // ... data to create a Articulo
     *   }
     * })
     * 
     */
    create<T extends ArticuloCreateArgs>(args: SelectSubset<T, ArticuloCreateArgs<ExtArgs>>): Prisma__ArticuloClient<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articulos.
     * @param {ArticuloCreateManyArgs} args - Arguments to create many Articulos.
     * @example
     * // Create many Articulos
     * const articulo = await prisma.articulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticuloCreateManyArgs>(args?: SelectSubset<T, ArticuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articulos and returns the data saved in the database.
     * @param {ArticuloCreateManyAndReturnArgs} args - Arguments to create many Articulos.
     * @example
     * // Create many Articulos
     * const articulo = await prisma.articulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articulos and only return the `id`
     * const articuloWithIdOnly = await prisma.articulo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticuloCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticuloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Articulo.
     * @param {ArticuloDeleteArgs} args - Arguments to delete one Articulo.
     * @example
     * // Delete one Articulo
     * const Articulo = await prisma.articulo.delete({
     *   where: {
     *     // ... filter to delete one Articulo
     *   }
     * })
     * 
     */
    delete<T extends ArticuloDeleteArgs>(args: SelectSubset<T, ArticuloDeleteArgs<ExtArgs>>): Prisma__ArticuloClient<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articulo.
     * @param {ArticuloUpdateArgs} args - Arguments to update one Articulo.
     * @example
     * // Update one Articulo
     * const articulo = await prisma.articulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticuloUpdateArgs>(args: SelectSubset<T, ArticuloUpdateArgs<ExtArgs>>): Prisma__ArticuloClient<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articulos.
     * @param {ArticuloDeleteManyArgs} args - Arguments to filter Articulos to delete.
     * @example
     * // Delete a few Articulos
     * const { count } = await prisma.articulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticuloDeleteManyArgs>(args?: SelectSubset<T, ArticuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articulos
     * const articulo = await prisma.articulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticuloUpdateManyArgs>(args: SelectSubset<T, ArticuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articulos and returns the data updated in the database.
     * @param {ArticuloUpdateManyAndReturnArgs} args - Arguments to update many Articulos.
     * @example
     * // Update many Articulos
     * const articulo = await prisma.articulo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articulos and only return the `id`
     * const articuloWithIdOnly = await prisma.articulo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArticuloUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticuloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Articulo.
     * @param {ArticuloUpsertArgs} args - Arguments to update or create a Articulo.
     * @example
     * // Update or create a Articulo
     * const articulo = await prisma.articulo.upsert({
     *   create: {
     *     // ... data to create a Articulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articulo we want to update
     *   }
     * })
     */
    upsert<T extends ArticuloUpsertArgs>(args: SelectSubset<T, ArticuloUpsertArgs<ExtArgs>>): Prisma__ArticuloClient<$Result.GetResult<Prisma.$ArticuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloCountArgs} args - Arguments to filter Articulos to count.
     * @example
     * // Count the number of Articulos
     * const count = await prisma.articulo.count({
     *   where: {
     *     // ... the filter for the Articulos we want to count
     *   }
     * })
    **/
    count<T extends ArticuloCountArgs>(
      args?: Subset<T, ArticuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticuloAggregateArgs>(args: Subset<T, ArticuloAggregateArgs>): Prisma.PrismaPromise<GetArticuloAggregateType<T>>

    /**
     * Group by Articulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloGroupByArgs} args - Group by arguments.
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
      T extends ArticuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticuloGroupByArgs['orderBy'] }
        : { orderBy?: ArticuloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Articulo model
   */
  readonly fields: ArticuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Articulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Articulo model
   */
  interface ArticuloFieldRefs {
    readonly id: FieldRef<"Articulo", 'Int'>
    readonly codigo: FieldRef<"Articulo", 'String'>
    readonly descripcion: FieldRef<"Articulo", 'String'>
    readonly demanda: FieldRef<"Articulo", 'Int'>
    readonly costoAlmacenamiento: FieldRef<"Articulo", 'Float'>
    readonly costoPedido: FieldRef<"Articulo", 'Float'>
    readonly costoCompra: FieldRef<"Articulo", 'Float'>
    readonly estado: FieldRef<"Articulo", 'Boolean'>
    readonly fechaBaja: FieldRef<"Articulo", 'DateTime'>
    readonly createdAt: FieldRef<"Articulo", 'DateTime'>
    readonly updatedAt: FieldRef<"Articulo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Articulo findUnique
   */
  export type ArticuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * Filter, which Articulo to fetch.
     */
    where: ArticuloWhereUniqueInput
  }

  /**
   * Articulo findUniqueOrThrow
   */
  export type ArticuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * Filter, which Articulo to fetch.
     */
    where: ArticuloWhereUniqueInput
  }

  /**
   * Articulo findFirst
   */
  export type ArticuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * Filter, which Articulo to fetch.
     */
    where?: ArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articulos to fetch.
     */
    orderBy?: ArticuloOrderByWithRelationInput | ArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articulos.
     */
    cursor?: ArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articulos.
     */
    distinct?: ArticuloScalarFieldEnum | ArticuloScalarFieldEnum[]
  }

  /**
   * Articulo findFirstOrThrow
   */
  export type ArticuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * Filter, which Articulo to fetch.
     */
    where?: ArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articulos to fetch.
     */
    orderBy?: ArticuloOrderByWithRelationInput | ArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articulos.
     */
    cursor?: ArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articulos.
     */
    distinct?: ArticuloScalarFieldEnum | ArticuloScalarFieldEnum[]
  }

  /**
   * Articulo findMany
   */
  export type ArticuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * Filter, which Articulos to fetch.
     */
    where?: ArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articulos to fetch.
     */
    orderBy?: ArticuloOrderByWithRelationInput | ArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articulos.
     */
    cursor?: ArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articulos.
     */
    skip?: number
    distinct?: ArticuloScalarFieldEnum | ArticuloScalarFieldEnum[]
  }

  /**
   * Articulo create
   */
  export type ArticuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * The data needed to create a Articulo.
     */
    data: XOR<ArticuloCreateInput, ArticuloUncheckedCreateInput>
  }

  /**
   * Articulo createMany
   */
  export type ArticuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articulos.
     */
    data: ArticuloCreateManyInput | ArticuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Articulo createManyAndReturn
   */
  export type ArticuloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * The data used to create many Articulos.
     */
    data: ArticuloCreateManyInput | ArticuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Articulo update
   */
  export type ArticuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * The data needed to update a Articulo.
     */
    data: XOR<ArticuloUpdateInput, ArticuloUncheckedUpdateInput>
    /**
     * Choose, which Articulo to update.
     */
    where: ArticuloWhereUniqueInput
  }

  /**
   * Articulo updateMany
   */
  export type ArticuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articulos.
     */
    data: XOR<ArticuloUpdateManyMutationInput, ArticuloUncheckedUpdateManyInput>
    /**
     * Filter which Articulos to update
     */
    where?: ArticuloWhereInput
    /**
     * Limit how many Articulos to update.
     */
    limit?: number
  }

  /**
   * Articulo updateManyAndReturn
   */
  export type ArticuloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * The data used to update Articulos.
     */
    data: XOR<ArticuloUpdateManyMutationInput, ArticuloUncheckedUpdateManyInput>
    /**
     * Filter which Articulos to update
     */
    where?: ArticuloWhereInput
    /**
     * Limit how many Articulos to update.
     */
    limit?: number
  }

  /**
   * Articulo upsert
   */
  export type ArticuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * The filter to search for the Articulo to update in case it exists.
     */
    where: ArticuloWhereUniqueInput
    /**
     * In case the Articulo found by the `where` argument doesn't exist, create a new Articulo with this data.
     */
    create: XOR<ArticuloCreateInput, ArticuloUncheckedCreateInput>
    /**
     * In case the Articulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticuloUpdateInput, ArticuloUncheckedUpdateInput>
  }

  /**
   * Articulo delete
   */
  export type ArticuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
    /**
     * Filter which Articulo to delete.
     */
    where: ArticuloWhereUniqueInput
  }

  /**
   * Articulo deleteMany
   */
  export type ArticuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articulos to delete
     */
    where?: ArticuloWhereInput
    /**
     * Limit how many Articulos to delete.
     */
    limit?: number
  }

  /**
   * Articulo without action
   */
  export type ArticuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo
     */
    select?: ArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articulo
     */
    omit?: ArticuloOmit<ExtArgs> | null
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


  export const ArticuloScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    demanda: 'demanda',
    costoAlmacenamiento: 'costoAlmacenamiento',
    costoPedido: 'costoPedido',
    costoCompra: 'costoCompra',
    estado: 'estado',
    fechaBaja: 'fechaBaja',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticuloScalarFieldEnum = (typeof ArticuloScalarFieldEnum)[keyof typeof ArticuloScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ArticuloWhereInput = {
    AND?: ArticuloWhereInput | ArticuloWhereInput[]
    OR?: ArticuloWhereInput[]
    NOT?: ArticuloWhereInput | ArticuloWhereInput[]
    id?: IntFilter<"Articulo"> | number
    codigo?: StringFilter<"Articulo"> | string
    descripcion?: StringFilter<"Articulo"> | string
    demanda?: IntFilter<"Articulo"> | number
    costoAlmacenamiento?: FloatFilter<"Articulo"> | number
    costoPedido?: FloatFilter<"Articulo"> | number
    costoCompra?: FloatFilter<"Articulo"> | number
    estado?: BoolFilter<"Articulo"> | boolean
    fechaBaja?: DateTimeNullableFilter<"Articulo"> | Date | string | null
    createdAt?: DateTimeFilter<"Articulo"> | Date | string
    updatedAt?: DateTimeFilter<"Articulo"> | Date | string
  }

  export type ArticuloOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    demanda?: SortOrder
    costoAlmacenamiento?: SortOrder
    costoPedido?: SortOrder
    costoCompra?: SortOrder
    estado?: SortOrder
    fechaBaja?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticuloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: ArticuloWhereInput | ArticuloWhereInput[]
    OR?: ArticuloWhereInput[]
    NOT?: ArticuloWhereInput | ArticuloWhereInput[]
    descripcion?: StringFilter<"Articulo"> | string
    demanda?: IntFilter<"Articulo"> | number
    costoAlmacenamiento?: FloatFilter<"Articulo"> | number
    costoPedido?: FloatFilter<"Articulo"> | number
    costoCompra?: FloatFilter<"Articulo"> | number
    estado?: BoolFilter<"Articulo"> | boolean
    fechaBaja?: DateTimeNullableFilter<"Articulo"> | Date | string | null
    createdAt?: DateTimeFilter<"Articulo"> | Date | string
    updatedAt?: DateTimeFilter<"Articulo"> | Date | string
  }, "id" | "codigo">

  export type ArticuloOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    demanda?: SortOrder
    costoAlmacenamiento?: SortOrder
    costoPedido?: SortOrder
    costoCompra?: SortOrder
    estado?: SortOrder
    fechaBaja?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticuloCountOrderByAggregateInput
    _avg?: ArticuloAvgOrderByAggregateInput
    _max?: ArticuloMaxOrderByAggregateInput
    _min?: ArticuloMinOrderByAggregateInput
    _sum?: ArticuloSumOrderByAggregateInput
  }

  export type ArticuloScalarWhereWithAggregatesInput = {
    AND?: ArticuloScalarWhereWithAggregatesInput | ArticuloScalarWhereWithAggregatesInput[]
    OR?: ArticuloScalarWhereWithAggregatesInput[]
    NOT?: ArticuloScalarWhereWithAggregatesInput | ArticuloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Articulo"> | number
    codigo?: StringWithAggregatesFilter<"Articulo"> | string
    descripcion?: StringWithAggregatesFilter<"Articulo"> | string
    demanda?: IntWithAggregatesFilter<"Articulo"> | number
    costoAlmacenamiento?: FloatWithAggregatesFilter<"Articulo"> | number
    costoPedido?: FloatWithAggregatesFilter<"Articulo"> | number
    costoCompra?: FloatWithAggregatesFilter<"Articulo"> | number
    estado?: BoolWithAggregatesFilter<"Articulo"> | boolean
    fechaBaja?: DateTimeNullableWithAggregatesFilter<"Articulo"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Articulo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Articulo"> | Date | string
  }

  export type ArticuloCreateInput = {
    codigo: string
    descripcion: string
    demanda: number
    costoAlmacenamiento: number
    costoPedido: number
    costoCompra: number
    estado?: boolean
    fechaBaja?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticuloUncheckedCreateInput = {
    id?: number
    codigo: string
    descripcion: string
    demanda: number
    costoAlmacenamiento: number
    costoPedido: number
    costoCompra: number
    estado?: boolean
    fechaBaja?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticuloUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    demanda?: IntFieldUpdateOperationsInput | number
    costoAlmacenamiento?: FloatFieldUpdateOperationsInput | number
    costoPedido?: FloatFieldUpdateOperationsInput | number
    costoCompra?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    demanda?: IntFieldUpdateOperationsInput | number
    costoAlmacenamiento?: FloatFieldUpdateOperationsInput | number
    costoPedido?: FloatFieldUpdateOperationsInput | number
    costoCompra?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloCreateManyInput = {
    id?: number
    codigo: string
    descripcion: string
    demanda: number
    costoAlmacenamiento: number
    costoPedido: number
    costoCompra: number
    estado?: boolean
    fechaBaja?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticuloUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    demanda?: IntFieldUpdateOperationsInput | number
    costoAlmacenamiento?: FloatFieldUpdateOperationsInput | number
    costoPedido?: FloatFieldUpdateOperationsInput | number
    costoCompra?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    demanda?: IntFieldUpdateOperationsInput | number
    costoAlmacenamiento?: FloatFieldUpdateOperationsInput | number
    costoPedido?: FloatFieldUpdateOperationsInput | number
    costoCompra?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaBaja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticuloCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    demanda?: SortOrder
    costoAlmacenamiento?: SortOrder
    costoPedido?: SortOrder
    costoCompra?: SortOrder
    estado?: SortOrder
    fechaBaja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticuloAvgOrderByAggregateInput = {
    id?: SortOrder
    demanda?: SortOrder
    costoAlmacenamiento?: SortOrder
    costoPedido?: SortOrder
    costoCompra?: SortOrder
  }

  export type ArticuloMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    demanda?: SortOrder
    costoAlmacenamiento?: SortOrder
    costoPedido?: SortOrder
    costoCompra?: SortOrder
    estado?: SortOrder
    fechaBaja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticuloMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    demanda?: SortOrder
    costoAlmacenamiento?: SortOrder
    costoPedido?: SortOrder
    costoCompra?: SortOrder
    estado?: SortOrder
    fechaBaja?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticuloSumOrderByAggregateInput = {
    id?: SortOrder
    demanda?: SortOrder
    costoAlmacenamiento?: SortOrder
    costoPedido?: SortOrder
    costoCompra?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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