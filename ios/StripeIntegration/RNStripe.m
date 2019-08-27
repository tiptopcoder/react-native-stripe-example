//
//  RNStripe.m
//  StripeIntegration
//
//  Created by Tien on 2019-08-25.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNStripe.h"

@implementation RNStripe

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

#pragma mark STPPaymentContextDelegate
- (void) paymentContextDidChange:(STPPaymentContext *)paymentContext {
  
}

@end
