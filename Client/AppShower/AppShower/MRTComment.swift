//
//  MRTComment.swift
//  AppShower
//
//  Created by Martin on 2/7/16.
//  Copyright © 2016 Martin. All rights reserved.
//

import UIKit

class MRTComment: NSObject {
    
    let id: String?
    let startedAt: NSDate?
    let createdBy: MRTUser?
    let givenTo: MRTProject?
    let text: String?
    
    init (id: String?,
        startedAt: NSDate?,
        createdBy: MRTUser?,
        givenTo: MRTProject?,
        text: String?) {
            
            self.id = id
            self.startedAt = startedAt
            self.createdBy = createdBy
            self.givenTo = givenTo
            self.text = text
    }
    
}
