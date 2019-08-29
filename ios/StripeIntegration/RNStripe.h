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
#import <React/RCTBridgeModule.h>
#import <Stripe/Stripe.h>
#import "RNStripeKeyProvider.h"

@interface RNStripe : RCTEventEmitter<STPPaymentContextDelegate, RCTBridgeModule>

@property (nonatomic, strong) UIViewController* _Nonnull rootViewController;
@property (nonatomic, strong) STPPaymentContext* _Nonnull paymentContext;
@property (nonatomic, strong) STPCustomerContext* _Nonnull customerContext;
@property (nonatomic, strong) NSString* _Nonnull paymentIntentSecret;
@property bool hasListeners;

@end
