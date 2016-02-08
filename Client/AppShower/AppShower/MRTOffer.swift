//
//  MRTOffer.swift
//  AppShower
//
//  Created by Martin on 2/7/16.
//  Copyright © 2016 Martin. All rights reserved.
//

import UIKit

class MRTOffer: NSObject {
    
    let id: String?
    let startedAt: NSDate?
    let sender: MRTUser?
    let initialBudget: NSDecimalNumber?
    let OtherConditions: [String]?
    let text: String?
    let title: String?
    let targetProject: MRTProject?
    let parameters: [String]?
    
    init (id: String?,
        startedAt: NSDate?,
        sender: MRTUser?,
        initialBudget: NSDecimalNumber?,
        OtherConditions: [String]?,
        text: String?,
        title: String?,
        targetProject: MRTProject?,
        parameters: [String]?) {
            
            self.id = id
            self.startedAt = startedAt
            self.sender = sender
            self.initialBudget = initialBudget
            self.OtherConditions = OtherConditions
            self.text = text
            self.title = title
            self.targetProject = targetProject
            self.parameters = parameters
    }
    
}
