import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Action {
  'aSync' : [] | [bigint],
  'actionType' : string,
  'params' : Uint8Array | number[],
  'retries' : bigint,
}
export type ActionDetail = [ActionId, Action];
export interface ActionId { 'id' : bigint, 'time' : Time }
export interface ArgList {
  'nextCycleActionId' : [] | [bigint],
  'maxExecutions' : [] | [bigint],
  'nextActionId' : bigint,
  'lastActionIdReported' : [] | [bigint],
  'lastCycleReport' : [] | [bigint],
  'initialTimers' : Array<[ActionId, Action]>,
  'expectedExecutionTime' : Time,
  'lastExecutionTime' : Time,
}
export type Args = [] | [ArgList];
export interface EventNotification {
  'id' : bigint,
  'eventId' : bigint,
  'source' : Principal,
  'data' : ICRC16__1,
  'headers' : [] | [ICRC16Map__1],
  'prevEventId' : [] | [bigint],
  'filter' : [] | [string],
  'timestamp' : bigint,
  'namespace' : string,
}
export interface EventNotification__1 {
  'id' : bigint,
  'eventId' : bigint,
  'source' : Principal,
  'data' : ICRC16__2,
  'headers' : [] | [ICRC16Map__3],
  'prevEventId' : [] | [bigint],
  'filter' : [] | [string],
  'timestamp' : bigint,
  'namespace' : string,
}
export interface GenericError { 'message' : string, 'error_code' : bigint }
export type ICRC16 = { 'Int' : bigint } |
  { 'Map' : ICRC16Map } |
  { 'Nat' : bigint } |
  { 'Set' : Array<ICRC16> } |
  { 'Nat16' : number } |
  { 'Nat32' : number } |
  { 'Nat64' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Bool' : boolean } |
  { 'Int8' : number } |
  { 'Nat8' : number } |
  { 'Nats' : Array<bigint> } |
  { 'Text' : string } |
  { 'Bytes' : Uint8Array | number[] } |
  { 'Int16' : number } |
  { 'Int32' : number } |
  { 'Int64' : bigint } |
  { 'Option' : [] | [ICRC16] } |
  { 'Floats' : Array<number> } |
  { 'Float' : number } |
  { 'Principal' : Principal } |
  { 'Array' : Array<ICRC16> } |
  { 'ValueMap' : Array<[ICRC16, ICRC16]> } |
  { 'Class' : Array<ICRC16Property> };
export type ICRC16Map = Array<[string, ICRC16]>;
export type ICRC16Map__1 = Array<[string, ICRC16__1]>;
export type ICRC16Map__2 = Array<[string, ICRC16__2]>;
export type ICRC16Map__3 = Array<[string, ICRC16__2]>;
export interface ICRC16Property {
  'value' : ICRC16,
  'name' : string,
  'immutable' : boolean,
}
export interface ICRC16Property__1 {
  'value' : ICRC16__1,
  'name' : string,
  'immutable' : boolean,
}
export interface ICRC16Property__2 {
  'value' : ICRC16__2,
  'name' : string,
  'immutable' : boolean,
}
export type ICRC16__1 = { 'Int' : bigint } |
  { 'Map' : ICRC16Map__1 } |
  { 'Nat' : bigint } |
  { 'Set' : Array<ICRC16__1> } |
  { 'Nat16' : number } |
  { 'Nat32' : number } |
  { 'Nat64' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Bool' : boolean } |
  { 'Int8' : number } |
  { 'Nat8' : number } |
  { 'Nats' : Array<bigint> } |
  { 'Text' : string } |
  { 'Bytes' : Uint8Array | number[] } |
  { 'Int16' : number } |
  { 'Int32' : number } |
  { 'Int64' : bigint } |
  { 'Option' : [] | [ICRC16__1] } |
  { 'Floats' : Array<number> } |
  { 'Float' : number } |
  { 'Principal' : Principal } |
  { 'Array' : Array<ICRC16__1> } |
  { 'ValueMap' : Array<[ICRC16__1, ICRC16__1]> } |
  { 'Class' : Array<ICRC16Property__1> };
export type ICRC16__2 = { 'Int' : bigint } |
  { 'Map' : Array<[string, ICRC16__2]> } |
  { 'Nat' : bigint } |
  { 'Set' : Array<ICRC16__2> } |
  { 'Nat16' : number } |
  { 'Nat32' : number } |
  { 'Nat64' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Bool' : boolean } |
  { 'Int8' : number } |
  { 'Nat8' : number } |
  { 'Nats' : Array<bigint> } |
  { 'Text' : string } |
  { 'Bytes' : Uint8Array | number[] } |
  { 'Int16' : number } |
  { 'Int32' : number } |
  { 'Int64' : bigint } |
  { 'Option' : [] | [ICRC16__2] } |
  { 'Floats' : Array<number> } |
  { 'Float' : number } |
  { 'Principal' : Principal } |
  { 'Array' : Array<ICRC16__2> } |
  { 'ValueMap' : Array<[ICRC16__2, ICRC16__2]> } |
  { 'Class' : Array<ICRC16Property__2> };
export interface ICRC75Item { 'principal' : Principal, 'namespace' : Namespace }
export interface InitArgs { 'name' : string }
export interface MVEvent {
  'checkRegisteredExecutionListener' : ActorMethod<[], boolean>,
  'getErrors' : ActorMethod<[], Array<string>>,
  'getRecords' : ActorMethod<
    [],
    Array<[Array<[string, Value]>, Array<[string, Value]>]>
  >,
  'get_stats' : ActorMethod<[], Stats>,
  'get_subnet_for_canister' : ActorMethod<
    [],
    { 'Ok' : { 'subnet_id' : [] | [Principal] } } |
      { 'Err' : string }
  >,
  'hello' : ActorMethod<[], string>,
  'icrc72_handle_notification' : ActorMethod<
    [Array<EventNotification>],
    undefined
  >,
  'registerExecutionListenerASync' : ActorMethod<
    [[] | [ICRC16Map__2]],
    Array<SubscriptionRegisterResult>
  >,
  'registerExecutionListenerASyncCalled' : ActorMethod<[], bigint>,
  'registerExecutionListenerSync' : ActorMethod<
    [[] | [ICRC16Map__2]],
    Array<SubscriptionRegisterResult>
  >,
  'registerExecutionListenerSyncCalled' : ActorMethod<[], bigint>,
  'simulate_notification' : ActorMethod<
    [[] | [Principal], Array<EventNotification>],
    undefined
  >,
  'updateSubscription' : ActorMethod<
    [Array<SubscriptionUpdateRequest>],
    Array<SubscriptionUpdateResult>
  >,
}
export type Namespace = string;
export interface Stats {
  'tt' : Stats__1,
  'subscriptions' : Array<[bigint, SubscriptionRecord]>,
  'readyForSubscription' : boolean,
  'backlogs' : Array<[bigint, Array<[bigint, EventNotification__1]>]>,
  'validBroadcasters' : { 'list' : Array<Principal> } |
    { 'icrc75' : ICRC75Item },
  'confirmTimer' : [] | [bigint],
  'error' : [] | [string],
  'confirmAccumulator' : Array<[Principal, Array<bigint>]>,
  'broadcasters' : Array<[bigint, Array<Principal>]>,
  'lastEventId' : Array<[string, Array<[bigint, bigint]>]>,
  'icrc72OrchestratorCanister' : Principal,
}
export interface Stats__1 {
  'timers' : bigint,
  'maxExecutions' : bigint,
  'minAction' : [] | [ActionDetail],
  'cycles' : bigint,
  'nextActionId' : bigint,
  'nextTimer' : [] | [TimerId],
  'expectedExecutionTime' : [] | [Time],
  'lastExecutionTime' : Time,
}
export interface SubscriptionRecord {
  'id' : bigint,
  'config' : ICRC16Map__3,
  'namespace' : string,
}
export type SubscriptionRegisterError = { 'GenericError' : GenericError } |
  { 'PublicationNotFound' : null } |
  { 'ImproperConfig' : string } |
  { 'Unauthorized' : null } |
  { 'GenericBatchError' : string } |
  { 'Exists' : bigint };
export type SubscriptionRegisterResult = [] | [
  { 'Ok' : bigint } |
    { 'Err' : SubscriptionRegisterError }
];
export type SubscriptionUpdateError = { 'GenericError' : GenericError } |
  { 'ImproperConfig' : string } |
  { 'NotFound' : null } |
  { 'Unauthorized' : null } |
  { 'GenericBatchError' : string };
export interface SubscriptionUpdateRequest {
  'subscription' : { 'id' : bigint } |
    { 'namespace' : string },
  'memo' : [] | [Uint8Array | number[]],
  'config' : [string, ICRC16],
  'subscriber' : [] | [Principal],
}
export type SubscriptionUpdateResult = [] | [
  { 'Ok' : boolean } |
    { 'Err' : SubscriptionUpdateError }
];
export type Time = bigint;
export type TimerId = bigint;
export type Value = { 'Int' : bigint } |
  { 'Map' : Array<[string, Value__1]> } |
  { 'Nat' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Text' : string } |
  { 'Array' : Array<Value__1> };
export type Value__1 = { 'Int' : bigint } |
  { 'Map' : Array<[string, Value__1]> } |
  { 'Nat' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Text' : string } |
  { 'Array' : Array<Value__1> };
export interface _SERVICE extends MVEvent {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];