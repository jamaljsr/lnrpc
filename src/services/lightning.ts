import { ConnectionConfig } from '../types';
import { createServiceClient } from './create-service-client';

/**
 * Create a Lightning GRPC service client proxy
 * @param config The grpc service configuration
 */
export function createLightning(config: ConnectionConfig): any {
  try {
    const { grpcPkgObj, server, credentials } = config;
    const lightning = new grpcPkgObj.lnrpc.Lightning(server, credentials, {
      // Increase max receive message size for describegraph
      'grpc.max_receive_message_length': 50 * 1024 * 1024,
    });
    const subscriptionMethods = [
      'subscribeInvoices',
      'subscribeTransactions',
      'subscribeChannelGraph',
      'subscribePeerEvents',
      'subscribeChannelEvents',
      'subscribeChannelBackups',
      'sendToRoute',
      'sendPayment',
      'openChannel',
      'closeChannel',
    ];

    return createServiceClient({
      ...config,
      subscriptionMethods,
      service: lightning,
    });
  } catch (e) {
    if (!e.code) e.code = 'GRPC_LIGHTNING_SERVICE_ERR';
    throw e;
  }
}
