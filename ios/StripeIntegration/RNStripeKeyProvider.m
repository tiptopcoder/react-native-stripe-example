//
//  RNStripeKeyProvider.m
//  StripeIntegration
//
//  Created by Tien on 2019-08-26.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNStripeKeyProvider.h"

@implementation RNStripeKeyProvider

- (instancetype) initWithEphemeralKey:(NSDictionary *)ephemeralKey {
  self.ephemeralKey = ephemeralKey;
  
  return self;
}

- (void) createCustomerKeyWithAPIVersion:(NSString *)apiVersion
                              completion:(STPJSONResponseCompletionBlock)completion {
  completion(self.ephemeralKey, nil);
}

@end
