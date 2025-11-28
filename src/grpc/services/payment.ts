import * as grpc from '@grpc/grpc-js';
import { PaymentServiceHandlers } from '../../protos/cropfresh/payment/PaymentService';
import { Logger } from 'pino';

export const paymentServiceHandlers = (logger: Logger): PaymentServiceHandlers => ({
  ProcessPayment: (call, callback) => {
    logger.info('ProcessPayment called');
    callback(null, { transactionId: 'txn-1', status: 'SUCCESS' });
  },
  GetPaymentStatus: (call, callback) => {
    logger.info('GetPaymentStatus called');
    callback(null, { transactionId: call.request.transactionId, status: 'SUCCESS' });
  },
  RefundPayment: (call, callback) => {
    logger.info('RefundPayment called');
    callback(null, { transactionId: call.request.transactionId, status: 'REFUNDED' });
  }
});
