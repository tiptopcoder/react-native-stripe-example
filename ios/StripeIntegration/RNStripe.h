//
//  RNStripe.h
//  StripeIntegration
//
//  Created by Tien on 2019-08-25.
//  Copyright © 2019 Facebook. All rights reserved.
//

#ifndef RNStripe_h
#define RNStripe_h


#endif /* RNStripe_h */

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>
#import <Stripe/Stripe.h>

@interface RNStripeKeyProvider : NSObject<STPCustomerEphemeralKeyProvider>

@property (nonatomic, strong) NSString* _Nonnull ephemeralKey;

@end

@interface RNStripe : RCTEventEmitter<STPPaymentContextDelegate>

@property (nonatomic, strong) STPPaymentContext* _Nonnull paymentContext;

@end
