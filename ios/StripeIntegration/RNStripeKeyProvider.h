//
//  RNStripeKeyProvider.h
//  StripeIntegration
//
//  Created by Tien on 2019-08-26.
//  Copyright © 2019 Facebook. All rights reserved.
//

#ifndef RNStripeKeyProvider_h
#define RNStripeKeyProvider_h


#endif /* RNStripeKeyProvider_h */

#import <Foundation/Foundation.h>
#import <Stripe/Stripe.h>

@interface RNStripeKeyProvider : NSObject<STPCustomerEphemeralKeyProvider>

- (instancetype) initWithEphemeralKey:(NSDictionary* _Nonnull) ephemeralKey;

@property (nonatomic, strong) NSDictionary* _Nonnull ephemeralKey;

@end
