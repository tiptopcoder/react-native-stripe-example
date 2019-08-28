//
//  RNStripe.m
//  StripeIntegration
//
//  Created by Tien on 2019-08-25.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNStripe.h"

@implementation RNStripe

- (void)startObserving {
  self.hasListeners = YES;
}

- (void)stopObserving {
  self.hasListeners = NO;
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[];
}

- (void) initWithEphemeralKey:(NSDictionary* ) ephemeralKey {
  self.rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;

  RNStripeKeyProvider *keyProvider = [[RNStripeKeyProvider alloc] initWithEphemeralKey:ephemeralKey];
  
  // Set up customer context
  self.customerContext = [[STPCustomerContext alloc] initWithKeyProvider:keyProvider];
  
  // Set up payment context
  self.paymentContext = [[STPPaymentContext alloc] initWithCustomerContext:self.customerContext];
  self.paymentContext.delegate = self;
  self.paymentContext.hostViewController = self.rootViewController;
}

- (void) selectPaymentOption {
  [self.paymentContext presentPaymentOptionsViewController];
}

- (void) selectShippingOption {
  [self.paymentContext presentShippingViewController];
}

- (void) requestPayment:(NSString*) paymentIntentSecret {
  self.paymentIntentSecret = paymentIntentSecret;
  [self.paymentContext requestPayment];
}

#pragma mark STPPaymentContextDelegate
- (void) paymentContextDidChange:(STPPaymentContext *)paymentContext {
  
}

- (void)paymentContext:(STPPaymentContext *)paymentContext didUpdateShippingAddress:(STPAddress *)address completion:(STPShippingMethodsCompletionBlock)completion {
  
}

- (void)paymentContext:(STPPaymentContext *)paymentContext didCreatePaymentResult:(STPPaymentResult *)paymentResult completion:(STPErrorBlock)completion {
  
}

- (void)paymentContext:(STPPaymentContext *)paymentContext didFinishWithStatus:(STPPaymentStatus)status error:(NSError *)error {
  
}

- (void)paymentContext:(STPPaymentContext *)paymentContext didFailToLoadWithError:(NSError *)error {
  
}

@end
