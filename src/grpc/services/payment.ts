import * as grpc from '@grpc/grpc-js';
import { PaymentServiceHandlers } from '../../protos/cropfresh/payment/PaymentService';
import { Logger } from 'pino';

export const paymentServiceHandlers = (logger: Logger): PaymentServiceHandlers => ({
  InitiatePayment: (call, callback) => {
    logger.info('InitiatePayment called');
    callback(null, { paymentId: 'pay-1', paymentUrl: 'http://pay.com/1', transactionId: 'txn-1' });
  },
  VerifyPayment: (call, callback) => {
    logger.info('VerifyPayment called');
    callback(null, { success: true, status: 'success', timestamp: new Date().toISOString() });
  },
  ProcessRefund: (call, callback) => {
    logger.info('ProcessRefund called');
    callback(null, { success: true, refundId: 'ref-1', estimatedArrival: '2023-11-01' });
  },
  GetTransactionHistory: (call, callback) => {
    logger.info('GetTransactionHistory called');
    callback(null, { transactions: [], total: 0 });
  }
});
