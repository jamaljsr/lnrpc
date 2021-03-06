// package: routerrpc
// file: routerrpc/router.proto

import * as jspb from "google-protobuf";
import * as rpc_pb from "../rpc_pb";

export class SendPaymentRequest extends jspb.Message {
  getDest(): Uint8Array | string;
  getDest_asU8(): Uint8Array;
  getDest_asB64(): string;
  setDest(value: Uint8Array | string): void;

  getAmt(): number;
  setAmt(value: number): void;

  getAmtMsat(): number;
  setAmtMsat(value: number): void;

  getPaymentHash(): Uint8Array | string;
  getPaymentHash_asU8(): Uint8Array;
  getPaymentHash_asB64(): string;
  setPaymentHash(value: Uint8Array | string): void;

  getFinalCltvDelta(): number;
  setFinalCltvDelta(value: number): void;

  getPaymentRequest(): string;
  setPaymentRequest(value: string): void;

  getTimeoutSeconds(): number;
  setTimeoutSeconds(value: number): void;

  getFeeLimitSat(): number;
  setFeeLimitSat(value: number): void;

  getFeeLimitMsat(): number;
  setFeeLimitMsat(value: number): void;

  getOutgoingChanId(): string;
  setOutgoingChanId(value: string): void;

  clearOutgoingChanIdsList(): void;
  getOutgoingChanIdsList(): Array<number>;
  setOutgoingChanIdsList(value: Array<number>): void;
  addOutgoingChanIds(value: number, index?: number): number;

  getLastHopPubkey(): Uint8Array | string;
  getLastHopPubkey_asU8(): Uint8Array;
  getLastHopPubkey_asB64(): string;
  setLastHopPubkey(value: Uint8Array | string): void;

  getCltvLimit(): number;
  setCltvLimit(value: number): void;

  clearRouteHintsList(): void;
  getRouteHintsList(): Array<rpc_pb.RouteHint>;
  setRouteHintsList(value: Array<rpc_pb.RouteHint>): void;
  addRouteHints(value?: rpc_pb.RouteHint, index?: number): rpc_pb.RouteHint;

  getDestCustomRecordsMap(): jspb.Map<number, Uint8Array | string>;
  clearDestCustomRecordsMap(): void;
  getAllowSelfPayment(): boolean;
  setAllowSelfPayment(value: boolean): void;

  clearDestFeaturesList(): void;
  getDestFeaturesList(): Array<rpc_pb.FeatureBit>;
  setDestFeaturesList(value: Array<rpc_pb.FeatureBit>): void;
  addDestFeatures(value: rpc_pb.FeatureBit, index?: number): rpc_pb.FeatureBit;

  getMaxParts(): number;
  setMaxParts(value: number): void;

  getNoInflightUpdates(): boolean;
  setNoInflightUpdates(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendPaymentRequest): SendPaymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPaymentRequest;
  static deserializeBinaryFromReader(message: SendPaymentRequest, reader: jspb.BinaryReader): SendPaymentRequest;
}

export namespace SendPaymentRequest {
  export type AsObject = {
    dest: Uint8Array | string,
    amt: number,
    amtMsat: number,
    paymentHash: Uint8Array | string,
    finalCltvDelta: number,
    paymentRequest: string,
    timeoutSeconds: number,
    feeLimitSat: number,
    feeLimitMsat: number,
    outgoingChanId: string,
    outgoingChanIds: Array<number>,
    lastHopPubkey: Uint8Array | string,
    cltvLimit: number,
    routeHints: Array<rpc_pb.RouteHint.AsObject>,
    destCustomRecords: Array<[number, Uint8Array | string]>,
    allowSelfPayment: boolean,
    destFeatures: Array<rpc_pb.FeatureBit>,
    maxParts: number,
    noInflightUpdates: boolean,
  }
}

export class TrackPaymentRequest extends jspb.Message {
  getPaymentHash(): Uint8Array | string;
  getPaymentHash_asU8(): Uint8Array;
  getPaymentHash_asB64(): string;
  setPaymentHash(value: Uint8Array | string): void;

  getNoInflightUpdates(): boolean;
  setNoInflightUpdates(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrackPaymentRequest): TrackPaymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrackPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackPaymentRequest;
  static deserializeBinaryFromReader(message: TrackPaymentRequest, reader: jspb.BinaryReader): TrackPaymentRequest;
}

export namespace TrackPaymentRequest {
  export type AsObject = {
    paymentHash: Uint8Array | string,
    noInflightUpdates: boolean,
  }
}

export class RouteFeeRequest extends jspb.Message {
  getDest(): Uint8Array | string;
  getDest_asU8(): Uint8Array;
  getDest_asB64(): string;
  setDest(value: Uint8Array | string): void;

  getAmtSat(): number;
  setAmtSat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RouteFeeRequest): RouteFeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RouteFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteFeeRequest;
  static deserializeBinaryFromReader(message: RouteFeeRequest, reader: jspb.BinaryReader): RouteFeeRequest;
}

export namespace RouteFeeRequest {
  export type AsObject = {
    dest: Uint8Array | string,
    amtSat: number,
  }
}

export class RouteFeeResponse extends jspb.Message {
  getRoutingFeeMsat(): number;
  setRoutingFeeMsat(value: number): void;

  getTimeLockDelay(): number;
  setTimeLockDelay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RouteFeeResponse): RouteFeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RouteFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteFeeResponse;
  static deserializeBinaryFromReader(message: RouteFeeResponse, reader: jspb.BinaryReader): RouteFeeResponse;
}

export namespace RouteFeeResponse {
  export type AsObject = {
    routingFeeMsat: number,
    timeLockDelay: number,
  }
}

export class SendToRouteRequest extends jspb.Message {
  getPaymentHash(): Uint8Array | string;
  getPaymentHash_asU8(): Uint8Array;
  getPaymentHash_asB64(): string;
  setPaymentHash(value: Uint8Array | string): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): rpc_pb.Route | undefined;
  setRoute(value?: rpc_pb.Route): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToRouteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendToRouteRequest): SendToRouteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendToRouteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToRouteRequest;
  static deserializeBinaryFromReader(message: SendToRouteRequest, reader: jspb.BinaryReader): SendToRouteRequest;
}

export namespace SendToRouteRequest {
  export type AsObject = {
    paymentHash: Uint8Array | string,
    route?: rpc_pb.Route.AsObject,
  }
}

export class SendToRouteResponse extends jspb.Message {
  getPreimage(): Uint8Array | string;
  getPreimage_asU8(): Uint8Array;
  getPreimage_asB64(): string;
  setPreimage(value: Uint8Array | string): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): rpc_pb.Failure | undefined;
  setFailure(value?: rpc_pb.Failure): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToRouteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendToRouteResponse): SendToRouteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendToRouteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToRouteResponse;
  static deserializeBinaryFromReader(message: SendToRouteResponse, reader: jspb.BinaryReader): SendToRouteResponse;
}

export namespace SendToRouteResponse {
  export type AsObject = {
    preimage: Uint8Array | string,
    failure?: rpc_pb.Failure.AsObject,
  }
}

export class ResetMissionControlRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetMissionControlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetMissionControlRequest): ResetMissionControlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetMissionControlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetMissionControlRequest;
  static deserializeBinaryFromReader(message: ResetMissionControlRequest, reader: jspb.BinaryReader): ResetMissionControlRequest;
}

export namespace ResetMissionControlRequest {
  export type AsObject = {
  }
}

export class ResetMissionControlResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetMissionControlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetMissionControlResponse): ResetMissionControlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetMissionControlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetMissionControlResponse;
  static deserializeBinaryFromReader(message: ResetMissionControlResponse, reader: jspb.BinaryReader): ResetMissionControlResponse;
}

export namespace ResetMissionControlResponse {
  export type AsObject = {
  }
}

export class QueryMissionControlRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMissionControlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMissionControlRequest): QueryMissionControlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryMissionControlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMissionControlRequest;
  static deserializeBinaryFromReader(message: QueryMissionControlRequest, reader: jspb.BinaryReader): QueryMissionControlRequest;
}

export namespace QueryMissionControlRequest {
  export type AsObject = {
  }
}

export class QueryMissionControlResponse extends jspb.Message {
  clearPairsList(): void;
  getPairsList(): Array<PairHistory>;
  setPairsList(value: Array<PairHistory>): void;
  addPairs(value?: PairHistory, index?: number): PairHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMissionControlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMissionControlResponse): QueryMissionControlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryMissionControlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMissionControlResponse;
  static deserializeBinaryFromReader(message: QueryMissionControlResponse, reader: jspb.BinaryReader): QueryMissionControlResponse;
}

export namespace QueryMissionControlResponse {
  export type AsObject = {
    pairs: Array<PairHistory.AsObject>,
  }
}

export class PairHistory extends jspb.Message {
  getNodeFrom(): Uint8Array | string;
  getNodeFrom_asU8(): Uint8Array;
  getNodeFrom_asB64(): string;
  setNodeFrom(value: Uint8Array | string): void;

  getNodeTo(): Uint8Array | string;
  getNodeTo_asU8(): Uint8Array;
  getNodeTo_asB64(): string;
  setNodeTo(value: Uint8Array | string): void;

  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): PairData | undefined;
  setHistory(value?: PairData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PairHistory.AsObject;
  static toObject(includeInstance: boolean, msg: PairHistory): PairHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PairHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PairHistory;
  static deserializeBinaryFromReader(message: PairHistory, reader: jspb.BinaryReader): PairHistory;
}

export namespace PairHistory {
  export type AsObject = {
    nodeFrom: Uint8Array | string,
    nodeTo: Uint8Array | string,
    history?: PairData.AsObject,
  }
}

export class PairData extends jspb.Message {
  getFailTime(): number;
  setFailTime(value: number): void;

  getFailAmtSat(): number;
  setFailAmtSat(value: number): void;

  getFailAmtMsat(): number;
  setFailAmtMsat(value: number): void;

  getSuccessTime(): number;
  setSuccessTime(value: number): void;

  getSuccessAmtSat(): number;
  setSuccessAmtSat(value: number): void;

  getSuccessAmtMsat(): number;
  setSuccessAmtMsat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PairData.AsObject;
  static toObject(includeInstance: boolean, msg: PairData): PairData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PairData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PairData;
  static deserializeBinaryFromReader(message: PairData, reader: jspb.BinaryReader): PairData;
}

export namespace PairData {
  export type AsObject = {
    failTime: number,
    failAmtSat: number,
    failAmtMsat: number,
    successTime: number,
    successAmtSat: number,
    successAmtMsat: number,
  }
}

export class QueryProbabilityRequest extends jspb.Message {
  getFromNode(): Uint8Array | string;
  getFromNode_asU8(): Uint8Array;
  getFromNode_asB64(): string;
  setFromNode(value: Uint8Array | string): void;

  getToNode(): Uint8Array | string;
  getToNode_asU8(): Uint8Array;
  getToNode_asB64(): string;
  setToNode(value: Uint8Array | string): void;

  getAmtMsat(): number;
  setAmtMsat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProbabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProbabilityRequest): QueryProbabilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProbabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProbabilityRequest;
  static deserializeBinaryFromReader(message: QueryProbabilityRequest, reader: jspb.BinaryReader): QueryProbabilityRequest;
}

export namespace QueryProbabilityRequest {
  export type AsObject = {
    fromNode: Uint8Array | string,
    toNode: Uint8Array | string,
    amtMsat: number,
  }
}

export class QueryProbabilityResponse extends jspb.Message {
  getProbability(): number;
  setProbability(value: number): void;

  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): PairData | undefined;
  setHistory(value?: PairData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProbabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProbabilityResponse): QueryProbabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProbabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProbabilityResponse;
  static deserializeBinaryFromReader(message: QueryProbabilityResponse, reader: jspb.BinaryReader): QueryProbabilityResponse;
}

export namespace QueryProbabilityResponse {
  export type AsObject = {
    probability: number,
    history?: PairData.AsObject,
  }
}

export class BuildRouteRequest extends jspb.Message {
  getAmtMsat(): number;
  setAmtMsat(value: number): void;

  getFinalCltvDelta(): number;
  setFinalCltvDelta(value: number): void;

  getOutgoingChanId(): string;
  setOutgoingChanId(value: string): void;

  clearHopPubkeysList(): void;
  getHopPubkeysList(): Array<Uint8Array | string>;
  getHopPubkeysList_asU8(): Array<Uint8Array>;
  getHopPubkeysList_asB64(): Array<string>;
  setHopPubkeysList(value: Array<Uint8Array | string>): void;
  addHopPubkeys(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildRouteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BuildRouteRequest): BuildRouteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildRouteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildRouteRequest;
  static deserializeBinaryFromReader(message: BuildRouteRequest, reader: jspb.BinaryReader): BuildRouteRequest;
}

export namespace BuildRouteRequest {
  export type AsObject = {
    amtMsat: number,
    finalCltvDelta: number,
    outgoingChanId: string,
    hopPubkeys: Array<Uint8Array | string>,
  }
}

export class BuildRouteResponse extends jspb.Message {
  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): rpc_pb.Route | undefined;
  setRoute(value?: rpc_pb.Route): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildRouteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BuildRouteResponse): BuildRouteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildRouteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildRouteResponse;
  static deserializeBinaryFromReader(message: BuildRouteResponse, reader: jspb.BinaryReader): BuildRouteResponse;
}

export namespace BuildRouteResponse {
  export type AsObject = {
    route?: rpc_pb.Route.AsObject,
  }
}

export class SubscribeHtlcEventsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeHtlcEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeHtlcEventsRequest): SubscribeHtlcEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeHtlcEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeHtlcEventsRequest;
  static deserializeBinaryFromReader(message: SubscribeHtlcEventsRequest, reader: jspb.BinaryReader): SubscribeHtlcEventsRequest;
}

export namespace SubscribeHtlcEventsRequest {
  export type AsObject = {
  }
}

export class HtlcEvent extends jspb.Message {
  getIncomingChannelId(): number;
  setIncomingChannelId(value: number): void;

  getOutgoingChannelId(): number;
  setOutgoingChannelId(value: number): void;

  getIncomingHtlcId(): number;
  setIncomingHtlcId(value: number): void;

  getOutgoingHtlcId(): number;
  setOutgoingHtlcId(value: number): void;

  getTimestampNs(): number;
  setTimestampNs(value: number): void;

  getEventType(): HtlcEvent.EventType;
  setEventType(value: HtlcEvent.EventType): void;

  hasForwardEvent(): boolean;
  clearForwardEvent(): void;
  getForwardEvent(): ForwardEvent | undefined;
  setForwardEvent(value?: ForwardEvent): void;

  hasForwardFailEvent(): boolean;
  clearForwardFailEvent(): void;
  getForwardFailEvent(): ForwardFailEvent | undefined;
  setForwardFailEvent(value?: ForwardFailEvent): void;

  hasSettleEvent(): boolean;
  clearSettleEvent(): void;
  getSettleEvent(): SettleEvent | undefined;
  setSettleEvent(value?: SettleEvent): void;

  hasLinkFailEvent(): boolean;
  clearLinkFailEvent(): void;
  getLinkFailEvent(): LinkFailEvent | undefined;
  setLinkFailEvent(value?: LinkFailEvent): void;

  getEventCase(): HtlcEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtlcEvent.AsObject;
  static toObject(includeInstance: boolean, msg: HtlcEvent): HtlcEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HtlcEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtlcEvent;
  static deserializeBinaryFromReader(message: HtlcEvent, reader: jspb.BinaryReader): HtlcEvent;
}

export namespace HtlcEvent {
  export type AsObject = {
    incomingChannelId: number,
    outgoingChannelId: number,
    incomingHtlcId: number,
    outgoingHtlcId: number,
    timestampNs: number,
    eventType: HtlcEvent.EventType,
    forwardEvent?: ForwardEvent.AsObject,
    forwardFailEvent?: ForwardFailEvent.AsObject,
    settleEvent?: SettleEvent.AsObject,
    linkFailEvent?: LinkFailEvent.AsObject,
  }

  export enum EventType {
    UNKNOWN = 0,
    SEND = 1,
    RECEIVE = 2,
    FORWARD = 3,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    FORWARD_EVENT = 7,
    FORWARD_FAIL_EVENT = 8,
    SETTLE_EVENT = 9,
    LINK_FAIL_EVENT = 10,
  }
}

export class HtlcInfo extends jspb.Message {
  getIncomingTimelock(): number;
  setIncomingTimelock(value: number): void;

  getOutgoingTimelock(): number;
  setOutgoingTimelock(value: number): void;

  getIncomingAmtMsat(): number;
  setIncomingAmtMsat(value: number): void;

  getOutgoingAmtMsat(): number;
  setOutgoingAmtMsat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtlcInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HtlcInfo): HtlcInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HtlcInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtlcInfo;
  static deserializeBinaryFromReader(message: HtlcInfo, reader: jspb.BinaryReader): HtlcInfo;
}

export namespace HtlcInfo {
  export type AsObject = {
    incomingTimelock: number,
    outgoingTimelock: number,
    incomingAmtMsat: number,
    outgoingAmtMsat: number,
  }
}

export class ForwardEvent extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): HtlcInfo | undefined;
  setInfo(value?: HtlcInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardEvent): ForwardEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForwardEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardEvent;
  static deserializeBinaryFromReader(message: ForwardEvent, reader: jspb.BinaryReader): ForwardEvent;
}

export namespace ForwardEvent {
  export type AsObject = {
    info?: HtlcInfo.AsObject,
  }
}

export class ForwardFailEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardFailEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardFailEvent): ForwardFailEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForwardFailEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardFailEvent;
  static deserializeBinaryFromReader(message: ForwardFailEvent, reader: jspb.BinaryReader): ForwardFailEvent;
}

export namespace ForwardFailEvent {
  export type AsObject = {
  }
}

export class SettleEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SettleEvent): SettleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleEvent;
  static deserializeBinaryFromReader(message: SettleEvent, reader: jspb.BinaryReader): SettleEvent;
}

export namespace SettleEvent {
  export type AsObject = {
  }
}

export class LinkFailEvent extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): HtlcInfo | undefined;
  setInfo(value?: HtlcInfo): void;

  getWireFailure(): rpc_pb.Failure.FailureCode;
  setWireFailure(value: rpc_pb.Failure.FailureCode): void;

  getFailureDetail(): FailureDetail;
  setFailureDetail(value: FailureDetail): void;

  getFailureString(): string;
  setFailureString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkFailEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LinkFailEvent): LinkFailEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkFailEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkFailEvent;
  static deserializeBinaryFromReader(message: LinkFailEvent, reader: jspb.BinaryReader): LinkFailEvent;
}

export namespace LinkFailEvent {
  export type AsObject = {
    info?: HtlcInfo.AsObject,
    wireFailure: rpc_pb.Failure.FailureCode,
    failureDetail: FailureDetail,
    failureString: string,
  }
}

export class PaymentStatus extends jspb.Message {
  getState(): PaymentState;
  setState(value: PaymentState): void;

  getPreimage(): Uint8Array | string;
  getPreimage_asU8(): Uint8Array;
  getPreimage_asB64(): string;
  setPreimage(value: Uint8Array | string): void;

  clearHtlcsList(): void;
  getHtlcsList(): Array<rpc_pb.HTLCAttempt>;
  setHtlcsList(value: Array<rpc_pb.HTLCAttempt>): void;
  addHtlcs(value?: rpc_pb.HTLCAttempt, index?: number): rpc_pb.HTLCAttempt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentStatus): PaymentStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentStatus;
  static deserializeBinaryFromReader(message: PaymentStatus, reader: jspb.BinaryReader): PaymentStatus;
}

export namespace PaymentStatus {
  export type AsObject = {
    state: PaymentState,
    preimage: Uint8Array | string,
    htlcs: Array<rpc_pb.HTLCAttempt.AsObject>,
  }
}

export class CircuitKey extends jspb.Message {
  getChanId(): number;
  setChanId(value: number): void;

  getHtlcId(): number;
  setHtlcId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircuitKey.AsObject;
  static toObject(includeInstance: boolean, msg: CircuitKey): CircuitKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CircuitKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircuitKey;
  static deserializeBinaryFromReader(message: CircuitKey, reader: jspb.BinaryReader): CircuitKey;
}

export namespace CircuitKey {
  export type AsObject = {
    chanId: number,
    htlcId: number,
  }
}

export class ForwardHtlcInterceptRequest extends jspb.Message {
  hasIncomingCircuitKey(): boolean;
  clearIncomingCircuitKey(): void;
  getIncomingCircuitKey(): CircuitKey | undefined;
  setIncomingCircuitKey(value?: CircuitKey): void;

  getIncomingAmountMsat(): number;
  setIncomingAmountMsat(value: number): void;

  getIncomingExpiry(): number;
  setIncomingExpiry(value: number): void;

  getPaymentHash(): Uint8Array | string;
  getPaymentHash_asU8(): Uint8Array;
  getPaymentHash_asB64(): string;
  setPaymentHash(value: Uint8Array | string): void;

  getOutgoingRequestedChanId(): number;
  setOutgoingRequestedChanId(value: number): void;

  getOutgoingAmountMsat(): number;
  setOutgoingAmountMsat(value: number): void;

  getOutgoingExpiry(): number;
  setOutgoingExpiry(value: number): void;

  getCustomRecordsMap(): jspb.Map<number, Uint8Array | string>;
  clearCustomRecordsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardHtlcInterceptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardHtlcInterceptRequest): ForwardHtlcInterceptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForwardHtlcInterceptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardHtlcInterceptRequest;
  static deserializeBinaryFromReader(message: ForwardHtlcInterceptRequest, reader: jspb.BinaryReader): ForwardHtlcInterceptRequest;
}

export namespace ForwardHtlcInterceptRequest {
  export type AsObject = {
    incomingCircuitKey?: CircuitKey.AsObject,
    incomingAmountMsat: number,
    incomingExpiry: number,
    paymentHash: Uint8Array | string,
    outgoingRequestedChanId: number,
    outgoingAmountMsat: number,
    outgoingExpiry: number,
    customRecords: Array<[number, Uint8Array | string]>,
  }
}

export class ForwardHtlcInterceptResponse extends jspb.Message {
  hasIncomingCircuitKey(): boolean;
  clearIncomingCircuitKey(): void;
  getIncomingCircuitKey(): CircuitKey | undefined;
  setIncomingCircuitKey(value?: CircuitKey): void;

  getAction(): ResolveHoldForwardAction;
  setAction(value: ResolveHoldForwardAction): void;

  getPreimage(): Uint8Array | string;
  getPreimage_asU8(): Uint8Array;
  getPreimage_asB64(): string;
  setPreimage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardHtlcInterceptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardHtlcInterceptResponse): ForwardHtlcInterceptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForwardHtlcInterceptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardHtlcInterceptResponse;
  static deserializeBinaryFromReader(message: ForwardHtlcInterceptResponse, reader: jspb.BinaryReader): ForwardHtlcInterceptResponse;
}

export namespace ForwardHtlcInterceptResponse {
  export type AsObject = {
    incomingCircuitKey?: CircuitKey.AsObject,
    action: ResolveHoldForwardAction,
    preimage: Uint8Array | string,
  }
}

export enum FailureDetail {
  UNKNOWN = 0,
  NO_DETAIL = 1,
  ONION_DECODE = 2,
  LINK_NOT_ELIGIBLE = 3,
  ON_CHAIN_TIMEOUT = 4,
  HTLC_EXCEEDS_MAX = 5,
  INSUFFICIENT_BALANCE = 6,
  INCOMPLETE_FORWARD = 7,
  HTLC_ADD_FAILED = 8,
  FORWARDS_DISABLED = 9,
  INVOICE_CANCELED = 10,
  INVOICE_UNDERPAID = 11,
  INVOICE_EXPIRY_TOO_SOON = 12,
  INVOICE_NOT_OPEN = 13,
  MPP_INVOICE_TIMEOUT = 14,
  ADDRESS_MISMATCH = 15,
  SET_TOTAL_MISMATCH = 16,
  SET_TOTAL_TOO_LOW = 17,
  SET_OVERPAID = 18,
  UNKNOWN_INVOICE = 19,
  INVALID_KEYSEND = 20,
  MPP_IN_PROGRESS = 21,
  CIRCULAR_ROUTE = 22,
}

export enum PaymentState {
  IN_FLIGHT = 0,
  SUCCEEDED = 1,
  FAILED_TIMEOUT = 2,
  FAILED_NO_ROUTE = 3,
  FAILED_ERROR = 4,
  FAILED_INCORRECT_PAYMENT_DETAILS = 5,
  FAILED_INSUFFICIENT_BALANCE = 6,
}

export enum ResolveHoldForwardAction {
  SETTLE = 0,
  FAIL = 1,
  RESUME = 2,
}

