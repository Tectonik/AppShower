//
//  MRTUser.swift
//  AppShower
//
//  Created by Martin on 2/7/16.
//  Copyright © 2016 Martin. All rights reserved.
//

import UIKit

class MRTUser: NSObject {
    
    let id: String?
    let displayName: String?
    let password: String?
    let username: String?
    let email: String?
    let comments: [MRTComment]?
    var receivedOffers: [MRTOffer]?
    var sentOffers: [MRTOffer]?
    
    init (id: String?,
        displayName: String?,
        password: String?,
        username: String?,
        email: String?,
        receivedOffers: [MRTOffer]?,
        sentOffers: [MRTOffer]?,
        comments: [MRTComment]?) {
            
            self.id = id
            self.displayName = displayName
            self.password = password
            self.username = username
            self.email = email
            self.comments = comments
            self.receivedOffers = receivedOffers
            self.sentOffers = sentOffers
    }
    
}
