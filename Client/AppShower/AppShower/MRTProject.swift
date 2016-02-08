//
//  MRTProject.swift
//  AppShower
//
//  Created by Martin on 2/7/16.
//  Copyright © 2016 Martin. All rights reserved.
//

import UIKit

enum projectStatus {
    case Waiting
    case Funded
    case Cancelled
    case Unknown
}


class MRTProject: NSObject {
    
    let id: String?
    let startedAt: NSDate?
    let authors: [MRTUser]?
    let status: projectStatus?
    let estimatedBudget: NSDecimalNumber?
    let potentialIssues: [String]?
    let flexibility: String?
    let strategy: String?
    let mission: String?
    let goal: String?
    let name: String!
    
    init(id: String?,
        startedAt: NSDate?,
        authors: [MRTUser]?,
        status: projectStatus?,
        estimatedBudget: NSDecimalNumber?,
        potentialIssues: [String]?,
        flexibility: String?,
        strategy: String?,
        mission: String?,
        goal: String?,
        name: String!) {
            
            self.id = id
            self.startedAt = startedAt
            self.authors = authors
            self.status = status
            self.estimatedBudget = estimatedBudget
            self.potentialIssues = potentialIssues
            self.flexibility = flexibility
            self.strategy = strategy
            self.mission = mission
            self.goal = goal
            self.name = name
    }
}
